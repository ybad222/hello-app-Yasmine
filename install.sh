#!/bin/bash

# Remove node_modules if it exists
if [ -d "node_modules" ]; then
  echo "Removing node_modules..."
  rm -rf node_modules
fi

# Remove package-lock.json if it exists
if [ -f "package-lock.json" ]; then
  echo "Removing package-lock.json..."
  rm -f package-lock.json
fi

# Run npm install
echo "Running npm install..."
npm install
