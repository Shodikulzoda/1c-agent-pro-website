#!/bin/bash
# Double-click in Finder to stop the Docker containers for the site.
set -e

cd "$(dirname "$0")"

echo "Stopping 1C Agent Pro..."
docker compose down

echo
echo "Stopped."
echo "Press any key to close this window."
read -n 1 -s
