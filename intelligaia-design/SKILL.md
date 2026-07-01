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
---

# Intelligaia Design

One design language, four output media. This skill holds the brand **once**, in a
medium-independent core, and renders it into web, slides, or paged documents
through thin adapters. The brand never gets re-described per format — that is the
mistake this skill exists to prevent.

## How this skill is structured

**Layer 1 — the medium-agnostic core.** Read these first; they apply to every
output, every time:

| File | What it holds |
|---|---|
| `references/tokens.md` | Colour, type, spacing, radius, motion — each expressed in **web, slide, and print values**. The fluid type scale lives here. |
| `references/voice.md` | Editorial voice, always/never vocabulary, banned AI-tell phrases, authoritative service and positioning copy. |
| `references/proof-points.md` | The single canonical source for every client case, metric, and proof point. Nothing cites metrics from memory. |
| `references/components.md` | The shared component vocabulary (cover, metric wall, client grid, CTA close, etc.), each defined per medium. |

**Layer 2 — the output adapters.** Read **one**, matching the target medium:

| Target | Adapter | Production method |
|---|---|---|
| Website / landing / campaign page | `references/web.md` | Self-contained responsive HTML artifact (fluid, single file) |
| Presentation / deck (16:9) | `references/slides.md` | Build via the `pptx` skill |
| Proposal / case study / report / one-pager (paged) | `references/documents.md` | US-Letter **PDF** and/or **DOCX** via the `pdf` and `docx` skills |

The reading order for any task is always: **core → the one matching adapter →
build**.

## Bundled build resources

The skill ships everything a build needs — no downloads:
- `assets/` — logo variants (see below) and `assets/fonts/` (the nine brand TTFs).
- `examples/` — working starting points: `web-sample.html` (self-contained
  responsive page), `pdf-sample.html` (WeasyPrint source, US Letter), and
  `build_deck.js` (pptxgenjs 16:9 deck). Adapt these rather than starting blank.
- `scripts/embed_pptx_fonts.py` — embeds the brand fonts into any `.pptx`
  (mandatory final step for decks; see `slides.md`).

## Before you build: clarify only what's genuinely unresolved

Do **not** interrogate the user with a fixed questionnaire. Read the request and
the conversation first; most answers are already there ("a landing page" = web;
"send to the client" = PDF; "deck" = slides). Ask only about a dimension that is
actually ambiguous and that changes the output. The dimensions that matter:

1. **Medium** — web, slides, or paged document. Usually obvious from the request.
2. **Theme** — Light (cream) or Dark (ink). Default to the medium's norm if
   unstated: web heroes and slide covers lean Dark; body documents lean Light.
3. **Content type** — proposal, case study, report, capability deck, one-pager,
   landing page, etc. Drives which components and sections apply.
4. **Format** (paged only) — PDF, DOCX, or both.

If one of these is unclear and the choice would materially change what you make,
ask a single focused question. Otherwise state your assumption in one line and
proceed.

## Golden rules (medium-aware — never violated)

These are the locked, cross-medium invariants. Per-medium detail lives in each
adapter, but these always hold:

1. **Yellow is never body text.** `--prim-yellow-500` (`#FFD923`) is legible only
   on dark surfaces. On **dark**, yellow is the text accent. On **light**, never
   use yellow for text — use `--accent-gold-600` (`#C49A00`) for eyebrows/labels,
   and reserve yellow for fills, the signature curve, hex motif, and accents.
3. **The signature move is yellow Trirong italic** — used for hero statements,
   pull quotes, and the single most important outcome metric. Use it deliberately,
   not decoratively.
4. **Warm neutrals only.** Never pure `#000000` or `#FFFFFF`; never cold grey.
   Always ink-family (`#0D0D0A`…`#FAFAF6`) values.
5. **Type scales, never freezes.** Use the role tokens from `tokens.md` (`display`,
   `h1`…`overline`, `metric`) and let each medium resolve them to its own value.
   Never hardcode a point size as universal.
6. **Workshops · Labs · Studio** is the brand's structural language. Never
   relabel the stages (not "Strategy / POC / Execution").
7. **Every artifact is brand-identifiable in isolation.** Web: nav + footer.
   Slides: footer mark + page number on content slides. Documents: running
   header/footer with wordmark and page number on every page but the cover.
8. **Proof points come from `proof-points.md`** — never invented, never stretched,
   client names only where cleared for publication.
9. **Current year is dynamic.** Any copyright/date line uses the actual current
   year — never a hardcoded past year.
10. **One canonical contact.** Use the requester's email if known; otherwise
    `sales@intelligaia.com`. Site: `https://intelligaia.com/` (always hyperlink
    the site text where the medium allows) · LinkedIn:
    `https://www.linkedin.com/company/intelligaia/`.

## Assets

- **Logo:** the official mark is the `intelligaia` wordmark with the tagline
  *humanizing AI experiences*. Four bundled variants in `assets/`:
  - `intelligaia-logo-full-ink.png` — full lockup, for **light** surfaces
  - `intelligaia-logo-full-cream.png` — full lockup, for **dark** surfaces
  - `intelligaia-logo-wordmark-ink.png` — wordmark only, light surfaces (nav, footers, compact placements)
  - `intelligaia-logo-wordmark-cream.png` — wordmark only, dark surfaces

  Rule: never place the ink logo on a dark surface or the cream logo on a light
  one. Use the **full lockup** on covers/hero and the **wordmark** in nav and
  footers. `assets/intelligaia-logo-source.svg` is the original supplied file
  (black, light-surface only). The source is a raster lockup, so prefer the
  wordmark variant at small sizes and avoid scaling the full lockup beyond ~320px
  wide; request a vector master if large/print-critical placement is needed.
- **Fonts:** Trirong (display/serif), Raleway (body/sans), Azeret Mono (mono).
  Web loads them from Google Fonts. **Slides and PDF must embed or supply the
  fonts** — see the adapters — because the render machine (e.g. PowerPoint, a
  client's PDF viewer) will substitute them otherwise.
- **Hex motif & signature curve** are generated in code (SVG), so no image
  bundle is required — see `tokens.md` and `components.md`.

## Identity in one paragraph

Intelligaia is an AI-centred design and engineering firm that takes AI
proofs-of-concept to production-ready solutions for enterprise — owning the
complete outcome from first Workshop to final deployment, across the
Workshops → Labs → Studio model. Founders: Sandeep Chauhan (Co-Founder, VP
Strategy) and Rajiv Kaul (Co-Founder, Design Lead). The design posture is
**precise, structured, outcome-first**: dense enough to be credible, airy enough
to be read. The full voice, services, and proof live in the core references —
read them before writing a word of copy.
