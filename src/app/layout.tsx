import type { Metadata } from "next";
import { Caveat, Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

// Handwritten script accent (has Cyrillic) — matches the blue script captions
// scattered across the source marketing art ("Больше возможностей…").
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "1C Agent Pro — Мобильное приложение для торговых представителей";
const description =
  "Мобильное рабочее место торгового представителя с интеграцией 1С. Заказы, визиты, фотоотчёты и GPS-контроль маршрутов в реальном времени. Быстрое внедрение за 2 дня.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | 1C Agent Pro",
  },
  description,
  keywords: [
    "1C Agent Pro",
    "1С торговый представитель",
    "мобильное приложение для агентов",
    "интеграция с 1С",
    "CRM торговых представителей",
    "торговый агент приложение",
    "автоматизация торговых представителей",
    "мобильная торговля 1С",
    "Таджикистан",
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ru_RU",
    siteName: "1C Agent Pro",
    url: siteUrl,
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "1C Agent Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "1C Agent Pro",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+992928646900",
        contactType: "sales",
        areaServed: "TJ",
        availableLanguage: "Russian",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Худжанд",
        addressCountry: "TJ",
        streetAddress: "ул. Гагарина 137",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "1C Agent Pro",
      url: siteUrl,
      telephone: "+992928646900",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Гагарина 137",
        addressLocality: "Худжанд",
        addressCountry: "TJ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.2833,
        longitude: 69.6333,
      },
      openingHours: "Mo-Fr 09:00-18:00",
      priceRange: "от 40 TJS/агент/мес",
      areaServed: { "@type": "Country", name: "Tajikistan" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#app`,
      name: "1C Agent Pro",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      description,
      url: siteUrl,
      offers: {
        "@type": "Offer",
        price: "40",
        priceCurrency: "TJS",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "40",
          priceCurrency: "TJS",
          unitText: "агент/месяц",
        },
      },
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
