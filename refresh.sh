#!/bin/bash

# WhizCrow "Live Edit" Refresh Script
# Run this AFTER you edit any files on the server to apply changes.

echo "♻️  Rebuilding application with your changes..."

# Rebuild the container with the new code
docker compose up -d --build

# Clean up old images to save space
docker image prune -f

echo "✅ Success! Your changes are live."
