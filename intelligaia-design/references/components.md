# Components — the shared vocabulary

Every Intelligaia artifact is composed from this fixed set of components. Each is
defined **once** here, then expressed three ways: a web CSS class (see `web.md`), a
slide helper (see `slides.md`), and a paged pattern (see `documents.md`). Compose
from these — don't invent ad-hoc blocks. The exact CSS / JS / HTML for each lives
in the adapters; this file is the index and the rules.

Legend: **W** = web · **S** = slides · **P** = paged (PDF/DOCX).

---

## 1. Logo lockup
The official mark. **Full lockup** (wordmark + "humanizing AI experiences") on
covers, hero, and title slides; **wordmark** in nav, running headers, and footers.
Ink variant on light surfaces, cream on dark — never the reverse.
- **W** `<img class="nav-logo-img">` (wordmark-ink, ~24px) / footer `.footer-logo-img` (wordmark-cream, ~18px)
- **S** `addImage` full-cream on the dark title slide (~2.3in wide); wordmark in footers
- **P** full-cream on the cover (~14mm tall); wordmark-ink in the running header (~11pt)

## 2. Overline / eyebrow
Mono, ALL CAPS, `letter-spacing .16em`. **Gold-600 on light, yellow-500 on dark.**
Labels a section or the document type. Optional numeric prefix (`01 · POSITIONING`)
only when sections are ordered.
- W `.overline.on-light` / `.overline.on-dark` — S mono text, charSpacing 3 — P `.overline`

## 3. Cover / hero  *(signature component)*
Dark surface, hex tessellation at 6–8% behind, full cream lockup, overline,
Trirong headline with **one** yellow-italic accent phrase, lead in muted text. One
signature curve OR hex field per cover, never both. z-index 0 for motif — never
over text.
- W `.hero` (continuous, dark) — S dark title slide — P `.cover`, full-bleed, `page-break-after`

## 4. Section head
Overline + Trirong title (`h1`/`h2`) + optional Trirong sub (`lead`/muted).
- W `.section > .overline + h2` — S eyebrow + 34–40pt title — P `.page-title`/`h2` + `.sub`

## 5. Body prose
`lead-p` (one step above body, opens a section) · `body` · `muted` (secondary, warm
grey — never cold, never pure black). Measure 60–70 char. On light, body is
ink-900; on dark, ink-000.
- W `.prose`, `.lead-p`, `.muted` — S 14–18pt Raleway — P 10.5pt Raleway, 1.55 lh

## 6. Pull quote  *(signature component)*
Trirong **italic**, oversized, with a 2.5–3pt yellow left rule. One emphatic line
per section. On dark, the italic is soft cream (ink-100), never yellow.
- W `.pullquote` — S large italic Trirong, optional rule — P `.pullquote`

## 7. Hex bullet list
List with the hex-clip bullet in yellow. Bullets are decorative-structural, not
confetti. 1–2 lines each.
- W `.brand-list li::before` (hex clip-path) — S small filled `hexagon` shapes as bullets — P `ul.brand-list li::before`

## 8. Table
Mono uppercase header row (`overline` scale, ink-500), heavier rule under the
header (1.5pt ink-900), hairline row dividers (0.5pt ink-100), **bold first
column**. Left-aligned. No vertical rules, no zebra fill.
- W `.tbl` — S `addTable` with per-cell bottom borders — P `table`

## 9. Metric band / callout  *(signature component)*
Dark rounded panel. Big **Trirong italic yellow** number (`metric` role) + mono
overline label (`OUTCOME`) + muted one-line description. The single most dominant
element where it appears. One per section.
- W `.metric-band` + `.metric` — S dark roundRect + 48pt italic + label — P `.metric-band`

## 10. Buttons / CTAs  *(web + interactive only)*
Pill radius. `primary` = ink fill / cream text; `accent` = yellow fill / ink text;
`ghost` = hairline border on dark. On yellow, text is ink only.
- W `.btn`, `.btn-primary`, `.btn-accent`, `.btn-ghost` — S/P render CTAs as text + contact, not buttons

## 11. Cards — services & clients
**Services grid:** 2–3 col cards, optional hex/icon thumb, H4 title + small body.
**Client grid (GOLDEN RULE):** equal-size hairline-framed boxes for every client;
never mix logo-only with text-only; never resize individually.
- W `.card` / `.client-box` grid — S equal cells — P equal hairline boxes

## 12. Footer  *(single line, locked)*
One line. **W**: wordmark-cream left; `sales@intelligaia.com` · `intelligaia.com`
(linked) · LinkedIn · `© {year}` right. **P**: contact + linked site left, `Page n
/ N` right. **S**: wordmark + slide number. Dynamic year always. Site text is
always hyperlinked where the medium allows.

## 13. Running header  *(paged only)*
Wordmark-ink left, document title right, hairline beneath. Repeats on every page
except the cover. Thin.
- P `.runhead` (table-layout, explicit content width)

## 14. Hex motif & signature curve  *(decorative)*
Tessellation watermark (opacity per surface, see `tokens.md`) or the single
signature curve on a cover. Structural only; max two hex scales per surface; never
bee/hive language.
- W inline SVG `<pattern>` / curve `<path>` — S faint outline `hexagon` shapes — P inline SVG pattern

---

## Composition rules
- A document/deck/page uses each signature component (cover, pull quote, metric)
  **at most once per section**, deliberately.
- Order on a typical proposal/brief: cover → section head → prose → pull quote →
  list/table → metric band → (repeat section head…) → CTA/contact → footer.
- If a needed block isn't here, map it to the closest component before inventing
  one; if you must add one, define it here (all three expressions) so the library
  stays the single source.
