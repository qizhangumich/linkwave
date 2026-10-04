# linkwave.sg

LINKWAVE website, built to `instruction/LINKWAVE_GLOBAL_WEBSITE_UI_UX_BUILD_SPEC_v2.md`.
Astro (static output), TypeScript, plain CSS with design tokens, no UI framework.

```bash
npm install
npm run dev       # http://localhost:4321, shows [TBD] and unapproved fields
npm run build     # type-check + static build to dist/, hides them
npm run preview
```

## What is built

| Route | Content |
| --- | --- |
| `/` | Homepage, all sections of spec §12 plus the reliability section of §43 |
| `/solutions/[slug]/` | 5 solution pages: AI data centers, hyperscale, HPC, colocation, modular AI infrastructure |
| `/products/`, `/products/[slug]/` | Index + 4 products: centralized CDU, primary pump stations, manifolds and distribution, liquid-cooled racks |
| `/modular-cooling/` | Prefabricated thermal infrastructure, following spec §16 |
| `/projects/`, `/projects/[slug]/` | Index + 4 case studies: US 2.5 MW, US pump station, Singapore pump station, China 500 kW |
| `/engineering/` | Engineering page, following spec §15 |
| `/resources/` | Documentation issued on request |
| `/contact/` | RFQ form with validation, file upload, draft saving, success and error states |

Not built, because the source material does not support them: rack and in-row CDU product pages
(no specifications supplied), a controls product page, a company page (legal entity, location
and history of LINKWAVE not supplied), technical guides and insights (no articles), privacy and
terms (need legal review).

## Where things live

- `src/styles/tokens.css` — colour, type, spacing, motion tokens.
- `src/content/` — all copy and data, kept out of components for later localization.
  - `claims.ts` — claim register (spec §30). Every public figure points to a source page.
  - `products.ts`, `projects.ts` — structured content (spec §29), including the deployment dataset (§43.2).
  - `home.ts`, `site.ts` — homepage copy, navigation, CTAs.
- `src/lib/publish.ts` — publication gate. Rows with status `tbd` or `needs-approval` render in
  `npm run dev` with a red marker and are omitted from production builds.
- `src/components/` — Header, Footer, Button, Figure, SectionHeader, MetricRail, SystemDiagram,
  SpecTable, Breadcrumb, CtaBand, RFQForm, MobileCta.

Desktop and mobile are composed separately (spec §39): the phone layout reorders the homepage
chapters, drops secondary copy, turns the architecture diagram into a vertical journey and
spec tables into data blocks, and adds a sticky "Talk to an Engineer" bar.

## Deployment

Pushes to `master` deploy to Vercel (`vercel.json` sets the Astro preset). Set
`PUBLIC_RFQ_ENDPOINT` in the Vercel project's environment variables to connect the enquiry form.
