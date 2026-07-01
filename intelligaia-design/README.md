# Intelligaia Design Skill

Universal design system for producing Intelligaia-branded output across web, slides (16:9), and paged documents (PDF/DOCX).

**Works best in Claude** — import `intelligaia-design.skill` directly. For Cursor and other tools, use this folder as-is (`SKILL.md` at the root).

## Quick start

| Goal | Read | Start from |
|------|------|------------|
| Website or landing page | `references/web.md` | `examples/web-sample.html` |
| Presentation / deck | `references/slides.md` | `examples/build_deck.js` |
| Proposal, case study, report | `references/documents.md` | `examples/pdf-sample.html` |

Always read the core references first: `tokens.md`, `voice.md`, `proof-points.md`, `components.md`.

## Samples

The `samples/` folder contains finished example outputs:

- `Intelligaia-web-sample.html` — responsive web page
- `Intelligaia-document-sample.pdf` — US Letter document
- `Intelligaia-deck-sample.pptx` — 16:9 presentation

## Rebuilding the Claude package

If you change files in this folder and need a fresh `.skill` file for Claude:

```bash
cd intelligaia-design
zip -r intelligaia-design.skill . -x "*.DS_Store"
```

Then re-import the updated `.skill` file in Claude.
