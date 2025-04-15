#!/bin/bash

# Check if .env file exists
if [ -f .env ]; then
    echo "⚠️  Warning: .env file already exists. This script will not overwrite it."
    echo "Please manually update your .env file with the required variables."
    exit 1
fi

# Create .env file from example
cp .env.example .env

echo "✅ Created .env file from .env.example"
echo "📝 Please update the .env file with your actual API keys and configuration."
echo "🔒 Remember to never commit your .env file to version control!"
echo ""
echo "Required environment variables:"
echo "- OPENAI_API_KEY: Your OpenAI API key"
echo "- NOTION_API_KEY: Your Notion integration token"
echo "- NOTION_PAGE_ID: Your Notion page ID"
echo "- PORT: Server port (default: 4567)"
echo "- NEXT_PUBLIC_APP_URL: Next.js app URL (default: http://localhost:3000)" 