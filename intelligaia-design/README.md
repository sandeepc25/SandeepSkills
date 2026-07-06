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

Finished v2 outputs in `samples/` — regenerate anytime:

```bash
bash scripts/regenerate_samples.sh
```

Requires Node.js, `pptxgenjs` (installed on demand), and **WeasyPrint** for PDF export.

**PDF prerequisites** (macOS): `brew install weasyprint` (pulls in Pango/Cairo).
On first run the script also creates `intelligaia-design/.venv` and installs the Python
`weasyprint` package if needed.

| File | Source |
|------|--------|
| `Intelligaia-web-sample.html` | `examples/web-page/Capability Web Page.html` |
| `Intelligaia-document-sample.pdf` | `examples/document/Case Study Document.html` via WeasyPrint (`scripts/render_pdf.py`) |
| `Intelligaia-deck-sample.pptx` | `examples/build_deck.js` + `scripts/embed_pptx_fonts.py` |

## Rebuilding the Claude package

```bash
bash scripts/build_skill.sh
```

This deletes any existing `.skill` file first (required — `zip -r` updates leave stale
paths and Claude will reject archives with more than one `SKILL.md`). Then re-import in Claude.
