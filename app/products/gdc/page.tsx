"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GlobalDataCapitalProductPage() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const mcpDocs = lang === "es" ? "https://globaldatacapital.com/es/docs/mcp" : "https://globaldatacapital.com/en/docs/mcp";

  return (
    <div className="relative min-h-screen flex flex-col bg-[#07070A] text-[#F3F4F6] tech-grid">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] hero-glow-1 pointer-events-none" />

      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] backdrop-blur-xl bg-[#07070A]/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white hover:opacity-85 transition">
              <Image src="/arcanetech-logo.svg" alt="ArcaneTech" width={24} height={24} className="rounded" />
              <span>ArcaneTech</span>
            </Link>
            <span className="text-[rgba(255,255,255,0.2)]">/</span>
            <div className="flex items-center gap-2">
              <Image src="/gdc-logo.svg" alt="Global Data Capital" width={20} height={20} className="rounded" />
              <span className="text-xs font-mono font-medium text-white/90">GDC</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border border-[rgba(255,255,255,0.12)] rounded-full p-0.5 bg-black/40">
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition ${
                  lang === "es" ? "bg-[#EBF212] text-black" : "text-white/50 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition ${
                  lang === "en" ? "bg-[#EBF212] text-black" : "text-white/50 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="https://globaldatacapital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-black bg-[#EBF212] hover:bg-[#f4f86a] shadow-lg shadow-yellow-500/10 transition-all"
            >
              <span>{lang === "es" ? "Abrir GDC" : "Launch GDC"}</span>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono">
            <span className="status-dot-active" />
            <span>{lang === "es" ? "Producción Activa · 7 Mercados · 803K+ Empresas" : "Live Production · 7 Markets · 803K+ Companies"}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-[rgba(255,255,255,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl shrink-0">
                <Image src="/gdc-logo.svg" alt="Global Data Capital" width={56} height={56} className="object-contain" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  Global Data Capital
                </h1>
                <p className="text-xs font-mono text-[#EBF212] mt-0.5">
                  globaldatacapital.com · {lang === "es" ? "Inteligencia societaria verificada desde registros públicos" : "Verified company intelligence from public registries"}
                </p>
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mt-6">
              {lang === "es"
                ? "El sistema B2B para que humanos y agentes encuentren y contacten cualquier empresa en las Américas — búsqueda en el directorio tras iniciar sesión, más API y Global Data Capital MCP. Cubre Ecuador, México, Estados Unidos, Brasil, Colombia, Argentina y Chile. Solo empresas, nunca personas."
                : "The B2B system for humans and agents to find and contact any company in the Americas — directory search after sign-in, plus API and Global Data Capital MCP. Covers Ecuador, Mexico, the United States, Brazil, Colombia, Argentina, and Chile. Companies only, never people."}
            </p>
            <p className="text-xs font-mono text-white/40 mt-3">
              {lang === "es"
                ? "Antes Camella (camella.app). Misma red registral, marca y dominio nuevos."
                : "Formerly Camella (camella.app). Same registry network under the new brand and domain."}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://globaldatacapital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 transition"
              >
                <span>{lang === "es" ? "Acceder a globaldatacapital.com" : "Go to globaldatacapital.com"}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={mcpDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono text-[#EBF212] bg-[#EBF212]/10 border border-[#EBF212]/30 hover:bg-[#EBF212]/15 transition"
              >
                <span>⚡ {lang === "es" ? "Documentación MCP" : "MCP Documentation"}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-[rgba(255,255,255,0.12)]">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
              {lang === "es" ? "Siete mercados en vivo" : "Seven live markets"}
            </h3>
            <ul className="space-y-3 font-mono text-xs text-white/80">
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">🇪🇨 Ecuador</span>
                <span className="text-emerald-400 font-semibold">RUC · SCVS · 170K+</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">🇲🇽 México</span>
                <span className="text-emerald-400 font-semibold">CLEE · DENUE · 248K+</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">🇺🇸 USA</span>
                <span className="text-emerald-400 font-semibold">CIK · EDGAR · 8K+</span>
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
                <span className="text-emerald-400 font-semibold">CUIT · RNS / CNV · 100K+</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">🇨🇱 Chile</span>
                <span className="text-emerald-400 font-semibold">RUT · SII / CMF · 263K+</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-indigo absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">🔍</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Búsqueda de información societaria" : "Company information search"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Tras iniciar sesión, consulte RUC, CLEE, CIK, CNPJ, NIT, CUIT y RUT en siete mercados. La búsqueda es gratuita en el plan Free dentro de sus límites. Algunas fichas demo siguen públicas."
                : "After sign-in, look up RUC, CLEE, CIK, CNPJ, NIT, CUIT, and RUT across seven live markets. Search is free on the Free plan within plan limits. A few demo identity pages stay public."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-purple absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">🤖</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Agente de investigación" : "AI research agent"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "El agente busca en la web información pública de la empresa — filings, noticias y sitios — y la devuelve junto a la coincidencia registral. Due diligence de empresas, sin garantías. Se desbloquea con cuenta y plan."
                : "The agent finds publicly available filings, news, and company pages and returns them next to the registry match. Company due diligence, no guarantees. Unlocks with an account and the right plan."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-emerald absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">📇</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Encuentre y contacte" : "Find and contact"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Identidad pública primero; calles exactas, contactos y financieros esperan una cuenta. Corporación Favorita C.A. (RUC 1790016919001) es la ficha demo. Ofertas y mapa de empresas están en el producto."
                : "Public identity first; exact streets, contacts, and financials wait for an account. CORPORACIÓN FAVORITA C.A. (RUC 1790016919001) is the demo firm. Offerings and the companies globe live in the product."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-indigo absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">📊</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Financieros donde hay filings" : "Financials where filings exist"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Cada mercado conserva identificador, moneda y regulador. Las cifras se desbloquean en planes de pago; el plan Free no ve números (403 en get_financials)."
                : "Each market keeps its identifier, currency, and regulator. Headline numbers unlock on paid plans; Free cannot see financials (403 on get_financials)."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-purple absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">⚡</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "API REST y MCP" : "REST API and MCP"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "La misma coincidencia registral en la app y en JSON. Tres herramientas de solo lectura: search_companies, get_company y get_financials. Claves gdc_live_ tras registrarse. Endpoint: /api/mcp."
                : "The same registry match in the product and in JSON. Three read-only tools: search_companies, get_company, and get_financials. Mint a gdc_live_ key after signup. Endpoint: /api/mcp."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-emerald absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">🌐</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Mapa y ofertas" : "Globe map and offerings"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Directorio multi-país, globo de empresas con luces de almacén, agente de ventas y ofertas públicas. Planes Stripe Free / Pro / Enterprise."
                : "Multi-country directory, companies globe with warehouse map lights, sales agent, and public offerings. Stripe plans: Free / Pro / Enterprise."}
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] mb-16">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-white/50">Global Data Capital MCP · Cursor / Claude / Codex</span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">HTTP · Bearer gdc_live_</span>
          </div>

          <pre className="font-mono text-xs leading-6 text-white/80 overflow-x-auto bg-black/60 p-4 rounded-xl border border-white/5">
{`npx add-mcp https://globaldatacapital.com/api/mcp \\
  --name gdc \\
  --header "Authorization: Bearer \${GDC_API_KEY}"

// Cursor MCP config
{
  "url": "https://globaldatacapital.com/api/mcp",
  "headers": {
    "Authorization": "Bearer \${env:GDC_API_KEY}"
  }
}

// Read-only tools → existing /api/v1 handlers
// search_companies  GET /api/v1/search
// get_company       GET /api/v1/entities/…
// get_financials    GET /api/v1/entities/…/financials`}
          </pre>
        </div>

        <div className="text-center py-12 border-t border-[rgba(255,255,255,0.08)]">
          <h2 className="text-2xl font-bold text-white mb-4">
            {lang === "es" ? "Cree una cuenta para buscar en el directorio" : "Create an account to search the directory"}
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto mb-8">
            {lang === "es"
              ? "La búsqueda requiere sesión. Algunas páginas demo siguen públicas. Soporte: soporte@globaldatacapital.com."
              : "Directory search requires a user account. A few demo company pages stay public. Support: soporte@globaldatacapital.com."}
          </p>
          <a
            href="https://globaldatacapital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-black bg-[#EBF212] hover:bg-[#f4f86a] shadow-lg shadow-yellow-500/10 transition-all"
          >
            <span>{lang === "es" ? "Comenzar en globaldatacapital.com" : "Get Started on globaldatacapital.com"}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
