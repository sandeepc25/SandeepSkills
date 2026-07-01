# Adapter: Slides

For presentations, pitch decks, and capability decks. **16:9 widescreen**
(13.333 × 7.5 in).

## Production method
Build with **pptxgenjs** (`npm install -g pptxgenjs`; `NODE_PATH=$(npm root -g)`),
then **embed the brand fonts** into the `.pptx` with `scripts/embed_pptx_fonts.py`.
Start from `examples/build_deck.js` and adapt. QA by converting to images (see
below) and inspecting with fresh eyes.

```bash
NODE_PATH=$(npm root -g) node build_deck.js          # writes Intelligaia-deck.pptx
python3 scripts/embed_pptx_fonts.py Intelligaia-deck.pptx   # -> *-embedded.pptx
```

## Fonts — the #1 slide failure, handled
Font names written into a `.pptx` are rendered by the **viewer's** PowerPoint, not
the build machine. If Trirong/Raleway/Azeret aren't installed there, they get
substituted — the deck looks wrong on the client's screen. **Always run
`embed_pptx_fonts.py`** so the fonts travel inside the file (regular/bold/italic
for Trirong & Raleway, regular/medium for Azeret). It sets `embedTrueTypeFonts="1"`
and adds the TTFs from `assets/fonts/` as font parts.

Caveat: embedded fonts display in PowerPoint (Windows/Mac) but are ignored by
Google Slides and some LibreOffice builds. If a deck is destined for Google
Slides, either have the recipient install the fonts, or fall back to safe
substitutes — serif **Cambria**, sans **Calibri**, mono **Consolas** — keeping the
exact sizes/colours from `tokens.md`.

## Tokens (paste into the build script)
```js
const YEL="FFD923", GOLD="C49A00", INK="0D0D0A", INK900="1A1916",
      INK500="6B6B62", INK300="AEAE9F", INK100="E6E5DC", CREAM="FAFAF6", GRAPHITE="2A2A24";
const SERIF="Trirong", SANS="Raleway", MONO="Azeret Mono";   // colours are hex without '#'
```
Slide point sizes (from the `tokens.md` scale, 16:9 column): display 54 · metric
60–66 · h1/section 40 · h2 28 · h3 20 · lead 22 · body 18 · small 14 · overline 12.
Safe area: 0.5in from every edge.

## Layout & motif
- **Title slide (dark):** full **cream** lockup top-left (~2.3in); overline (mono,
  yellow, charSpacing 3); Trirong headline with one yellow-italic accent run; lead
  in ink-300; faint hex outline shapes (`ShapeType.hexagon`, no fill, yellow line,
  `transparency:82`) top-right. Footer = slide number only.
- **Content slide (light):** gold overline; Trirong title; body left; table or
  cards right; metric band across the bottom. Footer = wordmark-ink + number.
- **Sandwich** the deck: dark title + dark closer, light content between.

## Key helpers (see `examples/build_deck.js` for full source)
- `footer(slide,n,dark,withLogo)` — wordmark image (cream on dark / ink on light)
  bottom-left + mono number bottom-right.
- **Headline with accent:** rich-text runs —
  `[{text:"From proof-of-concept to ",options:{color:CREAM}},{text:"production-ready.",options:{color:YEL,italic:true}}]`.
- **Metric band:** dark `roundRect` (`rectRadius:0.08`) + 48pt Trirong italic
  yellow number + mono `OUTCOME` label + ink-300 description.
- **Hex bullets:** small filled `ShapeType.hexagon` (`fill:{color:YEL}`,
  `rotate:90`) beside each text line — keeps bullets yellow (PowerPoint can't colour
  list bullets independently of text).
- **Table:** `addTable` with per-cell bottom borders only — header cells
  `{pt:1.5,color:INK900}`, body cells `{pt:0.5,color:INK100}`; header text mono
  ink-500; first column bold.

## Forbidden on slides (also see SKILL.md golden rules)
No accent stripes / colour bars / underlines beneath titles (AI-slide tells). No
cream/beige default backgrounds — use cream only as the deliberate light theme.
Don't centre body text. Every slide carries a visual element. Never let text
overflow its box.

## QA
```bash
python /mnt/skills/public/pptx/scripts/office/soffice.py --headless --convert-to pdf deck.pptx
rm -f slide-*.jpg && pdftoppm -jpeg -r 150 deck.pdf slide && ls -1 "$PWD"/slide-*.jpg
```
Check text fits its box, contrast, alignment, no leftover placeholder. Fix once,
re-verify, stop. (LibreOffice renders the installed fonts, so the QA preview is a
good proxy even though the *embedding* itself only matters on the recipient's
machine.)
