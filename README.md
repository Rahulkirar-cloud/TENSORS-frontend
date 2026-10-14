# Smart Classroom and Timetable Scheduler: Frontend

Frontend for the Smart Classroom and Timetable Scheduler, built by **Team TENSORS**. It gives administrators a guided interface to enter institutional data (faculty, classrooms, subjects, time slots, and student groups) that the backend uses to generate conflict-free timetables in line with the NEP 2020 multidisciplinary framework.

The backend lives in a separate repository.

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [Solution Overview](#solution-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Current Status](#current-status)
- [Contributing](#contributing)
- [License](#license)

---

## Problem Statement

- Limited classrooms and overlapping schedules
- Faculty constraints and uneven workload distribution
- Complex elective and multidisciplinary course structures
- Static timetables that cannot react to real-time changes
- Manual, error-prone scheduling in spreadsheets

## Solution Overview

A web interface that:

- Walks administrators through a step-by-step setup of institutional data
- Manages faculty records, including bulk import from Excel
- Sends that data to the backend scheduling engine
- Will display generated timetables and handle real-time changes such as faculty leave or room unavailability

## Key Features

- Landing page with login and signup screens
- Seven-step admin setup flow: Basic Info, Subjects, Faculty, Rooms, Time Slots, Student, Review
- Faculty management: list, add, edit, and delete
- Bulk faculty upload from an Excel (`.xlsx`) file
- Toast notifications for user feedback
- Responsive layout built with Tailwind CSS

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Build tool | Vite 5 |
| Routing | React Router 6 |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Icons and charts | `lucide-react`, `recharts` |
| Excel handling | `xlsx` |
| Backend (separate repo) | Python, Django, PostgreSQL |

## Getting Started

### Prerequisites

- Node.js 18 or newer (the current LTS release is recommended)
- npm (installed with Node.js)
- Git
- The backend running locally at `http://127.0.0.1:8000` for any page that loads or saves data

### 1. Clone and install

1. Clone the repository and move into it.
2. Run `npm install`.

### 2. Start the backend

1. Follow the Getting Started steps in the backend repository's README.
2. Keep the Django server running on `http://127.0.0.1:8000`.

### 3. Run the frontend

1. Run `npm run dev`.
2. Open the local URL that Vite prints, usually `http://localhost:5173`.

### API base URL

The faculty pages currently call the backend at `http://127.0.0.1:8000/api/faculty/`. This address is written directly in the components under `src/components/`. If your backend runs on a different host or port, update it there until the URL is moved to an environment variable.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally for checking |

## Project Structure

```
.
├── index.html            # HTML entry point and font imports
├── package.json
├── tailwind.config.js    # Theme colours, fonts, and shadows
└── src/
    ├── main.jsx          # App entry, router and strict mode setup
    ├── App.jsx           # Route definitions
    ├── index.css         # Tailwind layers and global styles
    ├── components/       # Reusable UI pieces and admin setup steps
    ├── layouts/          # PublicLayout, AdminLayout, DashboardLayout
    ├── pages/            # Landing, Login, Signup, Management
    └── data/             # Mock data used by some screens
```

## Routes

| Path | Screen |
|------|--------|
| `/` | Landing page |
| `/login` | Login |
| `/signup` | Signup |
| `/management/*` | Managment Dashboard |

## Current Status

- The faculty module (list, add, edit, delete, bulk upload) is connected to the backend API.
- Login and signup validate input in the browser but are not yet connected to backend authentication.
- The other setup steps do not call the backend yet.
- Timetable viewing, analytics, and export are planned and not yet built.

## Contributing

Team members should read [CONTRIBUTING.md](CONTRIBUTING.md) before starting work. External contributions are not accepted.

## License

This is a proprietary project owned by Team TENSORS. All code, designs, and documentation are the property of the team. Unauthorised use, copying, modification, distribution, or sharing is prohibited.
