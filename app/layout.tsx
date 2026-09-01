import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "Protein Frozen Desserts | 34 High-Protein Recipes | Protein Scoop Lab";
const siteDescription =
  "34 creamy high-protein ice creams, silky yogurt barks, popsicles, and freezer bites. Tested master formulas with real pantry ingredients, complete approximate macros, and instant PDF/EPUB download.";
const siteUrl = "https://en.comesano.lat";
const canonicalUrl = "https://en.comesano.lat/protein-scoop-lab";

export const viewport: Viewport = {
  themeColor: "#1b0f0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Protein Scoop Lab",
  },
  description: siteDescription,
  applicationName: "Protein Scoop Lab",
  authors: [{ name: "Protein Scoop Lab by Come Sano", url: canonicalUrl }],
  creator: "Protein Scoop Lab",
  publisher: "Come Sano",
  keywords: [
    "protein ice cream",
    "high protein desserts",
    "protein yogurt bark",
    "protein popsicles",
    "macro friendly desserts",
    "cottage cheese ice cream",
    "protein frozen desserts",
    "Protein Scoop Lab",
    "Come Sano",
    "healthy frozen treats",
    "34 protein dessert recipes",
    "high protein recipe ebook",
    "whey protein ice cream",
    "easy high protein sweets",
  ],
  alternates: {
    canonical: "/protein-scoop-lab",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Protein Scoop Lab",
    images: [
      {
        url: "/og.png",
        width: 1729,
        height: 910,
        alt: "Protein Frozen Desserts - 34 High-Protein Recipes by Protein Scoop Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protein Frozen Desserts | 34 High-Protein Recipes",
    description: siteDescription,
    images: ["/og.png"],
    creator: "@ProteinScoopLab",
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
  other: {
    "codex-preview": "development",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Protein Scoop Lab",
      description: siteDescription,
      inLanguage: "en-US",
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Protein Scoop Lab by Come Sano",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-512.png`,
        },
      },
    },
    {
      "@type": "Book",
      "@id": `${siteUrl}/#ebook`,
      name: "Protein Frozen Desserts: 34 High-Protein Recipes",
      description:
        "A premium digital recipe collection of 34 high-protein ice creams, yogurt barks, popsicles, and freezer bites with approximate macros and 4 repeatable master formulas.",
      bookFormat: "https://schema.org/EBook",
      inLanguage: "en-US",
      numberOfPages: 34,
      author: {
        "@type": "Organization",
        name: "Come Sano",
      },
      publisher: {
        "@type": "Organization",
        name: "Protein Scoop Lab",
      },
      image: `${siteUrl}/images/hero-ebook.webp`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What format do I receive after purchase?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You receive instant digital access to both PDF and EPUB editions of the ebook. You can download and read it immediately on your iPhone, Android, iPad, Kindle, tablet, or computer.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a Ninja CREAMi or special ice cream machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No! None of the recipes require expensive ice cream machines. All you need is a standard blender or food processor, a baking sheet with parchment paper for bark, or popsicle molds.",
          },
        },
        {
          "@type": "Question",
          name: "What types of protein powder can I use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The recipes work smoothly with whey protein, casein, or plant-based protein powders (pea, soy, or blended). The book includes a dedicated Smart Swaps guide with liquid adjustments for each type.",
          },
        },
        {
          "@type": "Question",
          name: "Are complete nutrition estimates included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every recipe includes approximate values per serving for Calories, Protein, Carbohydrates, Fat, and Dietary Fiber so you can easily log your meals.",
          },
        },
        {
          "@type": "Question",
          name: "How long do these treats stay fresh in the freezer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The book includes a dedicated Storage & Texture Guide: Yogurt bark keeps 1 to 2 weeks, popsicles 2 to 3 weeks, frozen bites 1 to 2 weeks, and soft-serve style bowls can be enjoyed immediately or stored up to 3 days.",
          },
        },
        {
          "@type": "Question",
          name: "Can I adjust the sweetness or dairy ingredients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The guide details how to adjust natural sweeteners (honey, maple syrup, dates, or calorie-free options) and how to swap between Greek yogurt, skyr, and blended cottage cheese.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1b0f0b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
