# Developer Bootcamp Hamburg, slides & materials

> **Archived.** The decks and the facilitation guides now live in hackers&wizards' private trainer-hub, as the delivery `software-factory/deliveries/2026-06-alphalist-dev-bootcamp` on its slides engine. This repository stays as it was on the day of the move and gets no further changes.

Slides and exercise materials from the alphalist Agentic Engineering DEV Bootcamp, June 16-17, 2026, Jufa Hotel Hamburg. Built by hackers&wizards. The hands-on exercise code is in [dev-bootcamp-factory-workshop](https://github.com/hackersandwizards/dev-bootcamp-factory-workshop).

## Read the decks

- Online: the [site root](https://hackersandwizards.github.io/dev-bootcamp-slides/) lists every deck, each at its own subpath, such as the [keynote](https://hackersandwizards.github.io/dev-bootcamp-slides/keynote/). Append `#/print` to a deck's URL to see every slide at once.
- As PDF: [`pdfs/`](pdfs/) holds every deck but the agenda.

## Run a deck locally

Needs Node.js 22 or newer and [Bun](https://bun.sh) 1.2 or newer (`curl -fsSL https://bun.sh/install | bash` installs Bun).

```bash
bun install
bun run --cwd modules/keynote dev     # any folder under modules/ works the same
```

## Repo map

| Path | What lives there |
|------|------------------|
| `modules/` | One folder per session: keynote, foundation, pipeline, factory-retro, hycle, agenda, reflect-commit. Each is a Vite + React deck, most with a README of the agenda sessions it covers and an `exercises/` brief |
| `pdfs/` | The exported decks |
| `brand/` | Design tokens, fonts, logos, the Slidev theme |
| `templates/` | Deck starters: `slidev/` and `ts/` (Vite + React) |
| `scripts/` | `new-module.mjs` (new deck from a template), `export-pdf.mjs` (deck to PDF) |
| `facilitation-guides/` | Day 1 and Day 2 briefs for the facilitators |

## Add or export a deck

```bash
bun run new <slug> ts          # or slidev: copies a template into modules/<slug>
bun install
node scripts/export-pdf.mjs <slug>   # builds a TS deck and prints it to pdfs/<slug>.pdf
```

The exporter needs Playwright's Chromium once: `bun add -d playwright-chromium && bun pm trust playwright-chromium`. Every push to `main` that touches `modules/` or `brand/` redeploys the decks to GitHub Pages.

## Pod materials and style

[FACILITATION.md](FACILITATION.md) defines the facilitator role and the format every exercise follows: goal, timeboxed steps, expected outcome, reflection prompts.

Colours and fonts come from [brand/tokens.css](brand/tokens.css): use the variables, never raw hex values in decks. Rationale and usage notes: [brand/README.md](brand/README.md).
