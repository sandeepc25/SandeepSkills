# Lo-Fi Storyboard Guide

The storyboard is the cheapest place to fix structural mistakes. Its job is to get the
*narrative* approved — section order, hierarchy, and content slots — before any real
design or build effort is spent. It is deliberately ugly so feedback stays structural.

## Step 1 — Narrative plan (text, internal)

List every section in order. For each, one line: **section name → its job in the
story → what it contributes to the takeaway statement**. Example:

```
1. Hero          → state the takeaway verbatim-ish + primary action
2. Proof strip   → instant credibility (logos/metrics) before any claims
3. How it works  → reduce "sounds like magic" skepticism, 3 steps
4. Showcase      → evidence: 2 real examples with outcomes
5. About/ethos   → who's behind it; warmth + seniority
6. CTA band      → repeat the action with urgency framing
7. Footer        → contact, legal, nav
```

A section that can't articulate its job gets cut here. Common structural checks:
- Does the takeaway land in section 1, without scrolling?
- Is the primary action reachable in the first and last screens?
- Is there proof before the biggest claims, not after?
- Any two adjacent sections doing the same job? Merge.
- Is the total length honest for the content available? (Padding = weak sections.)

## Step 2 — Build the wireframe (one HTML file, grayscale only)

Hard constraints — these keep the feedback structural:
- Colors: white/greys/black only (`#fff / #eee / #ccc / #888 / #222`). No accent color.
- Fonts: a single generic sans (`font-family: sans-serif`). No display faces.
- Images/illustrations: grey boxes with a diagonal cross (two absolutely-positioned
  lines or an inline SVG ✕) and a label: `[hero illustration — style: <one word>]`,
  `[product screenshot]`, `[portrait]`.
- Copy: **real headlines** (headlines are structure — write them properly now) +
  realistic-density body placeholder. Never lorem ipsum; write plausible sentences so
  text volume is honest.
- Buttons/links: grey outlined boxes with real labels.
- Annotate: small grey caption above each section — its number and job from Step 1
  (`§3 · How it works — kills the "sounds like magic" objection`).

Layout should be roughly proportional to intent (a hero meant to be 100vh should be
tall in the wireframe) but pixel-perfection is wasted effort here.

## Step 3 — Present for approval

1. Serve, screenshot full-page at 1440px and 390px.
2. Send both screenshots (`[[as_document]]` on messaging platforms).
3. Accompany with the Step 1 narrative plan (it reads faster than the image for
   "why is this section here" questions).
4. Ask exactly one question: *"Approve this storyboard, or what should move, grow,
   shrink, or go?"*

## Step 4 — Revision loops

- Apply feedback as targeted edits to the same wireframe file; re-screenshot; re-ask.
- Track changes as a short changelog in `design-direction.md` under "Storyboard":
  `r2: merged §4+§5 per user; moved CTA band above showcase.`
- Approval received → the storyboard becomes the **build contract**. During the build,
  section order/hierarchy/slots may not change silently; if a change becomes necessary
  (e.g. a section collapses because real content is thinner than planned), flag it to
  the user in one line before or with delivery.

## Keep it cheap

Total storyboard effort should be minutes, not hours: one narrative list, one plain
HTML file, two screenshots. If the wireframe is taking as long as a real build, it has
too much fidelity — strip it back.
