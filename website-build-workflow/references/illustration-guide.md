# Illustration & Graphics Guide

Two production paths. Choose per the design direction's illustration-style sentence,
and stay on one path per page (mixing is allowed only when one path is clearly
"content art" and the other is clearly "UI chrome," e.g. AI hero painting + SVG icons
drawn in a compatible style).

## Path A — Hand-coded SVG (default)

Best for: geometric, editorial, technical, abstract, playful-flat, blueprint,
isometric-line styles. Advantages: palette-exact, crisp at any size, editable during
critique rounds, zero asset pipeline.

### Techniques worth reaching for

- **Generative patterns via script**: write a small Python/JS script that emits SVG —
  scattered circles with seeded randomness, wave fields (layered sine paths), Voronoi
  or hex tessellations, concentric arcs, flow-field lines. Parameterize by palette
  variables so a recolor is a re-run. Save the generator script in the project folder;
  it is reusable and tweakable.
- **Layered blobs/organic shapes**: cubic Bézier closed paths at 2–4 opacity layers of
  the accent color make soft, ownable hero backdrops.
- **Duotone spot illustrations**: 2 colors + ground only. Constraint breeds coherence
  and hides drawing weaknesses.
- **Hairline technical drawings**: 1px strokes, small circle nodes, dashed connectors —
  excellent for agentic/AI/infrastructure subject matter.
- **SVG filters sparingly**: feTurbulence for paper grain, feDropShadow for lift.
  Test rendering in the screenshot — filters are a common visual-bug source.
- **Icons**: draw your own 24px-grid, consistent stroke-width set rather than mixing
  icon libraries. 8–12 icons in one sitting keeps them uniform.

### Rules
- Inline the SVG for anything that uses palette variables (CSS custom properties reach
  inline SVG; they do not reach `<img src>` SVG).
- ViewBox everything; never fixed pixel sizes.
- Decorative SVG gets `aria-hidden="true"`; meaningful graphics get `<title>`.

## Path B — AI image generation (Tool Gateway → FAL)

Best for: painterly, photographic, textured, atmospheric, character-driven art.
Check availability first; if the image tool is unavailable, fall back to Path A and
say so rather than blocking.

### Prompt formula that keeps images on-palette and on-style

```
[style sentence from design direction], [subject], color palette strictly limited to
[hex list], flat solid background of [ground hex], no text, no words, no letters,
no watermark, [composition note: e.g. "subject occupies left two-thirds, generous
negative space on right"]
```

- Repeat the SAME style sentence in every prompt for the page — this is what makes a
  set of images look like a commissioned series instead of stock.
- Always "no text, no words, no letters" — models mangle typography.
- Ask for the ground hex as the background so images sit seamlessly; if a seam still
  shows in the screenshot, add a CSS `box-shadow: 0 0 0 1px var(--ground) inset` or a
  soft radial-gradient mask.
- Generate at ~2x the largest display size. Downscale in CSS, never upscale.

### Post-processing in the terminal (ImageMagick usually available; install if not)

```bash
# recolor drift toward the palette / unify tone
magick in.png -modulate 100,85 -fill "#0E0E12" -colorize 8 out.png
# trim to content + pad
magick in.png -trim +repage -bordercolor "#0E0E12" -border 40 out.png
# convert for web
magick in.png -quality 82 out.webp
```

Store finals in `<project>/assets/`, reference relatively, and record each image's
prompt in `<project>/assets/prompts.md` so good results are reproducible and variants
are cheap.

## Consistency checklist (run during every critique round)

1. Same style sentence produced every image? 
2. Every color in every graphic present in the palette (eyedrop the screenshot if unsure)?
3. Stroke widths / corner radii / grain level uniform across SVG set?
4. No image contains legible or mangled text?
5. Art direction matches mood adjectives from the brief?
