# Tokens — the cross-medium core

This is the single source of truth for every visual value. Each token is given in
the forms each medium needs:

- **Web** — CSS custom property (hex / `rem` / `clamp`).
- **Slides** — `python-pptx` value (RGB tuple, point size, or inches).
- **Print** — US-Letter PDF/DOCX value (hex/RGB and point size).

If a value is identical across media (most colours), it is stated once.

---

## 1. Colour

Colour values are medium-independent — the same hex is used everywhere. For slides
(`python-pptx`) use `RGBColor(r, g, b)`; the RGB column gives the tuple.

### Yellow scale (brand accent)

| Token | Hex | RGB | Note |
|---|---|---|---|
| `--prim-yellow-900` | `#332900` | 51, 41, 0 | darkest |
| `--prim-yellow-800` | `#664F00` | 102, 79, 0 | |
| `--prim-yellow-700` | `#997800` | 153, 120, 0 | |
| `--prim-yellow-600` | `#CCA000` | 204, 160, 0 | |
| `--prim-yellow-500` | `#FFD923` | 255, 217, 35 | **★ brand anchor** |
| `--prim-yellow-400` | `#FFE14D` | 255, 225, 77 | hover / lift |
| `--prim-yellow-300` | `#FFE880` | 255, 232, 128 | |
| `--prim-yellow-200` | `#FFF1B3` | 255, 241, 179 | soft fill |
| `--prim-yellow-100` | `#FFF8D9` | 255, 248, 217 | |
| `--prim-yellow-050` | `#FFFDF0` | 255, 253, 240 | |

### Accent gold (legible accent text on LIGHT surfaces)

| Token | Hex | RGB | Use |
|---|---|---|---|
| `--accent-gold-600` | `#C49A00` | 196, 154, 0 | Eyebrows, overlines, small accent text **on light surfaces**, where yellow-500 would be illegible. Never use yellow-500 for text on light. |

### Ink scale (warm neutrals)

| Token | Hex | RGB | Note |
|---|---|---|---|
| `--prim-ink-950` | `#0D0D0A` | 13, 13, 10 | **★ warm black** — dark surface |
| `--prim-ink-900` | `#1A1916` | 26, 25, 22 | primary body text (light) |
| `--prim-ink-800` | `#28271F` | 40, 39, 31 | |
| `--prim-ink-700` | `#3A3930` | 58, 57, 48 | |
| `--prim-ink-600` | `#524F43` | 82, 79, 67 | |
| `--prim-ink-500` | `#6B6B62` | 107, 107, 98 | secondary text (light) |
| `--prim-ink-400` | `#8A8A7F` | 138, 138, 127 | |
| `--prim-ink-300` | `#AEAE9F` | 174, 174, 159 | muted text (dark) |
| `--prim-ink-200` | `#D2D1C5` | 210, 209, 197 | |
| `--prim-ink-100` | `#E6E5DC` | 230, 229, 220 | hairline (light); soft tagline (dark) |
| `--prim-ink-050` | `#F5F4EF` | 245, 244, 239 | card / recessed (light) |
| `--prim-ink-000` | `#FAFAF6` | 250, 250, 246 | **★ warm cream** — page surface |

### Special surfaces & status

| Token | Hex | RGB | Use |
|---|---|---|---|
| `--prim-graphite` | `#2A2A24` | 42, 42, 36 | card / hairline on dark |
| `--prim-stone` | `#EDECE5` | 237, 236, 229 | recessed light section |
| `--status-success` | `#1A7A3C` | 26, 122, 60 | |
| `--status-error` | `#C0392B` | 192, 57, 43 | |
| `--status-link` | `#1A5FCC` | 26, 95, 204 | links in body documents |

### Themes (semantic mapping)

Both themes use the same tokens; only the assignments differ.

