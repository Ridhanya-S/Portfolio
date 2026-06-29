# Portfolio Build Prompt - Ridhanya S

## Project Overview

Build a **minimalistic dark portfolio** for **Ridhanya S**, a Machine Learning Engineer with 2.5 years of experience at OptiSol Business Solutions. Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**. Deploy target: static export.

Reference portfolios for inspiration:
- darpanjain.com (triangle mesh background, layout)
- aksh-ai.com (minimal dark aesthetic)
- ai-engineer-porfolio.vercel.app (ML-specific sections)

---

## Design System

### CSS Custom Properties (globals.css)

**Dark mode (default):**
```css
--bg: #080808; --bg-2: #0f0f0f; --bg-3: #111111; --bg-4: #0a0a0a;
--border: #1e1e1e; --border-s: #1a1a1a; --border-h: #2e2e2e;
--t1: #f0f0f0; --t2: #b8b8b8; --t3: #999; --t4: #777; --t5: #666; --t6: #555; --t7: #444;
--accent: #00e5a0; --accent-fg: #000;
--accent-dim: rgba(0,229,160,0.06); --accent-dim2: rgba(0,229,160,0.09);
--accent-border: rgba(0,229,160,0.2); --accent-border2: rgba(0,229,160,0.32);
--bg-glow: radial-gradient(ellipse 70% 45% at 50% -5%, rgba(0,229,160,0.09) 0%, transparent 70%);
```

**Light mode:**
```css
--bg: #f7f7f5; --t1: #0d0d0d; --accent: #008c61; --accent-fg: #ffffff;
--bg-glow: radial-gradient(ellipse 70% 45% at 50% -5%, rgba(0,140,97,0.07) 0%, transparent 70%);
```

- Body uses `background-color: var(--bg)` + `background-image: var(--bg-glow)` fixed attachment
- Theme switch via `data-theme` attribute on `<html>`
- FOUC prevention: inline `<script>` in `<head>` reads localStorage before React hydrates
- `suppressHydrationWarning` on `<html>`

### Layout
- Max container width: `1100px`, `margin: 0 auto`, `padding: 0 24px`
- No section divider borders between sections
- Each section has an accent label (monospace, 11px, 0.15em letter-spacing) + `40px × 2px` accent underline bar

### Typography
- Headings: `clamp(22px, 3.5vw, 32px)`, weight 600, `letter-spacing: -0.02em`
- Body: 14–15px, `color: var(--t3)`, `line-height: 1.75`
- Monospace labels: `var(--font-mono), monospace`, 10–11px, uppercase

---

## Features

### Theme Toggle (light/dark)
- `ThemeProvider` React context with `useTheme()` hook
- Reads `localStorage` and `prefers-color-scheme` on mount
- Toggle button in Nav renders `<SunIcon />` or `<MoonIcon />` SVG

### Triangle Mesh Canvas Background (TriangleBg.tsx)
- `position: fixed; inset: 0; z-index: 0; pointer-events: none`
- 60 floating points, `CONN = 210px`, `SPEED = 0.32`
- Draws triangle fills first (accent color, alpha ~0.10), then edges on top (accent color, alpha ~0.28)
- Line width: 0.9px
- Re-runs effect when theme changes
- `<main>` sits above at `position: relative; z-index: 1`

### Custom Cursor (CustomCursor.tsx)
- Desktop only (skips if `pointer: coarse`)
- Hides native cursor via injected `<style>` tag: `* { cursor: none !important }`
- Small teal dot (7px) that snaps instantly to mouse position
- Larger ring (36px, accent-border color) that lags behind using `lerp` at 10% per frame (`requestAnimationFrame` loop)
- Both use `position: fixed; top:0; left:0` + `transform: translate(x, y) translate(-50%, -50%)`
- Fades out when cursor leaves the window

### Scroll Indicator (in Hero)
- Clickable `<button>` at bottom of hero that `scrollIntoView({ behavior: "smooth" })` to `#about`
- Label: "SCROLL TO EXPLORE" in monospace
- Three stacked chevron arrows (10px, border-right + border-bottom, rotated 45°) in accent color
- CSS animation `chevronPulse` cascades down with 200ms stagger per chevron

---

## Navigation (Nav.tsx)

- Fixed top, transparent background with subtle bottom border on scroll
- Logo: `Ridhanya.` links to `href="/"`
- Desktop links (hidden on mobile): About, Experience, Projects, Skills, Contact
- Resume button (accent outlined)
- Theme toggle button
- Mobile: hamburger menu with transform animation
- `hidden sm:flex` / `flex sm:hidden` Tailwind classes for responsive visibility

---

## Sections & Content

All sections use the pattern:
```
[accent label] [40px accent underline] [h2 heading] [content]
```

