# Adapter: Documents (paged) — v2

For proposals, RFP responses, case studies, capability briefs, reports, credentials, one-pagers.
**US Letter (8.5 × 11 in), portrait.** Two tiers: PDF (primary) and DOCX (editable).

---

## Tier 1 — PDF (designed)

### Production method
Author HTML + CSS, render with **WeasyPrint**:
```python
from weasyprint import HTML
HTML('proposal.html').write_pdf('proposal.pdf')
```

### Fonts — embed via @font-face
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

### v2 — Page setup: light cover by default, thin running chrome
```css
@page{
  size:Letter; margin:18mm 18mm 20mm 18mm;
  @top-left{ content:element(runhead); }
  @bottom-left{ content:element(runfoot); }
  @bottom-right{ content:"Page " counter(page) " / " counter(pages);
    font-family:'Azeret Mono',monospace; font-size:7pt; color:#6B6B62; }
}
@page:first{ margin:0; @top-left{content:none} @bottom-left{content:none} @bottom-right{content:none} }

/* v2: cover defaults to the LIGHT surface — never all-black by default */
.cover{
  position:relative; width:215.9mm; height:279.4mm; margin:0; padding:40mm 28mm; overflow:hidden;
  page-break-after:always;
  background:#FAFAF6; color:#1A1916; /* light default */
}
.cover .overline{color:#C49A00}
.cover h1{color:#0D0D0A}
.cover h1 em{color:#C49A00}
.cover .lead{color:#6B6B62}
/* Opt-in dark cover — use ONLY when explicitly requested */
.cover.dark{background:#0D0D0A;color:#FAFAF6}
.cover.dark .overline{color:#FFD923}
.cover.dark h1{color:#FAFAF6}
.cover.dark h1 em{color:#FFD923}
.cover.dark .lead{color:#AEAE9F}
```

### v2 — Running header/footer: thinner, capped
```css
.runhead{
  position:running(runhead); display:table; width:179.9mm; table-layout:fixed;
  font-size:8pt; color:#6B6B62;
  border-bottom:.5pt solid #E6E5DC;   /* was already thin — cap below is the v2 addition */
  padding-bottom:3pt; max-height:14mm; /* ~5% of an 11in page */
}
.runhead .wm{display:table-cell;text-align:left;vertical-align:bottom} .rh-logo{height:11pt}
.runhead .title{display:table-cell;text-align:right;vertical-align:bottom}
.runfoot{position:running(runfoot);font-family:'Azeret Mono',monospace;font-size:7pt;color:#6B6B62}
.runfoot a{color:#C49A00;text-decoration:none}
```

### WeasyPrint quirks (unchanged from v1 — still true)
- Running elements ignore `width:100%` — give the running header an explicit width and use
  `display:table`/`table-cell`.
- Page numbers must come from `counter(page)`/`counter(pages)` in a margin box.
- A clickable footer link needs `<a href>` inside the running element, not a margin-box string.
- Inline `<svg>` for a hex motif needs explicit `width:100%;height:100%`.

### Illustration on the cover (v2)
Default the cover to no motif, or the hex watermark at low opacity (0.06–0.08). For a
client-specific proposal, swap in a simple SVG illustration built from shapes relevant to that
client's industry instead (see `components.md` §14b) — same z-index-0, background-only placement.

### Length / pagination
Keep related blocks together with `page-break-inside:avoid` on the metric band and table.

---

## Tier 2 — DOCX (editable, content-faithful)
Unchanged from v1: Trirong→Title/H1-H3, Raleway 10.5-11pt body, Azeret Mono captions/eyebrows.
Cover is simplified or dropped in as a static PNG exported from the PDF/HTML — export the **light**
cover by default now, not the dark one, unless a dark cover was explicitly built for this doc.
