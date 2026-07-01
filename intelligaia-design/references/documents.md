# Adapter: Documents (paged)

For proposals, RFP responses, case studies, capability briefs, reports,
credentials, and one-pagers. **US Letter (8.5 × 11 in), portrait.** Two tiers:
**PDF** (designed, client-facing — primary) and **DOCX** (editable,
content-faithful).

---

## Tier 1 — PDF (designed)

### Production method
Author **HTML + CSS** and render with **WeasyPrint** (`pip install weasyprint
--break-system-packages`). This shares almost the entire stylesheet with the web
adapter — same tokens, same components — differing only in `@page` rules and a
paged (not fluid) type scale. Start from `examples/pdf-sample.html`.

```python
from weasyprint import HTML
HTML('proposal.html').write_pdf('proposal.pdf')
```
> ⚠️ Never let a PowerPoint→PDF conversion write to the same filename as a
> WeasyPrint document PDF — the slide export is landscape and will silently
> overwrite it. Give each its own name.

### Fonts — embed via @font-face (don't rely on system install)
Point at the bundled TTFs so the PDF is correct on any machine:
```css
@font-face{font-family:'Trirong';src:url('../assets/fonts/Trirong-Regular.ttf');font-weight:400}
@font-face{font-family:'Trirong';src:url('../assets/fonts/Trirong-Italic.ttf');font-weight:400;font-style:italic}
@font-face{font-family:'Trirong';src:url('../assets/fonts/Trirong-SemiBold.ttf');font-weight:600}
@font-face{font-family:'Raleway';src:url('../assets/fonts/Raleway-Regular.ttf');font-weight:400}
@font-face{font-family:'Raleway';src:url('../assets/fonts/Raleway-SemiBold.ttf');font-weight:600}
@font-face{font-family:'Raleway';src:url('../assets/fonts/Raleway-Bold.ttf');font-weight:700}
@font-face{font-family:'Raleway';src:url('../assets/fonts/Raleway-Italic.ttf');font-weight:400;font-style:italic}
@font-face{font-family:'Azeret Mono';src:url('../assets/fonts/AzeretMono-Regular.ttf');font-weight:400}
@font-face{font-family:'Azeret Mono';src:url('../assets/fonts/AzeretMono-Medium.ttf');font-weight:500}
```

### Page setup — US Letter, running chrome
```css
@page{
  size:Letter; margin:18mm 18mm 20mm 18mm;
  @top-left{ content:element(runhead); }
  @bottom-left{ content:element(runfoot); }                 /* contact + linked site */
  @bottom-right{ content:"Page " counter(page) " / " counter(pages);
    font-family:'Azeret Mono',monospace; font-size:7pt; color:#6B6B62; }
}
@page:first{ margin:0; @top-left{content:none} @bottom-left{content:none} @bottom-right{content:none} }
```
- **Cover** = a full-bleed element `width:215.9mm; height:279.4mm; margin:0` on a
  dark surface, `page-break-after:always`; hex `<svg>` at opacity .07; cream full
  lockup; overline; Trirong headline (one yellow-italic accent); muted lead; a meta
  line (`Prepared for … · Confidential`) bottom-left.
- **Type (print pt):** cover h1 40 · page-title/h1 30 · h2 22 · h3 15 · lead 13 ·
  body 10.5 (lh 1.55) · small 9 · overline 8 · metric 42–48.

### WeasyPrint quirks (these cost time if unknown)
- Running elements (`position:running(name)`) **ignore `width:100%`** — give the
  running header an **explicit width** (`179.9mm`, the content width) and use
  `display:table` + `display:table-cell` to push the title right. Flexbox does not
  lay out reliably inside running elements.
- Page numbers must come from `counter(page)`/`counter(pages)` in a **margin box**;
  they can't live in a running element.
- To get a **clickable link** in the footer, put the `<a href>` inside a running
  element (`.runfoot`) shown via `@bottom-left{content:element(runfoot)}` — links in
  margin-box `content:` strings are not clickable. WeasyPrint emits a real PDF link
  annotation. The site text is styled gold (`--accent-gold-600`).
- Inline `<svg>` for the hex motif needs explicit `width:100%;height:100%`.

### Running header / footer markup (placed once at top of `<body>`)
```html
<div class="runhead"><span class="wm"><img class="rh-logo" src="../assets/intelligaia-logo-wordmark-ink.png"></span><span class="title">Document Title</span></div>
<div class="runfoot">sales@intelligaia.com&nbsp;&nbsp;·&nbsp;&nbsp;<a href="https://intelligaia.com/">intelligaia.com</a></div>
```
```css
.runhead{position:running(runhead);display:table;width:179.9mm;table-layout:fixed;font-size:8pt;color:#6B6B62;border-bottom:.5pt solid #E6E5DC;padding-bottom:3pt}
.runhead .wm{display:table-cell;text-align:left;vertical-align:bottom} .rh-logo{height:11pt}
.runhead .title{display:table-cell;text-align:right;vertical-align:bottom}
.runfoot{position:running(runfoot);font-family:'Azeret Mono',monospace;font-size:7pt;color:#6B6B62}
.runfoot a{color:#C49A00;text-decoration:none}
```
All other component CSS (prose, pullquote, brand-list, table, metric-band) is the
web stylesheet with px swapped for pt — see `examples/pdf-sample.html`.

### Length / pagination
Keep related blocks together with `page-break-inside:avoid` on the metric band and
table; tune body length so a section's signature block (metric/pull quote) doesn't
strand a near-empty page.

---

## Tier 2 — DOCX (editable, content-faithful)
When the client needs to edit or track-change, produce a `.docx` via the **docx
skill** (read `/mnt/skills/public/docx/SKILL.md` first). DOCX is **content-faithful,
not pixel-faithful**: structure, hierarchy, tables, and brand fonts are preserved;
the dramatic visuals (full-bleed dark cover, signature curve, hex field, dark
metric band) are simplified or dropped, or dropped in as a **static PNG** exported
from the PDF/HTML where they matter.

Mapping to Word styles:
- Headings → **Trirong** (Title/H1/H2/H3); body → **Raleway** 10.5–11pt; captions /
  table headers / eyebrows → **Azeret Mono**, uppercase, tracked.
- Colours from `tokens.md`: ink-900 body, gold-600 eyebrows, yellow-500 only as
  fills/rules (never body text), warm-cream page where the platform allows.
- Page size **Letter**, ~18mm margins; running header (wordmark + title) and a
  single-line footer (`sales@intelligaia.com` · `intelligaia.com` hyperlinked · page
  number).
- Tables: mono uppercase header, hairline rows, bold first column, no vertical
  rules.
Fonts in DOCX rely on the recipient having them (Word doesn't reliably embed via
the library path) — note the safe fallbacks (Cambria / Calibri / Consolas) if the
recipient may lack them, or deliver the matching PDF alongside for fidelity.
