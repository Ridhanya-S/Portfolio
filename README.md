# Ridhanya S - Portfolio

Personal portfolio for Ridhanya S, Machine Learning Engineer.

🌐 **Portfolio:** [portfolio-ridhanya-s.vercel.app](https://portfolio-ridhanya-s.vercel.app/)


## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS**
- Static export - no server required

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3003
```

## Build

```bash
npm run build
npm run start      # preview production build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, theme script
│   ├── page.tsx          # Page assembly
│   └── globals.css       # CSS variables, base styles
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Publications.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Process.tsx
│   ├── Contact.tsx
│   ├── TriangleBg.tsx    # Canvas mesh animation
│   ├── CustomCursor.tsx  # Dot + ring cursor
│   └── ThemeProvider.tsx
└── data/
    └── portfolio.ts      # All content lives here

docs/
└── PORTFOLIO_PROMPT.md   # Full build prompt and deployment guide

public/
└── resume.pdf            # Add your resume here
```

## Updating Content

All content is in `src/data/portfolio.ts` - edit that file to update name, bio, experience, projects, skills, and links.

## Deployment

Deploy to Vercel in one click - connect your GitHub repo at vercel.com and it auto-deploys on every push. See `docs/PORTFOLIO_PROMPT.md` for full steps including Netlify and GitHub Pages options.
