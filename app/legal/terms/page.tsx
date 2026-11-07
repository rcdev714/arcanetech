"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TermsOfUsePage() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <div className="relative min-h-screen flex flex-col bg-[#07070A] text-[#F3F4F6] tech-grid">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] backdrop-blur-xl bg-[#07070A]/85">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white hover:opacity-85 transition">
            <Image src="/arcanetech-logo.svg" alt="ArcaneTech" width={24} height={24} className="rounded" />
            <span>ArcaneTech</span>
          </Link>

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

            <Link
              href="/legal/privacy"
              className="text-xs font-mono text-white/70 hover:text-white transition"
            >
              {lang === "es" ? "Política de Privacidad →" : "Privacy Policy →"}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="mb-10 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[11px] font-mono mb-4">
            <span>Arcane Echos Technologies SAS · Legal Disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {lang === "es" ? "Términos y Condiciones de Uso" : "Terms of Service & User Agreement"}
          </h1>
          <p className="text-xs font-mono text-white/50 mt-2">
            {lang === "es"
              ? "Última actualización: 6 de noviembre de 2026 · Válido para todos los productos de ArcaneTech (Global Data Capital, AnyMarkt, Eridas)"
              : "Last updated: November 6, 2026 · Governing all ArcaneTech software products (Global Data Capital, AnyMarkt, Eridas)"}
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-white/80">
          {/* Section 1 */}
          <section className="glass-panel p-6 rounded-2xl border border-white/10">
            <h2 className="text-base font-semibold text-white mb-3">
              1. {lang === "es" ? "Identificación del Titular y Alcance Global" : "Corporate Identity & Global Scope"}
            </h2>
            <p className="text-xs text-white/70 leading-relaxed mb-3">
              {lang === "es"
                ? "El presente contrato de Términos y Condiciones regula el acceso y utilización de las plataformas digitales, APIs, servicios web y protocolos de software operados por ARCANE ECHOS TECHNOLOGIES S.A.S. (en adelante, 'ArcaneTech', 'la Compañía' o 'nosotros'), sociedad por acciones simplificada debidamente constituida y registrada de conformidad con las leyes de la República del Ecuador, con domicilio principal en el territorio ecuatoriano e inscrita ante la Superintendencia de Compañías, Valores y Seguros."
                : "This User Agreement governs the access and utilization of all digital platforms, APIs, web interfaces, and software protocols operated by ARCANE ECHOS TECHNOLOGIES S.A.S. (hereinafter, 'ArcaneTech', 'the Company', or 'we'), a simplified joint-stock corporation duly incorporated and organized under the laws of the Republic of Ecuador, registered before the Superintendence of Companies, Securities, and Insurance."}
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Aunque ArcaneTech opera bajo personería jurídica ecuatoriana, sus productos tienen un mercado de alcance global. Los usuarios que accedan desde otras jurisdicciones internacionales son responsables del cumplimiento de sus normativas locales, sin perjuicio de las disposiciones de protección al consumidor irrenunciables en su país de residencia."
                : "While ArcaneTech operates under Ecuadorian corporate jurisdiction, our technological infrastructure and products serve an international market. Cross-border users retain non-waivable statutory consumer protections under their local laws."}
            </p>
          </section>

          {/* Section 2 */}
          <section className="glass-panel p-6 rounded-2xl border border-white/10">
            <h2 className="text-base font-semibold text-white mb-3">
              2. {lang === "es" ? "Términos Específicos por Producto" : "Product-Specific Conditions"}
            </h2>
            <div className="space-y-4 text-xs text-white/70">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <h3 className="text-white font-medium mb-1">A. Global Data Capital (globaldatacapital.com)</h3>
                <p>
                  {lang === "es"
                    ? "Global Data Capital (antes Camella / camella.app) es un directorio B2B e inteligencia registral que consolida información pública de personas jurídicas en Ecuador, México, EE. UU., Brasil, Colombia, Argentina y Chile. No es un organismo emisor oficial ni una entidad gubernamental. Es un directorio de empresas, no de personas, y no garantiza resultados ni cumplimiento. ArcaneTech no asume responsabilidad por inexactitudes originadas en los registros públicos fuente."
                    : "Global Data Capital (formerly Camella / camella.app) aggregates public registry and corporate records across the Americas. It is an analytical company directory, not an official government agency and not a directory of people. ArcaneTech does not guarantee diligence outcomes or compliance and disclaims liability for inaccuracies derived from source public records."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <h3 className="text-white font-medium mb-1">B. AnyMarkt (anymarkt.com)</h3>
                <p>
                  {lang === "es"
                    ? "AnyMarkt es una plataforma social de predicciones. Los 'créditos de práctica' son unidades lúdicas virtuales sin valor monetario, no canjeables ni reembolsables por dinero fiduciario. La participación en grupos privados se rige bajo dinámicas recreativas y de calibración de pronósticos. Cualquier función con fondos fiduciarios está expresamente restringida y sujeta a verificación KYC/AML en jurisdicciones autorizadas."
                    : "AnyMarkt operates social prediction syndicates. Practice credits are synthetic units with zero fiat value, non-withdrawable, and non-redeemable for legal tender. Real-money prediction features remain restricted, subject to strict jurisdictional compliance and KYC/AML screening."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <h3 className="text-white font-medium mb-1">C. Eridas (erydas.vercel.app)</h3>
                <p>
                  {lang === "es"
                    ? "Eridas es software de seguridad de dependencias determinista (CLI de código abierto, Cloud API, SDK y MCP). Contrasta versiones exactas del lockfile con avisos divulgados en OSV y propone correcciones verificadas. No garantiza la ausencia de vulnerabilidades no divulgadas, ni cubre ecosistemas no soportados (npm lockfile v2/v3 en la versión actual). El software se ofrece tal cual, sin garantía de cobertura absoluta."
                    : "Eridas is deterministic dependency-security software (open-source CLI, Cloud API, SDK, and MCP). It matches exact lockfile versions to disclosed OSV advisories and proposes verified fixes. It does not warrant the absence of undisclosed vulnerabilities and does not cover unsupported ecosystems (npm lockfile v2/v3 in the current release). Software is provided as-is, without warranty of complete coverage."}
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="glass-panel p-6 rounded-2xl border border-white/10">
            <h2 className="text-base font-semibold text-white mb-3">
              3. {lang === "es" ? "Propiedad Intelectual y Derechos Reservados" : "Intellectual Property & SENADI Protection"}
            </h2>
            <p className="text-xs text-white/70 leading-relaxed mb-3">
              {lang === "es"
                ? "Todos los elementos visuales, logotipos, marcas comerciales ('ArcaneTech', 'Global Data Capital', 'GDC', 'Camella', 'AnyMarkt', 'Eridas'), arquitecturas de software, algoritmos, modelos de contexto y código fuente son propiedad exclusiva de ARCANE ECHOS TECHNOLOGIES S.A.S. y se encuentran protegidos por el Código Orgánico de la Economía Social de los Conocimientos, Creatividad e Innovación (Código Ingenios) del Ecuador y tratados internacionales administrados por la OMPI (Organización Mundial de la Propiedad Intelectual)."
                : "All visual elements, vector assets, trademarks ('ArcaneTech', 'Global Data Capital', 'GDC', 'Camella', 'AnyMarkt', 'Eridas'), proprietary code, and system prompts are the exclusive property of ARCANE ECHOS TECHNOLOGIES S.A.S., protected under Ecuador's Código Ingenios and international treaties administered by WIPO."}
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Queda estrictamente prohibida la descompilación, ingeniería inversa, extracción masiva de datos no autorizada mediante scraping abusivo o reproducción no autorizada de nuestras interfaces."
                : "Reverse engineering, decompilation, unauthorized automated scraping, and wholesale cloning of ArcaneTech interfaces are strictly prohibited."}
            </p>
          </section>

          {/* Section 4 */}
          <section className="glass-panel p-6 rounded-2xl border border-white/10">
            <h2 className="text-base font-semibold text-white mb-3">
              4. {lang === "es" ? "Ley Aplicable y Resolución de Conflictos" : "Governing Law & Dispute Resolution"}
            </h2>
            <p className="text-xs text-white/70 leading-relaxed mb-3">
              {lang === "es"
                ? "Este acuerdo se rige e interpretará exclusivamente conforme a la legislación de la República del Ecuador. Para cualquier controversia, conflicto o reclamación derivada de la existencia, validez, interpretación o cumplimiento de estos términos, las partes intentarán resolverla de mutuo acuerdo de buena fe durante un término de 30 días."
                : "This Agreement shall be governed by and construed in accordance with the substantive laws of the Republic of Ecuador. Any controversy or claim arising out of or relating to this contract shall first be negotiated in good faith for a period of thirty (30) days."}
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "De no alcanzarse acuerdo, la disputa se someterá a la jurisdicción de los tribunales competentes de la ciudad de Quito, Ecuador, o mediante arbitraje administrado por el Centro de Arbitraje y Mediación de la Cámara de Comercio de Quito, según determine la Compañía, sin perjuicio de los derechos irrenunciables de consumidores individuales."
                : "Failing amicable resolution, disputes shall be submitted to the courts of Quito, Ecuador, or arbitration before the Arbitration and Mediation Center of the Quito Chamber of Commerce."}
            </p>
          </section>

          {/* Contact Box */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-xs">
            <p className="font-semibold text-white mb-1">
              {lang === "es" ? "¿Preguntas legales o comerciales?" : "Legal & Corporate Inquiries"}
            </p>
            <p className="text-white/60 mb-2">
              {lang === "es"
                ? "Para notificaciones legales o licenciamiento institucional, dirija su comunicación a:"
                : "For formal legal notices or institutional licensing inquiries, contact:"}
            </p>
            <a href="mailto:legal@arcanetechnologies.org" className="text-indigo-400 font-mono hover:underline">
              legal@arcanetechnologies.org
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
