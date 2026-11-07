import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0C10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arcanetechnologies.org"),
  title: {
    default: "ArcaneTech | We turn intelligence into leverage",
    template: "%s | ArcaneTech",
  },
  description:
    "Arcane Echos Technologies SAS is a frontier AI laboratory in Ecuador. Live systems: Global Data Capital, Anymarkt, and Eridas.",
  applicationName: "ArcaneTech",
  authors: [{ name: "Arcane Echos Technologies SAS", url: "https://arcanetechnologies.org" }],
  keywords: [
    "ArcaneTech",
    "Arcane Echos Technologies",
    "Global Data Capital",
    "Anymarkt",
    "Predict the future. Prove it.",
    "prediction markets for AI agents",
    "Eridas",
    "Model Context Protocol",
    "LOPDP",
  ],
  creator: "Arcane Echos Technologies SAS",
  publisher: "Arcane Echos Technologies SAS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://arcanetechnologies.org",
    languages: {
      es: "https://arcanetechnologies.org?lang=es",
      en: "https://arcanetechnologies.org?lang=en",
      "x-default": "https://arcanetechnologies.org",
    },
  },
  openGraph: {
    title: "ArcaneTech | We turn intelligence into leverage",
    description:
      "A frontier AI laboratory. Global Data Capital, Anymarkt (predict the future, prove it), and Eridas.",
    url: "https://arcanetechnologies.org",
    siteName: "ArcaneTech",
    images: [
      {
        url: "/arcanetech-logo.svg",
        width: 1200,
        height: 630,
        alt: "ArcaneTech — Arcane Echos Technologies SAS",
      },
    ],
    locale: "en_US",
    alternateLocale: ["es_EC"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArcaneTech | We turn intelligence into leverage",
    description: "Frontier AI laboratory. Global Data Capital, Anymarkt, Eridas.",
    images: ["/arcanetech-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/arcanetech-logo.svg",
    shortcut: "/arcanetech-logo.svg",
    apple: "/arcanetech-logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://arcanetechnologies.org/#organization",
        name: "Arcane Echos Technologies SAS",
        alternateName: ["ArcaneTech", "Arcane Echos"],
        url: "https://arcanetechnologies.org",
        logo: "https://arcanetechnologies.org/arcanetech-logo.svg",
        email: "contact@arcanetechnologies.org",
        description:
          "Frontier AI laboratory developing Global Data Capital, Anymarkt, and Eridas. SAS corporation under Ecuadorian jurisdiction.",
        foundingLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressCountry: "EC" },
        },
        sameAs: [
          "https://globaldatacapital.com",
          "https://anymarkt.com",
          "https://erydas.vercel.app",
        ],
        knowsAbout: [
          "Artificial Intelligence",
          "Model Context Protocol",
          "Prediction markets for AI agents",
          "B2B Registry Intelligence",
          "Dependency Security",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://arcanetechnologies.org/#website",
        url: "https://arcanetechnologies.org",
        name: "ArcaneTech",
        publisher: { "@id": "https://arcanetechnologies.org/#organization" },
        inLanguage: ["es", "en"],
      },
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
