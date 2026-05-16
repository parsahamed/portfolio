# Hamed Parsa Portfolio

Bilingual portfolio website for Hamed Parsa built with Next.js 15, TypeScript, TailwindCSS, Framer Motion, and shadcn-style UI primitives. The portfolio is designed for recruiter and hiring-manager review, with dedicated enterprise/project-process case studies in both English and Persian.

Live deployment: `https://parsahmd.vercel.app/`

## Stack

- Next.js 15 App Router
- TypeScript with strict mode
- TailwindCSS v4
- Framer Motion
- Lucide icons
- `next/font` with `Inter` and `Vazirmatn`
- Locale routing with `/en` and `/fa`

## Features

- English and Persian portfolio routes
- Proper RTL support for Persian
- Dark mode by default
- SEO metadata, OpenGraph, sitemap, and robots support
- Dedicated enterprise case-study pages at `/en/enterprise-projects` and `/fa/enterprise-projects`
- Resume CTA in hero and contact sections
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
public/
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root path redirects to `/en`.

## Verification

```bash
npm run lint
npm run build
```

## Production Build

```bash
npm run build
npm run start
```

## Content Updates

Primary content lives in [data/portfolio.ts](/c:/Sources/portfolio/data/portfolio.ts). Update this file when you need to change:

- English and Persian copy
- Homepage sections
- Enterprise case studies
- CTA labels
- Localized recruiter-facing text

Global profile links and canonical deployment settings live in [data/site.ts](/c:/Sources/portfolio/data/site.ts).

## Resume PDF

Resume downloads point to:

`public/Hamed-Parsa-Resume.pdf`

The repository currently contains a placeholder file at that path.

TODO: Replace `public/Hamed-Parsa-Resume.pdf` with the final resume PDF before sending the portfolio to recruiters or HR teams.

## Adding Project Screenshots Later

If you want to add screenshots or architecture diagrams later:

1. Put image assets in `public/` or a dedicated folder such as `public/projects/`.
2. Add the image paths to the relevant content entries in `data/portfolio.ts`.
3. Extend the project or enterprise case-study components to render those assets.
4. Prefer optimized static images and keep file sizes reasonable for Vercel deployment.

## Deployment to Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Deploy.

## Vercel Notes

- No custom server configuration is required.
- Locale routes are statically generated through App Router params.
- `NEXT_PUBLIC_SITE_URL` should match the public deployment URL for correct canonical and OpenGraph metadata.
- The current default deployment URL is `https://parsahmd.vercel.app/`.
