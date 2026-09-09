<<<<<<< HEAD
# SIH-SmartEdu
=======
# EduSmart AI

An AI-powered Smart Education platform concept, built with React, React Router and Tailwind CSS. Frontend only — all data (courses, quizzes, AI chat, dashboard stats) is mocked in `src/data/mockData.js`.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## What's inside

- **Landing page** — hero, features, how-it-works, CTA
- **Login / Signup** — validated auth forms (mock, no backend)
- **Student Dashboard** — stats, today's plan, weekly progress chart, recommendations
- **AI Study Planner** — generates a mock 5-day plan from your inputs
- **AI Doubt Solver** — chat-style Q&A with canned AI responses
- **My Courses** — filterable course library
- **Notes & Resources** — searchable notes library with bookmarking
- **Quiz** — interactive multiple-choice quiz with a scored results screen
- **Progress** — charts and achievement badges
- **Profile & Settings** — editable profile, notification/appearance/privacy settings

## Structure

```
src/
├── components/   reusable UI pieces (Button, Card, Sidebar, ChatMessage, etc.)
├── pages/        one file per route
├── layouts/      PublicLayout (marketing pages) and DashboardLayout (app shell)
├── data/         mockData.js — swap this out for real API calls later
```

## Notes

This was built and reviewed in an offline sandbox without npm registry access, so dependencies could not be installed or the dev server test-run here. The code follows standard, current APIs for React 18, React Router 6 and Tailwind 3 — running `npm install` on a machine with normal internet access should work without changes. If you hit any issue, the most likely culprit is a version mismatch in `package.json`.
>>>>>>> 922381d (Added Frontend Code -Edusmart-ai)
