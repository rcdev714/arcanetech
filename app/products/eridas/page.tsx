"use client";

import { InstituteShell, SpecCrumb, useInstituteLang } from "@/app/components/institute-chrome";
import Image from "next/image";

const TRUST = [
  { label: { en: "AppSec", es: "AppSec" }, value: { en: "Lockfile + OSV", es: "Lockfile + OSV" } },
  { label: { en: "OpSec", es: "OpSec" }, value: { en: "Tinfoil L1–L4", es: "Tinfoil L1–L4" } },
  { label: { en: "Default recon", es: "Recon por defecto" }, value: { en: "L2 Exposure", es: "L2 Exposición" } },
  { label: { en: "Mutation", es: "Mutación" }, value: { en: "PR only", es: "Solo PR" } },
  { label: { en: "Advisory truth", es: "Fuente de avisos" }, value: { en: "OSV, disclosed only", es: "OSV, solo divulgados" } },
];

const SURFACE = [
  { href: "https://erydas.vercel.app/how-it-works", label: "/how-it-works" },
  { href: "https://erydas.vercel.app/docs", label: "/docs" },
  { href: "https://erydas.vercel.app/commands", label: "/commands" },
  { href: "https://erydas.vercel.app/scan-levels", label: "/scan-levels" },
  { href: "https://erydas.vercel.app/agents", label: "/agents" },
  { href: "https://erydas.vercel.app/security", label: "/security" },
  { href: "https://erydas.vercel.app/llms.txt", label: "/llms.txt" },
  { href: "https://erydas.vercel.app/login", label: "/login" },
];

