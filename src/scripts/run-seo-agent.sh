#!/bin/bash

# WhizCrow SEO Agent Trigger
# Usage: ./run-seo-agent.sh [local|prod]

SERVER_URL="http://localhost:3000"

if [ "$1" == "prod" ]; then
  SERVER_URL="https://whizcrow.com"
fi

echo "🚀 Triggering WhizCrow SEO Agent at $SERVER_URL..."

RESPONSE=$(curl -s "$SERVER_URL/api/run-seo-agent")

if [[ $RESPONSE == *"SEO Agent run successful"* ]]; then
  echo "✅ Success: $RESPONSE"
else
  echo "❌ Failed: $RESPONSE"
  exit 1
fi
