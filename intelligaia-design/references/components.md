# Components — the shared vocabulary (v2)

Every Intelligaia artifact is composed from this fixed set. Compose from these — don't invent
ad-hoc blocks. Legend: **W** = web · **S** = slides · **P** = paged (PDF/DOCX).

---

## 1. Logo lockup — unchanged
Full lockup (wordmark + tagline) on covers/hero/title slides; wordmark in nav/running
headers/footers. Ink on light, cream on dark — never reversed.

## 2. Overline / eyebrow — unchanged
Mono, ALL CAPS, `letter-spacing .16em`. Gold-600 on light, yellow-500 on dark.

## 3. Cover / hero *(signature component — v2 default changed)*
**Default is `theme: light`** — a cream, printable cover. Hex tessellation watermark or a custom
geometric illustration behind the headline (motif is optional, see §14b) — never both at once. One
signature curve OR motif per cover. Switch to `theme: dark` only for a web hero, a title slide, or
when explicitly requested — **never make a cover page all-black by default.**
- **W** `.hero` (light by default; `.hero.dark` opt-in) — **S** light content-style title slide by
  default, dark title slide opt-in for a deck's cover — **P** `.cover` full-bleed, light by default

## 4. Section head — unchanged
Overline + Trirong title + optional Trirong sub.

## 5. Body prose — unchanged
`lead-p` · `body` · `muted`. Measure 60-70 char.

## 6. Pull quote *(signature component)* — unchanged
Trirong italic, oversized, 2.5-3pt yellow left rule. One per section.

## 7. Hex bullet list — unchanged
Yellow hex-clip bullet. Structural, not confetti.

## 8. Table — unchanged
Mono uppercase header, heavier rule under header, hairline row dividers, bold first column.

## 9. Metric band / callout *(signature component)* — unchanged
Dark rounded panel, Trirong italic yellow number, mono overline label. One per section.

## 10. Buttons / CTAs — unchanged
Pill radius. `primary` ink fill / cream text; `accent` yellow fill / ink text; `ghost` hairline
border.

## 11. Cards — services & clients — unchanged
Services grid: 2-3 col cards. Client grid (golden rule): equal-size hairline boxes, never mixed
logo/text, never resized individually.

## 12. Footer *(single line, locked, unchanged)*
Wordmark + contact + linked site + LinkedIn + dynamic year. The one place a full-width dark band
stays correct — it's a single thin line, not a page-dominating block.

## 13. Running header *(paged only — v2: thinner, capped)*
Wordmark-ink left, doc title right, **hairline rule beneath (0.5pt), height capped at ~14mm
(~5% of an 11in page).** Repeats on every page except the cover. Never a heavy bar.

## 14a. Hex motif & signature curve *(decorative, now optional)*
Tessellation watermark or the signature curve on a cover — **one motif option among several, not
mandatory.** Structural only; max two hex scales per surface; never bee/hive language.

## 14b. NEW — Client/industry-specific illustration
Where a document is for a specific client, prefer a **simple geometric illustration built from
shapes relevant to their industry** over the default hex motif: circuit/node paths for
hardware/tech, route or network lines for logistics, layered strata/bars for energy or finance,
simple connected-dot diagrams for data/AI. Use the accent colour families
(`--accent-orange/blue/purple-*`) plus ink/yellow. Rules: one accent family dominant per
illustration, flat shapes only (never photographic clipart or a stock icon pack pretending to be
brand illustration), structural not decorative.
- **W/P** inline SVG built from simple primitives (circles, lines, bars, paths) — **S** the
  equivalent as native shapes (no raster clipart)

## NEW — Badge / tag
Small mono, all-caps pill chip for a category or industry tag on tables/cards. Tones: gold, orange,
blue, purple, neutral (maps to the accent families above).
- **W** `.badge.tone-*` — **S/P** small filled rounded-rect + mono label

---

## Composition rules
- A document/deck/page uses each signature component (cover, pull quote, metric) **at most once
  per section**, deliberately.
- Typical order: cover (light default) → section head → prose → pull quote → list/table → metric
  band → (repeat…) → CTA/contact → footer.
- Colour beyond yellow/ink (orange/blue/purple) is available for chart series, tags, and
  illustration — use it; don't default every visual to yellow-on-black.
- If a needed block isn't here, map it to the closest component before inventing one.
