#!/bin/bash
# Build script for Render deployment

echo "Installing dependencies..."
cd frontend
npm install

echo "Building frontend..."
npm run build

echo "Build completed!"