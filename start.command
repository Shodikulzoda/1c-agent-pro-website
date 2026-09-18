#!/bin/bash
# Double-click in Finder to launch the site in Docker and open it in your browser.
set -e

cd "$(dirname "$0")"

echo "1C Agent Pro — starting in Docker..."

if ! docker info >/dev/null 2>&1; then
  echo
  echo "Docker is not running. Please open Docker Desktop, wait until it's ready, then try again."
  echo "Press any key to close."
  read -n 1 -s
  exit 1
fi

# Build + start in the background so we can open the browser once it's ready.
docker compose up --build -d

echo "Waiting for the site to come up..."
for _ in $(seq 1 60); do
  if curl -s -o /dev/null http://localhost:3000; then
    break
  fi
  sleep 1
done

open http://localhost:3000

echo
echo "Site is running at http://localhost:3000"
echo "To stop it, double-click stop.command (or run: docker compose down)."
echo "Press any key to close this window."
read -n 1 -s
