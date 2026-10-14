# Contributing Guidelines

This document describes how **Team TENSORS** collaborates on the Smart Classroom and Timetable Scheduler frontend. External contributions are not accepted.

---

## Team Rules

- Each member works on their assigned page or feature in a dedicated branch.
- Sync with `dev` before starting new work and before opening a pull request.
- Never commit directly to `main` or `dev`. All changes go through a pull request.
- Keep pull requests small and focused on one change.
- Agree API changes with the backend owner before building on them.

## Branching Model

| Branch | Purpose |
|--------|---------|
| `main` | Stable, production-ready code only |
| `dev` | Integration branch where finished work is combined and tested |
| `feature/<name>` | New features or pages, for example `feature/timetable-view` |
| `fix/<name>` | Bug fixes, for example `fix/faculty-form-validation` |

Use lowercase names with hyphens. Branch from `dev`, and merge back into `dev` through a pull request. `main` is updated from `dev` only when the team agrees a release is stable.

## Daily Workflow

1. Update your local `dev` branch from the remote.
2. Create your branch from `dev`, for example `feature/timetable-view`.
3. Make your changes in small, logical commits.
4. Push your branch to `origin`.
5. Open a pull request into `dev` and request a review.
6. Address review comments, then merge once approved.

## Commit Messages

Use a short prefix followed by a clear, imperative summary:

| Prefix | Use for |
|--------|---------|
| `feat:` | A new feature |
| `fix:` | A bug fix |
| `docs:` | Documentation only |
| `style:` | Visual or formatting changes that do not alter logic |
| `refactor:` | Code changes that do not alter behaviour |
| `test:` | Adding or updating tests |
| `chore:` | Dependencies, configuration, tooling |

Example: `feat: add bulk upload page for faculty`

## React Conventions

- **Structure:** Pages go in `src/pages/`, layouts in `src/layouts/`, and reusable or step-level components in `src/components/`. Register every new route in `src/App.jsx`.
- **File names:** Use PascalCase for component files, such as `FacultyList.jsx`. The name in every `import` must match the file name exactly, including capitalisation. Windows and macOS ignore case, but Linux, CI, and most hosting do not, so a mismatch that works locally can break a deployment.
- **Components:** Use function components and hooks. Keep one component per file and give it the same name as the file.
- **Styling:** Use Tailwind utility classes. Take colours, fonts, and shadows from `tailwind.config.js` instead of hardcoding new values, and avoid adding new CSS files unless necessary.
- **Backend calls:** Do not add new hardcoded API URLs. Keep the base URL in one place so it can change between environments, and handle loading and error states for every request.
- **Mock data:** Keep placeholder data in `src/data/` and remove it once the screen uses real API data.
- **Clean-up:** Remove debug `console.log` calls, commented-out code, and scratch components before opening a pull request.

## Dependencies and Configuration

- **Dependencies:** If you add or upgrade a package, commit `package.json` and `package-lock.json` together, and mention the reason in the pull request. Use `npm install`, not a mix of package managers.
- **Secrets:** Never commit `.env` files, passwords, tokens, or keys. Environment variables used by Vite must start with `VITE_`. Add any new variable to `.env.example` with a safe placeholder and document it in the README.
- **Build output:** Never commit `node_modules/` or `dist/`.

## Pull Request Checklist

Before requesting a review, confirm that:

- [ ] The branch is up to date with `dev`
- [ ] `npm install` and `npm run dev` work on a clean checkout
- [ ] `npm run build` succeeds with no errors
- [ ] You tested the affected pages in the browser, including a narrow mobile width
- [ ] Features that call the backend were tested against the running backend
- [ ] `package.json` and `package-lock.json` are updated if dependencies changed
- [ ] `.env.example` and the README are updated if configuration or behaviour changed
- [ ] No unrelated files are changed, and no secrets or hardcoded URLs were added
- [ ] The pull request description explains what changed and why, with screenshots for any visual change

At least one team member must review and approve before merging.

## Reporting Issues

- Search existing issues first to avoid duplicates.
- Include clear steps to reproduce the problem, the expected result, and the actual result.
- Include the browser, the page URL, and any console errors.
- Attach screenshots or a short screen recording where possible.

## Suggesting Features

Open an issue with the `enhancement` label. Describe the idea, the problem it solves, and a possible approach.
