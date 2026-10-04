"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ─── Bilingual Dictionary ──────────────────────────────────────────────────────
const COPY = {
  en: {
    nav: {
      products: "Systems",
      thesis: "Thesis",
      security: "Defense",
      legal: "Legal",
    },
    hero: {
      eyebrow: "APPLIED ARTIFICIAL INTELLIGENCE LABORATORY",
      headline: "We turn intelligence into leverage.",
      subhead:
        "ArcaneTech is a frontier AI laboratory researching autonomous cognitive systems and deploying high-leverage software products for the global economy.",
      exploreBtn: "Explore Systems",
      thesisBtn: "Our Thesis",
      systemCount: "2 Production Systems · 1 Upcoming Defense Layer",
    },
    products: {
      label: "PORTFOLIO",
      title: "Production Systems",
      sub: "Applied intelligence solving foundational bottlenecks in data verification, forecasting, and agent execution.",
      statusLive: "Live System",
      statusUpcoming: "Upcoming Research · Alpha",
      launch: "Launch System",
      specs: "Full Specification",
      camella: {
        index: "01",
        name: "Camella",
        tagline: "Continental Corporate Registry Intelligence",
        url: "camella.app",
        desc: "The multi-jurisdiction B2B company directory and registry intelligence system for human analysts and autonomous agents across Ecuador, Mexico, the United States, Brazil, Colombia, Argentina, and Chile. Features native Model Context Protocol (MCP) server integration for Cursor, Claude Code, and Codex.",
        highlights: ["7 National Registries", "Native MCP Server", "Official Gazette Traceability", "REST API"],
      },
      anymarkt: {
        index: "02",
        name: "AnyMarkt",
        tagline: "Collective Intelligence & Social Prediction Markets",
        url: "anymarkt.com",
        desc: "Social forecasting platform designed to quantify belief and calibrate conviction. Teams and closed syndicates run private prediction pools using risk-free practice credits before graduating to verified outcome markets.",
        highlights: ["Private Forecasting Syndicates", "Zero-Risk Practice Liquidity", "Deterministic Oracles", "Responsive Mobile PWA"],
      },
      eridas: {
        index: "03",
        name: "Eridas",
        tagline: "Autonomous AI Agent Runtime Defense",
        url: "eridas.sh",
        desc: "Cryptographic security fabric for autonomous agents. Intercepts indirect prompt injection vectors (L1–L4), isolates external MCP tool calls with zero-trust sandboxing, and records immutable provenance trails for enterprise compliance.",
        highlights: ["Prompt Injection Interception", "Zero-Trust MCP Proxy", "Cryptographic Provenance", "Private Alpha"],
      },
    },
    thesis: {
      label: "PHILOSOPHY",
      title: "The Leverage Thesis",
      sub: "We believe the value of AI is not conversational mimicry, but compounding execution leverage.",
      pillars: [
        {
          num: "I",
          title: "Authoritative Truth over Prediction",
          text: "Agents are only as reliable as their grounding. We connect cognitive systems directly to official legal registries and deterministic oracles, eliminating hallucinations where stakes are real.",
        },
        {
          num: "II",
          title: "Context as Primary Infrastructure",
          text: "Software must speak the language of modern models. By designing for the Model Context Protocol (MCP), our products become native extensions of agentic workflows rather than isolated silos.",
        },
        {
          num: "III",
          title: "Cryptographic Containment",
          text: "As agent agency accelerates, containment becomes the decisive security bottleneck. We build deterministic defensive perimeters that keep autonomous runtimes within safe, auditable boundaries.",
        },
      ],
    },
    governance: {
      label: "INSTITUTIONAL GOVERNANCE",
      title: "Corporate Identity & Legal Framework",
      body:
        "ARCANE ECHOS TECHNOLOGIES S.A.S. (ArcaneTech) is a simplified joint-stock corporation (SAS) duly organized under the laws and jurisdiction of the Republic of Ecuador, registered with the Superintendence of Companies, Securities, and Insurance and the Internal Revenue Service (SRI). We design and operate software infrastructure serving an international client base across the Americas and globally.",
      termsLink: "Terms of Service",
      privacyLink: "Privacy Policy (LOPDP & Global Standards)",
      contactLink: "Corporate Inquiries",
    },
    footer: {
      rights: "Arcane Echos Technologies SAS · All rights reserved.",
      jurisdiction: "Republic of Ecuador Jurisdiction · Global Market Operations",
    },
  },
  es: {
    nav: {
      products: "Sistemas",
      thesis: "Tesis",
      security: "Defensa",
      legal: "Legal",
    },
    hero: {
      eyebrow: "LABORATORIO DE INTELIGENCIA ARTIFICIAL APLICADA",
      headline: "Convertimos inteligencia en apalancamiento.",
      subhead:
        "ArcaneTech es un laboratorio de IA de frontera dedicado a la investigación de arquitecturas cognitivas y el despliegue de productos de software de alto apalancamiento para la economía global.",
      exploreBtn: "Explorar Sistemas",
      thesisBtn: "Nuestra Tesis",
      systemCount: "2 Sistemas en Producción · 1 Capa de Defensa en Desarrollo",
    },
    products: {
      label: "PORTAFOLIO",
      title: "Sistemas en Producción",
      sub: "Inteligencia aplicada que resuelve cuellos de botella fundamentales en verificación de datos, pronóstico y ejecución de agentes.",
      statusLive: "Sistema en Producción",
      statusUpcoming: "Investigación en Curso · Alpha",
      launch: "Abrir Sistema",
      specs: "Especificación Completa",
      camella: {
        index: "01",
        name: "Camella",
        tagline: "Inteligencia Registral y Directorio Corporativo Continental",
        url: "camella.app",
        desc: "El sistema B2B multi-jurisdicción para que analistas y agentes de IA consulten, auditen y verifiquen empresas en Ecuador, México, Estados Unidos, Brasil, Colombia, Argentina y Chile. Incluye servidor nativo Model Context Protocol (MCP) para Cursor, Claude Code y Codex.",
        highlights: ["7 Registros Oficiales", "Servidor MCP Nativo", "Trazabilidad Registral", "API REST"],
      },
      anymarkt: {
        index: "02",
        name: "AnyMarkt",
        tagline: "Inteligencia Colectiva y Mercados de Predicción",
        url: "anymarkt.com",
        desc: "Plataforma social de pronósticos para cuantificar convicciones y evaluar escenarios futuros. Equipos y grupos privados operan salas de pronóstico con créditos de práctica sin riesgo de capital antes de pasar a mercados verificables.",
        highlights: ["Grupos Privados de Pronóstico", "Créditos de Práctica Sin Riesgo", "Oráculos Deterministas", "PWA Móvil"],
      },
      eridas: {
        index: "03",
        name: "Eridas",
        tagline: "Seguridad y Blindaje de Agentes Autónomos de IA",
        url: "eridas.sh",
        desc: "Capa de defensa criptográfica para agentes de IA autónomos. Intercepta inyecciones de prompt indirectas (L1–L4), aísla llamadas a herramientas MCP mediante sandbox zero-trust y genera pistas forenses de procedencia inmutables.",
        highlights: ["Defensa Anti-Prompt Injection", "Proxy MCP Zero-Trust", "Firma Forense", "Alpha Privada"],
      },
    },
    thesis: {
      label: "FILOSOFÍA",
      title: "La Tesis del Apalancamiento",
      sub: "Creemos que el verdadero valor de la IA no radica en la imitación conversacional, sino en multiplicar la capacidad de ejecución humana.",
      pillars: [
        {
          num: "I",
          title: "Verdad de Fuente Primaria",
          text: "Un agente autónomo solo es tan confiable como sus fuentes. Conectamos los modelos directamente con gacetas societarias oficiales y oráculos deterministas, eliminando alucinaciones donde hay decisiones críticas.",
        },
        {
          num: "II",
          title: "El Contexto como Infraestructura",
          text: "El software debe hablar el lenguaje nativo de los modelos. Al diseñar bajo el estándar Model Context Protocol (MCP), nuestros sistemas se convierten en extensiones inmediatas de los entornos de trabajo de los agentes.",
        },
        {
          num: "III",
          title: "Contención Criptográfica",
          text: "A medida que la autonomía de los agentes crece, la contención se convierte en el cuello de botella decisivo. Desarrollamos perímetros defensivos que aseguran que los agentes operen dentro de límites verificables y auditables.",
        },
      ],
    },
    governance: {
      label: "GOBERNANZA INSTITUCIONAL",
      title: "Estructura Corporativa y Marco Legal",
      body:
        "ARCANE ECHOS TECHNOLOGIES S.A.S. (ArcaneTech) es una sociedad por acciones simplificada debidamente constituida bajo las leyes y jurisdicción de la República del Ecuador, inscrita ante la Superintendencia de Compañías, Valores y Seguros y el Servicio de Rentas Internas (SRI). Desarrollamos y operamos infraestructura de software para clientes y organizaciones en toda América y a nivel global.",
      termsLink: "Términos de Servicio",
      privacyLink: "Política de Privacidad (LOPDP y Estándares Globales)",
      contactLink: "Contacto Corporativo",
    },
    footer: {
      rights: "Arcane Echos Technologies SAS · Todos los derechos reservados.",
      jurisdiction: "Jurisdicción de la República del Ecuador · Alcance Global",
    },
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = COPY[lang];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#08080A] text-[#F4F4F6]">
      {/* Subtle ambient illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] ambient-glow pointer-events-none" />

      {/* ── Minimalist Executive Header ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-xl bg-[#08080A]/85">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/[0.12] flex items-center justify-center p-1 group-hover:border-white/30 transition">
              <Image src="/arcanetech-logo.svg" alt="ArcaneTech" width={22} height={22} className="object-contain" priority />
            </div>
            <span className="font-medium text-sm tracking-tight text-white group-hover:text-white/80 transition">
              ArcaneTech
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-zinc-400">
            <a href="#systems" className="hover:text-white transition">
              {t.nav.products}
            </a>
            <a href="#thesis" className="hover:text-white transition">
              {t.nav.thesis}
            </a>
            <Link href="/products/eridas" className="hover:text-white transition flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
              {t.nav.security}
            </Link>
            <a href="#governance" className="hover:text-white transition">
              {t.nav.legal}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center border border-white/[0.1] rounded-full p-0.5 bg-black/40 text-[11px] font-mono">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 rounded-full transition ${
                  lang === "en" ? "bg-white/15 text-white font-medium" : "text-zinc-500 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-0.5 rounded-full transition ${
                  lang === "es" ? "bg-white/15 text-white font-medium" : "text-zinc-500 hover:text-white"
                }`}
              >
                ES
              </button>
            </div>

            <a
              href="#systems"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition"
            >
              <span>{t.hero.exploreBtn}</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── Monumental Minimalist Hero ── */}
      <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase mb-6">
              {t.hero.eyebrow}
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.035em] text-[#FAFAFA] leading-[1.04] mb-8">
              {t.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mb-12">
              {t.hero.subhead}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#systems"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono font-medium text-black bg-[#F4F4F6] hover:bg-white transition"
              >
                <span>{t.hero.exploreBtn}</span>
                <span>→</span>
              </a>

              <a
                href="#thesis"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono font-medium text-zinc-300 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition"
              >
                <span>{t.hero.thesisBtn}</span>
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-white/[0.06] flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
              <span>{t.hero.systemCount}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Systems Showcase (2 Live + 1 Upcoming) ── */}
      <section id="systems" className="py-24 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-8 border-b border-white/[0.06]">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">
                {t.products.label}
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                {t.products.title}
              </h2>
            </div>
            <p className="text-xs text-zinc-500 max-w-md">
              {t.products.sub}
            </p>
          </div>

          <div className="space-y-8">
            {/* System 01: Camella */}
            <div className="luxury-card rounded-xl p-8 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white p-2 border border-white/20 flex items-center justify-center shrink-0">
                      <Image src="/camella-logo.svg" alt="Camella" width={32} height={32} className="object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-500">{t.products.camella.index}</span>
                        <h3 className="text-2xl font-medium tracking-tight text-white">{t.products.camella.name}</h3>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          {t.products.statusLive}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">{t.products.camella.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl mb-6">
                    {t.products.camella.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {t.products.camella.highlights.map((h, i) => (
                      <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-400">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end">
                  <a
                    href="https://camella.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono font-medium text-black bg-white hover:bg-zinc-200 transition"
                  >
                    <span>{t.products.launch}</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                  <Link
                    href="/products/camella"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono text-zinc-400 hover:text-white bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition"
                  >
                    <span>{t.products.specs}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* System 02: AnyMarkt */}
            <div className="luxury-card rounded-xl p-8 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#020053] p-2 border border-white/20 flex items-center justify-center shrink-0">
                      <Image src="/anymarkt-logo.svg" alt="AnyMarkt" width={32} height={32} className="object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-500">{t.products.anymarkt.index}</span>
                        <h3 className="text-2xl font-medium tracking-tight text-white">{t.products.anymarkt.name}</h3>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <span className="w-1 h-1 rounded-full bg-blue-400" />
                          {t.products.statusLive}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">{t.products.anymarkt.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl mb-6">
                    {t.products.anymarkt.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {t.products.anymarkt.highlights.map((h, i) => (
                      <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-400">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end">
                  <a
                    href="https://anymarkt.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono font-medium text-black bg-white hover:bg-zinc-200 transition"
                  >
                    <span>{t.products.launch}</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                  <Link
                    href="/products/anymarkt"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono text-zinc-400 hover:text-white bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition"
                  >
                    <span>{t.products.specs}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* System 03: Eridas (Upcoming AI Defense Layer) */}
            <div className="luxury-card rounded-xl p-8 sm:p-10 border-white/[0.12]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#051311] p-2 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <Image src="/eridas-logo.svg" alt="Eridas" width={32} height={32} className="object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-500">{t.products.eridas.index}</span>
                        <h3 className="text-2xl font-medium tracking-tight text-white">{t.products.eridas.name}</h3>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-zinc-500/10 text-zinc-300 border border-zinc-500/20">
                          <span className="w-1 h-1 rounded-full bg-amber-400" />
                          {t.products.statusUpcoming}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">{t.products.eridas.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl mb-6">
                    {t.products.eridas.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {t.products.eridas.highlights.map((h, i) => (
                      <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-400">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end">
                  <Link
                    href="/products/eridas#waitlist"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/15 transition"
                  >
                    <span>Request Alpha</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/products/eridas"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono text-zinc-400 hover:text-white bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition"
                  >
                    <span>{t.products.specs}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Leverage Thesis ── */}
      <section id="thesis" className="py-24 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">
              {t.thesis.label}
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-4">
              {t.thesis.title}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.thesis.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.thesis.pillars.map((p, i) => (
              <div key={i} className="hairline-border p-8 rounded-xl bg-white/[0.01]">
                <span className="text-xs font-mono text-zinc-500 mb-4 block">{p.num}</span>
                <h3 className="text-base font-medium text-white mb-3 tracking-tight">{p.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Institutional Governance & Legal ── */}
      <section id="governance" className="py-24 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="hairline-border p-8 sm:p-12 rounded-xl bg-white/[0.01]">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3">
              {t.governance.label}
            </p>
            <h2 className="text-xl sm:text-2xl font-medium text-white mb-4 tracking-tight">
              {t.governance.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-3xl mb-8">
              {t.governance.body}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.06] text-xs font-mono">
              <Link href="/legal/terms" className="text-zinc-400 hover:text-white transition">
                {t.governance.termsLink} →
              </Link>
              <Link href="/legal/privacy" className="text-zinc-400 hover:text-white transition">
                {t.governance.privacyLink} →
              </Link>
              <a href="mailto:contact@arcanetechnologies.org" className="text-zinc-400 hover:text-white transition">
                contact@arcanetechnologies.org ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Minimal Footer ── */}
      <footer className="py-12 text-xs font-mono text-zinc-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 font-medium">ArcaneTech</span>
            <span>·</span>
            <span>{t.footer.rights}</span>
          </div>
          <div>
            <span>{t.footer.jurisdiction}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
