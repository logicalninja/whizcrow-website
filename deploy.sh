#!/bin/bash

# WhizCrow "Push-to-Deploy" Script
# Usage: ./deploy.sh [USER@IP]
# Example: ./deploy.sh root@192.168.1.1

TARGET=$1

if [ -z "$TARGET" ]; then
  echo "Usage: ./deploy.sh user@ip_address"
  exit 1
fi

echo "🚀 preparing deployment to $TARGET..."

# 1. create a clean build bundle
echo "📦 bundling application (excluding junk)..."
tar --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    --exclude='ppt_assets' \
    --exclude='.DS_Store' \
    --exclude='deploy.sh' \
    -czf build.tar.gz .

# 2. upload to server
echo "⬆️  uploading to server..."
# Force password auth to avoid local key passphrase prompts
SSH_OPTS="-o StrictHostKeyChecking=no -o PubkeyAuthentication=no"
export SSHPASS='WhizCrow@123!'
sshpass -e scp $SSH_OPTS build.tar.gz $TARGET:/tmp/build.tar.gz

# 3. execute remote build & launch
echo "🔥 launching on server..."
sshpass -e ssh $SSH_OPTS $TARGET << 'ENDSSH'
    set -e
    # 0. Low-RAM Safety (Auto-Swap)
    # If less than 2GB RAM and no swap, create 10GB swap to prevent build crashes
    TOTAL_MEM=$(grep MemTotal /proc/meminfo | awk '{print $2}')
    if [ $TOTAL_MEM -lt 2000000 ]; then
        if [ $(free | grep Swap | awk '{print $2}') -lt 10000000 ]; then
            echo "⚠️  Increasing swap to 10GB for safety..."
            swapoff -a || true
            rm -f /swapfile
            dd if=/dev/zero of=/swapfile bs=1M count=10240
            chmod 600 /swapfile
            mkswap /swapfile
            swapon /swapfile
            echo "✅ 10GB Swap active"
        fi
    fi
    # The original script had a line here: echo '/swapfile none swap sw 0 0' >> /etc/fstab
    # This line is typically for persistent swap. The new logic focuses on dynamic swap increase.
    # If persistent swap is desired, it should be added within the initial swap creation block.
    # For now, assuming the dynamic increase is sufficient and fstab modification is not needed for every run.

    # install docker if missing
    if ! command -v docker &> /dev/null; then
        echo "installing docker..."
        curl -fsSL https://get.docker.com -o get-docker.sh
        sh get-docker.sh
    fi

    # install docker-compose if missing
    if ! command -v docker-compose &> /dev/null; then
        echo "installing docker-compose..."
        apt-get update && apt-get install -y docker-compose-plugin
    fi

    # prepare directory
    mkdir -p /opt/whizcrow
    
    # clean old public assets to ensure fresh sync
    rm -rf /opt/whizcrow/public/*
    
    # extract new build
    tar -xzf /tmp/build.tar.gz -C /opt/whizcrow
    
    # cleanup tarball
    rm /tmp/build.tar.gz
    
    # go to app dir
    cd /opt/whizcrow

    # launch!
    echo "🚀 building and starting containers..."
    # Create .env symlink so docker-compose build can use it for build-args
    ln -sf .env.local .env
    
    # Ensure swap is active (sometimes fallocate fails, use dd as fallback)
    # Increase to 8GB for heavy builds
    if [ $(free | grep Swap | awk '{print $2}') -lt 8000000 ]; then
        echo "⚠️  Increasing swap to 8GB..."
        swapoff -a || true
        rm -f /swapfile
        dd if=/dev/zero of=/swapfile bs=1M count=8192
        chmod 600 /swapfile
        mkswap /swapfile
        swapon /swapfile
        echo "✅ Swap increased to 8GB"
    fi

    docker compose down --remove-orphans || true
    echo "🔥 starting docker build (with 8GB swap protection)..."
    if docker compose build web; then
        echo "✅ build successful, launching..."
        docker compose up -d --remove-orphans
    else
        echo "❌ build FAILED. Check logs for OOM or syntax errors."
        exit 1
    fi
    
    # prune unused images
    docker image prune -f
ENDSSH

# 4. cleanup local
rm build.tar.gz

echo "✅ deployment complete!"
echo "👉 app: http://$(echo $TARGET | cut -d@ -f2)"
echo "👉 stats: http://monitor.$(echo $TARGET | cut -d@ -f2) (once DNS is set)"
