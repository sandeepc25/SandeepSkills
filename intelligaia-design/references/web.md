# Adapter: Web

For websites, landing pages, campaign pages, and web-embedded proposals.

## Production method
A **single self-contained HTML file** (artifact): all CSS inline in one `<style>`,
fonts from Google Fonts, logo inlined as a base64 data URI (or `assets/` path if
shipping a folder). No build step, no external stylesheet, no framework required.
Layout is **fluid and continuous-scroll** — type uses `clamp()`, never fixed px.
Start from `examples/web-sample.html` and adapt.

Responsive: content `max-width 1200px` (narrow column 720px), gutter
`clamp(1.25rem,4vw,3rem)`; nav links collapse and the metric band stacks below
~680px.

## Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Trirong:ital,wght@0,400;0,600;1,400;1,600&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Azeret+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Logo
Inline the wordmark as a data URI so the file stays portable, e.g.
`<img class="nav-logo-img" src="data:image/png;base64,…">` (wordmark-ink in nav,
wordmark-cream in footer). Base64-encode `assets/intelligaia-logo-wordmark-*.png`.
Use the full lockup only on a hero/cover. **Never** browser-storage APIs.

## Canonical stylesheet
Paste this whole block; it is generated from `tokens.md` and implements every
component in `components.md`. Do not reference classes that aren't defined here.

