"use client";

import { InstituteShell, useInstituteLang } from "@/app/components/institute-chrome";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const COPY = {
  en: {
    kicker: "Arcane Echos Technologies",
    headline: "Intelligence applied to human problems.",
    lede: "A laboratory in the Republic of Ecuador. Three live systems for registry truth, prediction, and self-healing software — used by people and by agents.",
    locus: "Quito · three systems in production",
    openSystems: "Open the systems",
    readThesis: "Read the thesis",
    systemsTitle: "Live systems",
    systemsLede: "Each one is in production. Open the product, or read the specification.",
    open: "Open",
    spec: "Specification",
    dispatchKicker: "Dispatch",
    dispatchTitle: "Eridas is self-healing software.",
    dispatchBody:
      "Deterministic self-healing software for npm. AppSec closes disclosed lockfile vulns against OSV and ships the smallest verified fix as a pull request. OpSec is a passive recon of what the live app leaks. It never invents findings.",
    appsecTitle: "AppSec",
    appsecBody:
      "Treat package-lock.json as inventory. Exact installed versions — direct and transitive — matched to disclosed OSV advisories. Plan the minimum bump, disable lifecycle scripts while the lockfile regenerates, rescan, then restore both files if verification fails. Read-only until you opt into a PR. Majors stay blocked unless you opt in.",
    opsecTitle: "OpSec",
    opsecBody:
      "Tinfoil is GET-only recon of the running product. L1 Surface: headers, CSP, CORS, AI crawlers, llms.txt. L2 Exposure (default): .env, .git, source maps, secrets in bundles. L3 Supply chain: OSV on announced packages or a lockfile. L4 Reconstruction: what an attacker’s agent can rebuild (local only). Private and loopback addresses are refused.",
    openEridas: "Open Eridas",
    thesisTitle: "What we believe",
    thesisLede: "The value of a model is not conversation. It is compounding execution, grounded in sources that do not invent.",
    pillars: [
      {
        title: "Authoritative truth",
        text: "Agents are only as reliable as their grounding. We connect them to official registries and disclosed advisories, not to guesses.",
      },
      {
        title: "Context as infrastructure",
        text: "Software has to speak the language of the models that use it. MCP is how our systems sit inside an agent’s work, not beside it.",
      },
      {
        title: "Deterministic supply chain",
        text: "AppSec on the lockfile, OpSec on the live app. Exact versions against OSV. The smallest verified bump. No invented CVEs, no model-chosen versions.",
      },
    ],
    legalTitle: "The corporation",
    legalBody:
      "ARCANE ECHOS TECHNOLOGIES S.A.S. is organized under the laws of the Republic of Ecuador, registered with the Superintendence of Companies, Securities, and Insurance and the Internal Revenue Service. We operate software for an international client base.",
    terms: "Terms of service",
    privacy: "Privacy (LOPDP)",
  },
  es: {
    kicker: "Arcane Echos Technologies",
    headline: "Inteligencia aplicada a problemas humanos.",
    lede: "Un laboratorio en la República del Ecuador. Tres sistemas en producción: verdad registral, predicción y software auto-reparable — para personas y para agentes.",
    locus: "Quito · tres sistemas en producción",
    openSystems: "Abrir los sistemas",
    readThesis: "Leer la tesis",
    systemsTitle: "Sistemas en producción",
    systemsLede: "Cada uno está en vivo. Abra el producto, o lea la especificación.",
    open: "Abrir",
    spec: "Especificación",
    dispatchKicker: "Despacho",
    dispatchTitle: "Eridas es software auto-reparable.",
    dispatchBody:
      "Software auto-reparable y determinista para npm. AppSec cierra vulnerabilidades divulgadas del lockfile contra OSV y envía el menor fix verificado como pull request. OpSec es un reconocimiento pasivo de lo que filtra la app en vivo. Nunca inventa hallazgos.",
    appsecTitle: "AppSec",
    appsecBody:
      "El package-lock.json es el inventario. Versiones exactas — directas y transitivas — contrastadas con avisos OSV divulgados. Planifica el menor bump, desactiva scripts de ciclo de vida al regenerar el lockfile, reescanea y restaura ambos archivos si falla la verificación. Solo lectura hasta que opte por un PR. Los majors quedan bloqueados salvo que los autorice.",
    opsecTitle: "OpSec",
    opsecBody:
      "Tinfoil es reconocimiento GET-only del producto en ejecución. L1 Superficie: cabeceras, CSP, CORS, crawlers de IA, llms.txt. L2 Exposición (por defecto): .env, .git, source maps, secretos en bundles. L3 Cadena de suministro: OSV sobre paquetes anunciados o un lockfile. L4 Reconstrucción: lo que un agente atacante puede reconstruir (solo local). Se rechazan direcciones privadas y loopback.",
    openEridas: "Abrir Eridas",
    thesisTitle: "En qué creemos",
    thesisLede: "El valor de un modelo no es la conversación. Es ejecución que se acumula, anclada a fuentes que no inventan.",
    pillars: [
      {
        title: "Verdad de fuente primaria",
        text: "Un agente solo es tan fiable como sus fuentes. Los conectamos a registros oficiales y avisos divulgados, no a conjeturas.",
      },
      {
        title: "El contexto como infraestructura",
        text: "El software debe hablar el idioma de los modelos. MCP es cómo nuestros sistemas viven dentro del trabajo de un agente, no al lado.",
      },
      {
        title: "Cadena de suministro determinista",
        text: "AppSec sobre el lockfile, OpSec sobre la app en vivo. Versiones exactas contra OSV. El menor bump verificado. Sin CVEs inventados ni versiones elegidas por el modelo.",
      },
    ],
    legalTitle: "La sociedad",
    legalBody:
      "ARCANE ECHOS TECHNOLOGIES S.A.S. está constituida bajo las leyes de la República del Ecuador, inscrita ante la Superintendencia de Compañías, Valores y Seguros y el SRI. Operamos software para una base internacional de clientes.",
    terms: "Términos de servicio",
    privacy: "Privacidad (LOPDP)",
  },
};

