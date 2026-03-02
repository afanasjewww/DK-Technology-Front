#!/bin/bash
set -e

# === Config ===
SERVER="root@77.221.151.170"
REMOTE_DIR="/root/brp-russia"
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

# === Colors ===
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log()  { echo -e "${GREEN}[deploy]${NC} $1"; }
warn() { echo -e "${YELLOW}[deploy]${NC} $1"; }
err()  { echo -e "${RED}[deploy]${NC} $1"; exit 1; }

# === Check SSH ===
log "Checking SSH connection..."
ssh -o ConnectTimeout=5 -o BatchMode=yes "$SERVER" "echo ok" > /dev/null 2>&1 \
  || err "Cannot connect to $SERVER. Check SSH key."

# === Pack & Upload ===
log "Packing project..."
cd "$PROJECT_DIR"

TMPFILE=$(mktemp /tmp/deploy-XXXXXX.tar.gz)
tar czf "$TMPFILE" \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='out' \
  --exclude='.git' \
  --exclude='.claude' \
  --exclude='.env' \
  --exclude='.env*.local' \
  --exclude='*.pem' \
  --exclude='.vscode' \
  --exclude='.idea' \
  --exclude='deploy.sh' \
  .

SIZE=$(du -h "$TMPFILE" | cut -f1)
log "Archive: $SIZE"

log "Uploading to $SERVER:$REMOTE_DIR ..."
ssh "$SERVER" "rm -rf $REMOTE_DIR/* && mkdir -p $REMOTE_DIR"
scp "$TMPFILE" "$SERVER:/tmp/deploy.tar.gz"
ssh "$SERVER" "cd $REMOTE_DIR && tar xzf /tmp/deploy.tar.gz && rm /tmp/deploy.tar.gz"
rm -f "$TMPFILE"

log "Files synced."

# === Build & Run on server ===
log "Building and starting Docker container..."

ssh "$SERVER" "cd $REMOTE_DIR && docker compose down 2>/dev/null; docker compose up -d --build"

log "Waiting for container to start..."
sleep 3

# === Health check ===
STATUS=$(ssh "$SERVER" "docker ps --filter name=dk-techno --format '{{.Status}}'" 2>/dev/null)
if [[ "$STATUS" == *"Up"* ]]; then
  log "Container is running: $STATUS"
  log "App available at http://77.221.151.170:3000"
else
  err "Container failed to start. Check logs: ssh $SERVER 'docker logs dk-techno'"
fi
