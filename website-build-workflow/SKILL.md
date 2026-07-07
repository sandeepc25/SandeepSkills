---
name: website-build-workflow
description: Creative website design + build with visual critique loop
version: 1.0.0
metadata:
  hermes:
    tags: [web-design, frontend, illustration, creative, svg]
    category: design
    requires_toolsets: [terminal]
---

# Website Build Workflow

Design and build creative, visually distinctive websites through a structured loop:
brief → design direction → templates & inspiration → custom illustrations → build →
screenshot → critique → fix → repeat. The critique loop is the heart of this skill —
never deliver a page you have not seen rendered.

## When to Use

Use whenever the user asks to design, build, prototype, redesign, or experiment with a
website, landing page, microsite, portfolio, or campaign page — especially when they
want it to look distinctive, creative, or "not like a template." Also use when asked to
generate illustrations or graphics for a web page, or to visually critique and improve
an existing page.

## Procedure

### Phase 1 — Brief (1 short exchange, then commit)

Establish, by asking or inferring from context:
1. **Purpose & audience** — what is the page for, who lands on it
2. **Content** — real copy if available; otherwise write plausible placeholder copy
   yourself (never lorem ipsum — real-sounding copy exposes layout problems)
3. **Mood** — 3–5 adjectives (e.g. "warm, editorial, hand-crafted" vs "cold, technical,
   brutalist"). If the user says "surprise me" or wants experimentation, pick a bold
   direction yourself and state it in one line before proceeding.

Do not over-interview. One clarifying message maximum; if unanswered, make tasteful
assumptions and note them.

### Phase 2 — Design direction (the anti-generic step)

Before writing any HTML, write a short **design direction** (5–10 lines, saved to
`design-direction.md` in the project folder):

- **Type pairing** — one display face + one text face, from Google Fonts or Fontshare.
  Never default to Inter/Roboto/system-ui unless the brief demands neutrality.
- **Palette** — 4–6 hex values with roles (ground, ink, accent, accent-2). Derive from
  the mood, not from memory of "safe" palettes. Commit to one dominant temperature.
- **Layout motif** — one structural idea that repeats (e.g. offset grid, oversized
  numerals, hairline rules, diagonal section breaks, sticky side rail).
- **Illustration style** — one sentence describing the graphic language (see Phase 4)
  so all generated art is consistent.

If stuck for direction, run Phase 3 first and derive the direction from what you find.

### Phase 3 — Templates & inspiration (optional but encouraged for experimentation)

Two sources, use either or both:

**A. Agentic design skills/templates.** Check locally installed skills first
(`skills_list`) for frontend/design skills, then search hubs:
- `/skills search design --source skills-sh` and `/skills search frontend --source skills-sh`
- Known good taps: `anthropics/skills` (frontend-design), `vercel-labs/agent-skills`
  (react best practices), `openai/skills`
- Inspect before installing; install only what maps to the current brief. A borrowed
  skill supplies *craft rules* (spacing scales, contrast rules, component patterns) —
  the design direction from Phase 2 still owns the aesthetics.

**B. Live inspiration.** Use `web_search` + `web_extract` on curated galleries
(see `references/inspiration-sources.md`) for the brief's genre. Extract 2–3 concrete,
stealable *techniques* (a nav treatment, a hero composition, a scroll behavior) — never
copy a full design, palette, and layout together.

Record what you took and from where in `design-direction.md`.

### Phase 4 — Custom illustrations & graphics

Read `references/illustration-guide.md` before generating art. Summary of the two paths:

1. **Hand-coded SVG** (default) — hero graphics, spot illustrations, icons, dividers,
   textures drawn as inline SVG. Infinitely scalable, palette-exact, editable, zero
   external requests. Best for geometric, editorial, technical, or abstract styles.
2. **AI image generation** (Tool Gateway / FAL, if available) — painterly, photographic,
   or richly textured art that SVG can't reach. Generate at 2x display size, ask for the
   exact hex palette from Phase 2 in the prompt, and request "flat background matching
   #XXXXXX" so images sit seamlessly on the page. Save to the project's `assets/` folder
   and reference with relative paths.

Every image must share the palette and style sentence from Phase 2. Mixed graphic
languages on one page is the most common amateur tell.

### Phase 5 — Build

- Single self-contained `index.html` by default (inline CSS + JS); split files only for
  multi-page sites. Keep everything in one project folder, e.g.
  `~/projects/sites/<slug>/`.
- Semantic HTML, CSS custom properties for every palette value (`--ground`, `--ink`,
  `--accent` …) so recoloring during critique is a one-line change.
- Responsive from the start: build mobile styles alongside desktop, not after.
- Real content density — a beautiful empty page is untestable.
- Serve locally for the critique loop: `python3 -m http.server 8613 --directory <folder> &`

### Phase 6 — Screenshot → critique → fix loop (mandatory, minimum 2 rounds)

1. **Screenshot** the served page with the browser tool at **1440px desktop** and
   **390px mobile** widths, full page.
2. **Critique** the screenshots with vision against `references/critique-rubric.md`.
   Write the critique down (3–8 concrete findings per round) before touching code —
   findings like "hero heading wraps awkwardly at 3 lines," not "could be better."
3. **Fix** every finding, or explicitly decide to keep something and say why.
4. **Repeat** until a round produces zero significant findings (typically 2–4 rounds).

Do not show the user an un-critiqued page. Do not skip the mobile width.

### Phase 7 — Deliver

- Send the final desktop + mobile screenshots to the user (append `[[as_document]]` on
  messaging platforms so PNGs arrive uncompressed).
- Tell them the folder path, the local serve command, and summarize the design
  direction in 2–3 lines.
- Offer one concrete "bolder variant" idea you deliberately didn't ship — creative
  sessions usually continue.

## Pitfalls

- **Generic drift** — under time pressure the output collapses toward centered-hero,
  Inter, purple-gradient SaaS. The Phase 2 design direction file exists to prevent
  this; re-read it before every fix round.
- **Critiquing from code instead of pixels** — CSS that reads fine can render broken
  (overflow, wrapping, contrast). Only screenshots count as evidence.
- **Inconsistent art** — mixing flat SVG icons with photorealistic AI hero art. One
  graphic language per page.
- **AI images with baked-in text** — image models mangle typography. All text lives in
  HTML; images are text-free.
- **Local model weakness on aesthetics** — if the running model produces flat critiques
  ("looks good"), force structure: score each rubric category 1–5 and justify any score
  of 4+ with pixel evidence.
- **Port collisions** — 8613 may be taken; pick another and note it.
- **Forgetting the server is running** — kill the http.server when the session ends.

## Verification

The build is done when all of these are true:
1. Final screenshots exist at both 1440px and 390px with no layout breakage in either.
2. The last critique round yielded no significant findings.
3. Every color on the page traces to a CSS custom property from the design direction.
4. All illustrations share one graphic language and the project palette.
5. The user has received the screenshots and the project folder path.

After a successful build, if any technique was hard-won (a tricky scroll effect, an SVG
pattern generator, a prompt formula that produced great art), save it with
`skill_manage` as a note or patch to this skill's references so the next build starts
further ahead.
