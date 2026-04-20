# Scuola Italiana Baku — Web Application

Marketing and information site for **Scuola Italiana Baku**: Italian language courses, café, and cultural programming in Baku, Azerbaijan. Built on **Next.js 14** (App Router), **React 18**, **TypeScript**, and **Tailwind CSS**, with **AZ / EN / IT** UI copy, **dark mode**, and an in-site **search** bar.

---

## Features

| Feature | Implementation |
|--------|------------------|
| **Multilingual UI** | React context + JSON files (`src/i18n/translations/*.json`). Languages: **EN** (default), **AZ**, **IT**. |
| **Dark / light theme** | `next-themes` with `class` strategy on `<html>`; toggle in navbar (`DarkSwitch`). |
| **Site search** | Client-side filter over `searchIndex` in `src/lib/searchIndex.ts` (titles, descriptions, keywords). Keyboard navigation (↑/↓, Enter, Escape). |
| **Responsive navigation** | Headless UI `Disclosure` (mobile) + `Menu` dropdown for Services (desktop). |
| **Italian-themed palette** | Custom Tailwind colors `italia` (green) and `italiaRed` (red), aligned with the Italian flag. |
| **SEO metadata** | Root `metadata` in `src/app/layout.tsx` (title, description, favicon from `/img/logo.png`). |

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 14 (`next dev` / `next build`)
- **UI:** React 18, Tailwind CSS 3 (JIT), [Headless UI](https://headlessui.com/) v2, [Heroicons](https://heroicons.com/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Forms (optional widget):** [react-hook-form](https://react-hook-form.com/) — used in `PopupWidget` (see [Unused / template components](#unused--template-components))
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) via `next/font/google` in root layout

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended for Next.js 14)
- npm or yarn

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

| Script | Command | Purpose |
|--------|---------|---------|
| **Development** | `npm run dev` | Next.js dev server |
| **Production build** | `npm run build` | Optimized production build |
| **Start (production)** | `npm run start` | Serve built app |
| **Lint** | `npm run lint` | ESLint (`next/core-web-vitals`) |

---

## Project Structure

```
scuola_italiana/
├── css/
│   └── tailwind.css          # Alternate Tailwind entry (app uses src/app/globals.css)
├── public/
│   └── img/                  # Static images (logo, brand SVGs in repo; see Assets)
├── src/
│   ├── app/                  # Next.js App Router: layouts, pages, global CSS
│   ├── components/           # Reusable React components
│   ├── context/              # LanguageProvider + useLanguage
│   ├── i18n/translations/    # en.json, az.json, it.json
│   ├── lib/                  # searchIndex for SearchBar
│   └── types.ts              # Shared TypeScript types
├── package.json
├── tailwind.config.ts
└── tsconfig.json             # Path alias @/* → ./src/*
```

---

## Application Architecture

### Root layout (`src/app/layout.tsx`)

- Loads **Inter** and applies it to `<body>`.
- Wraps the app with:
  - **`ThemeProvider`** (`next-themes`, `attribute="class"`) for dark/light mode.
  - **`LanguageProvider`** for `lang` / `setLang` / `t` (translations).
- Renders global **`Navbar`**, page **`children`**, and **`Footer`**.
- Exports Next.js **`metadata`**: site title, description, and icons pointing to `/img/logo.png`.

### Global styles (`src/app/globals.css`)

- Tailwind layers: `base`, `components`, `utilities`.
- **`@layer base`:**
  - `html, body`: `dark:bg-trueGray-900` for dark background.
  - **Focus visible:** ring using `italia-500` with offset (Italian green accent for accessibility).

### Routing (App Router)

All routes below are **client components** (`"use client"`) where page files use `useLanguage()`.

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Home: Hero, section titles, two `Benefits` blocks, course/café cards, links to Lingua/Cultura, `Cta`. |
| `/about-us` | `src/app/about-us/page.tsx` | About: `SectionTitle` + four paragraphs from `t.about.*`. |
| `/services` | `src/app/services/page.tsx` | Services hub: cards linking to café and courses. |
| `/services/cafe` | `src/app/services/cafe/page.tsx` | Café copy from `t.cafe.*`. |
| `/services/course` | `src/app/services/course/page.tsx` | Courses copy from `t.course.*`. |
| `/lingua-italiana` | `src/app/lingua-italiana/page.tsx` | Italian language page from `t.lingua.*`. |
| `/cultura-italiana` | `src/app/cultura-italiana/page.tsx` | Italian culture page from `t.cultura.*`. |
| `/contacts` | `src/app/contacts/page.tsx` | Address, email, hours, social links (Instagram, Telegram, WhatsApp). |

