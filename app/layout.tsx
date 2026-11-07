import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#08080C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arcanetechnologies.org"),
  title: {
    default: "ArcaneTech | Frontier AI Systems & Applied Intelligence Lab",
    template: "%s | ArcaneTech — Arcane Echos Technologies",
  },
  description:
    "Arcane Echos Technologies SAS (ArcaneTech) is an elite frontier AI research & software laboratory building autonomous systems, corporate registry intelligence networks, and deterministic dependency-security software for a global economy. Operating as a SAS corporation under Ecuadorian jurisdiction.",
  applicationName: "ArcaneTech",
  authors: [{ name: "Arcane Echos Technologies SAS", url: "https://arcanetechnologies.org" }],
  generator: "Next.js",
  keywords: [
    "ArcaneTech",
    "Arcane Echos Technologies",
    "Frontier AI Lab",
    "Global Data Capital",
    "GDC",
    "Camella",
    "AnyMarkt",
    "Eridas",
    "Erydas",
    "dependency security",
    "OSV",
    "B2B Company Search",
    "Prediction Markets",
    "Model Context Protocol",
    "MCP Server",
    "Autonomous Agents",
    "AI Cybersecurity",
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
      "es": "https://arcanetechnologies.org?lang=es",
      "en": "https://arcanetechnologies.org?lang=en",
      "x-default": "https://arcanetechnologies.org",
    },
  },
  openGraph: {
    title: "ArcaneTech | Frontier AI Systems & Applied Intelligence Lab",
    description:
      "Arcane Echos Technologies SAS (ArcaneTech) engineers high-leverage AI products: Global Data Capital (B2B registry intelligence across the Americas), AnyMarkt (social prediction groups), and Eridas (deterministic self-healing dependency security).",
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
    title: "ArcaneTech | Frontier AI Systems",
    description:
      "Frontier AI products by Arcane Echos Technologies SAS: Global Data Capital, AnyMarkt, and Eridas.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://arcanetechnologies.org/#organization",
        "name": "Arcane Echos Technologies SAS",
        "alternateName": ["ArcaneTech", "Arcane Echos"],
        "url": "https://arcanetechnologies.org",
        "logo": "https://arcanetechnologies.org/arcanetech-logo.svg",
        "email": "contact@arcanetechnologies.org",
        "description":
          "Frontier AI engineering laboratory developing intelligent multi-country registry search, social prediction platforms, and deterministic dependency-security software. Operating as a SAS corporation under Ecuadorian jurisdiction.",
        "foundingLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "EC",
          },
        },
        "sameAs": [
          "https://globaldatacapital.com",
          "https://anymarkt.com",
          "https://erydas.vercel.app",
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Model Context Protocol",
          "Dependency Security",
          "OSV",
          "B2B Registry Intelligence",
          "Prediction Markets",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://arcanetechnologies.org/#website",
        "url": "https://arcanetechnologies.org",
        "name": "ArcaneTech",
        "publisher": {
          "@id": "https://arcanetechnologies.org/#organization",
        },
        "inLanguage": ["es", "en"],
      },
    ],
  };

  return (
    <html lang="es" className="h-full scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07070A] text-[#F3F4F6] antialiased selection:bg-[#6366F1]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
