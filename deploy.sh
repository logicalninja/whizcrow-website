#!/bin/bash
# ─────────────────────────────────────────────────────────
# WhizCrow — Manual Deploy Script
# Use this ONLY for the first-time server setup, or for
# manual deploys outside of GitHub Actions.
#
# Normal deploys: just `git push origin main` → GitHub
# Actions handles everything automatically.
#
# Usage:
#   First-time full setup:   ./deploy.sh setup user@ip
#   Manual redeploy:         ./deploy.sh deploy user@ip
#   Sync blog images only:   ./deploy.sh images user@ip
# ─────────────────────────────────────────────────────────

MODE=$1
TARGET=$2

if [ -z "$MODE" ] || [ -z "$TARGET" ]; then
  echo "Usage: ./deploy.sh [setup|deploy|images] user@ip"
  echo ""
  echo "  setup   — first-time: clone repo + rsync images + start server"
  echo "  deploy  — manual: git pull + docker rebuild on server"
  echo "  images  — rsync blog images only (run once after extraction)"
  exit 1
fi

SSH_OPTS="-o StrictHostKeyChecking=no -o ConnectTimeout=15"
REPO_URL="git@github.com:logicalninja/whizcrow-website.git"
APP_DIR="/opt/whizcrow"
IMAGES_DIR="./public/blog-images/"

# ── Helper ──────────────────────────────────────────────
ssh_run() {
  ssh $SSH_OPTS "$TARGET" "$1"
}

# ── IMAGES: rsync blog images to server (one-time) ──────
if [ "$MODE" = "images" ]; then
  echo "📷 Syncing blog images to $TARGET..."
  echo "   This is a one-time operation (~889MB, runs in background on server)"
  rsync -avz --progress --compress \
    -e "ssh $SSH_OPTS" \
    "$IMAGES_DIR" \
    "$TARGET:$APP_DIR/public/blog-images/"
  echo "✅ Blog images synced"
  exit 0
fi

# ── SETUP: first-time server setup ──────────────────────
if [ "$MODE" = "setup" ]; then
  echo "🚀 First-time setup on $TARGET..."

  ssh_run "
    set -e

    # Install Docker if missing
    if ! command -v docker &>/dev/null; then
      curl -fsSL https://get.docker.com | sh
    fi

    # Install git if missing
    apt-get install -y git 2>/dev/null || yum install -y git 2>/dev/null || true

    # Create app directory
    mkdir -p $APP_DIR

    # Clone repo (requires SSH key on server or HTTPS token)
    if [ ! -d '$APP_DIR/.git' ]; then
      git clone $REPO_URL $APP_DIR
    fi

    # Ensure swap
    if [ \$(free | grep Swap | awk '{print \$2}') -lt 8000000 ]; then
      swapoff -a || true; rm -f /swapfile
      dd if=/dev/zero of=/swapfile bs=1M count=8192
      chmod 600 /swapfile; mkswap /swapfile; swapon /swapfile
    fi

    cd $APP_DIR
    ln -sf .env.local .env 2>/dev/null || true
    docker compose build web
    docker compose up -d --remove-orphans
    docker image prune -f
    echo '✅ Server setup complete'
  "

  # Sync blog images after server is running
  echo "📷 Now syncing blog images (889MB, one-time)..."
  rsync -avz --progress --compress \
    -e "ssh $SSH_OPTS" \
    "$IMAGES_DIR" \
    "$TARGET:$APP_DIR/public/blog-images/"

  echo ""
  echo "✅ Full setup complete!"
  echo "   App: https://whizcrow.com"
  echo "   Future deploys: git push origin main"
  exit 0
fi

# ── DEPLOY: manual redeploy ──────────────────────────────
if [ "$MODE" = "deploy" ]; then
  echo "🔄 Manual deploy to $TARGET..."
  ssh_run "
    set -e
    cd $APP_DIR
    git pull origin main
    docker compose build web
    docker compose up -d --remove-orphans
    docker image prune -f
    echo '✅ Deploy complete'
  "
  exit 0
fi
