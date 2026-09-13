# Abdelali Labibi — Portfolio

A responsive portfolio website built with Next.js (Pages Router), TypeScript and CSS Modules.

## Pages

- `/` — Home
- `/about` — About & skills
- `/projects` — Projects
- `/contact` — Contact form
- `/404`, `/500` — Custom error pages

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start dev server           |
| `npm run build` | Production build           |
| `npm start`     | Run production server      |


## Project structure

```
├── components/   # Layout, Navbar, Footer, RouteLoading
├── pages/        # Routed pages
├── public/images # Images
├── styles/       # Global CSS + CSS Modules
└── next.config.ts
```

## Customize

Edit your details in `pages/contact.tsx`, swap images in `public/images/`, and list your work in `pages/projects.tsx`.

## Deploy

Live demo: https://checkpoint-front-end-development-re.vercel.app/

Push to GitHub and import into [Vercel](https://vercel.com) — no extra config needed.