---
name: intelligaia-design
description: >-
  Universal design system for producing any Intelligaia-branded output across
  every medium from one source of truth. Use whenever creating, editing, or
  reviewing Intelligaia material: responsive websites, landing pages, and
  campaign pages; presentations, pitch decks, and capability decks (16:9);
  and paged documents (US-Letter PDF and DOCX) such as proposals, RFP
  responses, case studies, credentials, one-pagers, white papers, and reports.
  Triggers on "Intelligaia", intelligaia.com, the Workshops/Labs/Studio model,
  founders Sandeep Chauhan or Rajiv Kaul, or any request to produce
  Intelligaia-branded visual or written output. Self-contained: bundles the
  cross-medium token system, brand voice, canonical proof points, component
  vocabulary, and one executable adapter per medium. Do NOT use for 3BD.
  v2: light covers by default, thin capped chrome, expanded orange/blue/purple
  accent palette, optional (not forced) hex motif and Workshops/Labs/Studio
  structure.
user-invocable: true
---

# Intelligaia Design (v2)

One design language, four output media. This skill holds the brand **once**, in a
medium-independent core, and renders it into web, slides, or paged documents
through thin adapters.

## How this skill is structured

**Layer 1 — the medium-agnostic core:**

| File | What it holds |
|---|---|
| `references/tokens.md` | Colour (now incl. orange/blue/purple accents), type, spacing, radius, motion, chrome limits — each expressed in **web, slide, and print values**. |
| `references/voice.md` | Editorial voice, always/never vocabulary, banned AI-tell phrases, authoritative service and positioning copy. |
| `references/proof-points.md` | The canonical source for every client case, metric, and proof point. Nothing cites metrics from memory. |
| `references/components.md` | The shared component vocabulary, each defined per medium — including the v2 additions (`Badge`, `Illustration`) and the light-cover-default rule. |

**Layer 2 — the output adapters:**

| Target | Adapter | Production method |
|---|---|---|
| Website / landing / campaign page | `references/web.md` | Self-contained responsive HTML artifact |
| Presentation / deck (16:9) | `references/slides.md` | Build via the `pptx` skill |
| Proposal / case study / report / one-pager (paged) | `references/documents.md` | US-Letter **PDF** and/or **DOCX** |

The reading order for any task is always: **core → the one matching adapter → build**.

## Bundled build resources
- `assets/` — logo variants and `assets/fonts/` (the nine brand TTFs).
- `styles.css` — shared token stylesheet for the template examples below.
- `examples/` — working starting points:
  - Self-contained: `web-sample.html`, `pdf-sample.html`, `build_deck.js`.
  - Template + stylesheet: `web-page/`, `slide/`, `document/` (each with `ds-base.js` loader).
- `scripts/embed_pptx_fonts.py` — embeds the brand fonts into any `.pptx` (mandatory for decks).

## Before you build: clarify only what's genuinely unresolved

1. **Medium** — web, slides, or paged document.
2. **Theme** — Light (cream, default) or Dark (ink, opt-in). Default to **light** unless the user
   asks for dark or it's a web hero / title slide / closer slide.
3. **Content type** — proposal, case study, report, capability deck, one-pager, landing page, etc.
4. **Format** (paged only) — PDF, DOCX, or both.

## Golden rules (medium-aware — never violated)

1. **Yellow is never body text.** `--prim-yellow-500` (`#FFD923`) is legible only on dark surfaces.
   On light, use `--accent-gold-600` for eyebrows/labels.
2. **Covers default to light.** Never make a cover, hero, or first page all-black unless the user
   asks for a dark theme or it's a deliberate web hero / title slide.
3. **Chrome stays thin.** Nav/footers/running headers are hairline-bordered and height-capped (see
   `tokens.md` §4) — never a heavy dark band, on any surface.
4. **The signature move is yellow Trirong italic** — used for hero statements, pull quotes, and the
   single most important outcome metric. Use it deliberately, not decoratively.
5. **Warm neutrals only.** Never pure `#000000`/`#FFFFFF`; never cold grey.
6. **Colour has range now.** Beyond yellow/ink, use the orange/blue/purple accent families for
   charts, tags, and illustration — don't default every graphic to yellow-on-black.
7. **Type scales, never freezes.** Use role tokens (`display`, `h1`…`overline`, `metric`).
8. **Workshops · Labs · Studio** is available structural language — use it when true of the
   engagement, don't force every artifact into that three-stage shape.
9. **Illustration is free.** Default to the hex motif OR a simple, client/industry-specific
   geometric illustration — whichever fits; neither is mandatory on every artifact.
10. **Every artifact is brand-identifiable in isolation** (nav+footer / footer mark+page number /
    running header+footer), but the chrome is always thin.
11. **Proof points come from `proof-points.md`** — never invented, client names only where cleared.
12. **Current year is dynamic.** Never a hardcoded past year.
13. **One canonical contact** — requester's email if known, else `sales@intelligaia.com`;
    `https://intelligaia.com/`; LinkedIn `https://www.linkedin.com/company/intelligaia/`.

## Assets
- **Logo:** `intelligaia-logo-full-ink.png` / `-full-cream.png` (covers/hero) and
  `intelligaia-logo-wordmark-ink.png` / `-wordmark-cream.png` (nav/footer). Never mix ink logo on
  dark or cream logo on light. `assets/intelligaia-logo-source.svg` is the original raster-derived
  source — prefer the wordmark at small sizes.
- **Fonts:** Trirong (display/serif), Raleway (body/sans), Azeret Mono (mono). Web loads them from
  Google Fonts; slides and PDF must embed/supply the fonts (see adapters).
- **Hex motif & signature curve** are code-generated (SVG) — optional, see `components.md`.

## Identity in one paragraph

Intelligaia is an AI-centred design and engineering firm that takes AI proofs-of-concept to
production-ready solutions for enterprise — owning the complete outcome from first Workshop to
final deployment, across the Workshops → Labs → Studio model (used as language, not a forced
structure). Founders: Sandeep Chauhan (Co-Founder, VP Strategy) and Rajiv Kaul (Co-Founder, Design
Lead). The design posture is **precise, structured, outcome-first**: dense enough to be credible,
airy enough to be read — and, as of v2, printable by default and colour-diverse where the story
calls for it.
