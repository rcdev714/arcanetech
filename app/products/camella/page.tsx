"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CamellaProductPage() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <div className="relative min-h-screen flex flex-col bg-[#07070A] text-[#F3F4F6] tech-grid">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] hero-glow-1 pointer-events-none" />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] backdrop-blur-xl bg-[#07070A]/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white hover:opacity-85 transition">
              <Image src="/arcanetech-logo.svg" alt="ArcaneTech" width={24} height={24} className="rounded" />
              <span>ArcaneTech</span>
            </Link>
            <span className="text-[rgba(255,255,255,0.2)]">/</span>
            <div className="flex items-center gap-2">
              <Image src="/camella-logo.svg" alt="Camella" width={20} height={20} className="rounded" />
              <span className="text-xs font-mono font-medium text-white/90">Camella</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border border-[rgba(255,255,255,0.12)] rounded-full p-0.5 bg-black/40">
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition ${
                  lang === "es" ? "bg-[#6366F1] text-white" : "text-white/50 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition ${
                  lang === "en" ? "bg-[#6366F1] text-white" : "text-white/50 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="https://camella.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-[#6366F1] hover:bg-[#4F46E5] shadow-lg shadow-indigo-500/20 transition-all"
            >
              <span>{lang === "es" ? "Abrir Camella" : "Launch Camella"}</span>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 w-full">
        {/* Breadcrumb & status */}
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="text-xs font-mono text-white/50 hover:text-white transition">
            ← {lang === "es" ? "Inicio ArcaneTech" : "ArcaneTech Home"}
          </Link>
          <span className="text-white/20">|</span>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono">
            <span className="status-dot-active" />
            <span>{lang === "es" ? "Producción Activa · 7 Jurisdicciones" : "Live Production · 7 Jurisdictions"}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-[rgba(255,255,255,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white p-2 border border-white/20 shadow-xl flex items-center justify-center">
                <Image src="/camella-logo.svg" alt="Camella" width={42} height={42} className="object-contain" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  Camella
                </h1>
                <p className="text-xs font-mono text-[#818CF8] mt-0.5">camella.app · B2B Corporate Intelligence Engine</p>
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mt-6">
              {lang === "es"
                ? "El sistema de inteligencia registral y directorio B2B para las Américas. Diseñado para que humanos, analistas de riesgo y agentes autónomos resuelvan la identidad legal de personas jurídicas en Ecuador, México, Estados Unidos, Brasil, Colombia, Argentina y Chile."
                : "The B2B corporate directory and registry intelligence system for the Americas. Engineered for human analysts and autonomous AI agents to query, resolve, and audit legal entities across Ecuador, Mexico, the United States, Brazil, Colombia, Argentina, and Chile."}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://camella.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 transition"
              >
                <span>{lang === "es" ? "Acceder a camella.app" : "Go to camella.app"}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://camella.app/en/docs/mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono text-[#A5B4FC] bg-[#6366F1]/15 border border-[#6366F1]/30 hover:bg-[#6366F1]/25 transition"
              >
                <span>⚡ {lang === "es" ? "Documentación MCP" : "MCP Documentation"}</span>
              </a>
            </div>
          </div>

          {/* Quick Registry Summary Box */}
          <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-[rgba(255,255,255,0.12)]">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
              {lang === "es" ? "Fuentes Oficiales Conectadas" : "Connected Official Sources"}
            </h3>
            <ul className="space-y-3 font-mono text-xs text-white/80">
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">🇪🇨 Ecuador</span>
                <span className="text-emerald-400 font-semibold">RUC · SCVS / SRI</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">🇲🇽 México</span>
                <span className="text-emerald-400 font-semibold">CLEE · DENUE / INEGI</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">🇺🇸 USA</span>
                <span className="text-emerald-400 font-semibold">CIK · SEC EDGAR</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">🇧🇷 Brasil</span>
                <span className="text-emerald-400 font-semibold">CNPJ · Receita / CVM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">🇨🇴 Colombia</span>
                <span className="text-emerald-400 font-semibold">NIT · Supersociedades</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">🇦🇷 Argentina</span>
                <span className="text-emerald-400 font-semibold">CUIT · RNS</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">🇨🇱 Chile</span>
                <span className="text-emerald-400 font-semibold">RUT · SII PJ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-indigo absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">🔍</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Motor de Búsqueda y Resolución" : "Resolution Engine"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Consulta por razón social, nombre comercial o identificador legal exacto. Normalización automática de caracteres y trazabilidad hacia la gaceta pública."
                : "Query by registered corporate trade name or tax code. Automatic phonetic normalization and cryptographic traceability back to public gazettes."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-purple absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">⚡</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Model Context Protocol (MCP)" : "Model Context Protocol (MCP)"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Servidor nativo para Cursor, Claude Code, OpenAI Codex y ChatGPT. Permite a tus agentes consultar estados societarios directamente en su contexto de ejecución."
                : "Native MCP server for Cursor, Claude Code, OpenAI Codex, and ChatGPT. Gives your coding and research agents direct tool access to live corporate registries."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-emerald absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">📊</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Dossier Financiero & Contactos" : "Financial Dossiers & Contacts"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Desbloqueo de métricas auditadas, balances, representantes legales y agentes de contacto verificado mediante autenticación y niveles de acceso corporativo."
                : "Unlocks historical balance sheets, authorized legal representatives, verified contact channels, and automated entity risk scores."}
            </p>
          </div>
        </div>

        {/* Live Code / Integration Snippet */}
        <div className="glass-panel p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] mb-16">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-white/50">Camella MCP · Claude / Cursor Integration</span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Ready to install</span>
          </div>

          <pre className="font-mono text-xs leading-6 text-white/80 overflow-x-auto bg-black/60 p-4 rounded-xl border border-white/5">
{`// Add Camella MCP to your agent or IDE configuration (claude_desktop_config.json)
{
  "mcpServers": {
    "camella": {
      "command": "npx",
      "args": ["-y", "@camella/mcp-server"],
      "env": {
        "CAMELLA_API_KEY": "cam_live_your_api_key_here"
      }
    }
  }
}

// Example Agent Tool Call:
// Agent: "Check if Corporación Favorita is active in Ecuador and get its tax identification"
// Camella Output: { "tax_id": "1790016919001", "name": "CORPORACIÓN FAVORITA C.A.", "status": "ACTIVE", "jurisdiction": "EC" }`}
          </pre>
        </div>

        {/* Footer CTA */}
        <div className="text-center py-12 border-t border-[rgba(255,255,255,0.08)]">
          <h2 className="text-2xl font-bold text-white mb-4">
            {lang === "es" ? "¿Listo para integrar datos de empresas?" : "Ready to integrate corporate intelligence?"}
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto mb-8">
            {lang === "es"
              ? "Accede al directorio público de forma gratuita o solicita una clave de API para flujos automatizados."
              : "Search the public registry for free or generate an API key for high-throughput automated workflows."}
          </p>
          <a
            href="https://camella.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#6366F1] hover:bg-[#4F46E5] shadow-lg shadow-indigo-500/30 transition-all"
          >
            <span>{lang === "es" ? "Comenzar en camella.app" : "Get Started on camella.app"}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
