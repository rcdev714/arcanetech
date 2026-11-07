"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useSyncExternalStore } from "react";

export type Lang = "en" | "es";

const LANG_KEY = "arcane-lang";
const langListeners = new Set<() => void>();

function emitLang() {
  langListeners.forEach((listener) => listener());
}

function subscribeLang(listener: () => void) {
  langListeners.add(listener);
  return () => {
    langListeners.delete(listener);
  };
}

function readLang(): Lang {
  const stored = window.localStorage.getItem(LANG_KEY);
  return stored === "es" ? "es" : "en";
}

export function useInstituteLang(fallback: Lang = "en"): [Lang, (lang: Lang) => void] {
  const lang = useSyncExternalStore(subscribeLang, readLang, () => fallback);
  const onLang = useCallback((next: Lang) => {
    window.localStorage.setItem(LANG_KEY, next);
    emitLang();
  }, []);

  return [lang, onLang];
}

const NAV = {
  en: {
    systems: "Systems",
    dispatch: "Dispatch",
    thesis: "Thesis",
    legal: "Legal",
  },
  es: {
    systems: "Sistemas",
    dispatch: "Despacho",
    thesis: "Tesis",
    legal: "Legal",
  },
};

export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

export function LanguageToggle({
  lang,
  onLang,
}: {
  lang: Lang;
  onLang: (lang: Lang) => void;
}) {
  return (
    <div className="flex items-baseline gap-3 text-sm text-[var(--mute)]">
      <button
        type="button"
        onClick={() => onLang("en")}
        className={lang === "en" ? "text-[var(--paper)]" : "hover:text-[var(--paper)]"}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onLang("es")}
        className={lang === "es" ? "text-[var(--paper)]" : "hover:text-[var(--paper)]"}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
    </div>
  );
}

export function InstituteHeader({
  lang,
  onLang,
  homeLinks = true,
}: {
  lang: Lang;
  onLang: (lang: Lang) => void;
  homeLinks?: boolean;
}) {
  const t = NAV[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rule)] bg-[var(--void)]/88 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-[72rem] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-[var(--paper)]">
          <Image src="/arcanetech-logo.svg" alt="" width={28} height={28} className="rounded-sm" />
          <span className="display text-[1.35rem] leading-none">ArcaneTech</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[var(--mute)] md:flex">
          {homeLinks ? (
            <>
              <a href="#systems" className="hover:text-[var(--paper)]">
                {t.systems}
              </a>
              <a href="#dispatch" className="hover:text-[var(--paper)]">
                {t.dispatch}
              </a>
              <a href="#thesis" className="hover:text-[var(--paper)]">
                {t.thesis}
              </a>
            </>
          ) : (
            <Link href="/#systems" className="hover:text-[var(--paper)]">
              {t.systems}
            </Link>
          )}
          <Link href="/legal/terms" className="hover:text-[var(--paper)]">
            {t.legal}
          </Link>
        </nav>

        <LanguageToggle lang={lang} onLang={onLang} />
      </div>
    </header>
  );
}

export function InstituteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="mt-auto border-t border-[var(--rule)] py-12 text-sm text-[var(--mute)]">
      <div className="mx-auto flex max-w-[72rem] flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display text-2xl text-[var(--paper)]">ArcaneTech</p>
          <p className="mt-2 max-w-md">
            {lang === "es"
              ? "Arcane Echos Technologies S.A.S. · República del Ecuador · Superintendencia de Compañías y SRI."
              : "Arcane Echos Technologies S.A.S. · Republic of Ecuador · Superintendence of Companies and SRI."}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/legal/terms" className="hover:text-[var(--paper)]">
            {lang === "es" ? "Términos" : "Terms"}
          </Link>
          <Link href="/legal/privacy" className="hover:text-[var(--paper)]">
            {lang === "es" ? "Privacidad" : "Privacy"}
          </Link>
          <a href="mailto:contact@arcanetechnologies.org" className="hover:text-[var(--paper)]">
            contact@arcanetechnologies.org
          </a>
        </div>
      </div>
    </footer>
  );
}

export function InstituteShell({
  lang,
  onLang,
  children,
  homeLinks = false,
}: {
  lang: Lang;
  onLang: (lang: Lang) => void;
  children: React.ReactNode;
  homeLinks?: boolean;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Grain />
      <InstituteHeader lang={lang} onLang={onLang} homeLinks={homeLinks} />
      {children}
      <InstituteFooter lang={lang} />
    </div>
  );
}

export function SpecCrumb({
  lang,
  leaf,
}: {
  lang: Lang;
  leaf: string;
}) {
  return (
    <p className="text-sm text-[var(--mute)]">
      <Link href="/" className="hover:text-[var(--paper)]">
        ArcaneTech
      </Link>
      <span className="mx-3 text-[var(--rule)]">/</span>
      {leaf}
      <span className="sr-only">
        {lang === "es" ? " — especificación" : " — specification"}
      </span>
    </p>
  );
}
