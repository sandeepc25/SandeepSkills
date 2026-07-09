---
name: website-build-workflow
description: Creative website design + build with approval gates and visual critique loop
version: 2.1.0
metadata:
  hermes:
    tags: [web-design, frontend, illustration, creative, svg, storyboard]
    category: design
    requires_toolsets: [terminal]
---

# Website Build Workflow

Design and build creative, visually distinctive websites through a structured,
approval-gated loop: purpose → research intake → art direction (APPROVAL) →
storyboard (APPROVAL) → illustrations → build → screenshot → critique → fix → deliver.

Two principles govern everything:
1. **Purpose first.** A visitor must understand what the page is and what to take away
   from it within seconds. If you cannot state that takeaway in 1–2 sentences, you are
   not ready to design, let alone build.
2. **Never show an un-critiqued page.** Only rendered pixels count as evidence.

## When to Use

Use whenever the user asks to design, build, prototype, redesign, or experiment with a
website, landing page, microsite, portfolio, or campaign page — especially when they
want it distinctive, creative, or "not like a template." Also use when asked to
generate illustrations or graphics for a web page, or to visually critique and improve
an existing page.

## Approval gates — how they work

This workflow has two mandatory approval gates (art direction, storyboard). At a gate:
- Present the artifact, ask for approval in one clear question, and **stop — wait for
  the reply**. Do not proceed on silence.
- If not approved, ask what to change, revise, and re-present. Loop until approved.
  Each loop should be a targeted revision, not a from-scratch restart.
- Record every approval and revision note in `design-direction.md`.

### Fast mode

Fast mode collapses both gates for solo experimentation and quick iterations.

**Triggers** — activate fast mode when the user says any of: "fast mode", "fast",
"just build it", "no check-ins", "no approvals", "surprise me and ship it", or
similar unambiguous skip language. When in doubt, run the normal gated flow.

**What changes:**
- **Gates become FYIs.** Still produce the direction board and the lo-fi storyboard
  (they cost minutes and keep quality up), but send each as a single informational
  message — *"Direction: [one line]. Building now — say 'stop' to redirect."* — and
  continue immediately without waiting.
- **Purpose questions are skipped, not the purpose.** Infer the takeaway statement
  yourself from whatever context exists, state it in one line in the first message,
  and proceed. Only ask if the request gives genuinely nothing to infer from (no
  subject, no audience, no clue) — then ask exactly ONE question.
- **Research intake shrinks** to a single offer folded into the first message:
  *"Working without prior research — drop docs/Figma anytime and I'll fold them in."*
- Everything else is unchanged: full illustration standards, full build standards,
  and the full screenshot → critique → fix loop. Fast mode trades alignment
  checkpoints, never craft.

**Mid-run correction:** if the user replies during a fast-mode run with a redirect
("different palette", "stop", "add a pricing section"), apply it at the current phase
— fast mode skips waiting, not listening.

**Logging:** write `mode: fast (gates skipped by user request)` in
`design-direction.md` where approvals would normally be logged.

Fast mode is per-run. A gated project stays gated unless the user invokes fast mode
for it explicitly.

## Procedure

### Phase 1 — Purpose & takeaway (mandatory understanding gate)

Before anything else, establish the **takeaway statement**: 1–2 sentences describing
what a visitor should understand and feel within moments of landing, and what they
should do next. Example: *"A boutique AI studio that turns research prototypes into
shippable products — credible, senior, fast. Takeaway: 'these people can take my POC
to production'; action: book a call."*

- If the purpose is not clear from the user's request, **ask** — briefly (2–4 pointed
  questions max): What is this for? Who arrives at it? What single idea must they
  leave with? What should they do next?
- Write the takeaway statement, confirm it back to the user in one line, and save it
  at the top of `design-direction.md`. It is the north star: every later decision —
  direction, storyboard, copy, critique — is judged against it.