const SYSTEMS = {
  en: [
    {
      name: "Global Data Capital",
      line: "Find and audit any company in the Americas.",
      host: "globaldatacapital.com",
      href: "https://globaldatacapital.com/",
      spec: "/products/gdc",
      mark: "/gdc-logo.svg",
    },
    {
      name: "Anymarkt",
      line: "Predict the future. Prove it.",
      host: "anymarkt.com",
      href: "https://anymarkt.com/",
      spec: "/products/anymarkt",
      mark: "/anymarkt-logo.svg",
    },
    {
      name: "Eridas",
      line: "Deterministic self-healing software.",
      host: "erydas.vercel.app",
      href: "https://erydas.vercel.app/",
      spec: "/products/eridas",
      mark: "/eridas-logo.svg",
    },
  ],
  es: [
    {
      name: "Global Data Capital",
      line: "Encuentre y audite cualquier empresa en las Américas.",
      host: "globaldatacapital.com",
      href: "https://globaldatacapital.com/",
      spec: "/products/gdc",
      mark: "/gdc-logo.svg",
    },
    {
      name: "Anymarkt",
      line: "Predice el futuro. Demuéstralo.",
      host: "anymarkt.com",
      href: "https://anymarkt.com/",
      spec: "/products/anymarkt",
      mark: "/anymarkt-logo.svg",
    },
    {
      name: "Eridas",
      line: "Software auto-reparable y determinista.",
      host: "erydas.vercel.app",
      href: "https://erydas.vercel.app/",
      spec: "/products/eridas",
      mark: "/eridas-logo.svg",
    },
  ],
};

