# 🧠 AI Resume Analyzer

A production-ready full-stack AI Resume Analyzer with ATS scoring, JD matching, async processing, and optional LLM suggestions.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite + TypeScript + Redux + TanStack Query |
| Styling | TailwindCSS v3 |
| Backend | Node.js + Express + TypeScript |
| Database | PostgreSQL + Prisma ORM |
| Queue | BullMQ + Redis |
| Auth | JWT (Access + Refresh Tokens) |
| AI | OpenAI (optional, user-configured) |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- Docker Desktop (for PostgreSQL + Redis)

### 1. Start Infrastructure

```bash
cd AI_Resume_analyzer_backend
docker-compose up postgres redis -d
```

### 2. Backend Setup

```bash
cd AI_Resume_analyzer_backend
cp .env.example .env          # Edit your .env values
npm install
npm run prisma:migrate        # Run migrations
npm run prisma:seed           # Seed admin + test user (optional)
npm run dev                   # Start on :3000
```

### 3. Frontend Setup

```bash
cd AI_Resume_analyzer_frontend
npm install
npm run dev                   # Start on :5173
```

### 4. Open App

```
http://localhost:5173
```

---

## 🔑 Default Test Credentials (after seed)

| Role | Email | Password |
|---|---|---|
| Admin | admin@airesumeanalyzer.com | Admin@1234 |
| User | test@airesumeanalyzer.com | Test@1234 |

---

## 📁 Project Structure

```
AI Resume Analyzer/
├── AI_Resume_analyzer_backend/
│   ├── src/
│   │   ├── config/          # env, db, redis
│   │   ├── modules/         # auth, user, resume, analysis, jd, suggestion, llm
│   │   ├── queue/           # BullMQ queue + worker + jobs
│   │   ├── middleware/       # auth, rbac, error, rate-limit, upload
│   │   ├── lib/             # pdfParser, llm.service
│   │   ├── utils/           # logger, response, token, encryption
│   │   └── routes/          # route aggregator
│   ├── prisma/
│   │   └── schema.prisma    # Full DB schema
│   └── tests/               # Jest unit tests
│
└── AI_Resume_analyzer_frontend/
    └── src/
        ├── app/             # Redux store + hooks
        ├── components/      # Atomic Design (atoms → templates)
        ├── features/        # Redux slices
        ├── pages/           # Route-level pages
        ├── services/        # Axios API layer
        ├── query/           # TanStack Query client
        └── routes/          # AppRoutes
```

---

## 🔧 Key Scripts

### Backend

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with ts-node-dev |
| `npm run build` | Compile TypeScript |
| `npm run prisma:migrate` | Run DB migrations |
| `npm run prisma:studio` | Open Prisma Studio |
| `npm run prisma:seed` | Seed database |
| `npm test` | Run Jest unit tests |

### Frontend

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |

---

## 🌐 API Endpoints

### Auth
```
POST   /api/v1/auth/signup
POST   /api/v1/auth/login
POST   /api/v1/auth/refresh
POST   /api/v1/auth/logout      [Protected]
GET    /api/v1/auth/me          [Protected]
```

### Resumes
```
POST   /api/v1/resumes/upload   [Protected, PDF only]
GET    /api/v1/resumes          [Protected]
GET    /api/v1/resumes/:id      [Protected]
GET    /api/v1/resumes/:id/status
DELETE /api/v1/resumes/:id
```

### Analysis
```
GET    /api/v1/analysis/resume/:resumeId
GET    /api/v1/analysis/:id
```

### JD Matching
```
POST   /api/v1/job-descriptions/match
GET    /api/v1/job-descriptions/matches
```

### LLM Config
```
GET    /api/v1/llm/config
POST   /api/v1/llm/config
PATCH  /api/v1/llm/config/toggle
GET    /api/v1/llm/usage
```

---

## 🏥 Health Check

```
GET /health
```

---

## 🔒 Security

- JWT access tokens (15min) + refresh tokens (7d)
- bcrypt password hashing (12 rounds)
- AES-256 encrypted LLM API keys
- Helmet security headers
- Rate limiting (global + auth + upload)
- RBAC (USER / ADMIN roles)

---

## 🐳 Full Docker Deploy

```bash
cd AI_Resume_analyzer_backend
docker-compose up --build
```

This starts PostgreSQL, Redis, and the backend API.

---

## 🧪 ATS Score Algorithm

| Section | Weight | Logic |
|---|---|---|
| Skills | 40% | Count of detected skills vs. threshold |
| Keywords | 30% | Action verbs and ATS keyword frequency |
| Experience | 20% | Job entries, date ranges, years mentioned |
| Formatting | 10% | Word count, page count, contact info, links |

---

## ⚙️ Environment Variables

See `.env.example` in `AI_Resume_analyzer_backend/` for all required variables.
