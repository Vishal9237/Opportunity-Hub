# Opportunity Hub — MERN MVP

Opportunity Hub brings scholarships, internships, hackathons, competitions and other student opportunities into one searchable place. This repository implements the first working MVP based on the accompanying PRD and planning documents.

## Features implemented

- Responsive React catalogue with search, type filters and delivery-mode filter.
- Opportunity details, official source/application links, structured eligibility checklist and listing report action.
- Email/password registration and login; student/admin roles.
- Student profile/preferences (education level, discipline, graduation year, interests, modes).
- Save/unsave opportunities, private application status and notes API, dashboard counts and upcoming deadline view.
- Admin-only create/edit API and in-app listing creation UI for admin accounts.
- MongoDB/Mongoose models and indexes, input validation, centralized errors, Helmet, CORS, authentication rate limiting.
- Planning documents are in `documentation/`.

## Requirements

- Node.js 20+ and npm
- MongoDB Community running locally or a MongoDB connection string

## Run locally

1. Start MongoDB.
2. Configure the API:
   ```bash
   cd server
   cp .env.example .env
   # Edit .env: set a strong JWT_SECRET and a non-default ADMIN_PASSWORD.
   npm install
   npm run dev
   ```
3. In another terminal, configure and start the frontend:
   ```bash
   cd client
   # Optional: create .env with VITE_API_URL=http://localhost:5000/api/v1
   npm install
   npm run dev
   ```
4. Open the Vite URL, normally `http://localhost:5173`.

The API is available at `http://localhost:5000/api/v1`; health check: `/health`.

## Admin setup

On API startup, an admin account is created only if `ADMIN_EMAIL` and `ADMIN_PASSWORD` are configured and the password differs from the placeholder `change-this-before-use`. Set both in `server/.env` before starting the server. Do not use example credentials in a deployed environment. The admin role is never accepted from public registration.

## Demo data warning

When the API has no matching published opportunities, the frontend displays clearly labeled illustrative demo cards so the interface can be previewed. These are not real opportunities, use `example.org` URLs, and are not inserted into MongoDB. Replace them with manually verified listings before a student pilot. Real records must include official application and source URLs. The app does not scrape websites automatically.

## API overview

- `POST /api/v1/auth/register`, `POST /api/v1/auth/login`, `GET /api/v1/auth/me`
- `GET /api/v1/opportunities`, `GET /api/v1/opportunities/:id`, `POST /api/v1/opportunities/:id/report`
- Admin: `GET /api/v1/opportunities/admin/all`, `POST /api/v1/opportunities`, `PATCH /api/v1/opportunities/:id`
- Authenticated: `GET/PATCH /api/v1/me/profile`, `GET /api/v1/me/tracking`, `PUT/DELETE /api/v1/me/tracking/:id`, `GET /api/v1/me/dashboard`

All authenticated requests use `Authorization: Bearer <token>`. For production, review the security/privacy document and consider migrating browser token storage to secure, HttpOnly cookies with CSRF protection, adding email delivery for reminders, scheduled reminder jobs, audit logging, automated tests, and deployment secrets management.

## Current MVP limitations

- Deadline reminders are surfaced in the dashboard; automated email delivery/scheduling is not configured yet.
- No automated scraping, calendar integration, file uploads, or automatic application submission.
- Eligibility checklist results are personal guidance, not an official eligibility decision.
- The public report endpoint is basic and should receive abuse controls/CAPTCHA before a public launch.
- Tests and production deployment configuration still need to be added before a real public launch.

## Build check

```bash
npm run build --prefix client
```