export default function HomePage() {
  const [lang, setLang] = useInstituteLang("en");
  const reduce = useReducedMotion();
  const t = COPY[lang];

  return (
    <InstituteShell lang={lang} onLang={setLang} homeLinks>
      <section className="relative overflow-hidden border-b border-[var(--rule)]">
        <div className="mx-auto max-w-[72rem] px-6 pt-24 pb-28 md:pt-32 md:pb-36">
          <motion.p
            className="text-sm text-[var(--mute)]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t.kicker}
          </motion.p>
          <motion.h1
            className="display mt-8 max-w-[18ch] text-[2.85rem] text-[var(--paper)] sm:text-6xl md:text-[5.15rem]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.headline}
          </motion.h1>
          <motion.p
            className="mt-8 max-w-[38rem] text-lg leading-8 text-[var(--mute)]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            {t.lede}
          </motion.p>
          <p className="mt-6 text-sm text-[var(--brass)]">{t.locus}</p>
          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm">
            <a
              href="#systems"
              className="inline-flex items-center bg-[var(--paper)] px-5 py-2.5 text-[var(--void)] hover:bg-white"
            >
              {t.openSystems}
            </a>
            <a href="#thesis" className="text-[var(--brass)] hover:text-[var(--paper)]">
              {t.readThesis}
            </a>
          </div>
        </div>
        <div className="spectrometer" />
      </section>

      <section id="systems" className="border-b border-[var(--rule)] py-24">
        <div className="mx-auto max-w-[72rem] px-6">
          <h2 className="display text-4xl md:text-5xl">{t.systemsTitle}</h2>
          <p className="mt-4 max-w-[38rem] text-[var(--mute)]">{t.systemsLede}</p>

          <ul className="mt-16">
            {SYSTEMS[lang].map((system) => (
              <li key={system.host} className="border-t border-[var(--rule)] last:border-b">
                <motion.div
                  className="grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-[auto_1fr_auto] md:gap-10"
                  whileHover={reduce ? undefined : { x: 4 }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                >
                  <div className="flex items-center gap-4">
                    <Image src={system.mark} alt="" width={40} height={40} className="rounded-sm" />
                    <div>
                      <p className="display text-2xl md:text-[1.85rem]">{system.name}</p>
                      <p className="mt-1 text-sm text-[var(--mute)]">{system.host}</p>
                    </div>
                  </div>
                  <p className="max-w-[36rem] text-[var(--paper)]">{system.line}</p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <a
                      href={system.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--brass)] hover:text-[var(--paper)]"
                    >
                      {t.open}
                    </a>
                    <Link href={system.spec} className="text-[var(--mute)] hover:text-[var(--paper)]">
                      {t.spec}
                    </Link>
                  </div>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="dispatch" className="border-b border-[var(--rule)] py-24">
        <div className="mx-auto grid max-w-[72rem] gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm text-[var(--brass)]">{t.dispatchKicker}</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">{t.dispatchTitle}</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="max-w-[38rem] text-lg leading-8 text-[var(--mute)]">{t.dispatchBody}</p>
            <div className="mt-12 grid max-w-[38rem] grid-cols-1 gap-10 sm:grid-cols-2">
              <article>
                <h3 className="display text-2xl">{t.appsecTitle}</h3>
                <p className="mt-3 leading-7 text-[var(--mute)]">{t.appsecBody}</p>
              </article>
              <article>
                <h3 className="display text-2xl">{t.opsecTitle}</h3>
                <p className="mt-3 leading-7 text-[var(--mute)]">{t.opsecBody}</p>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap gap-8 text-sm">
              <a
                href="https://erydas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[var(--paper)] px-5 py-2.5 text-[var(--void)] hover:bg-white"
              >
                {t.openEridas}
              </a>
              <Link href="/products/eridas" className="text-[var(--brass)] hover:text-[var(--paper)]">
                {t.spec}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="thesis" className="border-b border-[var(--rule)] py-24">
        <div className="mx-auto max-w-[72rem] px-6">
          <h2 className="display max-w-[16ch] text-4xl md:text-5xl">{t.thesisTitle}</h2>
          <p className="mt-4 max-w-[38rem] text-[var(--mute)]">{t.thesisLede}</p>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            {t.pillars.map((pillar) => (
              <article key={pillar.title}>
                <h3 className="display text-2xl">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-[var(--mute)]">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="governance" className="py-24">
        <div className="mx-auto max-w-[72rem] px-6">
          <h2 className="display text-4xl">{t.legalTitle}</h2>
          <p className="mt-6 max-w-[40rem] leading-8 text-[var(--mute)]">{t.legalBody}</p>
          <div className="mt-8 flex flex-wrap gap-8 text-sm">
            <Link href="/legal/terms" className="text-[var(--brass)] hover:text-[var(--paper)]">
              {t.terms}
            </Link>
            <Link href="/legal/privacy" className="text-[var(--brass)] hover:text-[var(--paper)]">
              {t.privacy}
            </Link>
          </div>
        </div>
      </section>
    </InstituteShell>
  );
}