| Semantic role | **Light** | **Dark** |
|---|---|---|
| Surface (page) | `--prim-ink-000` `#FAFAF6` | `--prim-ink-950` `#0D0D0A` |
| Surface (card/recessed) | `--prim-ink-050` `#F5F4EF` | `--prim-graphite` `#2A2A24` |
| Text (primary) | `--prim-ink-900` `#1A1916` | `--prim-ink-000` `#FAFAF6` |
| Text (secondary/muted) | `--prim-ink-500` `#6B6B62` | `--prim-ink-300` `#AEAE9F` |
| Eyebrow / accent text | `--accent-gold-600` `#C49A00` | `--prim-yellow-500` `#FFD923` |
| Hairline / divider | `--prim-ink-100` `#E6E5DC` | `--prim-graphite` `#2A2A24` |
| Italic tagline | `--prim-ink-900` `#1A1916` | `--prim-ink-100` `#E6E5DC` (soft cream — **not** yellow) |
| Fill accent (curve, hex, chips) | `--prim-yellow-500` `#FFD923` | `--prim-yellow-500` `#FFD923` |

### Colour pairing rules

- Yellow on ink-950 ✓ · ink-950 on yellow ✓ (CTAs, buttons).
- **Never** white-on-yellow or yellow-on-light-for-text. On yellow, text is
  `#0D0D0A`/`#1A1916` only.
- **Never** pure black/white; **never** cold grey.
- Data series on light pages: use ink + gold, not yellow-500 (illegible). Yellow
  series are fine on dark.

---

## 2. Typography

### Typefaces

| Role | Family | Web fallback | Slide/Doc fallback | Use |
|---|---|---|---|---|
| Display / serif | **Trirong** | Georgia, 'Times New Roman', serif | Georgia | Headlines, metrics, pull quotes — **especially italic** |
| Body / sans | **Raleway** | 'Helvetica Neue', Arial, sans-serif | Arial / Calibri | Body, UI, labels, nav, buttons |
| Mono | **Azeret Mono** | 'SFMono-Regular', Menlo, monospace | Consolas | Overlines, page numbers, data labels, technical tags |

**Web Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Trirong:ital,wght@0,400;0,600;1,400;1,600&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Azeret+Mono:wght@400;500&display=swap" rel="stylesheet" />
```
For slides/docs, load the fonts into the render environment when possible;
otherwise the fallbacks above keep the hierarchy intact.

### The fluid type scale (the heart of cross-medium)

One semantic scale, three concrete resolutions. **Always reference the role, never
the raw size.** Web resolves fluidly; slides and print resolve to fixed points
sized for their canvas (slides = 16:9 widescreen 13.333"×7.5"; print = US Letter
8.5"×11").

| Role token | Web (CSS `clamp`) | Slide pt (16:9) | Print pt (US Letter) | Font / weight |
|---|---|---|---|---|
| `display` | `clamp(2.5rem, 6vw, 4.5rem)` | 54 | 46 | Trirong 400 |
| `metric` ★ | `clamp(3rem, 7vw, 5.5rem)` | 66 | 48 | Trirong 400 **italic**, accent |
| `h1` | `clamp(2rem, 5vw, 3.5rem)` | 40 | 30 | Trirong 400 |
| `h2` | `clamp(1.5rem, 3.5vw, 2.5rem)` | 28 | 22 | Trirong 400 |
| `h3` | `clamp(1.25rem, 2vw, 1.75rem)` | 20 | 15 | Trirong 400 |
| `h4` | `clamp(1.05rem, 1.5vw, 1.25rem)` | 16 | 12 | Raleway 600 |
| `lead` | `clamp(1.05rem, 1.5vw, 1.25rem)` | 22 | 13 | Raleway 400 |
| `body` | `1rem` (16px) | 18 | 10.5 | Raleway 400 |
| `small` | `0.875rem` | 14 | 9 | Raleway 400 |
| `overline` | `0.6875rem` | 12 | 8 | Raleway 600 / Mono, caps |

### Type rules

- Display, H1–H3, metrics: **Trirong 400**. Italic Trirong = signature moment.
- H4 and UI: **Raleway 600**.
- Overlines/eyebrows: ALL CAPS, `letter-spacing: 0.16em`; colour = gold-600 on
  light, yellow-500 on dark.
- Line-height: headlines 1.05–1.2; body 1.5–1.6.
- Body line length: 60–70 characters.
- The outcome **metric** (Trirong italic, accent) is the single most dominant
  element on any page or slide it appears on. One per section, used deliberately.

### Line-height & tracking tokens (web)

```
--lh-tight: 1.05;  --lh-snug: 1.2;  --lh-normal: 1.35;  --lh-relaxed: 1.5;  --lh-loose: 1.65;
--ls-tight: -0.03em; --ls-snug: -0.015em; --ls-normal: 0; --ls-wide: 0.05em; --ls-wider: 0.1em; --ls-widest: 0.16em;
```

---

## 3. Spacing

One ratio, three units. 4px base. Web uses `rem`; slides/print use `pt`
(1px = 0.75pt). Section rhythm: `sp-20` standard, `sp-32` for major breaks.

| Token | rem (web) | px | pt (slide/print) |
|---|---|---|---|
| `--sp-1` | 0.25 | 4 | 3 |
| `--sp-2` | 0.5 | 8 | 6 |
| `--sp-3` | 0.75 | 12 | 9 |
| `--sp-4` | 1 | 16 | 12 |
| `--sp-6` | 1.5 | 24 | 18 |
| `--sp-8` | 2 | 32 | 24 |
| `--sp-12` | 3 | 48 | 36 |
| `--sp-16` | 4 | 64 | 48 |
| `--sp-20` | 5 | 80 | 60 |
| `--sp-24` | 6 | 96 | 72 |
| `--sp-32` | 8 | 128 | 96 |

**Paged margins (US Letter):** 0.75–1 in (54–72pt) body pages; full-bleed covers
and dividers ignore margins. **Slide safe margin:** 0.5 in from each edge.
**Web gutter:** `clamp(1.25rem, 4vw, 3rem)`; content max-width `1200px`
(narrow column `720px`).

---

## 4. Radius, shadow, motion (web-led)

These are primarily web tokens. Slides use flat fills (no shadows); print uses
hairlines, not shadows.

```
--radius-sm: 4px;  --radius-md: 8px;  --radius-lg: 14px;  --radius-xl: 20px;  --radius-pill: 9999px;

