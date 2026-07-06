# Tokens — the cross-medium core (v2)

Single source of truth for every visual value, in web/slide/print forms. v2 adds three accent
colour families and explicit chrome-size limits — everything else is unchanged from v1 unless noted.

---

## 1. Colour

### 1a. Yellow scale (brand accent) — unchanged

| Token | Hex | RGB | Note |
|---|---|---|---|
| `--prim-yellow-900` | `#332900` | 51,41,0 | darkest |
| `--prim-yellow-800` | `#664F00` | 102,79,0 | |
| `--prim-yellow-700` | `#997800` | 153,120,0 | |
| `--prim-yellow-600` | `#CCA000` | 204,160,0 | |
| `--prim-yellow-500` | `#FFD923` | 255,217,35 | **★ brand anchor** |
| `--prim-yellow-400` | `#FFE14D` | 255,225,77 | hover/lift |
| `--prim-yellow-300` | `#FFE880` | 255,232,128 | |
| `--prim-yellow-200` | `#FFF1B3` | 255,241,179 | soft fill |
| `--prim-yellow-100` | `#FFF8D9` | 255,248,217 | |
| `--prim-yellow-050` | `#FFFDF0` | 255,253,240 | |

`--accent-gold-600` (`#C49A00`) — the legible stand-in for yellow-500 as TEXT on light surfaces.

### 1b. NEW — Orange / Blue / Purple accent families

Added in v2 to fix a palette that was previously almost entirely yellow + black. Use the 500 step
as the anchor for chart series, tags, and illustration fills; darker steps for text on tinted
fields.

| Token | Hex | Use |
|---|---|---|
| `--accent-orange-500` | `#FF8A3D` | warmth/energy accent — rotated toward red from the brand yellow |
| `--accent-blue-500` | `#2E86DE` | cool/technical accent — data, AI/tech motifs |
| `--accent-purple-500` | `#9350C4` | depth accent — secondary data series, illustration variety |

Full 900→050 scales for each (same step pattern as yellow/ink):

```
--accent-orange-900:#4A2000  --accent-orange-800:#7A3400  --accent-orange-700:#A54700
--accent-orange-600:#D35F00  --accent-orange-500:#FF8A3D  --accent-orange-400:#FFA366
--accent-orange-300:#FFBD91  --accent-orange-200:#FFD6BD  --accent-orange-100:#FFEBDC
--accent-orange-050:#FFF6EE

--accent-blue-900:#071B33  --accent-blue-800:#0D3159  --accent-blue-700:#144A80
--accent-blue-600:#1D66AD  --accent-blue-500:#2E86DE  --accent-blue-400:#5CA2E8
--accent-blue-300:#8FC1EF  --accent-blue-200:#C2DFF7  --accent-blue-100:#E2F0FC
--accent-blue-050:#F1F8FE

--accent-purple-900:#251033  --accent-purple-800:#3D1B54  --accent-purple-700:#562775
--accent-purple-600:#723797  --accent-purple-500:#9350C4  --accent-purple-400:#AC78D2
--accent-purple-300:#C6A2E0  --accent-purple-200:#E0CDEF  --accent-purple-100:#F0E6F7
--accent-purple-050:#F8F2FB
```

Note: these are a reasoned extrapolation harmonised with the existing warm ink/yellow palette, not
read directly off intelligaia.com's live illustrations — tune them if you get real site swatches.

### 1c. Ink scale (warm neutrals) — unchanged

| Token | Hex | Note |
|---|---|---|
| `--prim-ink-950` | `#0D0D0A` | ★ warm black — dark surface |
| `--prim-ink-900` | `#1A1916` | primary body text (light) |
| `--prim-ink-800` | `#28271F` | |
| `--prim-ink-700` | `#3A3930` | |
| `--prim-ink-600` | `#524F43` | |
| `--prim-ink-500` | `#6B6B62` | secondary text (light) |
| `--prim-ink-400` | `#8A8A7F` | |
| `--prim-ink-300` | `#AEAE9F` | muted text (dark) |
| `--prim-ink-200` | `#D2D1C5` | |
| `--prim-ink-100` | `#E6E5DC` | hairline (light); soft tagline (dark) |
| `--prim-ink-050` | `#F5F4EF` | card/recessed (light) |
| `--prim-ink-000` | `#FAFAF6` | ★ warm cream — page surface |

`--prim-graphite` `#2A2A24` (card/hairline on dark) · `--prim-stone` `#EDECE5` (recessed light).

