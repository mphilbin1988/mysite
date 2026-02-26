# Alex Rivera — Portfolio

A modern developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a dark glassmorphism theme, smooth scroll-based animations, and a fully responsive layout.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel / Docker

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running with Docker

Build and run the production container:

```bash
docker compose up --build
```

The app will be available at [http://localhost:3000](http://localhost:3000).

To run in the background:

```bash
docker compose up --build -d
```

To stop:

```bash
docker compose down
```

## Available Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start development server     |
| `npm run build` | Create production build      |
| `npm run start` | Start production server      |
| `npm run lint`  | Run ESLint                   |

## Project Structure

```
app/            → Next.js App Router pages and layouts
components/     → React components (Hero, Navbar, Skills, Projects, etc.)
lib/            → Shared data, animation variants, and custom hooks
public/         → Static assets
```

## Customization

Site content (name, projects, skills, social links) is managed in `lib/data.ts`. Update that file to personalize the portfolio.
