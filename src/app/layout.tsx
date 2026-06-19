import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const SITE_URL = "https://mekanbahis592.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mekanbahis | Güvenilir Bahsin Mekanı",
    template: "%s | Mekanbahis",
  },
  description:
    "Mekanbahis resmi tanıtım sitesi. Lisanslı canlı bahis, casino, slot, Aviator ve sanal oyunlar. Yüksek oranlar, hızlı ödeme ve 7/24 destek için güncel giriş adresi.",
  keywords: [
    "Mekanbahis",
    "Mekanbahis giriş",
    "Mekanbahis güncel link",
    "canlı bahis",
    "canlı casino",
    "slot oyunları",
    "Aviator",
    "bonus",
  ],
  openGraph: {
    title: "Mekanbahis | Güvenilir Bahsin Mekanı",
    description:
      "Lisanslı canlı bahis, casino ve slot oyunlarının resmi adresi. Güncel giriş, kampanyalar ve bonuslar burada.",
    url: SITE_URL,
    siteName: "Mekanbahis",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mekanbahis | Güvenilir Bahsin Mekanı",
    description:
      "Lisanslı canlı bahis, casino ve slot oyunlarının resmi adresi.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#0a0420] text-white selection:bg-pink/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
