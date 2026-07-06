# Intelligaia Design Skill (v2)

Universal design system for producing Intelligaia-branded output across web, slides (16:9), and
paged documents (PDF/DOCX). This is a refinement of the original skill, addressing usability
feedback — see "What changed in v2" below.

**Works best in Claude** — import `intelligaia-design.skill` directly. For Cursor and other tools,
use this folder as-is (`SKILL.md` at the root).

## Quick start

| Goal | Read | Start from |
|------|------|------------|
| Website or landing page | `references/web.md` | `examples/web-sample.html` (self-contained) or `examples/web-page/` (template + `styles.css`) |
| Presentation / deck | `references/slides.md` | `examples/build_deck.js` (pptxgenjs) or `examples/slide/` (HTML preview) |
| Proposal, case study, report | `references/documents.md` | `examples/pdf-sample.html` (self-contained) or `examples/document/` (template + `styles.css`) |

Always read the core references first: `tokens.md`, `voice.md`, `proof-points.md`, `components.md`.

## What changed in v2

1. **Covers default to light, not black.** Every example and adapter now defaults to a cream
   (`theme: light`) cover — printable, not an all-black page. Dark covers are opt-in: use them for
   a web hero, a title slide, or when explicitly requested.
2. **Thinner, capped headers/footers.** Web nav/footer capped at 64px with a 1px hairline; print
   running header/footer capped at ~14mm (~5% of an 11in page) with a 0.5pt hairline — never a
   heavy dark band.
3. **Three new accent colour families** — orange, blue, purple — alongside the existing yellow/ink
   scale, for charts, tags, and illustration variety. See `tokens.md` §1b.
4. **Illustration freedom.** The hex tessellation is one motif option, not mandatory. Build
   client/industry-specific geometric illustrations instead where it fits — see `components.md` §14b.
5. **Workshops → Labs → Studio is available language, not a forced structure.** Use it when
   describing an actual staged engagement; don't scaffold every document around it.
6. **No 3BD references** anywhere in this package.

## Samples

The `samples/` folder contains finished example outputs:
- `Intelligaia-web-sample.html` — responsive web page (light theme, light cover)
- `Intelligaia-document-sample.pdf` — US Letter document (build from `examples/pdf-sample.html`)
- `Intelligaia-deck-sample.pptx` — 16:9 presentation (build from `examples/build_deck.js`)

## Rebuilding the Claude package

```bash
cd intelligaia-design
zip -r intelligaia-design.skill . -x "*.DS_Store"
```
Then re-import the updated `.skill` file in Claude.