### 1. Hero
- Status pill: pulsing green dot + "Open to opportunities"
- Role: `MACHINE LEARNING ENGINEER` (monospace, accent color)
- Name: `Ridhanya S` (large, weight 800)
- Tagline (left-border accent): `"I take models from experiment to production."`
- Sub-tagline (italic, muted): `"Fine-tuning LLMs, designing Multi-Agent systems, building RAG pipelines - with the evaluation frameworks to prove they work."`
- CTA buttons: `View Projects` (accent filled) + `Get in Touch` (ghost)
- Stats row (4-col grid):
  - `2.5+` Years Engineering AI
  - `2×` Spot Awards
  - `2` Papers Published
  - `5+` AI Domains
- Scroll indicator with chevrons at bottom

### 2. About
- Two-column grid: `1fr 2fr`
- Left: section label + accent bar + GitHub/LinkedIn links with SVG icons
- Right:
  - Heading: "Building systems that work / when it matters."
  - Two bio paragraphs
  - 2×2 grid of philosophy cards:
    - Evaluation first / "You can't improve what you don't measure"
    - Failure is data / "Edge cases are the product, not the exception"
    - Latency is UX / "P99 matters as much as accuracy"
    - Ship, then iterate / "Working code beats perfect architecture"

### 3. Experience
- Two-column grid: `200px 1fr`
- Company: OptiSol Business Solutions Pvt. Ltd.
- Role: Machine Learning Engineer I | 2024 – Present | India
- Awards (as separate badges):
  - ★ 2× Spot Award - Technical Excellence & Consistent Delivery
  - ★ 4E Fulfillment Award
- 8 bullet points covering: STT pipelines, Multi-Agent (LangGraph), LLM fine-tuning, OCR/Vision-LLM, prompt engineering, FastAPI REST APIs, Microsoft Graph API integrations, CI/CD/testing

### 4. Education
- M.Sc. Artificial Intelligence and Machine Learning
- Coimbatore Institute of Technology (CIT), Coimbatore

### 5. Publications (Conference Papers)
- Integrated Q-Learning with Firefly Algorithm for Transportation Problems - ICNGWN 2023 - Published
- Voice Identification Using Classification Methods - ICBAI 2021 - Presented

### 6. Projects (3 entries with metrics grid + stack tags)
1. **Intelligent Meeting Insights & Action Management System** - Whisper STT, multi-layer validation, Trello/Confluence APIs
2. **Automated Signature & Seal Verification System** - Azure OpenAI Vision, Gemini, AWS Rekognition benchmarking
3. **Test Case Generation & Evaluation API** - T5/LSTM/GPT, BLEU/ROUGE/METEOR/BERTScore evals

### 7. Skills (6 categories, tag pills)
- LLMs & GenAI: GPT-4, Claude, Gemini, LLaMA, Mistral, Hugging Face, Fine-tuning, Prompt Engineering, RAG
- Frameworks & Agents: LangChain, LangGraph, Multi-Agent Orchestration, MCP, TensorFlow/Keras, Scikit-learn, PyTorch, Pydantic
- NLP, Speech & ML Libs: NLTK, spaCy, OpenAI Whisper, NumPy, Pandas, OpenCV
- Cloud & APIs: Azure OpenAI, Azure Computer Vision, Azure Cognitive Services, Azure Blob Storage, Azure Functions, AWS S3, AWS DynamoDB, AWS Textract, FastAPI, Flask, Streamlit, Gradio, WebSockets, Zapier, Microsoft Graph API, Trello API, Confluence API, AWS Rekognition
- Databases & Vector DBs: MySQL, PostgreSQL, MongoDB, DynamoDB, Pinecone, ChromaDB
- Languages, Eval & Tools: Python, JavaScript, BLEU, ROUGE, BERTScore, METEOR, A/B Testing, Pytest, SonarQube, Ruff, GitHub, Unity3D

### 8. How I Build (Process - vertical timeline)
Section label: "How I Build"
Heading: "The process behind every AI system I ship"
Descriptor: "Discipline in the approach. Precision in the output."

6-step vertical timeline with numbered circle nodes on a spine line:
| # | Title | One-liner | Tags |
|---|-------|-----------|------|
| 01 | Discover | Map the problem before designing the solution | Process audit · Impact analysis · Scope definition |
| 02 | Architect | Define data flow, components, and contracts upfront | System design · API contracts · Integration mapping |
| 03 | Engineer | Build the agent's reasoning, memory, and tool use | Prompt design · Agent logic · Tool binding |
| 04 | Implement | Production-grade code, clean APIs, maintainable pipelines | Backend APIs · Service wiring · Workflow code |
| 05 | Validate | Test real scenarios, failure modes, and load before release | E2E testing · Load testing · Failure coverage |
| 06 | Deploy | Ship, observe, and iterate on live data | Live rollout · Observability · Continuous tuning |

### 9. Contact
Two-column layout: `1fr 340px`

