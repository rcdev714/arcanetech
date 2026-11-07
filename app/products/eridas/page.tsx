"use client";

import { InstituteShell, SpecCrumb, useInstituteLang } from "@/app/components/institute-chrome";
import Image from "next/image";

const STEPS = [
  { label: { en: "Lockfile", es: "Lockfile" }, value: { en: "Exact versions", es: "Versiones exactas" } },
  { label: { en: "OSV", es: "OSV" }, value: { en: "Disclosed only", es: "Solo divulgados" } },
  { label: { en: "Plan", es: "Plan" }, value: { en: "Smallest safe bump", es: "Menor bump seguro" } },
  { label: { en: "Approve", es: "Aprobar" }, value: { en: "TTY / --yes / --force", es: "TTY / --yes / --force" } },
  { label: { en: "Verify", es: "Verificar" }, value: { en: "Rescan + checks", es: "Rescan + comprobaciones" } },
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
                    ? "The easiest way to keep your dependencies up to date."
                    : "La forma más simple de mantener las dependencias al día."}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-[38rem] text-xl leading-8 text-[var(--paper)]">
              {en
                ? "Open-source, AI-first npm dependency security with a Cloud API, TypeScript SDK, and MCP. It reads exact lockfile versions, matches them to disclosed OSV advisories, and applies the smallest verified bump."
                : "Seguridad de dependencias npm de código abierto, con API Cloud, SDK TypeScript y MCP. Lee las versiones exactas del package-lock.json, las contrasta con avisos divulgados en OSV y aplica el menor bump verificado."}
            </p>
            <p className="mt-4 max-w-[38rem] leading-7 text-[var(--mute)]">
              {en
                ? "AI explains confirmed findings. It never invents vulnerabilities or picks versions. Live at erydas.vercel.app."
                : "La IA explica hallazgos confirmados. Nunca inventa vulnerabilidades ni elige versiones. En producción en erydas.vercel.app."}
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
                href="https://erydas.vercel.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brass)] hover:text-[var(--paper)]"
              >
                {en ? "API and SDK" : "API y SDK"}
              </a>
              <a
                href="https://erydas.vercel.app/scan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mute)] hover:text-[var(--paper)]"
              >
                {en ? "Scan a site" : "Escanear un sitio"}
              </a>
            </div>
          </div>

          <aside className="border border-[var(--rule)] p-6 lg:col-span-4">
            <p className="text-sm text-[var(--brass)]">{en ? "How it works" : "Cómo funciona"}</p>
            <ol className="mt-4 space-y-3 text-sm">
              {STEPS.map((step) => (
                <li
                  key={step.label.en}
                  className="flex justify-between gap-4 border-b border-[var(--rule)] pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-[var(--paper)]">{step.label[lang]}</span>
                  <span className="text-right text-[var(--mute)]">{step.value[lang]}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-[var(--rule)] pt-16 md:grid-cols-3">
          <article>
            <h2 className="display text-2xl">{en ? "Open-source CLI" : "CLI de código abierto"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "The eridas package needs no account. Scan, plan a fix, scaffold CI. npm with package-lock.json v2/v3. pnpm and Yarn are rejected clearly, not silently approximated."
                : "El paquete eridas no requiere cuenta. Escanear, planificar un fix, inicializar CI. npm con package-lock.json v2/v3. pnpm y Yarn se rechazan de forma explícita."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "GitHub App" : "GitHub App"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "Install the GitHub App, sync repos, and open deterministic fix PRs in an isolated worktree. Lifecycle: queued → running → open → merged. Never pushes to the default branch."
                : "Instala la GitHub App, sincroniza repos y abre PRs de corrección deterministas en un worktree aislado. Ciclo: queued → running → open → merged. Nunca empuja a la rama por defecto."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "API, SDK, and MCP" : "API, SDK y MCP"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "Headless /api/v1 (scans, findings, remediations, repo sync, git-status, package-root, long-poll ?wait=true). SDK @eridas/cloud-sdk. MCP @eridas/mcp. Guided or Dev UI — the same truth."
                : "API headless /api/v1 (scans, findings, remediations, sync, git-status, package-root, long-poll ?wait=true). SDK @eridas/cloud-sdk. MCP @eridas/mcp. UI Guided o Dev — la misma verdad."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "Tinfoil scans (L1–L4)" : "Escaneos Tinfoil (L1–L4)"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "L1 Surface (headers, CSP, robots/llms.txt). L2 Exposure (default: .env, secrets, OpenAPI). L3 Supply chain (OSV). L4 Reconstruction (REA, local only). Each level includes the ones below."
                : "L1 Superficie (cabeceras, CSP, robots/llms.txt). L2 Exposición (default: .env, secretos, OpenAPI). L3 Cadena de suministro (OSV). L4 Reconstrucción (REA, solo local). Cada nivel incluye los anteriores."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "OSV is the source of truth" : "OSV es la fuente de verdad"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "Disclosed advisories only. The lockfile decides what is installed. Optional AI explains confirmed findings and soft-fails without a model — it never invents CVEs or chooses the target version."
                : "Solo avisos divulgados. El lockfile decide lo instalado. La IA opcional explica hallazgos confirmados y falla en suave si no hay modelo — nunca inventa CVEs ni elige la versión destino."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "Approval-first fix" : "Fix con aprobación"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "Backup, rewrite package.json, regenerate the lockfile with --ignore-scripts, rescan, then run verification. Any failure restores both files. --force skips the prompt only. Majors need --allow-major."
                : "Backup, rewrite de package.json, lockfile con --ignore-scripts, rescan y comandos de verificación. Cualquier fallo restaura ambos archivos. --force omite el prompt, no las comprobaciones. Majors requieren --allow-major."}
            </p>
          </article>
        </div>

        <div className="mt-16 border border-[var(--rule)] p-6">
          <p className="text-sm text-[var(--mute)]">eridas · CLI + Cloud</p>
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
          <h2 className="display text-4xl">{en ? "Scan in under a minute" : "Escanear en menos de un minuto"}</h2>
          <p className="mt-4 max-w-[38rem] leading-7 text-[var(--mute)]">
            {en
              ? "No account for the CLI. Connect GitHub for Cloud. Deterministic results for humans, CI, and coding agents."
              : "Sin cuenta para el CLI. Conecta GitHub para Cloud. Resultados deterministas para humanos, CI y agentes."}
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
