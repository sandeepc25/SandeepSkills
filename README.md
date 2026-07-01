# SandeepSkills

A shared repository of AI agent skills for Intelligaia applications and team collaboration.

Skills in this repo are designed to be version-controlled, improved collaboratively, and installed across different AI coding assistants.

## Skills

| Skill | Description | Best in |
|-------|-------------|---------|
| [intelligaia-design](./intelligaia-design/) | Universal Intelligaia design system for web, slides, and paged documents | Claude |

## Using a skill

### Claude (recommended for intelligaia-design)

1. Download or clone this repository.
2. Import `intelligaia-design/intelligaia-design.skill` into Claude via **Settings → Skills → Add skill**.
3. The skill triggers on Intelligaia-branded work: websites, decks, proposals, case studies, and related materials.

### Cursor

1. Clone this repository (or copy a single skill folder).
2. Place the skill in one of:
   - **Personal** (all projects): `~/.cursor/skills/intelligaia-design/`
   - **Project** (repo-specific): `.cursor/skills/intelligaia-design/`
3. Cursor loads skills from `SKILL.md` automatically when the task matches the skill description.

### Other assistants

Copy the skill folder so it contains `SKILL.md` at the root. Most assistants that support skills expect that layout.

## Contributing

1. Fork or branch from `main`.
2. Edit the skill (start with `SKILL.md` and `references/`).
3. Test your changes in Claude or Cursor before opening a pull request.
4. Keep proof points and voice guidelines in sync — `references/proof-points.md` is the single source of truth for metrics and case studies.

## Repository layout

```
SandeepSkills/
├── README.md
└── intelligaia-design/
    ├── SKILL.md                 # Main skill instructions
    ├── intelligaia-design.skill   # Claude import package
    ├── references/              # Brand tokens, voice, adapters per medium
    ├── assets/                  # Logos and brand fonts
    ├── examples/                # Starter templates (web, PDF, deck)
    ├── samples/                 # Example outputs (web, PDF, deck)
    └── scripts/                 # Build utilities (e.g. font embedding)
```