---

## Internationalization (`src/context/LanguageContext.tsx`)

### Exported types

- **`Language`:** `"EN" | "AZ" | "IT"`
- **`Translations`:** shape of `en.json` (all languages must match this structure).

### `LanguageProvider`

- State: `lang` (default `"EN"`).
- Value: `{ lang, setLang, t }` where `t` is `translations[lang]` (`en`, `az`, `it` JSON imports).

### `useLanguage()`

- Returns the context: `{ lang, setLang, t }`.
- Used across pages and interactive components for all user-visible strings (except a few hard-coded labels noted below).

### Translation files (`src/i18n/translations/`)

Each file mirrors the same JSON keys. **`en.json`** defines these **top-level sections** (other locales should keep the same keys):

| Section | Used by |
|---------|---------|
| `nav` | `Navbar` — menu labels |
| `hero` | `Hero` |
| `home` | `src/app/page.tsx` |
| `about` | About page |
| `contacts` | Contacts page (partially; see hard-coded notes) |
| `cultura` | Cultura Italiana page |
| `lingua` | Lingua Italiana page |
| `services` | Services hub page |
| `cafe` | Café page |
| `course` | Course page |
| `cta` | `Cta` |
| `faq` | `Faq` component (not mounted on any route currently) |
| `footer` | `Footer` — description, follow heading, copyright (`{year}` placeholder) |
| `benefits` | Home page benefit blocks |

**Hard-coded strings (not in JSON):** Contacts page includes fixed **email** (`info@scuolaitalianabaku.az`), **Instagram / Telegram / WhatsApp** labels and URLs; `SearchBar` placeholder `"Search site..."` and empty-state English; `Hero` tagline highlighting logic assumes certain English phrases for optional split styling.

---

## Library: Site Search (`src/lib/searchIndex.ts`)

### `SearchItem` (interface)

- `title`, `href`, `description`, `keywords: string[]`

### `searchIndex` (constant array)

Curated list of indexable destinations: Home, About, Services, Café, Courses, Lingua Italiana, Cultura Italiana, Contacts — used by **`SearchBar`** for substring matching (title, description, any keyword), max **6** results.

---

## Components Reference

Components live in **`src/components/`**. Naming below matches **exported** symbols.

| Component / default export | File | Role |
|---------------------------|------|------|
| **`Container`** | `Container.tsx` | Max-width container: `container p-8 mx-auto xl:px-0` + optional `className`. |
| **`SectionTitle`** | `SectionTitle.tsx` | Optional `preTitle` (uppercase accent), `title` (`h2`), optional body `children`; `align` `"left"` \| `"center"` (default centered). |
| **`Hero`** | `Hero.tsx` | Two-column hero: headline, description, CTAs to `/services/course` and `/contacts`, hero image from `public/img/hero.png`, tagline with optional highlighted “Lingua / Cultura Italiana” when the tagline string splits on those phrases. |
| **`Benefits`** | `Benefits.tsx` | Two-column layout: image + title, description, bullet list. Inner **`Benefit`** clones icon with `italia-500` icon box. Props: `data` (title, desc, `image`, `bullets[]` with `icon` React nodes), optional `imgPos` `"left"` \| `"right"`. |
| **`Cta`** | `Cta.tsx` | Full-width callout: `italiaRed-500` background, title, description, button link to `/contacts`. |
| **`Navbar`** | `Navbar.tsx` | Logo + brand link, Instagram icon link, language toggles (**AZ / EN / IT**), `ThemeChanger`, `SearchBar`, mobile disclosure menu, desktop `Menu` for Services children. |
| **`Footer`** | `Footer.tsx` | Logo, `t.footer.description`, Telegram/WhatsApp placeholder links, copyright with year; includes template **`Backlink`** to web3templates.com (small fixed corner link). |
| **`SearchBar`** | `SearchBar.tsx` | Controlled search input, dropdown results, click-outside close, keyboard navigation, `Link` navigation and clear query on select. |
| **`ThemeChanger`** (default export) | `DarkSwitch.tsx` | Sun/moon toggle using `useTheme`; returns `null` until mounted (avoids hydration mismatch). |
| **`Faq`** | `Faq.tsx` | Headless UI disclosures built from `t.faq` q1–q5 / a1–a5. **Not imported by any page in the current tree.** |
| **`Video`** | `Video.tsx` | Lazy YouTube embed (`youtube-nocookie.com`) after play click; prop `videoId`. **Not used by current pages.** |
| **`Testimonials`** | `Testimonials.tsx` | Three static testimonial cards + **`Avatar`** + **`Mark`** helpers. **Not used by current pages** (still template English copy). |
| **`PopupWidget`** | `PopupWidget.tsx` | Floating chat-style form (Headless UI + react-hook-form) posting to **Web3Forms**; contains placeholder API key and “Nextly” strings. **Not used by current pages.** |
| **`DisclosureClient`** | `DisclosureClient.tsx` | CMS-shaped mobile nav (`topnav` prop). **Not used**; main nav is `Navbar.tsx`. |
| **`data.js`** | `data.js` | Static `benefitOne` / `benefitTwo` objects (English + JSX icons). **Not imported**; home uses i18n + inline objects instead. |

