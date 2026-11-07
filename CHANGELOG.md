# Changelog

All notable changes to the ArcaneTech public site are recorded here.

## 2026-11-06 — Global Data Capital rebrand and Eridas launch

### Global Data Capital (formerly Camella)

- Replaced Camella naming, logo, and `camella.app` links with **Global Data Capital** (`globaldatacapital.com`) and the official yellow GDC mark.
- Product copy now matches the live GDC site: B2B directory for humans and agents across EC, MX, US, BR, CO, AR, CL; 803K+ companies; search after sign-in; REST API and HTTP MCP (`gdc_live_` keys, `search_companies` / `get_company` / `get_financials`); AI research agent; contacts and financials gated by account/plan; companies only, never people.
- Canonical spec page is `/products/gdc`. `/products/camella` 301-redirects there.

### Eridas (What's New)

- Eridas is no longer an upcoming agent-defense alpha. It is **live** at [erydas.vercel.app](https://erydas.vercel.app/).
- Homepage adds a **What's New** section with the Eridas mark and the features published on the live product: open-source CLI (`npx eridas scan .`), GitHub App scan/fix/merge, Cloud `/api/v1` + `@eridas/cloud-sdk` + `@eridas/mcp`, Tinfoil site scans L1–L4, OSV as advisory truth, approval-first fixes.
- Product page `/products/eridas` documents the full surface (CLI, Cloud, Tinfoil, agents/llms.txt) and links to the live app.

### Docs and legal

- README, JSON-LD, sitemap, terms, and privacy updated for GDC and the live Eridas product.
- Thesis pillar III now describes deterministic supply-chain truth instead of cryptographic agent containment.