**Left:**
- Heading: "Let's talk."
- Body: "Whether it's a project, a role, or just an idea worth exploring - I'm always open to a good conversation about AI."
- Button: "Copy email address" - copies `ridhanya03@gmail.com` to clipboard using `execCommand` fallback (works on HTTP), shows "✓ Copied!" for 2s

**Right card:**
- Pulsing "Open to opportunities" badge (accent color pill)
- Email: ridhanya03@gmail.com
- Location: Coimbatore, India
- Socials with SVG icons: GitHub ↗, LinkedIn ↗

**Footer:**
- Left: `Ridhanya S`
- Right: `Designed & built by me · 2026`

---

## Personal Data (src/data/portfolio.ts)

```ts
personal: {
  name: "Ridhanya S",
  role: "Machine Learning Engineer",
  tagline: "I take models from experiment to production.",
  subTagline: "Fine-tuning LLMs, designing Multi-Agent systems, building RAG pipelines - with the evaluation frameworks to prove they work.",
  location: "Coimbatore, India",
  email: "ridhanya03@gmail.com",
  github: "https://github.com/Ridhanya-S",
  linkedin: "https://www.linkedin.com/in/ridhanya-s",
  huggingface: "https://huggingface.co/Ridhanya-S",
  resume: "/resume.pdf",
}
```

---

## Component File List

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Fonts, metadata, FOUC script, ThemeProvider |
| `src/app/page.tsx` | Assembles all sections |
| `src/app/globals.css` | CSS variables, keyframes, base styles |
| `src/data/portfolio.ts` | Single source of truth for all content |
| `src/components/ThemeProvider.tsx` | Theme context + toggle logic |
| `src/components/Nav.tsx` | Fixed navbar with mobile hamburger |
| `src/components/TriangleBg.tsx` | Canvas triangle mesh animation |
| `src/components/CustomCursor.tsx` | Dot + lagging ring cursor |
| `src/components/Hero.tsx` | Landing section with stats + scroll indicator |
| `src/components/About.tsx` | Bio + philosophy cards |
| `src/components/Experience.tsx` | Work history with award badges |
| `src/components/Education.tsx` | Degree card |
| `src/components/Publications.tsx` | Conference papers |
| `src/components/Projects.tsx` | Project cards with metrics grid |
| `src/components/Skills.tsx` | Skill tag grid by category |
| `src/components/Process.tsx` | Vertical timeline methodology section |
| `src/components/Contact.tsx` | Two-column contact + footer |

---

## Dev Config

```json
// package.json
"dev": "next dev --port 3003"
```

```ts
// next.config.ts
allowedDevOrigins: ["192.168.1.44"]
```

---

## Deployment

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm
- Git

### 1. Local build verification

```bash
npm install
npm run build   # produces .next/ static output
npm run start   # preview production build at localhost:3000
```

---

### 2. Deploy to Vercel (recommended - zero config)

```bash
# Install Vercel CLI
npm i -g vercel

# From the project root
vercel

# Follow prompts:
# - Link to existing project or create new
# - Framework: Next.js (auto-detected)
# - Build command: next build (default)
# - Output directory: .next (default)
```

Or connect via dashboard:
1. Push repo to GitHub
2. Go to vercel.com → New Project → Import repo
3. Vercel auto-detects Next.js - click Deploy
4. Custom domain: Settings → Domains → Add your domain

> Every `git push` to main auto-deploys.

---

### 3. Deploy to Netlify

Enable static export first - add to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
};
```

Then build and deploy:

```bash
npm run build        # outputs to /out folder

# Option A - Netlify CLI
npm i -g netlify-cli
netlify deploy --dir=out --prod

# Option B - Netlify dashboard
# Drag and drop the /out folder at app.netlify.com/drop
```

Or connect GitHub repo:
1. netlify.com → New site → Import from Git
2. Build command: `next build`
3. Publish directory: `out`

---

### 4. Deploy to GitHub Pages

Add to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/your-repo-name",   // only if not using custom domain
  trailingSlash: true,
};
```

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm ci
      - run: npm run build

      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

Then in GitHub repo → Settings → Pages → Source: `gh-pages` branch.

---

### 5. Environment checklist before going live

- [ ] Replace dev email `ridhanya03@gmail.com` in `portfolio.ts` if needed
- [ ] Add real resume PDF to `/public/resume.pdf`
- [ ] Update GitHub/LinkedIn/HuggingFace URLs in `portfolio.ts`
- [ ] Remove `allowedDevOrigins` from `next.config.ts` (dev-only setting)
- [ ] Set correct `basePath` if deploying to a subdirectory
- [ ] Test light/dark mode toggle in production
- [ ] Verify custom cursor on desktop, absent on mobile
- [ ] Check canvas animation renders (requires JS enabled)

---

### 6. Custom domain (Vercel)

```
vercel domains add ridhanya.dev
```

Then add DNS records at your registrar:
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```
