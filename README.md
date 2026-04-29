# 🧠 AI Resume Analyzer — Backend

A scalable backend built with **Node.js, Express, Prisma, and PostgreSQL** for AI-driven resume analysis and job matching.

---

## 🚀 Live API

👉 https://ai-resume-analyzer-backend-hdh5.onrender.com

---

## 🧠 Product Overview

This backend powers:

- ATS resume analysis
- Job Description matching
- AI-based insights and suggestions
- Resume history tracking
- Background job processing

---

## ✨ Features

### 🔐 Authentication
- JWT (Access + Refresh tokens)
- Secure encrypted keys
- Rate limiting

---

### 🤖 AI Integration
Supports multiple AI providers:

- OpenAI
- Gemini
- Grok
- Anthropic
- Mistral

---

### 📄 Resume Processing
- Upload resumes (PDF/DOCX)
- Extract content
- ATS scoring
- Format & keyword analysis

---

### 📊 Job Matching
- Resume vs Job Description
- Match score
- Missing keywords
- Suggestions & insights

---

### ⚙️ Background Jobs
- BullMQ queue system
- Async resume processing

---

### ⚡ Performance
- Redis caching
- PostgreSQL (Supabase)
- Prisma ORM

---

## 🛠️ Tech Stack

- Node.js + Express
- Prisma ORM
- PostgreSQL
- Redis
- BullMQ
- Docker

---

## 🔌 API Endpoints

### Auth

```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/refresh
```

### Resumes

```
POST   /api/v1/resumes/upload
GET    /api/v1/resumes
GET    /api/v1/resumes/:id
GET    /api/v1/resumes/:id/status
DELETE /api/v1/resumes/:id
```

### Analysis

```
GET    /api/v1/analysis/resume/:resumeId
GET    /api/v1/analysis/:id
```

### Job Descriptions

```
POST   /api/v1/job-descriptions/match
GET    /api/v1/job-descriptions
GET    /api/v1/job-descriptions/:id/matches
```

---

## 📦 Setup

### Clone

git clone https://github.com/yourusername/AI_Resume_analyzer_backend.git
cd AI_Resume_analyzer_backend

---

### Environment Variables

Create a `.env` file:

```bash
cp .env.example .env
```

Fill in your values (PostgreSQL, Redis, AI keys, etc.)

---

### Install Dependencies

npm install

---

### Prisma Setup

Run migrations:

npm run prisma:migrate

Seed database (optional):

npm run prisma:seed

---

### Start Server

npm run dev

The API will run on port `3000`

---

## 🚀 Docker Setup

### Start Services

docker-compose up -d

### Stop Services

docker-compose down

---

## 🧪 Testing

Run tests:

npm test

---

## 📦 Deployment (Render)

### 1. Push to GitHub

git push origin main

---

### 2. Create Render Service

- Go to Render
- New → Web Service
- Select your GitHub repo
- Build Command: `npm run build`
- Start Command: `node dist/server.js`
- Add environment variables from your `.env`
- Deploy ✅

---

## 🛠️ Development Setup

### Run with Auto-Reload

npm run dev

### Debugging

Enable debug logs:

```bash
DEBUG=ai-resume:* npm run dev
```

---

## 🔧 AI Configuration

Send POST requests to:

```
POST /api/v1/llm/config
```

With:

```json
{
  "provider": "openai",
  "apiKey": "your-key"
}
```

---

## 🌐 Frontend Integration

Add these base URLs to your frontend:

- API URL: `https://ai-resume-analyzer-backend-hdh5.onrender.com`

---

## 📁 File Structure

```
src/
├── modules/             # Auth, User, Resume, Analysis, JD, LLM, Suggestion
├── config/              # Database, Redis, Environment
├── middleware/          # Auth, Rate Limit, Error Handling
├── routes/              # API Routes
├── utils/               # Helpers, Logger, Encryption
├── queue/               # BullMQ jobs and worker
├── generated/           # Prisma client & migrations
└── server.ts            # Application entry point
```

---

## 📝 API Documentation

Full OpenAPI 3.0 documentation is available at:

👉 https://ai-resume-analyzer-backend-hdh5.onrender.com/api/docs

---

## 🔒 Security

- JWT tokens (15min access, 7d refresh)
- bcrypt password hashing
- AES-256 encryption for AI keys
- Rate limiting
- Helmet security middleware

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a Pull Request

---

## 🙏 License

MIT © 2026

---

## 📞 Support

For issues or questions, please open an issue on GitHub.