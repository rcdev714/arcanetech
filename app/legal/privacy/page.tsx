"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PrivacyPolicyPage() {
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
              href="/legal/terms"
              className="text-xs font-mono text-white/70 hover:text-white transition"
            >
              {lang === "es" ? "Términos de Uso →" : "Terms of Use →"}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="mb-10 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono mb-4">
            <span>Ecuador LOPDP &amp; International Standards Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {lang === "es" ? "Política de Privacidad y Protección de Datos" : "Privacy Policy & Data Protection Disclosure"}
          </h1>
          <p className="text-xs font-mono text-white/50 mt-2">
            {lang === "es"
              ? "Conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP) de la República del Ecuador y principios internacionales de privacidad."
              : "In compliance with Ecuador's Organic Law on Personal Data Protection (LOPDP) and international privacy frameworks."}
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-white/80">
          {/* Section 1 */}
          <section className="glass-panel p-6 rounded-2xl border border-white/10">
            <h2 className="text-base font-semibold text-white mb-3">
              1. {lang === "es" ? "Responsable del Tratamiento de Datos" : "Data Controller Information"}
            </h2>
            <p className="text-xs text-white/70 leading-relaxed mb-3">
              {lang === "es"
                ? "El responsable del tratamiento de sus datos personales es ARCANE ECHOS TECHNOLOGIES S.A.S. ('ArcaneTech'), constituida bajo la legislación ecuatoriana. Esta política rige para todas las interacciones con nuestras aplicaciones web, servicios de API y plataformas de productos (Camella, AnyMarkt, Eridas)."
                : "The legal data controller is ARCANE ECHOS TECHNOLOGIES S.A.S. ('ArcaneTech'), an Ecuadorian corporation. This policy applies across our entire software suite, APIs, and product offerings (Camella, AnyMarkt, Eridas)."}
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Contacto directo del Delegado de Protección de Datos (DPO): privacy@arcanetechnologies.org."
                : "Designated Data Protection Officer (DPO) point of contact: privacy@arcanetechnologies.org."}
            </p>
          </section>

          {/* Section 2 */}
          <section className="glass-panel p-6 rounded-2xl border border-white/10">
            <h2 className="text-base font-semibold text-white mb-3">
              2. {lang === "es" ? "Principios Rectores Aplicados" : "Governing Data Processing Principles"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/70">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-emerald-400 font-semibold block mb-1">
                  {lang === "es" ? "Juridicidad y Lealtad" : "Lawfulness & Fairness"}
                </span>
                <p>
                  {lang === "es"
                    ? "Los datos se tratan con estricto apego al ordenamiento jurídico ecuatoriano y con el consentimiento explícito del titular."
                    : "Data is processed strictly in compliance with legal bases and explicit user consent."}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-indigo-400 font-semibold block mb-1">
                  {lang === "es" ? "Minimización y Proporcionalidad" : "Data Minimization"}
                </span>
                <p>
                  {lang === "es"
                    ? "Solo recopilamos los datos estrictamente necesarios para la prestación de cada servicio tecnológico."
                    : "We collect only data elements strictly indispensable for executing service operations."}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-cyan-400 font-semibold block mb-1">
                  {lang === "es" ? "Seguridad y Confidencialidad" : "Security & Integrity"}
                </span>
                <p>
                  {lang === "es"
                    ? "Cifrado en tránsito (TLS 1.3) y en reposo (AES-256) en toda la infraestructura de bases de datos."
                    : "Encrypted at rest (AES-256) and in transit (TLS 1.3) across all storage nodes."}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                <span className="text-purple-400 font-semibold block mb-1">
                  {lang === "es" ? "Transparencia Total" : "Transparent Governance"}
                </span>
                <p>
                  {lang === "es"
                    ? "Nunca vendemos, alquilamos ni comercializamos datos personales con corredores de datos ni terceros."
                    : "We never monetize, broker, or sell user personal identifiers to third parties."}
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="glass-panel p-6 rounded-2xl border border-white/10">
            <h2 className="text-base font-semibold text-white mb-3">
              3. {lang === "es" ? "Derechos del Titular (Derechos ARCO+)" : "Your Statutory Rights (ARCO+ Framework)"}
            </h2>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              {lang === "es"
                ? "Conforme a los artículos 12 al 20 de la LOPDP, usted cuenta con los siguientes derechos exigibles en cualquier momento:"
                : "Pursuant to Articles 12 through 20 of Ecuador's LOPDP and comparable international statutes, you possess the following enforceable rights:"}
            </p>
            <ul className="space-y-2 text-xs text-white/70 list-disc pl-5">
              <li>
                <strong className="text-white">{lang === "es" ? "Acceso:" : "Access:"}</strong> {lang === "es" ? "Conocer qué datos suyos se encuentran en nuestras bases de datos." : "Request a full breakdown of personal data stored in our systems."}
              </li>
              <li>
                <strong className="text-white">{lang === "es" ? "Rectificación y Actualización:" : "Rectification:"}</strong> {lang === "es" ? "Corregir información inexacta o desactualizada." : "Amend inaccurate or obsolete personal details."}
              </li>
              <li>
                <strong className="text-white">{lang === "es" ? "Eliminación (Olvido):" : "Erasure:"}</strong> {lang === "es" ? "Suprimir sus datos cuando ya no sean requeridos para la finalidad contratada." : "Demand permanent deletion of data no longer legally required."}
              </li>
              <li>
                <strong className="text-white">{lang === "es" ? "Oposición:" : "Objection:"}</strong> {lang === "es" ? "Oponerse al tratamiento para finalidades no esenciales." : "Object to processing for non-essential or analytical functions."}
              </li>
              <li>
                <strong className="text-white">{lang === "es" ? "Portabilidad:" : "Portability:"}</strong> {lang === "es" ? "Recibir sus datos en formato estructurado, interoperable y de lectura mecánica (JSON)." : "Receive exported personal data in machine-readable JSON format."}
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="glass-panel p-6 rounded-2xl border border-white/10">
            <h2 className="text-base font-semibold text-white mb-3">
              4. {lang === "es" ? "Transferencias Internacionales de Datos" : "Cross-Border Data Transfers"}
            </h2>
            <p className="text-xs text-white/70 leading-relaxed mb-3">
              {lang === "es"
                ? "Dado el alcance global de nuestros servicios, sus datos pueden ser alojados o procesados en infraestructura cloud de alta resiliencia ubicada fuera del territorio ecuatoriano (incluyendo centros de datos en Estados Unidos y la Unión Europea provistos por proveedores líderes de nube)."
                : "Given our global architecture, user data may be routed, processed, or cached in cloud regions outside Ecuador (including USA and EU data centers maintained by enterprise cloud providers)."}
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Garantizamos que todas las transferencias transfronterizas cumplen con cláusulas contractuales tipo y estándares de seguridad equivalentes a los exigidos por la Superintendencia de Protección de Datos de Ecuador y el RGPD europeo."
                : "We enforce Standard Contractual Clauses (SCCs) and zero-knowledge encryption safeguards across all cross-border data transfer corridors."}
            </p>
          </section>

          {/* Contact Box */}
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs">
            <p className="font-semibold text-emerald-400 mb-1">
              {lang === "es" ? "Ejercicio de Derechos de Privacidad" : "Exercise Your Privacy Rights"}
            </p>
            <p className="text-white/70 mb-2">
              {lang === "es"
                ? "Para ejercer cualquiera de sus derechos ARCO o plantear inquietudes sobre el tratamiento de datos, envíe una comunicación a:"
                : "To submit an ARCO request or contact our privacy engineering team, write to:"}
            </p>
            <a href="mailto:privacy@arcanetechnologies.org" className="text-emerald-400 font-mono font-medium hover:underline">
              privacy@arcanetechnologies.org
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
