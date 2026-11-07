"use client";

import { InstituteShell, SpecCrumb, useInstituteLang } from "@/app/components/institute-chrome";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useInstituteLang("en");
  const en = lang === "en";

  return (
    <InstituteShell lang={lang} onLang={setLang}>
      <main className="mx-auto w-full max-w-[44rem] px-6 py-16">
        <SpecCrumb lang={lang} leaf={en ? "Privacy" : "Privacidad"} />

        <h1 className="display mt-10 text-5xl">
          {en ? "Privacy and data protection" : "Privacidad y protección de datos"}
        </h1>
        <p className="mt-4 text-sm text-[var(--mute)]">
          {en
            ? "In compliance with Ecuador's Organic Law on Personal Data Protection (LOPDP) and international privacy frameworks."
            : "Conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP) de la República del Ecuador y principios internacionales de privacidad."}
        </p>

        <section className="mt-16 border-t border-[var(--rule)] pt-10">
          <h2 className="display text-3xl">
            {en ? "1. Data controller" : "1. Responsable del tratamiento"}
          </h2>
          <p className="mt-4 leading-7 text-[var(--mute)]">
            {en
              ? "The legal data controller is ARCANE ECHOS TECHNOLOGIES S.A.S. ('ArcaneTech'), an Ecuadorian corporation. This policy applies across our software suite, APIs, and products (Global Data Capital, Anymarkt, Eridas)."
              : "El responsable del tratamiento de sus datos personales es ARCANE ECHOS TECHNOLOGIES S.A.S. ('ArcaneTech'), constituida bajo la legislación ecuatoriana. Esta política rige para nuestras aplicaciones, APIs y productos (Global Data Capital, Anymarkt, Eridas)."}
          </p>
          <p className="mt-4 leading-7 text-[var(--mute)]">
            {en
              ? "Data Protection Officer: privacy@arcanetechnologies.org."
              : "Delegado de Protección de Datos (DPO): privacy@arcanetechnologies.org."}
          </p>
        </section>

        <section className="mt-16 border-t border-[var(--rule)] pt-10">
          <h2 className="display text-3xl">
            {en ? "2. Processing principles" : "2. Principios rectores"}
          </h2>
          <ul className="mt-6 space-y-6">
            <li>
              <h3 className="text-[var(--paper)]">{en ? "Lawfulness and fairness" : "Juridicidad y lealtad"}</h3>
              <p className="mt-2 leading-7 text-[var(--mute)]">
                {en
                  ? "Data is processed on a legal basis and with explicit user consent where required."
                  : "Los datos se tratan con apego al ordenamiento jurídico ecuatoriano y con el consentimiento explícito del titular cuando corresponda."}
              </p>
            </li>
            <li>
              <h3 className="text-[var(--paper)]">{en ? "Minimization" : "Minimización"}</h3>
              <p className="mt-2 leading-7 text-[var(--mute)]">
                {en
                  ? "We collect only what is required to operate each service."
                  : "Solo recopilamos los datos estrictamente necesarios para cada servicio."}
              </p>
            </li>
            <li>
              <h3 className="text-[var(--paper)]">{en ? "Security" : "Seguridad"}</h3>
              <p className="mt-2 leading-7 text-[var(--mute)]">
                {en
                  ? "Encrypted in transit (TLS 1.3) and at rest (AES-256) across storage."
                  : "Cifrado en tránsito (TLS 1.3) y en reposo (AES-256) en la infraestructura de bases de datos."}
              </p>
            </li>
            <li>
              <h3 className="text-[var(--paper)]">{en ? "No sale of personal data" : "Sin venta de datos"}</h3>
              <p className="mt-2 leading-7 text-[var(--mute)]">
                {en
                  ? "We do not sell, rent, or broker personal identifiers to third parties."
                  : "Nunca vendemos, alquilamos ni comercializamos datos personales con corredores de datos ni terceros."}
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-16 border-t border-[var(--rule)] pt-10">
          <h2 className="display text-3xl">
            {en ? "3. Your rights (ARCO+)" : "3. Derechos del titular (ARCO+)"}
          </h2>
          <p className="mt-4 leading-7 text-[var(--mute)]">
            {en
              ? "Pursuant to Articles 12 through 20 of Ecuador's LOPDP, you may exercise:"
              : "Conforme a los artículos 12 al 20 de la LOPDP, usted puede ejercer:"}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--mute)]">
            <li>
              <strong className="text-[var(--paper)]">{en ? "Access:" : "Acceso:"}</strong>{" "}
              {en ? "know what personal data we hold." : "conocer qué datos suyos se encuentran en nuestras bases."}
            </li>
            <li>
              <strong className="text-[var(--paper)]">{en ? "Rectification:" : "Rectificación:"}</strong>{" "}
              {en ? "amend inaccurate or obsolete details." : "corregir información inexacta o desactualizada."}
            </li>
            <li>
              <strong className="text-[var(--paper)]">{en ? "Erasure:" : "Eliminación:"}</strong>{" "}
              {en ? "request deletion when data is no longer required." : "suprimir sus datos cuando ya no sean requeridos."}
            </li>
            <li>
              <strong className="text-[var(--paper)]">{en ? "Objection:" : "Oposición:"}</strong>{" "}
              {en ? "object to non-essential processing." : "oponerse al tratamiento para finalidades no esenciales."}
            </li>
            <li>
              <strong className="text-[var(--paper)]">{en ? "Portability:" : "Portabilidad:"}</strong>{" "}
              {en ? "receive an export in machine-readable JSON." : "recibir sus datos en formato estructurado (JSON)."}
            </li>
          </ul>
        </section>

        <section className="mt-16 border-t border-[var(--rule)] pt-10">
          <h2 className="display text-3xl">
            {en ? "4. Cross-border transfers" : "4. Transferencias internacionales"}
          </h2>
          <p className="mt-4 leading-7 text-[var(--mute)]">
            {en
              ? "User data may be processed in cloud regions outside Ecuador (including USA and EU data centers). Transfers use Standard Contractual Clauses and security standards equivalent to those required by Ecuador's data-protection authority and the GDPR."
              : "Sus datos pueden procesarse en infraestructura cloud fuera del Ecuador (incluyendo centros de datos en Estados Unidos y la Unión Europea). Las transferencias cumplen cláusulas contractuales tipo y estándares equivalentes a los exigidos por la Superintendencia de Protección de Datos de Ecuador y el RGPD."}
          </p>
        </section>

        <div className="mt-16 border-t border-[var(--rule)] pt-10">
          <p className="text-[var(--paper)]">
            {en ? "Exercise your privacy rights" : "Ejercicio de derechos de privacidad"}
          </p>
          <p className="mt-3 leading-7 text-[var(--mute)]">
            {en
              ? "To submit an ARCO request, write to privacy@arcanetechnologies.org."
              : "Para ejercer cualquiera de sus derechos ARCO, escriba a privacy@arcanetechnologies.org."}
          </p>
          <p className="mt-6 text-sm">
            <Link href="/legal/terms" className="text-[var(--brass)] hover:text-[var(--paper)]">
              {en ? "Terms of service" : "Términos de uso"}
            </Link>
          </p>
        </div>
      </main>
    </InstituteShell>
  );
}
