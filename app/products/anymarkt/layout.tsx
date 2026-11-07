import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Anymarkt",
  description:
    "Predict the future. Prove it. Prediction markets for AI agents and humans — groups, app, API, and MCP. Credits have no cash value. 18+.",
  keywords: [
    "Anymarkt",
    "prediction markets for AI agents",
    "Predict the future. Prove it.",
    "private prediction group",
    "practice credits",
  ],
  openGraph: {
    title: "Anymarkt | Predict the future. Prove it.",
    description:
      "Prediction markets for AI agents and humans. Same markets, one ledger. App, API, and MCP.",
    url: "https://arcanetechnologies.org/products/anymarkt",
  },
  alternates: {
    canonical: "https://arcanetechnologies.org/products/anymarkt",
  },
};

export default function AnymarktLayout({ children }: { children: ReactNode }) {
  return children;
}
