"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EridasProductPage() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#07070A] text-[#F3F4F6] tech-grid">
      {/* Top Ambient Security Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(16,185,129,0.2),transparent_70%)] pointer-events-none" />

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
              <Image src="/eridas-logo.svg" alt="Eridas" width={20} height={20} className="rounded" />
              <span className="text-xs font-mono font-medium text-emerald-400">Eridas</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border border-[rgba(255,255,255,0.12)] rounded-full p-0.5 bg-black/40">
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition ${
                  lang === "es" ? "bg-emerald-600 text-white" : "text-white/50 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono transition ${
                  lang === "en" ? "bg-emerald-600 text-white" : "text-white/50 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-black bg-emerald-400 hover:bg-emerald-300 font-mono shadow-lg shadow-emerald-500/20 transition-all"
            >
              <span>{lang === "es" ? "Solicitar Acceso" : "Request Access"}</span>
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
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-[11px] font-mono">
            <span className="status-dot-pending" />
            <span>{lang === "es" ? "En Desarrollo · Alpha Privada" : "Confidential Development · Private Alpha"}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-[rgba(255,255,255,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#051311] p-2 border border-emerald-500/30 shadow-xl flex items-center justify-center">
                <Image src="/eridas-logo.svg" alt="Eridas" width={42} height={42} className="object-contain" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  Eridas
                </h1>
                <p className="text-xs font-mono text-emerald-400 mt-0.5">eridas.sh · Autonomous AI Agent Defense &amp; Security Fabric</p>
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mt-6">
              {lang === "es"
                ? "La capa de defensa criptográfica para agentes de inteligencia artificial y entornos autónomos. Eridas intercepta inyecciones de prompt maliciosas, aísla llamadas a herramientas críticas mediante zero-trust MCP containment y genera firmas auditables de procedencia para cada decisión autónoma."
                : "The cryptographic defense fabric for autonomous AI agents and execution runtimes. Eridas intercepts indirect prompt injections, sandboxes critical tool calls via zero-trust MCP proxy containment, and stamps tamper-proof cryptographic audit trails for every agentic action."}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-black bg-emerald-400 hover:bg-emerald-300 font-mono shadow-lg shadow-emerald-500/25 transition"
              >
                <span>{lang === "es" ? "Unirse a la Lista de Espera Alpha" : "Join Alpha Waitlist"}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono text-white/60 bg-white/5 border border-white/10">
                🔒 {lang === "es" ? "Lanzamiento Previsto: Q4 2026" : "Target Deployment: Q4 2026"}
              </span>
            </div>
          </div>

          {/* Security Architecture Box */}
          <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-emerald-500/20">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {lang === "es" ? "Capas de Seguridad" : "Defense Matrix"}
            </h3>
            <ul className="space-y-3 font-mono text-xs text-white/80">
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">L1: Firewall de Entrada</span>
                <span className="text-emerald-400 font-semibold">Prompt Sanitization</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">L2: Contención MCP</span>
                <span className="text-emerald-400 font-semibold">Zero-Trust Sandbox</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">L3: Auditoría</span>
                <span className="text-emerald-400 font-semibold">Cryptographic Trail</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-white/60">L4: Gobernanza</span>
                <span className="text-emerald-400 font-semibold">Policy As Code</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/60">Soberanía</span>
                <span className="text-emerald-400 font-semibold">On-Prem / Cloud EC</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-emerald-500/20">
            <div className="card-glow-emerald absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">🛡️</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Blindaje contra Prompt Injection" : "Prompt Injection Armor"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Detección y neutralización en tiempo real de inyecciones indirectas ocultas en emails, PDFs, llamadas de API y datos de navegación no confiables antes de que alcancen el modelo."
                : "Real-time semantic filtering of indirect and recursive prompt injections embedded in inbound web content, emails, and third-party documents before model execution."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-cyan-500/20">
            <div className="card-glow-indigo absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">🔐</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Proxy MCP de Confianza Cero" : "Zero-Trust MCP Proxy"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Cada invocación de herramienta (ejecución de shell, lectura de base de datos, transacción bancaria) se evalúa contra políticas deterministas antes de ser autorizada."
                : "Intercepts every Model Context Protocol tool invocation, verifying authorization tokens, parameter boundaries, and output toxicity before release."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-purple-500/20">
            <div className="card-glow-purple absolute inset-0 pointer-events-none" />
            <div className="text-xl mb-4">📜</div>
            <h3 className="text-base font-semibold text-white mb-2">
              {lang === "es" ? "Firma Inmutable de Procedencia" : "Immutable Audit Chain"}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "es"
                ? "Registro criptográfico inalterable de cada token de pensamiento, herramienta invocada y resultado devuelto, facilitando cumplimiento legal y auditorías judiciales."
                : "Appends high-entropy cryptographic hashes to all agent thoughts, tool side-effects, and outputs, providing forensic compliance for regulated enterprises."}
            </p>
          </div>
        </div>

        {/* Waitlist Form Section */}
        <div id="waitlist" className="glass-panel p-8 sm:p-12 rounded-2xl border border-emerald-500/30 max-w-2xl mx-auto text-center mb-16">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center text-xl mb-4">
            ⚡
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            {lang === "es" ? "Acceso Anticipado Confidencial" : "Request Confidential Access"}
          </h2>
          <p className="text-xs text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
            {lang === "es"
              ? "Eridas se encuentra actualmente disponible para instituciones gubernamentales, laboratorios de IA y clientes empresariales seleccionados bajo acuerdo de confidencialidad."
              : "Eridas is currently deploying under NDA to select security teams, AI laboratories, and regulated infrastructure providers."}
          </p>

          {submitted ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              ✓ {lang === "es" ? "Solicitud registrada. El equipo de seguridad de ArcaneTech se pondrá en contacto." : "Request logged. ArcaneTech's security operations team will follow up via encrypted channel."}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="security@enterprise.com"
                className="flex-1 bg-black/60 border border-white/15 rounded-lg px-4 py-3 text-xs font-mono text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg text-xs font-mono font-medium text-black bg-emerald-400 hover:bg-emerald-300 transition shrink-0"
              >
                {lang === "es" ? "Solicitar Invitación" : "Request Alpha Invite"}
              </button>
            </form>
          )}

          <p className="text-[11px] font-mono text-white/40 mt-4">
            {lang === "es" ? "Arquitectura de seguridad zero-trust para entornos de IA de alta criticidad." : "Zero-trust security architecture for mission-critical AI environments."}
          </p>
        </div>
      </main>
    </div>
  );
}
