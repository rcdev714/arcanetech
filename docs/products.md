# Product catalog (public site)

This page is the source of truth for how ArcaneTech presents live products on [arcanetechnologies.org](https://arcanetechnologies.org). Copy is bilingual (EN/ES) and must track the live product sites, not historical internal names.

## Global Data Capital

| Field | Value |
| --- | --- |
| Name | Global Data Capital (GDC) |
| Former name | Camella |
| URL | https://globaldatacapital.com |
| Spec page | `/products/gdc` |
| Legacy path | `/products/camella` → 301 `/products/gdc` |
| Mark | `public/gdc-logo.svg` (official square), `public/gdc-wordmark.svg` |
| Support | soporte@globaldatacapital.com |
| MCP | `https://globaldatacapital.com/api/mcp` with `Authorization: Bearer gdc_live_…` |
| MCP docs | `/en/docs/mcp` and `/es/docs/mcp` |

**Positioning (from the live site):** B2B system for humans and agents to find and contact any company in the Americas. Directory search after sign-in, plus API and Global Data Capital MCP. Companies only, never people.

**Coverage:** Ecuador (RUC / SCVS), Mexico (CLEE / DENUE), United States (CIK / EDGAR), Brazil (CNPJ), Colombia (NIT), Argentina (CUIT / RNS-CNV), Chile (RUT / SII-CMF). Live site reports 803,019 companies across seven markets.

**Capabilities to list (and not oversell):**

- Search by legal name or official ID after signup (Free plan limits apply).
- A few demo identity pages stay public (demo firm: CORPORACIÓN FAVORITA C.A., Ecuador RUC 1790016919001).
- AI research agent: public-web context next to the registry match. Unlocks with account/plan. No diligence guarantees.
- Contacts, exact streets, and financial values require sign-in and the right plan. Free cannot see financials.
- Read-only MCP tools: `search_companies`, `get_company`, `get_financials` (same handlers as `/api/v1`).
- In-product: companies globe, offerings, sales agent. Stripe plans Free / Pro / Enterprise.

Do not keep `camella.app` as the launch URL. A one-line “formerly Camella” note is allowed on the spec page for existing visitors.

## Anymarkt

| Field | Value |
| --- | --- |
| Name | **Anymarkt** (one word; not AnyMarkt) |
| URL | https://anymarkt.com |
| Spec page | `/products/anymarkt` |
| Title / slogan | Predict the future. Prove it. |
| H1 (live) | Prediction markets for AI agents and humans |
| Close | Where prediction engines prove themselves. |
| Age | 18+ |

**Positioning (from the live site, 2026-11-06):** Agents and people make predictions on any question, in the same markets, on one ledger. App, API, and MCP. Start on credits today; credits have no cash value and cannot be withdrawn. Real-money markets for agents and humans — coming. Where available. Eligibility and verification apply.

Do not describe Anymarkt as “practice credits / social prediction syndicates” without the live slogan and the 18+ / no-cash-value disclosures.

## Eridas (What's New)

| Field | Value |
| --- | --- |
| Name | Eridas |
| URL | https://erydas.vercel.app |
| Spec page | `/products/eridas` |
| Mark | `public/eridas-logo.svg` (teal E, aligned to Eridas Cloud brand tokens `#0B6B6E` / `#C9F5F7`) |
| Tagline | The easiest way to keep your dependencies up to date |
| Subhead | Deterministic self-healing software |
| Advisory truth | https://osv.dev |

Eridas is **live**, not a private agent-defense alpha. Do not describe prompt-injection firewalls, zero-trust MCP proxies, or cryptographic provenance trails.

**Surface (from the live product and repo):**

1. **Open-source CLI** — no account. `npx eridas scan .`, `fix` (`--dry-run` / `--yes` / `--force`), `init`, `tinfoil`. npm `package-lock.json` v2/v3 only.
2. **Eridas Cloud** — GitHub App, dashboard (Guided / Dev), isolated worktree fix PRs, lifecycle queued → running → open → merged. Never pushes to the default branch.
3. **API / SDK / MCP** — `/api/v1` (scans, findings, remediations, repo sync, git-status, package-root, `?wait=true`), `@eridas/cloud-sdk`, `@eridas/mcp`, CLI `eridas auth login` then `eridas cloud …`. Keys `erd_…`.
4. **Tinfoil** — live-site scan levels: L1 Surface, L2 Exposure (default), L3 Supply chain (OSV), L4 Reconstruction (REA, local only). Also `POST /api/v1/tinfoil`.
5. **Trust boundary** — lockfile + OSV decide vulns and versions. Optional AI explains confirmed findings only.

Homepage `#whats-new` must stay aligned with this list. Deep links on the spec page should point at the live app (`/docs`, `/scan`, `/how-it-works`, `/scan-levels`, `/agents`, `/llms.txt`).
