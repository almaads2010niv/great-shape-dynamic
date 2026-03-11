# Great Shape Dynamic — Technical Memory

## Project Overview
Dynamic multi-path landing page for Country Club Great Shape Nesher.
3 emotional paths that change the entire page: design, copy, colors, animations.

## Stack
- **Framework**: Next.js 16.1.6 (App Router) + React 19.2.3 + TypeScript
- **Styling**: Tailwind CSS v4 + CSS Custom Properties for theming
- **Animation**: Framer Motion 12
- **Database**: Supabase (project: `rositdpworjusdaaoddy`, EU West)
- **Hosting**: Vercel (auto-deploy from main branch)
- **Fonts**: Heebo + Assistant (Google Fonts)

## URLs
- **Production**: https://great-shape-dynamic.vercel.app
- **GitHub**: https://github.com/almaads2010niv/great-shape-dynamic
- **Supabase**: https://supabase.com/dashboard/project/rositdpworjusdaaoddy
- **Original repo** (reference): https://github.com/almaads2010niv/great-shape-openday

## Theme System Architecture

### CSS Variables (globals.css)
Colors defined as raw CSS custom properties on `[data-theme]` selectors.
**NOT** in `@theme inline` (Tailwind v4 build-time conflict).

### 3 Themes
| Variable | routine | relax | athlete |
|----------|---------|-------|---------|
| --theme-primary | #E60000 | #2A9D8F | #FF2D2D |
| --theme-bg | #0A0A0A | #1A1512 | #000000 |
| --theme-bg-card | #1A1A1A | #231E19 | #0A0A0A |
| --theme-accent | #D4A853 | #E9C46A | #FFFFFF |
| --theme-text | #FAFAFA | #FAF5EF | #FFFFFF |
| --theme-radius | 8px | 20px | 2px |

### React Context Flow
1. `ThemeProvider.tsx` — wraps app, manages `activePath` state, sets `data-theme` attribute
2. `useTheme.ts` hook — returns context + content from `themes.ts`
3. `config/themes.ts` — all Hebrew content per path (hero, voss, guilt, testimonials, CTA, etc.)

### URL Param Routing
`?path=routine|relax|athlete` skips PathSelector and loads page directly.

## File Structure
```
src/
  app/
    globals.css          — Theme CSS vars + animations
    layout.tsx           — Fonts + ThemeProvider wrapper
    page.tsx             — PathSelector OR PageContent
    api/
      checkout/route.ts       — Insert lead with path field
      checkout/status/route.ts — Check payment status
      spots/route.ts          — Remaining spots (total=50)
      leads/recent/route.ts   — Recent leads for FOMO
  components/ (24 total)
    PathSelector.tsx     — Full-screen entry, 3 animated cards
    PageContent.tsx      — AnimatePresence wrapper
    ThemeProvider.tsx     — React Context + data-theme
    Hero.tsx             — 3 variants (headline, bg image, badges)
    StickyBar.tsx        — Top bar with CTA
    VossBlock.tsx        — 3 no-oriented questions per path
    GuiltRelease.tsx     — Emotional copy per path
    FacilitiesGallery.tsx — Facility images (order varies by path)
    Testimonials.tsx     — Filtered by path (2-3 per path)
    CheckoutForm.tsx     — 2-step form, sends path to API
    PricingTable.tsx     — Conditional (routine + athlete only)
    SavingsCalculator.tsx — Conditional (routine only)
    ComparisonTable.tsx  — Conditional (routine only)
    VideoSection.tsx     — Conditional (routine only)
    + 10 more (SocialProof, RiskReversal, NotificationQueue, etc.)
  config/
    themes.ts            — All Hebrew content per path
  hooks/
    useTheme.ts          — Access theme context + content
  lib/
    supabase.ts          — Supabase client
```

## Conditional Sections per Path
| Section | routine | relax | athlete |
|---------|---------|-------|---------|
| video | yes | no | no |
| pricingTable | yes | no | yes |
| savingsCalculator | yes | no | no |
| comparisonTable | yes | no | no |

## Supabase Schema
```sql
leads (id uuid PK, name text, phone text NOT NULL, email text,
       source text DEFAULT 'checkout_form', path text DEFAULT 'routine',
       status text DEFAULT 'pending_payment', created_at timestamptz)
```
RLS enabled with anon insert/select/update policies.

## Key Technical Decisions
1. **No `@theme inline` for colors** — Tailwind v4 registers tokens at build time, runtime `[data-theme]` overrides won't propagate
2. **`color-mix()` for opacity** — `color-mix(in srgb, var(--theme-primary) 10%, transparent)` instead of Tailwind opacity utilities
3. **useNightMode removed** — was expired (hardcoded Feb 25, 2026). Dates moved to themes.ts config
4. **sauna.JPG renamed** — Linux/Vercel case-sensitive. Renamed to sauna.jpg
5. **Payment URL unchanged** — packageId=19 for all paths (same membership)
6. **`id="checkout"` always renders** — Required for scrollIntoView from Hero, StickyBar, etc.

## Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anonymous key

## Git Config
- Email: `alma.ads2010@gmail.com` (NOT niveini@gmail.com — causes Vercel/GitHub issues)
- Name: `Alma Ads`
