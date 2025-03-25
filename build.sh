
#!/bin/bash
# Build script for SeaYou Madeira

echo "🚀 Starting build process for SeaYou Madeira..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🏗️ Building for production..."
npm run build

echo "✅ Build completed! Run 'npm run serve' to start the production server."
