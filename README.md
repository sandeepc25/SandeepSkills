# SandeepSkills

A shared repository of AI agent skills for Intelligaia applications and team collaboration.

Skills in this repo are designed to be version-controlled, improved collaboratively, and installed across different AI coding assistants.

## Skills

| Skill | Description | Best in |
|-------|-------------|---------|
| [intelligaia-design](./intelligaia-design/) | Intelligaia design system v2 — web, slides, and paged documents (light covers default, expanded accent palette) | Claude |
| [website-build-workflow](./website-build-workflow/) | Creative website design + build with a mandatory screenshot → critique → fix loop; custom SVG/AI illustrations, design direction, and anti-generic craft | Hermes, Cursor |

## Using a skill

### Hermes (recommended for website-build-workflow)

1. Clone this repository (or copy the skill folder).
2. Add `website-build-workflow/` to your Hermes skills path so `SKILL.md` is at the skill root.
3. The skill triggers on website, landing page, microsite, and creative redesign work — especially when the goal is distinctive, non-template output with visual critique before delivery.

### Claude (recommended for intelligaia-design)

1. Download or clone this repository.
2. Import `intelligaia-design/intelligaia-design.skill` into Claude via **Settings → Skills → Add skill**.
3. The skill triggers on Intelligaia-branded work: websites, decks, proposals, case studies, and related materials.

To rebuild the Claude package after edits:

```bash
bash intelligaia-design/scripts/build_skill.sh
```

### Cursor

1. Clone this repository (or copy a single skill folder).
2. Place the skill in one of:
   - **Personal** (all projects): `~/.cursor/skills/<skill-name>/`
   - **Project** (repo-specific): `.cursor/skills/<skill-name>/`
3. Cursor loads skills from `SKILL.md` automatically when the task matches the skill description.

### Other assistants

Copy the skill folder so it contains `SKILL.md` at the root. Most assistants that support skills expect that layout.

## Contributing

1. Fork or branch from `main`.
2. Edit the skill (start with `SKILL.md` and `references/`).
3. Test your changes in your target assistant (Hermes, Claude, or Cursor) before opening a pull request.
4. For `intelligaia-design`, keep proof points and voice guidelines in sync — `references/proof-points.md` is the single source of truth for metrics and case studies.

## Repository layout

```
SandeepSkills/
├── README.md
├── intelligaia-design/
│   ├── SKILL.md                 # Main skill instructions
│   ├── intelligaia-design.skill   # Claude import package
│   ├── references/              # Brand tokens, voice, adapters per medium
│   ├── styles.css               # Shared token stylesheet (v2 template examples)
│   ├── assets/                  # Logos and brand fonts
│   ├── examples/                # Starter templates (self-contained + web-page/slide/document)
│   ├── samples/                 # Example outputs (web, PDF, deck)
│   └── scripts/                 # Build utilities (e.g. font embedding, PDF render)
└── website-build-workflow/
    ├── SKILL.md                 # Brief → design direction → build → critique loop
    └── references/              # Inspiration sources, illustration guide, critique rubric
```
