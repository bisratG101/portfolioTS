# Portfolio — Bisrat Gulelat

A minimal, professional developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — App Router layout and home page (single-page sections)
- `components/` — Navbar, ThemeToggle, SectionLayout, ProjectCard, ThemeProvider
- `lib/content.ts` — Resume content (profile, education, experience, projects, skills)
- `public/` — Static assets; profile photo is `profile.png`

## Theme

Light / Dark / System. Preference is stored in `localStorage` under `portfolio-theme`.
