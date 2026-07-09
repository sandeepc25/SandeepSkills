# SandeepSkills

A shared repository of AI agent skills for Intelligaia applications and team collaboration.

Skills in this repo are designed to be version-controlled, improved collaboratively, and installed across different AI coding assistants.

## Skills

| Skill | Version | Description | Best in |
|-------|---------|-------------|---------|
| [intelligaia-design](./intelligaia-design/) | v2 | Intelligaia design system — web, slides, and paged documents (light covers default, expanded accent palette) | Claude |
| [website-build-workflow](./website-build-workflow/) | **v2.1** | Creative website design + build with purpose-first takeaway, art-direction and storyboard approval gates, fast mode, and mandatory screenshot → critique → fix loop | Hermes, Cursor |

## Using a skill

### Hermes (recommended for website-build-workflow)

1. Clone this repository (or copy the skill folder).
2. Add `website-build-workflow/` to your Hermes skills path so `SKILL.md` is at the skill root.
3. The skill triggers on website, landing page, microsite, and creative redesign work.
4. **v2.1** runs a gated flow: purpose → research → art direction approval → lo-fi storyboard approval → build → visual critique. Say **"fast mode"** to skip approval waits while keeping craft standards.

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
5. For `website-build-workflow`, log approval-gate and fast-mode behavior changes in `SKILL.md` and update `README.md` in that skill folder.

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
└── website-build-workflow/      # v2.1 — approval gates + critique loop
    ├── SKILL.md                 # Purpose → direction → storyboard → build → critique
    ├── README.md                # Version notes and install
    └── references/              # Inspiration, illustration, storyboard, critique rubric
```
