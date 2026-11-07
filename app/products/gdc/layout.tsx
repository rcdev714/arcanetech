import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Global Data Capital",
  description:
    "Find and audit any company in the Americas. Global Data Capital is the B2B directory for humans and agents across Ecuador, Mexico, the United States, Brazil, Colombia, Argentina, and Chile — 803K+ companies, REST API, and GDC MCP.",
  alternates: {
    canonical: "https://arcanetechnologies.org/products/gdc",
  },
  openGraph: {
    title: "Global Data Capital | ArcaneTech",
    description:
      "Verified company intelligence from public registries. Directory search, API, and Global Data Capital MCP.",
    url: "https://arcanetechnologies.org/products/gdc",
  },
};

export default function GdcLayout({ children }: { children: ReactNode }) {
  return children;
}