---

## Styling (`tailwind.config.ts`)

### Content paths

Tailwind scans: `src/pages`, `src/components`, `src/app` (`*.{js,ts,jsx,tsx,mdx}`).

### Dark mode

- **`darkMode: "class"`** — toggled by `next-themes` on the document element.

### Extended theme

| Token | Meaning |
|-------|---------|
| **`trueGray`** | Alias to Tailwind `neutral` — used for dark grays (`trueGray-800`, etc.). |
| **`italia`** (50–900) | Green scale; **500** is Italian flag green (`#009246`). |
| **`italiaRed`** (50–900) | Red scale; **500** is Italian flag red (`#CE2B37`). |
| **`fontFamily.sans`** | **Inter** first, then default sans stack. |
| **`fontFamily.stock`** | Default Tailwind sans stack only. |

### Common utility patterns in the app

- Cards: `rounded-xl`, `bg-gray-50` / `dark:bg-trueGray-800`, borders `border-gray-100` / `dark:border-trueGray-700`, hover `hover:bg-italia-50` / `dark:hover:bg-italia-900/20`.
- Primary actions: `bg-italia-600`, `hover:bg-italia-700`, dark variants `italia-500` / `600`.
- Outline buttons: border `italia-600`, text `italia-600` with hover background tint.

---

## Types (`src/types.ts`)

- **`PageProps`:** generic Next.js page props shape with `params.slug` and `searchParams` (currently unused by existing routes; useful for future dynamic segments).

---

## Assets (`public/`)

| Path | Used by |
|------|---------|
| `public/img/logo.png` | Navbar, Footer, layout `metadata.icons` |
| `public/img/hero.png` | `Hero` |
| `public/img/benefit-one.png`, `benefit-two.png` | Home `page.tsx` (`Benefits`) |
| `public/img/user1.jpg`–`user3.jpg` | `Testimonials` (component not mounted on routes) |
| `public/img/vercel.svg`, `public/img/brands/*.svg` | Template leftovers; not referenced by current pages |

Next.js also serves **`src/app/icon.png`** as the app icon route (`/icon.png`) in addition to metadata icons from `/img/logo.png`.

---

## External Links (as implemented)

- **Instagram:** `https://www.instagram.com/scuola_italiana_baku/` (navbar, contacts).
- **Footer:** placeholder `https://t.me/your-telegram` and `https://wa.me/your-whatsapp-number` — replace with real channels.
- **Contacts page:** `https://t.me/scuola_italiana_baku`, `https://wa.me/994501234567` — verify numbers/links for production.

---

## Unused / Template Components

The repository retains pieces from the original **Nextly** template:

- **`package.json`** still names the project `nextly-template` and points to the old repository URL; consider renaming for Scuola Italiana Baku.
- **`Footer`** `Backlink` and **`PopupWidget`** / **`Testimonials`** copy still reference template or third-party branding.
- **`css/tailwind.css`** duplicates base styles; the active pipeline uses **`src/app/globals.css`**.

Safe to remove or wire up: `Faq`, `Video`, `Testimonials`, `PopupWidget`, `DisclosureClient`, `data.js` depending on product needs.

---

## Deployment

Compatible with **[Vercel](https://vercel.com/)** or any Node host that runs `next build` + `next start`. Set environment variables only if you add server features or replace Web3Forms with a configured endpoint.

---

## Maintainer Checklist

1. Align **`package.json`** name, description, and repository URL with this product.
2. Prune unused **`public/img/brands`** assets if you do not plan to use `Testimonials` or brand strips.
3. Replace footer placeholder Telegram/WhatsApp URLs.
4. Configure **`PopupWidget`** (if enabled): Web3Forms `apikey`, subject/from strings, and mount `<PopupWidget />` in `layout.tsx` if desired.
5. Keep **`az.json`** and **`it.json`** in sync with **`en.json`** keys when adding copy.

---

## License

`package.json` declares **ISC**; confirm license file and attribution if you redistribute after removing template backlinks.