- A wrong or fuzzy purpose changes the entire outcome; do not rationalize skipping
  this because the request "seems obvious." (In **fast mode** the questions are
  skipped but the takeaway statement is still written, inferred, and stated in one
  line — see "Fast mode" above.)

Also capture in the same exchange: audience, available real copy/content, and mood
(3–5 adjectives, or "surprise me").

### Phase 2 — Prior research intake

Ask one question: **"Do you have any prior research, briefs, brand docs, or Figma
files I should work from?"** Then:

- **Documents** (PDF, docx, md, notes): read them fully; extract audience insights,
  positioning language, mandatory content, tone constraints. Quote the 3–5 most
  load-bearing findings into `design-direction.md` under "Research inputs."
- **Figma files**: ask for exported frames (PNG/PDF) or a public view link. If a link
  is provided, open it in the browser tool and screenshot the relevant frames; analyze
  with vision for layout intent, established palette/type, and components that must be
  honored. Treat existing brand decisions found in research as constraints, not
  suggestions.
- **URLs** (existing site, competitors): screenshot and note what to keep vs. beat.
- **Nothing available**: proceed; optionally do quick subject research yourself via
  `web_search` if the domain is unfamiliar — you cannot design credibly for a subject
  you don't understand.

Everything ingested here feeds Phase 3 and the storyboard's content plan.

### Phase 3 — Art direction → **APPROVAL GATE 1**

Develop the direction (using inspiration sources as needed — see Phase 3b), then
present it for approval **before any page HTML exists**.

Write the **design direction** (saved to `design-direction.md`):
- **Type pairing** — one display face + one text face (Google Fonts / Fontshare).
  Never default to Inter/Roboto/system-ui unless the brief demands neutrality.
- **Palette** — 4–6 hex values with roles (ground, ink, accent, accent-2), derived
  from the mood and research, one dominant temperature.
- **Layout motif** — one structural idea that repeats.
- **Illustration style** — one sentence describing the graphic language.
- **How this serves the takeaway** — one sentence connecting direction to purpose.

**Present it visually, not just as text**: build a small **direction board** — a
single self-contained HTML page showing palette swatches (with hex labels), the type
pairing rendered as a real headline + paragraph, one sample illustration/motif in the
proposed style, and the takeaway statement set in the display face. Screenshot it and
send it (append `[[as_document]]` on messaging platforms), with the direction summary
and the question: *"Approve this art direction, or what should change?"*

Loop on feedback (swap a face, shift the palette temperature, harden/soften the motif)
until approved. Log the approved version and date in `design-direction.md`.

#### Phase 3b — Templates & inspiration (feeds the direction; optional but encouraged)

Two sources, use either or both, ideally before drafting the direction:
- **Agentic design skills**: check `skills_list`, then `/skills search design|frontend
  --source skills-sh`; known-good taps: `anthropics/skills`, `vercel-labs/agent-skills`,
  `openai/skills`. Borrowed skills supply *craft rules*; the direction owns aesthetics.
- **Live galleries**: see `references/inspiration-sources.md`. Steal 2–3 concrete
  *techniques* across sources, never one site's whole design. Record takings with
  attribution in `design-direction.md`.

### Phase 4 — Lo-fi storyboard → **APPROVAL GATE 2**

Before building the real site, storyboard it. Read
`references/storyboard-guide.md`, then:

1. Plan the narrative: the ordered sequence of sections, and what each contributes to
   the takeaway (a section that serves no purpose gets cut here, cheaply).
2. Build a **grayscale lo-fi wireframe** — one HTML page, boxes + real headlines +
   placeholder-density body text + labeled image slots. Deliberately unstyled: no
   palette, no display faces, no art. This keeps feedback about *structure and story*,
   not aesthetics (that was Gate 1).
3. Screenshot at 1440px and 390px, send both (`[[as_document]]`), with a one-line
   description of each section's job, and ask: *"Approve this storyboard, or what
   should move, grow, shrink, or go?"*
4. Loop until approved. Log the approval.

