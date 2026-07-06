# Adapter: Slides (v2)

For presentations, pitch decks, and capability decks. **16:9 widescreen** (13.333 × 7.5 in).

## Production method
Build with **pptxgenjs**, then embed brand fonts with `scripts/embed_pptx_fonts.py`. Start from
`examples/build_deck.js`.

```bash
NODE_PATH=$(npm root -g) node build_deck.js
python3 scripts/embed_pptx_fonts.py Intelligaia-deck.pptx
```

## v2 deltas from v1

1. **Title slide is light by default, not dark.** Use the dark title slide only when the deck is
   explicitly meant to open dramatically (a keynote, a launch) or the user asks for it. Default
   layout:
   - Light background (`CREAM`), ink wordmark top-left, gold overline, Trirong title (ink, one
     gold-italic accent phrase), ink-500 lead. Optional light hex watermark (`stroke:INK900,
     transparency:92`) or a custom industry illustration instead.
   - Dark variant (opt-in): cream wordmark, yellow overline, yellow-italic accent, ink-300 lead,
     faint yellow hex outline top-right — same as v1's title slide.
2. **Footer stays a thin single line** — wordmark + mono page number, unchanged from v1.
3. **New accent tokens available for charts/illustration:**
```js
const OR="FF8A3D", BLU="2E86DE", PUR="9350C4"; // 500-step anchors; full scales in tokens.md
```
4. **Sandwich pattern is now "light unless a dark moment is earned"**: a deck can be all-light
   content slides with a single dark closer for the CTA — dark is a deliberate accent, not the
   default cover.

## Tokens (paste into the build script)
```js
const YEL="FFD923", GOLD="C49A00", INK="0D0D0A", INK900="1A1916",
      INK500="6B6B62", INK300="AEAE9F", INK100="E6E5DC", CREAM="FAFAF6", GRAPHITE="2A2A24";
const SERIF="Trirong", SANS="Raleway", MONO="Azeret Mono";
```
Point sizes: display 54 · metric 60-66 · h1/section 40 · h2 28 · h3 20 · lead 22 · body 18 · small
14 · overline 12. Safe area: 0.5in from every edge.

## Fonts — the #1 slide failure, handled
Font names in a `.pptx` are rendered by the viewer's PowerPoint. Always run
`embed_pptx_fonts.py`. Embedded fonts are ignored by Google Slides / some LibreOffice builds — fall
back to Cambria/Calibri/Consolas if the deck is destined there.

## Forbidden on slides
No accent stripes/colour bars/underlines beneath titles. No cream/beige default backgrounds used
as an all-slide wash without intent. Don't centre body text. Every slide carries a visual element
(a real one — chart, table, illustration — never a placeholder box).

## QA
```bash
python /mnt/skills/public/pptx/scripts/office/soffice.py --headless --convert-to pdf deck.pptx
rm -f slide-*.jpg && pdftoppm -jpeg -r 150 deck.pdf slide && ls -1 "$PWD"/slide-*.jpg
```
