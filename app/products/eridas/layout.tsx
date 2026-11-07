import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Eridas",
  description:
    "The easiest way to keep your dependencies up to date. Deterministic self-healing software: open-source CLI, Eridas Cloud, API, TypeScript SDK, MCP, and Tinfoil site scans. Live at erydas.vercel.app.",
  alternates: {
    canonical: "https://arcanetechnologies.org/products/eridas",
  },
  openGraph: {
    title: "Eridas | ArcaneTech",
    description:
      "Deterministic npm dependency security. OSV scans, verified fixes, GitHub App, Cloud API, SDK, and MCP.",
    url: "https://arcanetechnologies.org/products/eridas",
  },
};

export default function EridasLayout({ children }: { children: ReactNode }) {
  return children;
}
