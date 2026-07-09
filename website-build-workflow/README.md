# Website Build Workflow (v2.1)

Creative website design + build with **approval gates** and a mandatory screenshot →
critique → fix loop. Works best in **Hermes** and **Cursor** (folder-based `SKILL.md`);
also usable anywhere skills load from a directory.

## What v2.1 adds

1. **Purpose first** — a takeaway statement (what a visitor grasps + does next) heads
   every project and gates all later decisions.
2. **Research intake** — ingest briefs, brand docs, Figma exports, and competitor URLs
   before designing.
3. **Approval Gate 1 — Art direction** — visual direction board (palette, type, sample
   motif) must be approved before any page HTML.
4. **Approval Gate 2 — Lo-fi storyboard** — grayscale wireframe with real headlines and
   section narrative must be approved before build.
5. **Fast mode** — skip waiting at gates for solo experimentation (`fast mode`, `just
   build it`, etc.); craft standards and the critique loop are unchanged.
6. **Updated critique rubric** — first-impression scoring now tests against the takeaway
   statement and approved direction/storyboard.

## Workflow at a glance

```
Purpose & takeaway → Research intake → Art direction (APPROVAL)
  → Lo-fi storyboard (APPROVAL) → Illustrations → Build
  → Screenshot → critique → fix (×2+) → Deliver
```

## References

| File | Purpose |
|------|---------|
| `references/inspiration-sources.md` | Gallery and agentic-skill sources for direction |
| `references/illustration-guide.md` | SVG vs AI image generation standards |
| `references/storyboard-guide.md` | Grayscale wireframe rules and narrative planning |
| `references/critique-rubric.md` | Pixel-level critique categories and scoring |

## Install

Copy this folder to your assistant's skills path so `SKILL.md` is at the root:

- **Hermes** — skills directory configured in Hermes
- **Cursor** — `~/.cursor/skills/website-build-workflow/` or `.cursor/skills/website-build-workflow/`

Each build produces a project folder (e.g. `~/projects/sites/<slug>/`) with
`design-direction.md` logging takeaway, approvals, and research inputs.