The approved storyboard is the build contract: section order, hierarchy, and content
slots don't change silently during Phase 6 — if a change becomes necessary, flag it.

### Phase 5 — Custom illustrations & graphics

Read `references/illustration-guide.md`. Two paths — hand-coded/generative SVG
(default) or AI image generation via Tool Gateway/FAL — governed by the approved
direction's style sentence. Every asset must share the approved palette and style;
mixed graphic languages on one page is the most common amateur tell. Save AI prompts
to `assets/prompts.md` for reproducibility.

### Phase 6 — Build

- Single self-contained `index.html` by default; split files only for multi-page
  sites. Project folder e.g. `~/projects/sites/<slug>/`.
- Semantic HTML; CSS custom properties for every palette value so recoloring during
  critique is a one-line change.
- Follow the approved storyboard's structure exactly; apply the approved direction.
- Responsive from the start; real content density, never lorem ipsum.
- Serve locally: `python3 -m http.server 8613 --directory <folder> &`

### Phase 7 — Screenshot → critique → fix loop (mandatory, minimum 2 rounds)

1. Screenshot at **1440px** and **390px**, full page.
2. Critique the screenshots with vision against `references/critique-rubric.md` —
   category 1 now explicitly tests the rendered page against the takeaway statement.
   Write 3–8 concrete findings before touching code.
3. Fix every finding or record a deliberate keep-decision.
4. Repeat until a round produces zero significant findings (typically 2–4 rounds).

### Phase 8 — Deliver

- Send final desktop + mobile screenshots (`[[as_document]]`).
- State the folder path, local serve command, and a 2–3 line recap of takeaway →
  direction → structure, noting both approvals honored.
- Offer one bolder variant idea you deliberately didn't ship.

## Pitfalls

- **Skipping the purpose questions** because the request "seems obvious." Rajiv's law:
  a good understanding changes the process, outlook, and outcome completely. Two
  minutes of questions beats two hours of rework.
- **Proceeding through a gate on silence or a lukewarm reply.** "Hmm interesting" is
  not approval. Ask again, plainly. (Silence only permits proceeding in fast mode.)
- **Treating fast mode as low-effort mode.** Fast mode skips *waiting*, not the
  direction board, the storyboard, the critique loop, or the craft standards. Also
  don't infer fast mode from impatient tone — it needs explicit skip language.
- **Styling the storyboard.** A pretty wireframe invites aesthetic feedback at the
  wrong moment and hides structural problems. Grayscale boxes only.
- **Ignoring supplied research.** If the user handed over a brief or Figma frames and
  the output contradicts them, that is a process failure, not a taste difference.
- **Generic drift** — under pressure the output collapses toward centered-hero, Inter,
  purple-gradient SaaS. Re-read `design-direction.md` before every fix round.
- **Critiquing from code instead of pixels**; only screenshots count.
- **AI images with baked-in text** — all text lives in HTML.
- **Flat critiques from smaller local models** — force the rubric's 1–5 scoring with
  pixel evidence for any score of 4+.
- **Port collisions / orphaned servers** — pick a free port; kill the server when done.

## Verification

Done when all of these are true:
1. A takeaway statement exists, was confirmed by the user, and heads `design-direction.md`.
2. Supplied research was ingested and its key findings logged (or "none provided" noted).
3. Art direction was explicitly approved (logged) — or fast mode was logged — and the
   built page matches it.
4. Storyboard was explicitly approved (logged) — or fast mode was logged — and the
   built page follows its structure without silent changes.
5. Final screenshots exist at 1440px and 390px with no layout breakage.
6. The last critique round yielded no significant findings, and category 1 confirms a
   first-time visitor would grasp the takeaway within one screen height.
7. Every color traces to a CSS custom property; all art shares one graphic language.
8. The user received the screenshots and project path.

After a successful build, persist hard-won techniques (a scroll effect, an SVG pattern
generator, a prompt formula) via `skill_manage` as notes or patches to this skill's
references so the next build starts further ahead.
