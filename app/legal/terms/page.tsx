"use client";

import { InstituteShell, SpecCrumb, useInstituteLang } from "@/app/components/institute-chrome";
import Link from "next/link";

export default function TermsOfUsePage() {
  const [lang, setLang] = useInstituteLang("en");
  const en = lang === "en";

  return (
    <InstituteShell lang={lang} onLang={setLang}>
      <main className="mx-auto w-full max-w-[44rem] px-6 py-16">
        <SpecCrumb lang={lang} leaf={en ? "Terms" : "Términos"} />

        <h1 className="display mt-10 text-5xl">
          {en ? "Terms of service" : "Términos y condiciones de uso"}
        </h1>
        <p className="mt-4 text-sm text-[var(--mute)]">
          {en
            ? "Last updated 6 November 2026. Governs Global Data Capital, Anymarkt, and Eridas."
            : "Última actualización: 6 de noviembre de 2026. Rige Global Data Capital, Anymarkt y Eridas."}
        </p>

        <section className="mt-16 border-t border-[var(--rule)] pt-10">
          <h2 className="display text-3xl">
            {en ? "1. Corporate identity and scope" : "1. Identificación del titular y alcance"}
          </h2>
          <p className="mt-4 leading-7 text-[var(--mute)]">
            {en
              ? "This agreement governs access to the platforms, APIs, web interfaces, and software protocols operated by ARCANE ECHOS TECHNOLOGIES S.A.S. ('ArcaneTech', 'the Company', or 'we'), a simplified joint-stock corporation organized under the laws of the Republic of Ecuador, registered before the Superintendence of Companies, Securities, and Insurance."
              : "El presente contrato regula el acceso y utilización de las plataformas, APIs, servicios web y protocolos operados por ARCANE ECHOS TECHNOLOGIES S.A.S. (en adelante, 'ArcaneTech', 'la Compañía' o 'nosotros'), sociedad por acciones simplificada constituida conforme a las leyes de la República del Ecuador, inscrita ante la Superintendencia de Compañías, Valores y Seguros."}
          </p>
          <p className="mt-4 leading-7 text-[var(--mute)]">
            {en
              ? "While ArcaneTech operates under Ecuadorian corporate jurisdiction, the products serve an international market. Cross-border users retain non-waivable statutory consumer protections under their local laws."
              : "Aunque ArcaneTech opera bajo personería jurídica ecuatoriana, sus productos tienen un mercado de alcance global. Los usuarios que accedan desde otras jurisdicciones conservan las protecciones de consumidor irrenunciables de su país de residencia."}
          </p>
        </section>

        <section className="mt-16 border-t border-[var(--rule)] pt-10">
          <h2 className="display text-3xl">
            {en ? "2. Product-specific conditions" : "2. Términos específicos por producto"}
          </h2>

          <h3 className="mt-8 text-[var(--paper)]">A. Global Data Capital (globaldatacapital.com)</h3>
          <p className="mt-3 leading-7 text-[var(--mute)]">
            {en
              ? "Global Data Capital (formerly Camella / camella.app) aggregates public registry and corporate records across the Americas. It is an analytical company directory, not an official government agency and not a directory of people. ArcaneTech does not guarantee diligence outcomes or compliance and disclaims liability for inaccuracies derived from source public records."
              : "Global Data Capital (antes Camella / camella.app) es un directorio B2B e inteligencia registral que consolida información pública de personas jurídicas en Ecuador, México, EE. UU., Brasil, Colombia, Argentina y Chile. No es un organismo emisor oficial. Es un directorio de empresas, no de personas, y no garantiza resultados ni cumplimiento. ArcaneTech no asume responsabilidad por inexactitudes originadas en los registros públicos fuente."}
          </p>

          <h3 className="mt-8 text-[var(--paper)]">B. Anymarkt (anymarkt.com)</h3>
          <p className="mt-3 leading-7 text-[var(--mute)]">
            {en
              ? "Anymarkt is prediction markets for AI agents and humans. Slogan: Predict the future. Prove it. Credits have no cash value and cannot be withdrawn. Real-money markets for agents and humans — coming. Where available. Eligibility and verification apply. 18+."
              : "Anymarkt son mercados de predicción para agentes de IA y humanos. Lema: Predice el futuro. Demuéstralo. Los créditos no tienen valor de efectivo y no se retiran. Mercados con dinero real para agentes y humanos — próximamente. Donde esté disponible. Elegibilidad y verificación aplican. 18+."}
          </p>

          <h3 className="mt-8 text-[var(--paper)]">C. Eridas (erydas.vercel.app)</h3>
          <p className="mt-3 leading-7 text-[var(--mute)]">
            {en
              ? "Eridas is deterministic self-healing software for AppSec, OpSec, and cyber supply-chain security (open-source CLI, Cloud API, SDK, and MCP). AppSec matches exact lockfile versions to disclosed OSV advisories and proposes verified fixes. OpSec (Tinfoil) is a passive recon of a live app and does not warrant a complete map of exposure. Eridas does not warrant the absence of undisclosed vulnerabilities and does not cover unsupported ecosystems (npm lockfile v2/v3 in the current release). Software is provided as-is."
              : "Eridas es software auto-reparable y determinista para AppSec, OpSec y seguridad de la cadena de suministro (CLI de código abierto, Cloud API, SDK y MCP). AppSec contrasta versiones exactas del lockfile con avisos OSV divulgados y propone correcciones verificadas. OpSec (Tinfoil) es un reconocimiento pasivo de una app en vivo y no garantiza un mapa completo de exposición. No garantiza la ausencia de vulnerabilidades no divulgadas, ni cubre ecosistemas no soportados (npm lockfile v2/v3). El software se ofrece tal cual."}
          </p>
        </section>

        <section className="mt-16 border-t border-[var(--rule)] pt-10">
          <h2 className="display text-3xl">
            {en ? "3. Intellectual property" : "3. Propiedad intelectual"}
          </h2>
          <p className="mt-4 leading-7 text-[var(--mute)]">
            {en
              ? "All visual elements, trademarks ('ArcaneTech', 'Global Data Capital', 'GDC', 'Camella', 'Anymarkt', 'Eridas'), proprietary code, and system prompts are the exclusive property of ARCANE ECHOS TECHNOLOGIES S.A.S., protected under Ecuador's Código Ingenios and international treaties administered by WIPO."
              : "Todos los elementos visuales, marcas comerciales ('ArcaneTech', 'Global Data Capital', 'GDC', 'Camella', 'Anymarkt', 'Eridas'), arquitecturas de software y código fuente son propiedad exclusiva de ARCANE ECHOS TECHNOLOGIES S.A.S., protegidos por el Código Ingenios del Ecuador y tratados internacionales administrados por la OMPI."}
          </p>
          <p className="mt-4 leading-7 text-[var(--mute)]">
            {en
              ? "Reverse engineering, decompilation, unauthorized automated scraping, and wholesale cloning of ArcaneTech interfaces are prohibited."
              : "Queda prohibida la descompilación, ingeniería inversa, extracción masiva no autorizada y reproducción no autorizada de nuestras interfaces."}
          </p>
        </section>

        <section className="mt-16 border-t border-[var(--rule)] pt-10">
          <h2 className="display text-3xl">
            {en ? "4. Governing law" : "4. Ley aplicable"}
          </h2>
          <p className="mt-4 leading-7 text-[var(--mute)]">
            {en
              ? "This agreement is governed by the laws of the Republic of Ecuador. Any controversy shall first be negotiated in good faith for thirty (30) days."
              : "Este acuerdo se rige e interpretará conforme a la legislación de la República del Ecuador. Las partes intentarán resolver cualquier controversia de buena fe durante un término de 30 días."}
          </p>
          <p className="mt-4 leading-7 text-[var(--mute)]">
            {en
              ? "Failing amicable resolution, disputes shall be submitted to the courts of Quito, Ecuador, or arbitration before the Arbitration and Mediation Center of the Quito Chamber of Commerce."
              : "De no alcanzarse acuerdo, la disputa se someterá a los tribunales competentes de Quito, Ecuador, o al arbitraje del Centro de Arbitraje y Mediación de la Cámara de Comercio de Quito."}
          </p>
        </section>

        <div className="mt-16 border-t border-[var(--rule)] pt-10">
          <p className="text-[var(--paper)]">{en ? "Legal inquiries" : "Consultas legales"}</p>
          <p className="mt-3 leading-7 text-[var(--mute)]">
            {en
              ? "For formal legal notices or institutional licensing, write to legal@arcanetechnologies.org."
              : "Para notificaciones legales o licenciamiento institucional: legal@arcanetechnologies.org."}
          </p>
          <p className="mt-6 text-sm">
            <Link href="/legal/privacy" className="text-[var(--brass)] hover:text-[var(--paper)]">
              {en ? "Privacy policy" : "Política de privacidad"}
            </Link>
          </p>
        </div>
      </main>
    </InstituteShell>
  );
}
