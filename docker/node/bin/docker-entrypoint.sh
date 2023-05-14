#!/bin/sh
set -e

# Install deps
npm install

# Build dist
npm run build

# Copy static files
if [ -d "public" ]
then
    cp -r public dist/public
fi

## Start the server
exec "$@"
