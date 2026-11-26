# Noteboard API

[![Node.js](https://img.shields.io/badge/Node.js-20-339933)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-5-000)](https://expressjs.com)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748)](https://www.prisma.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791)](https://www.postgresql.org)

REST API for [Noteboard](https://github.com/Segaoneboy/noteboard) — notes as cards with images,
tags and cursor-based pagination.

## Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| `POST` | `/api/auth/register` | — | Create an account, sets access + refresh cookies |
| `POST` | `/api/auth/login` | — | Sign in, sets access + refresh cookies |
| `POST` | `/api/auth/refresh` | refresh token | Rotate refresh token, issue a new access token |
| `POST` | `/api/auth/logout` | — | Clear cookies |
| `POST` | `/api/cards/create` | access token | Create a note; `multipart/form-data` with an image file |
| `GET` | `/api/cards/getallcards` | access token | Paginated list of the user's notes |
| `GET` | `/api/user/getinfo` | access token | Current user profile |

## How it works

- **Images** — uploaded with `multer`, stored in Supabase Storage, and only the public URL is saved
  in PostgreSQL.
- **Pagination** — `?page=` & `?limit=` (10 per page); the response includes `total` and `totalPages`,
  so the client knows when to stop loading.
- **Auth** — bcrypt (10 rounds) for passwords, JWT access (10 min) + refresh (7 days) in httpOnly
  cookies, `authMiddleware` guards every private route.

## Getting started

```bash
npm install
cp .env.example .env
npx prisma migrate deploy     # or: npx prisma migrate dev
npx prisma generate
npm run dev                   # http://localhost:5000
```

### Environment variables

| Variable | Purpose |
|---|---|
| `PORT` | HTTP port (default `5000`) |
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_ACCESS_SECRET` | Secret for access tokens |
| `JWT_REFRESH_SECRET` | Secret for refresh tokens |
| `SUPABASE_URL` | Supabase project URL (Storage bucket) |
| `SUPABASE_ANON_KEY` | Supabase anon key |

> `.env` is git-ignored. Credentials used to be hardcoded in `supabase.js`; they now come from the
> environment, so set them before deploying (and rotate the old key if it was ever public).

## Roadmap

- [ ] OpenAPI spec + Swagger UI
- [ ] Integration tests for auth and card creation
- [ ] Rate limiting on upload
- [ ] `docker-compose.yml` with PostgreSQL for one-command local setup

## License

MIT
