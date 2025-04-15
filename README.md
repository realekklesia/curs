# AI Startup Landing Page

A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS. Features include:

- 🎨 Modern UI with Tailwind CSS
- ⚡️ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🌓 Dark mode support
- 📱 Fully responsive design
- 🔔 Toast notifications
- 🎯 Interactive components

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd startup-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Run the setup script
./setup-env.sh

# Then edit the .env file with your actual API keys
```

Required environment variables:
- `OPENAI_API_KEY`: Your OpenAI API key
- `NOTION_API_KEY`: Your Notion integration token
- `NOTION_PAGE_ID`: Your Notion page ID
- `PORT`: Server port (default: 4567)
- `NEXT_PUBLIC_APP_URL`: Next.js app URL (default: http://localhost:3000)

⚠️ **Important**: Never commit your `.env` file to version control. It's already added to `.gitignore`.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
startup-app/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable components
│   ├── lib/             # Utility functions and constants
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── ...config files
```

## Features

- **Modern UI**: Clean and professional design using Tailwind CSS
- **Animations**: Smooth transitions and interactions with Framer Motion
- **Dark Mode**: Built-in dark mode support
- **Responsive**: Works on all device sizes
- **Interactive**: Engaging user interactions and feedback

## Security

- API keys and sensitive data are stored in environment variables
- `.env` file is ignored by git to prevent accidental commits
- Example environment variables are provided in `.env.example`
- Setup script helps users configure their environment securely

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 