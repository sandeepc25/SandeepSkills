# Inspiration & Template Sources

Use `web_search` / `web_extract` for galleries and the skills hub commands for agentic
design skills. Extract *techniques*, not whole designs: a nav treatment, a hero
composition, a type pairing, a scroll behavior. Copying one page's palette + layout +
type together is plagiarism and produces derivative work; stealing one move each from
three sources produces a point of view.

## Agentic design skills (check these first)

Local: `skills_list` — look for anything tagged frontend, design, ui, tailwind, react.

Hub searches worth running per project:
```
/skills search design --source skills-sh
/skills search frontend --source skills-sh
/skills search tailwind --source skills-sh
/skills browse            # official + tapped repos
```

Known-useful sources:
- `anthropics/skills` — frontend/design craft rules (spacing, typography, anti-generic guidance)
- `vercel-labs/agent-skills` — React/Next best practices, component patterns
- `openai/skills` — general engineering workflows
- skills.sh directory — community design systems, component generators, CSS techniques

Treat installed third-party skills as *craft input* subordinate to the current
design direction. Inspect before installing; prefer read-only inspection
(`/skills inspect …`) when you only need the ideas.

## Web galleries by need

General excellence / awards-tier:
- awwwards.com, cssdesignawards.com, thefwa.com — search by industry tag
- godly.website — curated, fast to scan
- siteinspire.com — filterable by style/type/subject

Landing pages & product sites:
- land-book.com, lapa.ninja, saaslandingpage.com
- onepagelove.com — single-page patterns

Typography & editorial:
- typewolf.com — real-world type pairings (also: "site of the day" archive)
- fontsinuse.com — pairing evidence by industry
- readymag.com/explore — editorial/experimental layouts

Color:
- Derive palettes from the mood first; verify with a contrast check.
- coolors.co / huemint.com for generative exploration when stuck.

Illustration style references:
- dribbble.com, behance.net — search "[style] illustration" to sharpen the style
  sentence before generating art.

## How to extract from a gallery page

1. `web_search` the gallery + genre (e.g. "siteinspire brutalist portfolio").
2. `web_extract` or browse 3–5 candidate sites, screenshot each.
3. For each, name ONE technique in a phrase ("numbered oversized section indices",
   "sticky left rail with scrolling right column", "hover reveals full-bleed image").
4. Pick 2–3 techniques total across sources; record them in design-direction.md with
   attribution; discard the rest.
