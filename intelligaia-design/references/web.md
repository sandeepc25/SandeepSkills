# Adapter: Web (v2)

For websites, landing pages, campaign pages, and web-embedded proposals.

## Production method
A single self-contained HTML file: all CSS inline, fonts from Google Fonts, logo inlined as base64
(or `assets/` path if shipping a folder). Fluid, continuous-scroll layout, `clamp()` type.

## Canonical stylesheet — v2 deltas from v1
Same structure as v1's `web.md`, with these changes:

1. **`.hero` defaults to the LIGHT theme**, not dark:
```css
.hero{position:relative;background:var(--prim-ink-000);color:var(--prim-ink-900);overflow:hidden;padding-block:clamp(2.75rem,6vw,5rem)}
.hero h1{color:var(--prim-ink-950);font-size:var(--type-display);margin:var(--sp-6) 0}
.hero h1 em{color:var(--accent-gold-600)}
.hero .lead{color:var(--prim-ink-500)}
/* Opt-in dark hero — apply only when explicitly requested */
.hero.dark{background:var(--prim-ink-950);color:var(--prim-ink-000)}
.hero.dark h1{color:var(--prim-ink-000)}
.hero.dark h1 em{color:var(--prim-yellow-500)}
.hero.dark .lead{color:var(--prim-ink-300)}
```

2. **Nav/footer are capped and hairline**, not just bordered:
```css
.nav{max-height:var(--chrome-max-height-web);border-bottom:var(--chrome-hairline) solid var(--prim-ink-100)}
```

3. **New accent tokens are available for use** in chart/illustration markup:
```css
:root{
  --accent-orange-500:#FF8A3D; --accent-blue-500:#2E86DE; --accent-purple-500:#9350C4;
  /* full 900-050 scales in tokens.md */
}
```

Everything else — buttons, sections, pull quote, brand list, table, metric band, footer, hex
motif SVG — is unchanged from v1; see `examples/web-sample.html` for the full working stylesheet.

## Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Trirong:ital,wght@0,400;0,600;1,400;1,600&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Azeret+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Logo
Inline the wordmark as a data URI. Full lockup only on a hero/cover (light-surface ink lockup by
default now that the hero is light; use the cream lockup only inside an opt-in dark hero).

## Illustration in the hero
Default: no motif, or the hex watermark at low opacity. For a client-specific page, replace it with
a simple SVG illustration built from shapes relevant to that client's industry (see
`components.md` §14b) — placed at z-index 0, never over text.

## Interactive / AI-powered pages
React artifact carrying the same tokens; keep the type scale, colour rules, logo rules, and
single-line footer identical.
