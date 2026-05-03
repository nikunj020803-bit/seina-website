# Workspace

## Overview

pnpm workspace monorepo using TypeScript. This is the **seina website** — an applied AI lab building the intelligence layer for B2B influencer marketing.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Auth**: Supabase (via @supabase/supabase-js, Bearer token stored in localStorage)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend routing**: wouter
- **Frontend data fetching**: TanStack Query + Orval-generated hooks

## Artifacts

### seina-website (React + Vite, port 23878, previewPath: /)
8-page marketing/product site:
- `/` — Homepage (hero, problem section, 3-models section, CTA)
- `/product` — Product page (flow diagram, Persona/Pulse/Reach deep dives)
- `/login` — Login form (Supabase auth via /api/auth/login)
- `/dashboard` — Authenticated dashboard (redirects to /login if not authenticated)
- `/book-demo` — Demo request form (saves to DB)
- `/contact` — Contact form (saves to DB)
- `/privacy-policy` — Legal page
- `/terms-of-service` — Legal page

### api-server (Express 5, port 8080)
REST API mounted at `/api`:
- `GET /api/healthz` — health check
- `POST /api/auth/login` — Supabase signInWithPassword
- `POST /api/auth/logout` — Supabase signOut
- `GET /api/auth/me` — verify Bearer token via Supabase getUser
- `POST /api/demo-requests` — save demo request to DB
- `GET /api/demo-requests` — list demo requests
- `POST /api/contact` — save contact message to DB

## Key Packages

- `lib/db` — Drizzle schema (demo_requests, contact_messages tables)
- `lib/api-spec` — OpenAPI spec + Orval codegen config
- `lib/api-client-react` — Generated TanStack Query hooks; exports setAuthTokenGetter, setBaseUrl
- `artifacts/seina-website` — React frontend; uses `@workspace/api-client-react` hooks
- `artifacts/api-server` — Express backend

## Auth Flow
1. User submits email/password on /login
2. Frontend calls POST /api/auth/login via useLogin hook
3. On success, token stored in localStorage under key `seina_token`
4. `setAuthTokenGetter` in use-auth.ts reads token and attaches it as `Authorization: Bearer <token>` on all API calls
5. /dashboard calls useGetMe (GET /api/auth/me) — redirects to /login if 401

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Design System
- Fonts: Inter (display), JetBrains Mono (mono), VT323 (pixel)
- Color palette: surface-50 (#FAFAFA), accent-orange (#ED5C24), accent-lime (#BFEB5F), brand-blue (#3651E8), etc.
- All CSS variables defined in `artifacts/seina-website/src/index.css`

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
