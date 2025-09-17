# Open Lovable DIY 🚀

**The Open-Source Website Cloning Platform**

Transform any website into a modern, responsive web application with the power of AI. Simply provide a URL, and watch as our intelligent system recreates it as clean, customizable code.

🌐 **Live Demo**: [openlovable.diy](https://openlovable.diy)

## ✨ Features

- 🌐 **URL-to-Website Magic**: Paste any URL and get a fully recreated website
- 🤖 **AI-Powered Intelligence**: Advanced AI understands layouts, content, and design patterns
- ⚡ **Lightning Fast**: Get a working website in minutes, not days
- 🎨 **Modern & Responsive**: Creates mobile-first, responsive applications
- 🔧 **Full Code Access**: Download complete source code for unlimited customization
- 🚀 **Deploy Anywhere**: Vercel, Netlify, or any hosting platform
- 🔒 **Secure Sandboxing**: Safe code execution in isolated environments
- 💾 **Smart Caching**: 500% faster scraping with intelligent caching

## 🎯 How It Works

### The Magic Behind the Scenes

1. **🔍 Intelligent Scraping**
   - Uses Firecrawl to extract content, structure, and metadata
   - Handles dynamic content, SPAs, and complex layouts
   - Respects robots.txt and implements smart retry logic

2. **🧠 AI Analysis & Generation**
   - Multiple AI providers (Groq, OpenAI, Anthropic) analyze the content
   - Understands design patterns, component structure, and user flows
   - Generates clean, semantic React components with TypeScript

3. **⚡ Real-time Development**
   - E2B sandboxes provide secure, isolated development environments
   - Live preview with hot reloading as code is generated
   - Automatic dependency management and build optimization

4. **🎨 Modern Tech Stack**
   - **React 18** with functional components and hooks
   - **Next.js 15** for optimal performance and SEO
   - **TypeScript** for type safety and better developer experience
   - **Tailwind CSS** for utility-first styling
   - **Responsive Design** that works on all devices

5. **📦 Production Ready**
   - Optimized builds with code splitting
   - SEO-friendly with proper meta tags
   - Performance optimized with lazy loading
   - Accessibility compliant (WCAG guidelines)

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | Next.js 15, React 18, TypeScript | Modern web application framework |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **AI Providers** | Groq, OpenAI, Anthropic | Content analysis and code generation |
| **Web Scraping** | Firecrawl | Reliable content extraction |
| **Sandboxing** | E2B | Secure code execution environment |
| **Deployment** | Vercel | Serverless deployment platform |
| **State Management** | React Hooks, Context API | Client-side state management |

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+**
- **npm/yarn/pnpm**
- **API Keys** (see configuration below)

### 1. Clone & Install

```bash
git clone https://github.com/zainulabedeen123/Open-lovable-DIY.git
cd Open-lovable-DIY
npm install
```

### 2. Environment Configuration

The repository includes a `.env` file that serves as a template. To set up your local environment, you should first copy this file to a new file named `.env.local`. The `.env.local` file is where your actual secret credentials will be stored and is ignored by git.

```bash
cp .env .env.local
```

Now, open `.env.local` and add your API keys and configuration.

#### Required for Core Functionality:
```env
# Get from https://e2b.dev
E2B_API_KEY=e2b_your_api_key_here

# Get from https://console.groq.com
GROQ_API_KEY=gsk_your_groq_key_here

# Get from https://console.neon.tech
DATABASE_URL=postgresql://user:password@host:port/dbname?sslmode=require
```

#### Required for Google Authentication:
```env
# Get from https://console.cloud.google.com
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your-google-client-secret

# A random string for session encryption. You can generate one with: openssl rand -base64 32
NEXTAUTH_SECRET=your_nextauth_secret

# For local development, this is usually http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
```

#### Optional AI Providers:
```env
# Get from https://platform.openai.com
OPENAI_API_KEY=sk-your_openai_key_here

# Get from https://console.anthropic.com
ANTHROPIC_API_KEY=sk-ant-your_anthropic_key_here

# Get from https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start creating! 🎉

## 🔑 API Keys Setup

### Required Services

| Service | Purpose | Get API Key | Free Tier |
|---------|---------|-------------|-----------|
| **E2B** | Secure code execution | [e2b.dev](https://e2b.dev) | ✅ Yes |
| **Firecrawl** | Web scraping | [firecrawl.dev](https://firecrawl.dev) | ✅ Yes |
| **Groq** | Fast AI inference | [console.groq.com](https://console.groq.com) | ✅ Yes |

### Optional Services

| Service | Purpose | Get API Key |
|---------|---------|-------------|
| **OpenAI** | GPT models | [platform.openai.com](https://platform.openai.com) |
| **Anthropic** | Claude models | [console.anthropic.com](https://console.anthropic.com) |

## 🌐 Deployment on Vercel

### ⚡ One-Click Deploy (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zainulabedeen123/Open-lovable-DIY)

**The app now deploys successfully without any configuration!** 🎉

### Manual Deployment

1. **Fork this repository**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your forked repository
3. **Deploy immediately** - No environment variables required!
4. **Configure API keys later** via the settings page in the app

### Post-Deployment Configuration

After deployment, you can optionally add API keys for enhanced functionality:

**Via Vercel Dashboard:**
- Go to Project Settings → Environment Variables
- Add the keys listed below

**Via App Settings:**
- Use the settings page in the deployed app
- Configure API keys through the UI

### Environment Variables for Production

**Optional - App works without these!** Add them for enhanced functionality:

#### Required for Core Functionality:
```env
# Get from https://e2b.dev
E2B_API_KEY=e2b_your_api_key_here

# Get from https://console.groq.com
GROQ_API_KEY=gsk_your_groq_key_here
```

#### Optional for Authentication:
```env
# Get from https://console.cloud.google.com
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your-google-client-secret

# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET=your_nextauth_secret

# Your production URL
NEXTAUTH_URL=https://your-app.vercel.app
```

#### Optional for Database:
```env
# Get from https://console.neon.tech
DATABASE_URL=postgresql://user:password@host:port/dbname?sslmode=require
```

#### Optional AI Providers:
```env
# Get from https://platform.openai.com
OPENAI_API_KEY=sk-your_openai_key_here

# Get from https://console.anthropic.com
ANTHROPIC_API_KEY=sk-ant-your_anthropic_key_here

# Get from https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key
```

## 📁 Project Structure

```
Open-lovable-DIY/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── create-ai-sandbox/     # Sandbox management
│   │   ├── scrape-url-enhanced/   # Web scraping
│   │   ├── generate-ai-code/      # AI code generation
│   │   └── validate-api-key/      # API key validation
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main application page
├── components/            # Reusable React components
│   ├── ui/               # UI components
│   ├── ApiKeysModal.tsx  # API key configuration
│   └── ...
├── lib/                  # Utility libraries
│   ├── api-keys.ts       # API key management
│   ├── api-key-utils.ts  # API utilities
│   └── utils.ts          # General utilities
├── hooks/                # Custom React hooks
├── config/               # Configuration files
└── public/              # Static assets
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **💻 Make your changes**
4. **✅ Test thoroughly**
5. **📝 Commit**: `git commit -m 'Add amazing feature'`
6. **🚀 Push**: `git push origin feature/amazing-feature`
7. **🔄 Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Community

- **🐛 Bug Reports**: [GitHub Issues](https://github.com/zainulabedeen123/Open-lovable-DIY/issues)
- **💡 Feature Requests**: [GitHub Discussions](https://github.com/zainulabedeen123/Open-lovable-DIY/discussions)
- **📧 Email**: support@openlovable.diy
- **🐦 Twitter**: [@openlovable](https://twitter.com/openlovable)

## 🙏 Acknowledgments

- **Lovable.dev** - Inspiration for this open-source alternative
- **Firecrawl** - Reliable web scraping infrastructure
- **E2B** - Secure code execution sandboxes
- **Vercel** - Seamless deployment platform
- **Open Source Community** - For making this possible

---

**Made with ❤️ by the Open Source Community**

⭐ **Star this repo** if you find it useful!