--shadow-sm: 0 2px 12px rgba(13,13,10,0.07);
--shadow-md: 0 6px 24px rgba(13,13,10,0.10);
--shadow-lg: 0 16px 48px rgba(13,13,10,0.13);

--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--dur-fast: 160ms; --dur-normal: 240ms; --dur-slow: 400ms;
```

- Cards: `--radius-lg`. Buttons/chips: `--radius-pill`.
- Slides & print: cards are hairline-framed rectangles (radius 0–4pt), no shadow.

---

## 5. The hex motif & signature curve (code-generated, no asset bundle)

### Hex clip-path (web)
```css
clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
```
Frame sizes: sm 32 · md 48 · lg 64 · xl 96 (px on web; equivalent pt on paged).

### Hex tessellation (SVG — reusable on web, or rasterised for slides/print)
```svg
<defs>
  <pattern id="hexPat" x="0" y="0" width="60" height="104" patternUnits="userSpaceOnUse">
    <polygon points="30,2 58,17 58,47 30,62 2,47 2,17" fill="none" stroke="#FFD923" stroke-width="1"/>
    <polygon points="30,54 58,69 58,99 30,114 2,99 2,69" fill="none" stroke="#FFD923" stroke-width="1"/>
    <polygon points="60,28 88,43 88,73 60,88 32,73 32,43" fill="none" stroke="#FFD923" stroke-width="1"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="url(#hexPat)" opacity="0.08"/>
```
Opacity: 0.06–0.08 on dark · 0.08–0.12 on yellow · 0.03–0.05 on light.
Stroke: `#FFD923` on dark · `#0D0D0A` on yellow/light.

### Signature yellow curve (cover element — Template-1 style)
A single large organic yellow shape behind the cover headline. Always z-index 0,
background only, never overlapping text.
```svg
<svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <path d="M0,620 C220,520 360,760 560,640 C760,520 880,700 1000,560 L1000,1000 L0,1000 Z"
        fill="#FFD923"/>
</svg>
```

### Motif rules
- Hex serves a structural purpose (frame, divider, watermark) — never confetti.
- Max two hex scales per page/slide.
- Never describe the motif with bee/hive language.
- Signature curve appears on covers only, one per document/deck.

---

## 6. Quick CSS `:root` block (web adapter pastes this)

The web adapter embeds the full token set inline (single-file artifact). The
canonical CSS block lives in `references/web.md` so it stays adjacent to the build
recipe; it is generated directly from the tables above.