```css
:root{
  --prim-yellow-500:#FFD923; --prim-yellow-400:#FFE14D; --prim-yellow-200:#FFF1B3;
  --accent-gold-600:#C49A00;
  --prim-ink-950:#0D0D0A; --prim-ink-900:#1A1916; --prim-ink-700:#3A3930;
  --prim-ink-500:#6B6B62; --prim-ink-300:#AEAE9F; --prim-ink-100:#E6E5DC;
  --prim-ink-050:#F5F4EF; --prim-ink-000:#FAFAF6; --prim-graphite:#2A2A24; --prim-stone:#EDECE5;
  --status-link:#1A5FCC;
  --font-display:'Trirong',Georgia,'Times New Roman',serif;
  --font-body:'Raleway','Helvetica Neue',Arial,sans-serif;
  --font-mono:'Azeret Mono','SFMono-Regular',Menlo,monospace;
  --type-display:clamp(2.5rem,6vw,4.5rem); --type-metric:clamp(3rem,7vw,5.5rem);
  --type-h1:clamp(2rem,5vw,3.5rem); --type-h2:clamp(1.5rem,3.5vw,2.5rem);
  --type-h3:clamp(1.25rem,2vw,1.75rem); --type-h4:clamp(1.05rem,1.5vw,1.25rem);
  --type-lead:clamp(1.05rem,1.5vw,1.25rem);
  --sp-2:.5rem;--sp-3:.75rem;--sp-4:1rem;--sp-6:1.5rem;--sp-8:2rem;
  --sp-12:3rem;--sp-16:4rem;--sp-20:5rem;--sp-24:6rem;
  --radius-lg:14px;--radius-pill:9999px;
  --ease-out:cubic-bezier(0.16,1,0.3,1);
  --content-max:1120px;--gutter:clamp(1.25rem,4vw,3rem);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--font-body);font-size:16px;line-height:1.6;color:var(--prim-ink-900);background:var(--prim-ink-000);-webkit-font-smoothing:antialiased}
.wrap{max-width:var(--content-max);margin:0 auto;padding-inline:var(--gutter)}
h1,h2,h3{font-family:var(--font-display);font-weight:400;line-height:1.08;letter-spacing:-.02em;color:var(--prim-ink-950)}
em{font-style:italic}
a{color:var(--status-link)}
.overline{font-family:var(--font-mono);font-size:.6875rem;font-weight:500;letter-spacing:.16em;text-transform:uppercase}
.overline.on-light{color:var(--accent-gold-600)} .overline.on-dark{color:var(--prim-yellow-500)}

/* nav / running header */
.nav{position:sticky;top:0;z-index:50;background:rgba(250,250,246,.85);backdrop-filter:blur(10px);border-bottom:1px solid var(--prim-ink-100)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:56px;max-width:var(--content-max);margin:0 auto;padding-inline:var(--gutter)}
.nav-logo{display:flex;align-items:center;text-decoration:none}.nav-logo-img{height:24px;width:auto;display:block}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.9rem;font-weight:500;color:var(--prim-ink-900);text-decoration:none;transition:color var(--ease-out) .2s}
.nav-links a:hover{color:var(--accent-gold-600)}

/* buttons */
.btn{display:inline-flex;align-items:center;gap:.4rem;font-family:var(--font-body);font-weight:600;font-size:.9rem;padding:.6rem 1.25rem;border-radius:var(--radius-pill);text-decoration:none;border:1px solid transparent;cursor:pointer;transition:all var(--ease-out) .2s}
.btn-primary{background:var(--prim-ink-950);color:var(--prim-ink-000)}.btn-primary:hover{background:var(--prim-graphite)}
.btn-accent{background:var(--prim-yellow-500);color:var(--prim-ink-950)}.btn-accent:hover{background:var(--prim-yellow-400)}
.btn-ghost{border-color:rgba(255,255,255,.28);color:var(--prim-ink-000)}.btn-ghost:hover{background:rgba(255,255,255,.08)}
.btn-lg{padding:.85rem 1.6rem;font-size:1rem}

/* hero (dark) */
.hero{position:relative;background:var(--prim-ink-950);color:var(--prim-ink-000);overflow:hidden;padding-block:clamp(2.75rem,6vw,5rem)}
.hero .hexbg{position:absolute;inset:0;opacity:.07;pointer-events:none}
.hero-content{position:relative;z-index:1;max-width:46rem}
.hero h1{color:var(--prim-ink-000);font-size:var(--type-display);margin:var(--sp-6) 0}
.hero h1 em{color:var(--prim-yellow-500)}
.hero .lead{font-size:var(--type-lead);color:var(--prim-ink-300);max-width:40rem;margin-bottom:var(--sp-8)}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap}

/* sections + prose */
.section{padding-block:clamp(3.5rem,8vw,6rem)}
.section h2{font-size:var(--type-h2);margin:var(--sp-3) 0 var(--sp-8)}
.section h3{font-size:var(--type-h3);margin:var(--sp-12) 0 var(--sp-4)}
.prose{max-width:40rem}.prose p{margin-bottom:var(--sp-4)}
.lead-p{font-size:var(--type-lead);color:var(--prim-ink-900)}.muted{color:var(--prim-ink-500)}

/* pull quote */
.pullquote{font-family:var(--font-display);font-style:italic;font-size:clamp(1.4rem,3vw,2rem);line-height:1.3;color:var(--prim-ink-950);max-width:34rem;margin:var(--sp-12) 0;padding-left:var(--sp-6);border-left:3px solid var(--prim-yellow-500)}

/* hex bullet list */
.brand-list{list-style:none;max-width:40rem;margin-top:var(--sp-2)}
.brand-list li{position:relative;padding-left:1.6rem;margin-bottom:.7rem;line-height:1.5}
.brand-list li::before{content:"";position:absolute;left:0;top:.55em;width:9px;height:9px;background:var(--prim-yellow-500);clip-path:polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0% 50%)}

/* table */
.tbl{width:100%;max-width:42rem;border-collapse:collapse;margin-top:var(--sp-2);font-size:.95rem}
.tbl th{font-family:var(--font-mono);font-size:.7rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--prim-ink-500);text-align:left;padding:.6rem .75rem;border-bottom:2px solid var(--prim-ink-900)}
.tbl td{padding:.7rem .75rem;border-bottom:1px solid var(--prim-ink-100);vertical-align:top}
.tbl td:first-child{font-weight:600;color:var(--prim-ink-950)}.tbl tr:last-child td{border-bottom:none}

/* cards */
.grid-3{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:var(--sp-6)}
.card{background:var(--prim-ink-050);border:1px solid var(--prim-ink-100);border-radius:var(--radius-lg);padding:var(--sp-6)}
.card h4{font-family:var(--font-body);font-weight:600;font-size:var(--type-h4);margin-bottom:var(--sp-2);color:var(--prim-ink-950)}
.client-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0}
.client-box{border:1px solid var(--prim-ink-100);height:72px;display:flex;align-items:center;justify-content:center;font-weight:600;color:var(--prim-ink-700);margin:-0.5px}

/* metric band */
.metric-band{background:var(--prim-ink-950);color:var(--prim-ink-000);border-radius:var(--radius-lg);padding:clamp(2rem,5vw,3rem);margin-top:var(--sp-12);display:flex;align-items:center;gap:clamp(1.5rem,4vw,3rem);flex-wrap:wrap}
.metric{font-family:var(--font-display);font-style:italic;font-weight:400;font-size:var(--type-metric);line-height:1;color:var(--prim-yellow-500)}
.metric-label{max-width:22rem}
.metric-label .k{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--prim-yellow-500)}
.metric-label p{color:var(--prim-ink-300);margin-top:.4rem}

/* footer — single line */
.footer{background:var(--prim-ink-950);color:var(--prim-ink-300);padding-block:1.1rem}
.footer-line{display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap}
.footer-logo-img{height:18px;width:auto;display:block;opacity:.95}
.footer-meta{display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;font-size:.8rem}
.footer-meta a{color:var(--prim-ink-300);text-decoration:none}.footer-meta a:hover{color:var(--prim-yellow-500)}
.footer-meta #copy{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.05em;color:var(--prim-ink-500)}

@media(max-width:680px){.nav-links{display:none}.metric-band{flex-direction:column;align-items:flex-start}}
```

## Footer markup (dynamic year, linked site)
```html
<footer class="footer"><div class="wrap footer-line">
  <img class="footer-logo-img" src="…wordmark-cream…" alt="Intelligaia">
  <nav class="footer-meta">
    <a href="mailto:sales@intelligaia.com">sales@intelligaia.com</a>
    <a href="https://intelligaia.com/">intelligaia.com</a>
    <a href="https://www.linkedin.com/company/intelligaia/">LinkedIn</a>
    <span id="copy">© Intelligaia</span>
  </nav>
</div></footer>
<script>document.getElementById('copy').textContent="© "+new Date().getFullYear()+" Intelligaia";</script>
```

## Hex motif / signature curve
Use the SVG `<pattern>` and curve `<path>` from `tokens.md` §5. Place behind hero
content at z-index 0, opacity per surface. One motif treatment per hero.

## Interactive / AI-powered pages
For richer apps use a React artifact (Tailwind core utilities only) carrying the
same tokens, or the Anthropic API-in-artifacts pattern. Keep the type scale,
colour rules, logo rules, and single-line footer identical.
