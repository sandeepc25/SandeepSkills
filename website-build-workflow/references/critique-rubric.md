# Visual Critique Rubric

Apply to full-page screenshots at 1440px and 390px. For each category, find concrete,
pixel-level evidence. Score 1–5; any category below 4 requires a fix. Findings must be
actionable sentences ("CTA button contrast fails against the ground color in the footer"),
never vibes ("footer feels off").

## 1. First impression (5-second test)
- Does the page communicate what it is within one screen height?
- Is there one clear focal point, or do elements compete?
- Would this be mistaken for a default template? (If yes → automatic fix round; identify
  which element is most generic and replace it.)

## 2. Typography
- Display/text pairing actually rendering (check for fallback-font symptoms: wrong
  weight, wrong widths)?
- Heading hierarchy visible without reading — size/weight steps distinct?
- Line length in body text 45–80 characters?
- Awkward wraps: single-word last lines (orphans) in headings, mid-word breaks?
- Letter-spacing: display faces usually need slight tightening at large sizes;
  all-caps labels need loosening.

## 3. Spacing & rhythm
- Consistent spacing scale, or arbitrary gaps?
- Sections breathe — is any block cramped against its neighbor?
- Whitespace distributed with intent (asymmetry is fine; accident is not)?
- Alignment: do edges that should share a line actually share it? Zoom into the
  screenshot to check.

## 4. Color & contrast
- Text contrast: comfortably readable at every size, including text over images and
  gradients? Flag anything borderline.
- Accent color used sparingly enough to still mean something?
- Do AI-generated images clash with the palette or sit on visibly different
  background tones (halo/seam at image edges)?

## 5. Illustration & imagery
- One graphic language across all art?
- Images sharp at rendered size (no upscaling blur)?
- Any baked-in text inside images? (Always a fix.)
- Do decorative graphics overlap or crowd text at either viewport?

## 6. Layout integrity
- Anything overflowing, clipped, or overlapping that shouldn't?
- Horizontal scrollbar at 390px? (Automatic fail — find the overflowing element.)
- Images/videos with wrong aspect (squashed/stretched)?
- Footer, nav, and section boundaries intact at both widths?

## 7. Interactive affordances (from screenshot + quick browser interaction if needed)
- Do clickable things look clickable?
- Hover/focus states defined (spot-check one link and one button in the browser)?
- Touch targets at 390px comfortably tappable (~44px+)?

## 8. Mobile-specific (390px pass)
- Type scaled down appropriately (hero headings often need clamp())?
- Multi-column layouts collapsed sensibly, not just squeezed?
- Nav usable — did it become a working mobile pattern or an unreachable row of links?
- Illustrations still legible or gracefully hidden?

## Output format for each round

```
ROUND N CRITIQUE
Scores: impression 4/5 · type 3/5 · spacing 4/5 · color 5/5 · art 4/5 · layout 2/5 · affordance 4/5 · mobile 3/5
Findings:
1. [layout] Pricing cards overflow container at 390px causing horizontal scroll.
2. [type] H1 wraps to an orphaned single word "today." — shorten copy or add &nbsp;.
3. ...
```

Fix all findings (or record a deliberate keep-decision), re-screenshot, repeat.
