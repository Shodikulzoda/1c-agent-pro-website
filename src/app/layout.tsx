import type { Metadata } from "next";
import { Caveat, Inter, Manrope } from "next/font/google";
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

const title = "1C Agent Pro";
const description =
  "1C Agent Pro — мобильное рабочее место торгового представителя с полной интеграцией с 1С: заказы, визиты, фотоотчёты и GPS-контроль маршрутов в реальном времени.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  keywords: [
    "1C Agent Pro",
    "1С торговый представитель",
    "мобильное приложение для агентов",
    "интеграция с 1С",
    "CRM торговых представителей",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
