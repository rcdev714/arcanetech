import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Eridas",
  description:
    "Deterministic self-healing software. AppSec closes disclosed npm lockfile vulns against OSV. OpSec (Tinfoil L1–L4) scans what a live app leaks. GitHub App, API, SDK, and MCP. Live at erydas.vercel.app.",
  alternates: {
    canonical: "https://arcanetechnologies.org/products/eridas",
  },
  openGraph: {
    title: "Eridas | Self-healing software",
    description:
      "Deterministic self-healing software: AppSec on the lockfile, OpSec on the live app. OSV truth, Tinfoil L1–L4, verified fix PRs.",
    url: "https://arcanetechnologies.org/products/eridas",
  },
};

export default function EridasLayout({ children }: { children: ReactNode }) {
  return children;
}
