# AI Documentary News Studio

Cloud-ready AI documentary and news video production studio.

## Product direction
- Any-topic research and documentary production workflow
- Default language: Moroccan Darija (Arabic), with Modern Standard Arabic option
- Target video: 1920x1080, 16:9, 5–10 minutes
- Human approval before final rendering
- Dark editorial interface with Arabic RTL support

## Architecture
- `apps/web`: React + Vite + TypeScript frontend
- `apps/api`: Node.js + Express + TypeScript API
- `apps/worker`: background job worker (planned)
- PostgreSQL for persistent projects and jobs
- FFmpeg renderer (planned)
- S3-compatible object storage (planned)
- Render Blueprint deployment

## Local development
Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The initial scaffold provides a working dashboard and API health endpoint. AI research, media generation, voice, storage and FFmpeg rendering require provider credentials and will be added as separately configured integrations.

## Environment
Copy `.env.example` to `.env` and fill in secrets locally. Never commit API keys.
