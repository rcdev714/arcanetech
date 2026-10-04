"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AnyMarktProductPage() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <div className="relative min-h-screen flex flex-col bg-[#07070A] text-[#F3F4F6] tech-grid">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] hero-glow-2 pointer-events-none" />

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
              <Image src="/anymarkt-logo.svg" alt="AnyMarkt" width={20} height={20} className="rounded" />
              <span className="text-xs font-mono font-medium text-white/90">AnyMarkt</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border border-[rgba(255,255,255,0.12)] rounded-full p-0.5 bg-black/40">
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition ${
                  lang === "es" ? "bg-[#3B82F6] text-white" : "text-white/50 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition ${
                  lang === "en" ? "bg-[#3B82F6] text-white" : "text-white/50 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="https://anymarkt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-[#020053] hover:bg-[#030075] border border-blue-400/30 shadow-lg shadow-blue-900/30 transition-all"
            >
              <span>{lang === "es" ? "Abrir AnyMarkt" : "Launch AnyMarkt"}</span>
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
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-mono">
            <span className="status-dot-active" />
            <span>{lang === "es" ? "Plataforma en Vivo · Créditos Sin Riesgo" : "Live Platform · Free Practice Credits"}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-[rgba(255,255,255,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#020053] p-2 border border-white/20 shadow-xl flex items-center justify-center">
                <Image src="/anymarkt-logo.svg" alt="AnyMarkt" width={42} height={42} className="object-contain" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  AnyMarkt
                </h1>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">anymarkt.com · Social Prediction Markets Engine</p>
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mt-6">
              {lang === "es"
                ? "Mercados de predicción sociales de próxima generación. AnyMarkt permite a grupos de amigos, equipos y comunidades crear mercados de pronóstico cerrados, competir con créditos de práctica sin riesgo monetario, y desbloquear mercados en USD con liquidación transparente."
                : "Next-generation social prediction markets. AnyMarkt empowers groups, teams, and analyst networks to host private forecasting pools, test thesis conviction using practice credits with zero capital risk, and graduate into live liquidity markets."}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://anymarkt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 transition"
              >
                <span>{lang === "es" ? "Jugar Gratis en anymarkt.com" : "Play Free at anymarkt.com"}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Value proposition card */}
          <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-[rgba(255,255,255,0.12)]">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
              {lang === "es" ? "Arquitectura de Juego" : "Game Architecture"}
            </h3>
            <ul className="space-y-3 font-mono text-xs text-white/80">
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">{lang === "es" ? "Modo Práctica" : "Practice Mode"}</span>
                <span className="text-cyan-400 font-semibold">{lang === "es" ? "Créditos 100% Gratis" : "100% Free Credits"}</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">{lang === "es" ? "Grupos Privados" : "Private Groups"}</span>
                <span className="text-cyan-400 font-semibold">{lang === "es" ? "Invitación Directa" : "Direct Invite Only"}</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">{lang === "es" ? "Mercados Reales" : "Live Markets"}</span>
                <span className="text-cyan-400 font-semibold">{lang === "es" ? "USD Restringido/Gated" : "USD Gated Gating"}</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">{lang === "es" ? "Resolución" : "Settlement"}</span>
                <span className="text-cyan-400 font-semibold">{lang === "es" ? "Oráculos Verificados" : "Verified Oracles"}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">{lang === "es" ? "Móvil / Web" : "Mobile / Web"}</span>
                <span className="text-cyan-400 font-semibold">PWA + Responsive</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-indigo absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">👥</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Grupos de Pronóstico Privados" : "Private Prediction Groups"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Crea salas privadas con tus reglas, temas de interés político, financiero, deportivo o tecnológico, y compite en tablas de clasificación en tiempo real."
                : "Spin up closed syndicates for your company, friend circle, or analyst team with custom resolution criteria, leaderboards, and instant peer tracking."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-purple absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">🎯</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Economía de Créditos de Práctica" : "Practice Liquidity Engine"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Usa la suite completa sin arriesgar capital real. Los créditos de práctica permiten calibrar probabilidades con fidelidad algorítmica idéntica al mercado real."
                : "Experience full depth, order execution, and outcome math with zero capital risk. Practice credits reflect real market dynamics without legal or monetary friction."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            <div className="card-glow-emerald absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">📈</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Mercados Verificables" : "Transparent Settlement"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Cada predicción cuenta con un enlace a la fuente objetiva de resolución. Eliminamos ambigüedades mediante consenso estricto y auditoría."
                : "Every market resolves against strict verifiable public sources and deterministic outcome criteria, eliminating ambiguous outcomes."}
            </p>
          </div>
        </div>

        {/* Live Interface Preview simulation */}
        <div className="glass-panel p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] mb-16">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-white/50">AnyMarkt · Market Simulator Mock</span>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">Live Probability Feed</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/50 border border-white/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-white/60">Macro / Tech</span>
                <span className="text-xs font-mono text-emerald-400">78% YES</span>
              </div>
              <p className="text-sm font-medium text-white mb-3">
                {lang === "es" ? "¿Superará el Model Context Protocol más de 100M llamadas diarias en 2026?" : "Will Model Context Protocol exceed 100M daily agent calls in 2026?"}
              </p>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[78%]" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-white/60">LATAM Commerce</span>
                <span className="text-xs font-mono text-indigo-400">62% YES</span>
              </div>
              <p className="text-sm font-medium text-white mb-3">
                {lang === "es" ? "¿Adoptarán 4 países sudamericanos identidad societaria digital unificada?" : "Will 4 South American nations adopt unified digital registry APIs by Q4?"}
              </p>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-400 h-full w-[62%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center py-12 border-t border-[rgba(255,255,255,0.08)]">
          <h2 className="text-2xl font-bold text-white mb-4">
            {lang === "es" ? "Comienza a predecir con tu grupo" : "Start forecasting with your group"}
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto mb-8">
            {lang === "es"
              ? "Crea una cuenta sin costo y recibe créditos de práctica para calibrar tus tesis."
              : "Create an account in seconds and receive starter practice credits."}
          </p>
          <a
            href="https://anymarkt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#020053] hover:bg-[#030075] border border-blue-400/40 shadow-lg shadow-blue-900/30 transition-all"
          >
            <span>{lang === "es" ? "Ir a anymarkt.com" : "Open anymarkt.com"}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