export default function EridasProductPage() {
  const [lang, setLang] = useInstituteLang("en");
  const en = lang === "en";

  return (
    <InstituteShell lang={lang} onLang={setLang}>
      <main className="mx-auto w-full max-w-[72rem] px-6 py-16">
        <SpecCrumb lang={lang} leaf="Eridas" />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <Image src="/eridas-logo.svg" alt="" width={48} height={48} className="rounded-sm" />
              <div>
                <h1 className="display text-5xl md:text-6xl">Eridas</h1>
                <p className="mt-1 text-[var(--brass)]">
                  {en
                    ? "Deterministic self-healing software."
                    : "Software auto-reparable y determinista."}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-[38rem] text-xl leading-8 text-[var(--paper)]">
              {en
                ? "AppSec, OpSec, and cyber supply-chain security that does not invent findings. Eridas inventories exact npm lockfile versions, matches them to disclosed OSV advisories, scans what a live app actually leaks, and ships the smallest verified fix as a pull request — or it changes nothing."
                : "AppSec, OpSec y seguridad de la cadena de suministro que no inventa hallazgos. Eridas lee las versiones exactas del lockfile npm, las contrasta con avisos OSV divulgados, escanea lo que filtra una app en vivo y envía el menor fix verificado como pull request — o no cambia nada."}
            </p>
            <p className="mt-4 max-w-[38rem] leading-7 text-[var(--mute)]">
              {en
                ? "Read-only until you opt into a PR. Scripts off during lockfile apply. Fail closed on stale lockfiles and unknown package managers. Optional AI explains confirmed findings only."
                : "Solo lectura hasta que opte por un PR. Scripts desactivados al aplicar el lockfile. Rechaza lockfiles obsoletos y gestores desconocidos. La IA opcional explica solo hallazgos confirmados."}
            </p>

            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              <a
                href="https://erydas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[var(--paper)] px-5 py-2.5 text-[var(--void)] hover:bg-white"
              >
                {en ? "Open erydas.vercel.app" : "Abrir erydas.vercel.app"}
              </a>
              <a
                href="https://erydas.vercel.app/scan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brass)] hover:text-[var(--paper)]"
              >
                {en ? "OpSec recon" : "Recon OpSec"}
              </a>
              <a
                href="https://erydas.vercel.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mute)] hover:text-[var(--paper)]"
              >
                {en ? "API and SDK" : "API y SDK"}
              </a>
            </div>
          </div>

          <aside className="border border-[var(--rule)] p-6 lg:col-span-4">
            <p className="text-sm text-[var(--brass)]">{en ? "Trust boundary" : "Límite de confianza"}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {TRUST.map((row) => (
                <li
                  key={row.label.en}
                  className="flex justify-between gap-4 border-b border-[var(--rule)] pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-[var(--paper)]">{row.label[lang]}</span>
                  <span className="text-right text-[var(--mute)]">{row.value[lang]}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-[var(--rule)] pt-16 md:grid-cols-2">
          <article>
            <h2 className="display text-4xl">{en ? "AppSec" : "AppSec"}</h2>
            <p className="mt-4 max-w-[36rem] leading-7 text-[var(--mute)]">
              {en
                ? "Close disclosed dependency risk. The lockfile is inventory; OSV is the only advisory truth. AI may narrate a confirmed hit — it cannot invent a CVE or pick a version."
                : "Cierra el riesgo de dependencias divulgado. El lockfile es el inventario; OSV es la única fuente de avisos. La IA puede narrar un hallazgo confirmado — no puede inventar un CVE ni elegir una versión."}
            </p>
            <ul className="mt-6 space-y-3 leading-7 text-[var(--mute)]">
              <li>
                {en
                  ? "Exact installed versions, direct and transitive. npm package-lock.json v2/v3. pnpm and Yarn are refused, never silently approximated."
                  : "Versiones exactas instaladas, directas y transitivas. npm package-lock.json v2/v3. pnpm y Yarn se rechazan, nunca se aproximan en silencio."}
              </li>
              <li>
                {en
                  ? "Smallest safe bump. Majors blocked unless you pass --allow-major."
                  : "El menor bump seguro. Los majors se bloquean salvo --allow-major."}
              </li>
              <li>
                {en
                  ? "Lifecycle scripts disabled while the lockfile regenerates. Manifest and lockfile restore together if verification fails."
                  : "Scripts de ciclo de vida desactivados al regenerar el lockfile. Manifiesto y lockfile se restauran juntos si falla la verificación."}
              </li>
              <li>
                {en
                  ? "fix prints a plan first. Non-interactive sessions cannot mutate without --yes or --force. --force skips the prompt only — not major policy, ignore-scripts, OSV rescan, or rollback."
                  : "fix imprime un plan primero. Las sesiones no interactivas no mutan sin --yes o --force. --force omite solo el prompt — no la política de majors, ignore-scripts, el rescan OSV ni el rollback."}
              </li>
            </ul>
          </article>

          <article>
            <h2 className="display text-4xl">{en ? "OpSec" : "OpSec"}</h2>
            <p className="mt-4 max-w-[36rem] leading-7 text-[var(--mute)]">
              {en
                ? "See what the live product leaks. Tinfoil is a passive, GET-only recon of the running app. Four cumulative levels, one graded report. Private, loopback, and metadata addresses are refused."
                : "Vea lo que filtra el producto en vivo. Tinfoil es un reconocimiento pasivo, GET-only, de la app en ejecución. Cuatro niveles acumulativos, un informe graduado. Se rechazan direcciones privadas, loopback y de metadatos."}
            </p>
            <ul className="mt-6 space-y-3 leading-7 text-[var(--mute)]">
              <li>
                {en
                  ? "L1 Surface — headers, CSP, CORS, AI crawlers, llms.txt."
                  : "L1 Superficie — cabeceras, CSP, CORS, crawlers de IA, llms.txt."}
              </li>
              <li>
                {en
                  ? "L2 Exposure (default) — .env, .git, source maps, secrets in bundles."
                  : "L2 Exposición (por defecto) — .env, .git, source maps, secretos en bundles."}
              </li>
              <li>
                {en
                  ? "L3 Supply chain — OSV on announced packages or a lockfile."
                  : "L3 Cadena de suministro — OSV sobre paquetes anunciados o un lockfile."}
              </li>
              <li>
                {en
                  ? "L4 Reconstruction — what an attacker’s agent can rebuild (local only)."
                  : "L4 Reconstrucción — lo que un agente atacante puede reconstruir (solo local)."}
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-[var(--rule)] pt-16 md:grid-cols-3">
          <article>
            <h2 className="display text-2xl">{en ? "Open-source CLI" : "CLI de código abierto"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "The eridas package needs no account. Scan, plan a fix, scaffold CI, run Tinfoil. Same contracts as Cloud: stable JSON, exit codes, dry-run."
                : "El paquete eridas no requiere cuenta. Escanear, planificar un fix, inicializar CI, correr Tinfoil. Los mismos contratos que Cloud: JSON estable, códigos de salida, dry-run."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "GitHub App" : "GitHub App"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "Install the GitHub App, sync repos, and open deterministic fix PRs in an isolated worktree. Lifecycle: queued → running → open → merged. Never a silent push to default."
                : "Instala la GitHub App, sincroniza repos y abre PRs de corrección deterministas en un worktree aislado. Ciclo: queued → running → open → merged. Nunca un push silencioso a la rama por defecto."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "API, SDK, and MCP" : "API, SDK y MCP"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "Headless /api/v1, @eridas/cloud-sdk, @eridas/mcp, and a portable SKILL.md. Humans, CI, SOAR, and coding agents share one contract."
                : "API headless /api/v1, @eridas/cloud-sdk, @eridas/mcp y un SKILL.md portable. Humanos, CI, SOAR y agentes de código comparten un contrato."}
            </p>
          </article>
        </div>

        <div className="mt-16 border border-[var(--rule)] p-6">
          <p className="text-sm text-[var(--mute)]">eridas · AppSec + OpSec</p>
          <pre className="mt-4 overflow-x-auto text-[13px] leading-6 text-[var(--paper)]">
{`npx eridas scan .
npx eridas fix . --dry-run
npx eridas init . --mode fix
npx eridas tinfoil https://example.com --level 2
npx eridas scan . --ai --format json

eridas auth login
eridas cloud repos
eridas cloud scan --repo-id <uuid> --wait

import { EridasCloudClient } from "@eridas/cloud-sdk"`}
          </pre>
        </div>

        <div className="mt-16 border-t border-[var(--rule)] pt-16">
          <h2 className="display text-4xl">{en ? "Full surface" : "Superficie completa"}</h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SURFACE.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brass)] hover:text-[var(--paper)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 border-t border-[var(--rule)] pt-16">
          <h2 className="display text-4xl">
            {en ? "Scan in under a minute" : "Escanear en menos de un minuto"}
          </h2>
          <p className="mt-4 max-w-[38rem] leading-7 text-[var(--mute)]">
            {en
              ? "No account for the CLI. Connect GitHub for Cloud. AppSec on the lockfile, OpSec on the live app. Deterministic results for humans, CI, and coding agents."
              : "Sin cuenta para el CLI. Conecta GitHub para Cloud. AppSec sobre el lockfile, OpSec sobre la app en vivo. Resultados deterministas para humanos, CI y agentes."}
          </p>
          <div className="mt-8">
            <a
              href="https://erydas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[var(--paper)] px-5 py-2.5 text-sm text-[var(--void)] hover:bg-white"
            >
              {en ? "Open erydas.vercel.app" : "Ir a erydas.vercel.app"}
            </a>
          </div>
        </div>
      </main>
    </InstituteShell>
  );
}
