export const SITE = {
  name: "Mekanbahis",
  tagline: "Güvenilir Bahsin Mekanı",
  /** Tanıtım sitesinin kendi domain'i (SEO canonical için) */
  promoUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mekanbahisonline.com",
  /** Ana bahis sitesi */
  domain: "mekanbahis600.com",
  url: "https://mekanbahis600.com",
  loginUrl: "https://mekanbahis600.com",
  registerUrl: "https://mekanbahis600.com",
  supportEmail: "destek@mekanbahis600.com",
  telegramUrl: "https://t.me/mekanbahis",
  locale: "tr_TR",
  language: "tr",
  twitter: "@mekanbahis",
};

export const HEADER_NAV = [
  { label: "Oyunlar", href: "/oyunlar" },
  { label: "Rehber", href: "/rehber" },
  { label: "Blog", href: "/blog" },
  { label: "Bonuslar", href: "/#bonuslar" },
  { label: "Partner", href: "/partner-siteler" },
  { label: "İletişim", href: "/iletisim" },
];

export const NAV = [
  { label: "Anasayfa", href: "/" },
  ...HEADER_NAV,
  { label: "Arama", href: "/arama" },
];

export const CATEGORIES = [
  { slug: "canli-bahis", name: "Canlı Bahis" },
  { slug: "canli-casino", name: "Canlı Casino" },
  { slug: "slot", name: "Slot Oyunları" },
  { slug: "bonuslar", name: "Bonuslar" },
  { slug: "rehber", name: "Rehber" },
  { slug: "guncel", name: "Güncel Giriş" },
];

export const SEO_LINKS = [
  { label: "Mekanbahis Giriş", href: "/rehber/mekanbahis-giris" },
  { label: "Güncel Adres", href: "/rehber/mekanbahis-guncel-adres" },
  { label: "Hoş Geldin Bonusu", href: "/rehber/mekanbahis-bonus" },
  { label: "Canlı Bahis", href: "/rehber/mekanbahis-canli-bahis" },
  { label: "Canlı Casino", href: "/rehber/mekanbahis-casino" },
  { label: "Aviator", href: "/rehber/mekanbahis-aviator" },
  { label: "Mobil Giriş", href: "/rehber/mekanbahis-mobil-giris" },
  { label: "Güvenilir mi?", href: "/rehber/mekanbahis-guvenilir-mi" },
];