### Status
`--status-success` `#1A7A3C` · `--status-error` `#C0392B` · `--status-link` `#1A5FCC`

### Themes — semantic mapping (light default, dark opt-in)

| Semantic role | **Light (default)** | **Dark (opt-in)** |
|---|---|---|
| Surface (page) | `--prim-ink-000` | `--prim-ink-950` |
| Surface (card) | `--prim-ink-050` | `--prim-graphite` |
| Text (primary) | `--prim-ink-900` | `--prim-ink-000` |
| Text (secondary) | `--prim-ink-500` | `--prim-ink-300` |
| Eyebrow/accent | `--accent-gold-600` | `--prim-yellow-500` |
| Hairline | `--prim-ink-100` | `--prim-graphite` |
| Italic tagline | `--prim-ink-900` | `--prim-ink-100` (never yellow) |

### Colour pairing rules
- Yellow on ink-950 ✓ · ink-950 on yellow ✓. Never white-on-yellow, never yellow-text-on-light.
- Never pure black/white; never cold grey.
- Data series on light pages: ink/gold/orange/blue/purple — not yellow-500 (illegible). Yellow
  series are fine on dark surfaces only.

---

## 2. Typography — unchanged from v1

Trirong (display/serif) · Raleway (body/sans) · Azeret Mono (mono). Fluid role scale:

| Role | Web `clamp()` | Slide pt (16:9) | Print pt (Letter) |
|---|---|---|---|
| `display` | `clamp(2.5rem,6vw,4.5rem)` | 54 | 46 |
| `metric` ★ | `clamp(3rem,7vw,5.5rem)` | 66 | 48 |
| `h1` | `clamp(2rem,5vw,3.5rem)` | 40 | 30 |
| `h2` | `clamp(1.5rem,3.5vw,2.5rem)` | 28 | 22 |
| `h3` | `clamp(1.25rem,2vw,1.75rem)` | 20 | 15 |
| `h4` | `clamp(1.05rem,1.5vw,1.25rem)` | 16 | 12 |
| `lead` | `clamp(1.05rem,1.5vw,1.25rem)` | 22 | 13 |
| `body` | `1rem` | 18 | 10.5 |
| `small` | `0.875rem` | 14 | 9 |
| `overline` | `0.6875rem` | 12 | 8 |

Display/H1-H3/metrics: Trirong 400 (italic = signature moment). H4/UI: Raleway 600. Overlines: ALL
CAPS, `letter-spacing:.16em`, gold-600 on light / yellow-500 on dark. Line-height: headlines
1.05-1.2, body 1.5-1.6. Body measure: 60-70 characters.

---

## 3. Spacing — unchanged

4px base, `--sp-1`(4px) … `--sp-32`(128px). Paged margins 0.75-1in body pages. Slide safe margin
0.5in. Web gutter `clamp(1.25rem,4vw,3rem)`, content max-width 1200px (narrow 720px).

---

## 4. Radius, shadow, motion, and NEW chrome limits

```
--radius-sm:4px  --radius-md:8px  --radius-lg:14px  --radius-xl:20px  --radius-pill:9999px
--shadow-sm:0 2px 12px rgba(13,13,10,.07)
--shadow-md:0 6px 24px rgba(13,13,10,.10)
--shadow-lg:0 16px 48px rgba(13,13,10,.13)
--ease-out:cubic-bezier(.16,1,.3,1)  --ease-spring:cubic-bezier(.34,1.56,.64,1)
--dur-fast:160ms  --dur-normal:240ms  --dur-slow:400ms
```

**NEW — chrome limits** (fixes the "too much black" complaint):
```
--chrome-hairline: 1px          /* web nav/footer rule weight */
--chrome-hairline-print: 0.5pt  /* print running header/footer rule weight */
--chrome-max-height-web: 64px   /* web nav/footer cap */
--chrome-max-height-print: 14mm /* print running header/footer cap, ~5% of an 11in page */
```
Cards: `radius-lg`. Buttons/chips: `radius-pill`. Slides/print: hairline-framed rects, no shadow.

---

## 5. Hex motif & signature curve — now optional, not mandatory

Unchanged mechanically (SVG `<pattern>`, opacity 0.06–0.12, max two scales/surface — see the code
block in the v1 tokens), but **treat it as one motif option, not a forced default.** For a
client-specific document, prefer a simple geometric illustration built from shapes relevant to that
client's industry (circuit paths, route lines, layered strata, chart motifs) using the accent
colour families above — see `components.md` §14b.
