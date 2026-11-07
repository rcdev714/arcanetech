"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EridasProductPage() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <div className="relative min-h-screen flex flex-col bg-[#07070A] text-[#F3F4F6] tech-grid">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(11,107,110,0.28),transparent_70%)] pointer-events-none" />

      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] backdrop-blur-xl bg-[#07070A]/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white hover:opacity-85 transition">
              <Image src="/arcanetech-logo.svg" alt="ArcaneTech" width={24} height={24} className="rounded" />
              <span>ArcaneTech</span>
            </Link>
            <span className="text-[rgba(255,255,255,0.2)]">/</span>
            <div className="flex items-center gap-2">
              <Image src="/eridas-logo.svg" alt="Eridas" width={20} height={20} className="rounded" />
              <span className="text-xs font-mono font-medium text-teal-300">Eridas</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border border-[rgba(255,255,255,0.12)] rounded-full p-0.5 bg-black/40">
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition ${
                  lang === "es" ? "bg-teal-700 text-white" : "text-white/50 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition ${
                  lang === "en" ? "bg-teal-700 text-white" : "text-white/50 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="https://erydas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-black bg-[#C9F5F7] hover:bg-white font-mono shadow-lg shadow-teal-500/10 transition-all"
            >
              <span>{lang === "es" ? "Abrir Eridas" : "Launch Eridas"}</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="text-xs font-mono text-white/50 hover:text-white transition">
            ← {lang === "es" ? "Inicio ArcaneTech" : "ArcaneTech Home"}
          </Link>
          <span className="text-white/20">|</span>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-[11px] font-mono">
            <span className="status-dot-active" />
            <span>{lang === "es" ? "Novedad · En producción · erydas.vercel.app" : "What's New · Live · erydas.vercel.app"}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-[rgba(255,255,255,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl shrink-0">
                <Image src="/eridas-logo.svg" alt="Eridas" width={56} height={56} className="object-contain" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  Eridas
                </h1>
                <p className="text-xs font-mono text-teal-300 mt-0.5">
                  erydas.vercel.app · {lang === "es" ? "Software auto-reparable y determinista" : "Deterministic self-healing software"}
                </p>
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mt-6">
              {lang === "es"
                ? "La forma más simple de mantener las dependencias al día. Eridas es seguridad de dependencias npm de código abierto, con API Cloud, SDK TypeScript y MCP. Lee las versiones exactas del package-lock.json, las contrasta con avisos divulgados en OSV y aplica el menor bump verificado. La IA explica hallazgos confirmados; nunca inventa vulnerabilidades ni elige versiones."
                : "The easiest way to keep your dependencies up to date. Eridas is open-source, AI-first npm dependency security with a Cloud API, TypeScript SDK, and MCP. It reads exact lockfile versions, matches them to disclosed OSV advisories, and applies the smallest verified bump. AI explains confirmed findings; it never invents vulns or picks versions."}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://erydas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-black bg-[#C9F5F7] hover:bg-white font-mono shadow-lg shadow-teal-500/15 transition"
              >
                <span>{lang === "es" ? "Abrir erydas.vercel.app" : "Open erydas.vercel.app"}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://erydas.vercel.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono text-teal-200 bg-teal-500/10 border border-teal-500/25 hover:bg-teal-500/15 transition"
              >
                {lang === "es" ? "API y SDK" : "API & SDK"}
              </a>
              <a
                href="https://erydas.vercel.app/scan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono text-white/70 bg-white/5 border border-white/10 hover:text-white transition"
              >
                {lang === "es" ? "Escanear un sitio" : "Scan a site"}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-teal-500/20">
            <h3 className="text-xs font-mono uppercase tracking-widest text-teal-300 mb-4">
              {lang === "es" ? "Cómo funciona" : "How it works"}
            </h3>
            <ul className="space-y-3 font-mono text-xs text-white/80">
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">01 Lockfile</span>
                <span className="text-teal-300 font-semibold">Exact versions</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">02 OSV</span>
                <span className="text-teal-300 font-semibold">Disclosed only</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">03 Plan</span>
                <span className="text-teal-300 font-semibold">Min safe bump</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">04 Approve</span>
                <span className="text-teal-300 font-semibold">TTY / --yes / --force</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">05 Verify</span>
                <span className="text-teal-300 font-semibold">Rescan + checks</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-teal-500/20">
            <div className="card-glow-emerald absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">📦</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "CLI de código abierto" : "Open-source CLI"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "El paquete eridas no requiere cuenta. Escanear, planificar un fix, inicializar CI. npm con package-lock.json v2/v3. pnpm y Yarn se rechazan de forma explícita."
                : "The eridas package needs no account. Scan, plan a fix, scaffold CI. npm with package-lock.json v2/v3. pnpm and Yarn are rejected clearly, not silently approximated."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-cyan-500/20">
            <div className="card-glow-indigo absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">🔗</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "GitHub App · escanear, corregir, fusionar" : "GitHub App · scan, fix, merge"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Instala la GitHub App, sincroniza repos y abre PRs de corrección deterministas en un worktree aislado. Ciclo: queued → running → open → merged. Nunca empuja a la rama por defecto."
                : "Install the GitHub App, sync repos, and open deterministic fix PRs in an isolated worktree. Lifecycle: queued → running → open → merged. Never pushes to the default branch."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-purple-500/20">
            <div className="card-glow-purple absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">🛠️</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "API, SDK y MCP" : "API, SDK, and MCP"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "API headless /api/v1 (scans, findings, remediations, sync, git-status, package-root, long-poll ?wait=true). SDK @eridas/cloud-sdk. MCP @eridas/mcp. UI Guided o Dev — la misma verdad."
                : "Headless /api/v1 (scans, findings, remediations, repo sync, git-status, package-root, long-poll ?wait=true). SDK @eridas/cloud-sdk. MCP @eridas/mcp. Guided or Dev UI — the same truth."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-teal-500/20">
            <div className="card-glow-emerald absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">🛡️</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Escaneos Tinfoil (L1–L4)" : "Tinfoil live-site scans (L1–L4)"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "L1 Superficie (cabeceras, CSP, robots/llms.txt). L2 Exposición (default: .env, secretos, OpenAPI). L3 Cadena de suministro (OSV). L4 Reconstrucción (REA, solo local). Cada nivel incluye los anteriores."
                : "L1 Surface (headers, CSP, robots/llms.txt). L2 Exposure (default: .env, secrets, OpenAPI). L3 Supply chain (OSV). L4 Reconstruction (REA, local only). Each level includes the ones below."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-cyan-500/20">
            <div className="card-glow-indigo absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">⚖️</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "OSV es la fuente de verdad" : "OSV is the source of truth"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Solo avisos divulgados. El lockfile decide lo instalado. La IA opcional explica hallazgos confirmados y falla en suave si no hay modelo — nunca inventa CVEs ni elige la versión destino."
                : "Disclosed advisories only. The lockfile decides what is installed. Optional AI explains confirmed findings and soft-fails without a model — it never invents CVEs or chooses the target version."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-purple-500/20">
            <div className="card-glow-purple absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">✅</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Fix con aprobación y rollback" : "Approval-first fix with rollback"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Backup, rewrite de package.json, lockfile con --ignore-scripts, rescan y comandos de verificación. Cualquier fallo restaura ambos archivos. --force omite el prompt, no las comprobaciones. Majors requieren --allow-major."
                : "Backup, rewrite package.json, regenerate the lockfile with --ignore-scripts, rescan, then run verification commands. Any failure restores both files. --force skips the prompt only, not integrity checks. Majors need --allow-major."}
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-teal-500/20 mb-16">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-white/50">eridas · CLI + Cloud</span>
            <span className="text-[11px] font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded">npx eridas scan .</span>
          </div>

          <pre className="font-mono text-xs leading-6 text-white/80 overflow-x-auto bg-black/60 p-4 rounded-xl border border-white/5">
{`# Open-source CLI — no account
npx eridas scan .
npx eridas fix . --dry-run
npx eridas init . --mode fix
npx eridas tinfoil https://example.com --level 2
npx eridas scan . --ai --format json

# Eridas Cloud
eridas auth login
eridas cloud repos
eridas cloud scan --repo-id <uuid> --wait

import { EridasCloudClient } from "@eridas/cloud-sdk"`}
          </pre>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-white/10 mb-16">
          <h2 className="text-lg font-semibold text-white mb-4">
            {lang === "es" ? "Superficie completa" : "Full surface"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-white/70">
            <a href="https://erydas.vercel.app/how-it-works" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              /how-it-works →
            </a>
            <a href="https://erydas.vercel.app/docs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              /docs · API & SDK →
            </a>
            <a href="https://erydas.vercel.app/commands" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              /commands →
            </a>
            <a href="https://erydas.vercel.app/scan-levels" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              /scan-levels →
            </a>
            <a href="https://erydas.vercel.app/agents" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              /agents · MCP & SKILL.md →
            </a>
            <a href="https://erydas.vercel.app/security" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              /security →
            </a>
            <a href="https://erydas.vercel.app/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              /llms.txt →
            </a>
            <a href="https://erydas.vercel.app/login" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              /login · Cloud dashboard →
            </a>
          </div>
        </div>

        <div className="text-center py-12 border-t border-[rgba(255,255,255,0.08)]">
          <h2 className="text-2xl font-bold text-white mb-4">
            {lang === "es" ? "Escanear en menos de un minuto" : "Scan in under a minute"}
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto mb-8">
            {lang === "es"
              ? "Sin cuenta para el CLI. Conecta GitHub para Cloud. Resultados deterministas para humanos, CI y agentes."
              : "No account for the CLI. Connect GitHub for Cloud. Deterministic results for humans, CI, and coding agents."}
          </p>
          <a
            href="https://erydas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-black bg-[#C9F5F7] hover:bg-white shadow-lg shadow-teal-500/10 transition-all"
          >
            <span>{lang === "es" ? "Ir a erydas.vercel.app" : "Open erydas.vercel.app"}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
