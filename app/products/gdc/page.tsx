"use client";

import { InstituteShell, SpecCrumb, useInstituteLang } from "@/app/components/institute-chrome";
import Image from "next/image";
import Link from "next/link";

const MARKETS = [
  { country: { en: "Ecuador", es: "Ecuador" }, id: "RUC · SCVS", count: "170K+" },
  { country: { en: "Mexico", es: "México" }, id: "CLEE · DENUE", count: "248K+" },
  { country: { en: "United States", es: "Estados Unidos" }, id: "CIK · EDGAR", count: "8K+" },
  { country: { en: "Brazil", es: "Brasil" }, id: "CNPJ · Receita / CVM", count: "—" },
  { country: { en: "Colombia", es: "Colombia" }, id: "NIT · Supersociedades", count: "—" },
  { country: { en: "Argentina", es: "Argentina" }, id: "CUIT · RNS / CNV", count: "100K+" },
  { country: { en: "Chile", es: "Chile" }, id: "RUT · SII / CMF", count: "263K+" },
];

export default function GlobalDataCapitalProductPage() {
  const [lang, setLang] = useInstituteLang("en");
  const en = lang === "en";
  const mcpDocs = en
    ? "https://globaldatacapital.com/en/docs/mcp"
    : "https://globaldatacapital.com/es/docs/mcp";

  return (
    <InstituteShell lang={lang} onLang={setLang}>
      <main className="mx-auto w-full max-w-[72rem] px-6 py-16">
        <SpecCrumb lang={lang} leaf="Global Data Capital" />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <Image src="/gdc-logo.svg" alt="" width={48} height={48} className="rounded-sm" />
              <div>
                <h1 className="display text-5xl md:text-6xl">Global Data Capital</h1>
                <p className="mt-1 text-[var(--brass)]">
                  {en
                    ? "Find and audit any company in the Americas."
                    : "Encuentre y audite cualquier empresa en las Américas."}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-[38rem] text-xl leading-8 text-[var(--paper)]">
              {en
                ? "The B2B system for humans and agents to find and contact any company in the Americas — directory search after sign-in, plus API and Global Data Capital MCP. Companies only, never people."
                : "El sistema B2B para que humanos y agentes encuentren y contacten cualquier empresa en las Américas — búsqueda en el directorio tras iniciar sesión, más API y Global Data Capital MCP. Solo empresas, nunca personas."}
            </p>
            <p className="mt-4 max-w-[38rem] leading-7 text-[var(--mute)]">
              {en
                ? "Seven live markets. 803K+ companies. Formerly Camella (camella.app) — same registry network under the new brand and domain."
                : "Siete mercados en vivo. 803K+ empresas. Antes Camella (camella.app) — misma red registral, marca y dominio nuevos."}
            </p>

            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              <a
                href="https://globaldatacapital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[var(--paper)] px-5 py-2.5 text-[var(--void)] hover:bg-white"
              >
                {en ? "Open globaldatacapital.com" : "Abrir globaldatacapital.com"}
              </a>
              <a
                href={mcpDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brass)] hover:text-[var(--paper)]"
              >
                {en ? "MCP documentation" : "Documentación MCP"}
              </a>
            </div>
          </div>

          <aside className="border border-[var(--rule)] p-6 lg:col-span-4">
            <p className="text-sm text-[var(--brass)]">{en ? "Seven live markets" : "Siete mercados en vivo"}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {MARKETS.map((market) => (
                <li key={market.id} className="flex justify-between gap-4 border-b border-[var(--rule)] pb-2 last:border-0 last:pb-0">
                  <span className="text-[var(--paper)]">{market.country[lang]}</span>
                  <span className="text-right text-[var(--mute)]">
                    {market.id}
                    {market.count !== "—" ? ` · ${market.count}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-[var(--rule)] pt-16 md:grid-cols-3">
          <article>
            <h2 className="display text-2xl">{en ? "Company search" : "Búsqueda societaria"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "After sign-in, look up RUC, CLEE, CIK, CNPJ, NIT, CUIT, and RUT. Search is free on the Free plan within limits. A few demo identity pages stay public."
                : "Tras iniciar sesión, consulte RUC, CLEE, CIK, CNPJ, NIT, CUIT y RUT. La búsqueda es gratuita en el plan Free dentro de sus límites. Algunas fichas demo siguen públicas."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "Research agent" : "Agente de investigación"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "The agent finds public filings, news, and company pages and returns them next to the registry match. Company due diligence, no guarantees. Unlocks with an account and plan."
                : "El agente busca filings, noticias y sitios públicos y los devuelve junto a la coincidencia registral. Due diligence de empresas, sin garantías. Se desbloquea con cuenta y plan."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "Find and contact" : "Encuentre y contacte"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "Public identity first; exact streets, contacts, and financials wait for an account. CORPORACIÓN FAVORITA C.A. (RUC 1790016919001) is the demo firm."
                : "Identidad pública primero; calles exactas, contactos y financieros esperan una cuenta. Corporación Favorita C.A. (RUC 1790016919001) es la ficha demo."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "Financials where filings exist" : "Financieros donde hay filings"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "Each market keeps its identifier, currency, and regulator. Headline numbers unlock on paid plans; Free cannot see financials (403 on get_financials)."
                : "Cada mercado conserva identificador, moneda y regulador. Las cifras se desbloquean en planes de pago; el plan Free no ve números (403 en get_financials)."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "REST API and MCP" : "API REST y MCP"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "The same registry match in the product and in JSON. Three read-only tools: search_companies, get_company, and get_financials. Mint a gdc_live_ key after signup."
                : "La misma coincidencia registral en la app y en JSON. Tres herramientas de solo lectura: search_companies, get_company y get_financials. Claves gdc_live_ tras registrarse."}
            </p>
          </article>
          <article>
            <h2 className="display text-2xl">{en ? "Globe and offerings" : "Mapa y ofertas"}</h2>
            <p className="mt-3 leading-7 text-[var(--mute)]">
              {en
                ? "Multi-country directory, companies globe with warehouse map lights, sales agent, and public offerings. Stripe plans: Free / Pro / Enterprise."
                : "Directorio multi-país, globo de empresas con luces de almacén, agente de ventas y ofertas públicas. Planes Stripe Free / Pro / Enterprise."}
            </p>
          </article>
        </div>

        <div className="mt-16 border border-[var(--rule)] p-6">
          <p className="text-sm text-[var(--mute)]">
            {en ? "Agent surface · Bearer gdc_live_" : "Superficie de agente · Bearer gdc_live_"}
          </p>
          <pre className="mt-4 overflow-x-auto text-[13px] leading-6 text-[var(--paper)]">
{`npx add-mcp https://globaldatacapital.com/api/mcp \\
  --name gdc \\
  --header "Authorization: Bearer \${GDC_API_KEY}"

{
  "url": "https://globaldatacapital.com/api/mcp",
  "headers": {
    "Authorization": "Bearer \${env:GDC_API_KEY}"
  }
}

// search_companies  GET /api/v1/search
// get_company       GET /api/v1/entities/…
// get_financials    GET /api/v1/entities/…/financials`}
          </pre>
        </div>

        <div className="mt-20 border-t border-[var(--rule)] pt-16">
          <h2 className="display text-4xl">
            {en ? "Create an account to search the directory" : "Cree una cuenta para buscar en el directorio"}
          </h2>
          <p className="mt-4 max-w-[38rem] leading-7 text-[var(--mute)]">
            {en
              ? "Directory search requires a user account. A few demo company pages stay public. Support: soporte@globaldatacapital.com."
              : "La búsqueda requiere sesión. Algunas páginas demo siguen públicas. Soporte: soporte@globaldatacapital.com."}
          </p>
          <div className="mt-8">
            <a
              href="https://globaldatacapital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[var(--paper)] px-5 py-2.5 text-sm text-[var(--void)] hover:bg-white"
            >
              {en ? "Get started on globaldatacapital.com" : "Comenzar en globaldatacapital.com"}
            </a>
          </div>
          <p className="mt-8 text-sm text-[var(--mute)]">
            <Link href="/" className="hover:text-[var(--paper)]">
              {en ? "Back to the laboratory" : "Volver al laboratorio"}
            </Link>
          </p>
        </div>
      </main>
    </InstituteShell>
  );
}
