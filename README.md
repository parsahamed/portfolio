# Hamed Parsa Portfolio

Bilingual portfolio website for Hamed Parsa built with Next.js 15, TypeScript, TailwindCSS, Framer Motion, and shadcn-style UI primitives. The site is designed to position Hamed as a senior full-stack engineer, enterprise software architect, technical leader, and platform builder.

## Stack

- Next.js 15 App Router
- TypeScript with strict mode
- TailwindCSS v4
- Framer Motion
- Lucide icons
- next/font with `Inter` and `Vazirmatn`
- Locale routing with `/en` and `/fa`

## Features

- English and Persian single-page portfolio
- Proper RTL support for Persian
- Dark mode by default
- SEO metadata, OpenGraph, sitemap, and robots support
- Responsive sections for hero, about, experience, projects, skills, philosophy, and contact
- Reusable content architecture via typed data modules
- Vercel-ready deployment structure

## Project Structure

```text
app/
components/
  ui/
sections/
data/
lib/
types/
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root path redirects to `/en`.

## Production Build

```bash
npm run build
npm run start
```

## Deployment to Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain, for example `https://your-domain.com`.
4. Deploy.

No custom server configuration is required.

## Content and Link Updates

Profile URLs and canonical site settings live in [data/site.ts](/c:/Sources/portfolio/data/site.ts). Portfolio copy for both languages lives in [data/portfolio.ts](/c:/Sources/portfolio/data/portfolio.ts).

If you want to update branding, links, or section content, change those files first.

## Notes

- The current social links are centralized in `data/site.ts` for easy replacement.
- Fonts are locale-aware: English uses `Inter`, Persian uses `Vazirmatn`.
- SEO metadata is generated per locale in [app/[locale]/layout.tsx](/c:/Sources/portfolio/app/[locale]/layout.tsx).
