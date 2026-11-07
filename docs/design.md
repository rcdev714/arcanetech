# ArcaneTech visual system

Redesign brief for the public laboratory site. Informed by Anthropic `frontend-design` (distinctive identity, type as architecture, motion as a single planned moment), `web-artifacts-builder` (avoid AI-slop chrome), and live product sites.

## Subject

ArcaneTech is an Ecuador-incorporated frontier AI laboratory. The page’s job is institutional gravity: three live instruments, not a founder portfolio.

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| Void | `#0A0C10` | Ground. Blue-cast ink, not grey-black `#111`. |
| Paper | `#EDE6D6` | Archive paper for type. |
| Mute | `#9A9486` | Secondary copy. |
| Brass | `#B89A68` | The only accent. Institutional metal. |
| Rule | `#242820` | Hairlines. |

Product marks keep their own colour (GDC yellow, Anymarkt `#020053`, Eridas teal). They sit in the catalog; they do not paint the lab.

## Type

- Display: **Newsreader** — optical-size serif, research-journal register.
- Interface: **Source Sans 3** — civic, Latin-ext, not Inter.

Line length under 80 characters. Sentence case. No tracked-out all-caps eyebrows. No numbered `01 / 02 / 03` unless the content is a real sequence.

## Layout

Left-aligned editorial. Hero is the sentence. Systems are a catalog index (name, one line, host) — not three identical rounded cards. What’s new is one dispatch, not a feature grid.

## Motion

Package: [`motion`](https://motion.dev) (`motion/react`), formerly Framer Motion.

One load sequence: grain settles, headline unclips, spectrometer hairline sweeps once. Hover on catalog rows answers the pointer. No per-section fade-and-slide. `prefers-reduced-motion` disables both.

Language (EN/ES) persists in `localStorage` (`arcane-lang`) so product and legal pages stay in the same voice.

## Anymarkt (live 2026-11-06)

Source: [anymarkt.com](https://www.anymarkt.com/).

- Name: **Anymarkt** (one word).
- Title / slogan: *Predict the future. Prove it.*
- H1: *Prediction markets for AI agents and humans*
- Description: *Make prediction markets in your group with friends and AI agents, through the app, API or MCP. Credits have no cash value. 18+.*
- Close: *Where prediction engines prove themselves.*

## Skills downloaded

Installed locally under `.claude/skills/` (gitignored): `frontend-design`, `brand-guidelines`, `theme-factory`, `canvas-design`, `web-artifacts-builder` from [anthropics/skills](https://github.com/anthropics/skills).
