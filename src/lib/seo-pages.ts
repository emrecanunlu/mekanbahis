import { SEO_PAGE_KEYWORDS } from "./keywords";
import { ENTRY_SEO_PAGES } from "./entry-seo-pages";
import { getSeoPageBody } from "./seo-page-bodies";

export type SeoPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  content: string;
  faq: { q: string; a: string }[];
  updatedAt: string;
};

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "mekanbahis-giris",
    title: "Mekanbahis Giriş 2026 | Güncel Giriş Adresi",
    h1: "Mekanbahis Giriş — Güncel Adres ve Güvenli Erişim",
    description:
      "Mekanbahis giriş adresi 2026. mkngrs.link/mekangiris kalıcı linki üzerinden güvenli giriş, üyelik ve bonus talebi. Domain değişse bile otomatik yönlendirme.",
    keywords: ["Mekanbahis giriş", "Mekanbahis login", "Mekanbahis üye girişi"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Mekanbahis'e nasıl giriş yapılır?",
        a: "mkngrs.link/mekangiris adresine gidin; otomatik olarak güncel domaine yönlendirilirsiniz. Ardından sağ üstteki Giriş butonuna tıklayıp kullanıcı adı ve şifrenizi girin.",
      },
      {
        q: "Giriş yapamıyorum, ne yapmalıyım?",
        a: "DNS ayarlarını 8.8.8.8 yapın, önbelleği temizleyin veya bu sayfadaki güncel linki kullanın.",
      },
    ],
    content: getSeoPageBody("mekanbahis-giris"),
  },
  {
    slug: "mekanbahis-guncel-adres",
    title: "Mekanbahis Güncel Adres 2026 | Yeni Giriş Linki",
    h1: "Mekanbahis Güncel Adres — 2026 Yeni Domain",
    description:
      "Mekanbahis güncel adres ve kalıcı giriş linki. mkngrs.link/mekangiris — domain değişse bile otomatik yönlendirme.",
    keywords: ["Mekanbahis güncel adres", "Mekanbahis yeni link", "mekangiris"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Mekanbahis güncel adresi nedir?",
        a: "Kalıcı giriş linki mkngrs.link/mekangiris'tir; tıkladığınızda her zaman güncel domaine yönlendirilirsiniz.",
      },
      {
        q: "Adres neden değişiyor?",
        a: "BTK erişim engelleri nedeniyle domain numarası periyodik güncellenir; hesap bilgileri etkilenmez.",
      },
    ],
    content: getSeoPageBody("mekanbahis-guncel-adres"),
  },
  {
    slug: "mekanbahis-guncel-giris",
    title: "Mekanbahis Güncel Giriş | Hızlı ve Güvenli Link",
    h1: "Mekanbahis Güncel Giriş — Anında Erişim",
    description:
      "Mekanbahis güncel giriş linki mkngrs.link/mekangiris. Kalıcı yönlendirme, mobil ve masaüstü giriş ipuçları.",
    keywords: ["Mekanbahis güncel giriş", "Mekanbahis link", "Mekanbahis erişim"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Güncel giriş linki güvenli mi?",
        a: "Evet. mkngrs.link/mekangiris resmi yönlendirme linkidir; güncel domain SSL sertifikalıdır ve 256-bit şifreleme kullanır.",
      },
    ],
    content: getSeoPageBody("mekanbahis-guncel-giris"),
  },
  {
    slug: "mekanbahis-bonus",
    title: "Mekanbahis Bonus 2026 | %100 Hoş Geldin + Free Spin",
    h1: "Mekanbahis Bonus — Kampanyalar ve Promosyonlar",
    description:
      "Mekanbahis bonus rehberi: %100 hoş geldin, yatırım bonusu, kayıp iadesi ve Aviator cashback. Çevrim şartları ve talep adımları.",
    keywords: ["Mekanbahis bonus", "Mekanbahis hoş geldin", "Mekanbahis promosyon"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Hoş geldin bonusu kaç TL?",
        a: "İlk yatırımın %100'ü kadar, maksimum 20.000 TL bonus + 50 free spin.",
      },
    ],
    content: getSeoPageBody("mekanbahis-bonus"),
  },
  {
    slug: "mekanbahis-canli-bahis",
    title: "Mekanbahis Canlı Bahis | Yüksek Oranlar 2026",
    h1: "Mekanbahis Canlı Bahis — Spor ve E-Spor",
    description:
      "Mekanbahis canlı bahis: futbol, basketbol, tenis, e-spor. 1200+ maç, cash out, canlı izleme ve yüksek oranlar.",
    keywords: ["Mekanbahis canlı bahis", "Mekanbahis spor", "Mekanbahis iddaa"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Canlı bahiste hangi sporlar var?",
        a: "Futbol, basketbol, tenis, voleybol, e-spor ve 35+ spor dalı.",
      },
    ],
    content: getSeoPageBody("mekanbahis-canli-bahis"),
  },
  {
    slug: "mekanbahis-casino",
    title: "Mekanbahis Casino | Canlı Krupiye Masaları",
    h1: "Mekanbahis Casino — Canlı ve Slot Oyunları",
    description:
      "Mekanbahis casino: Evolution Gaming, Pragmatic Live, 180+ canlı masa, Türkçe krupiye, Crazy Time ve rulet.",
    keywords: ["Mekanbahis casino", "Mekanbahis canlı casino", "Mekanbahis rulet"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Türkçe krupiye var mı?",
        a: "Evet. Ezugi ve Pragmatic Live Türkçe masalar sunar.",
      },
    ],
    content: getSeoPageBody("mekanbahis-casino"),
  },
  {
    slug: "mekanbahis-slot",
    title: "Mekanbahis Slot | 5000+ Oyun Kataloğu",
    h1: "Mekanbahis Slot Oyunları — En Popüler Slotlar",
    description:
      "Mekanbahis slot: Sweet Bonanza, Gates of Olympus, 5000+ video slot, jackpot ve megaways. Demo mod ve bonus buy.",
    keywords: ["Mekanbahis slot", "Mekanbahis Sweet Bonanza", "Mekanbahis slot oyunları"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Slot demo modu var mı?",
        a: "Evet. Çoğu slot ücretsiz demo ile denenebilir.",
      },
    ],
    content: getSeoPageBody("mekanbahis-slot"),
  },
  {
    slug: "mekanbahis-aviator",
    title: "Mekanbahis Aviator | Crash Oyun Rehberi",
    h1: "Mekanbahis Aviator — Anlık Çarpan Oyunu",
    description:
      "Mekanbahis Aviator nasıl oynanır? Spribe crash oyunu, otomatik cash out, stratejiler ve günlük cashback.",
    keywords: ["Mekanbahis Aviator", "Mekanbahis crash", "Aviator giriş"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Aviator minimum bahis?",
        a: "0.10 TL'den başlar, maksimum 100 TL.",
      },
    ],
    content: getSeoPageBody("mekanbahis-aviator"),
  },
  {
    slug: "mekanbahis-mobil-giris",
    title: "Mekanbahis Mobil Giriş | iOS ve Android",
    h1: "Mekanbahis Mobil Giriş — Uygulama İndirmeden",
    description:
      "Mekanbahis mobil giriş: tarayıcıdan hızlı erişim, responsive arayüz, iOS/Android uyumluluk ve ana ekran kısayolu.",
    keywords: ["Mekanbahis mobil", "Mekanbahis mobil giriş", "Mekanbahis app"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Mobil uygulama var mı?",
        a: "Resmi mobil uygulama yok; tarayıcı üzerinden tam özellikli erişim sağlanır.",
      },
    ],
    content: getSeoPageBody("mekanbahis-mobil-giris"),
  },
  {
    slug: "mekanbahis-guvenilir-mi",
    title: "Mekanbahis Güvenilir mi? | Lisans ve İnceleme 2026",
    h1: "Mekanbahis Güvenilir mi? — Detaylı İnceleme",
    description:
      "Mekanbahis güvenilir mi? Curaçao lisansı, SSL şifreleme, ödeme hızı, kullanıcı yorumları ve güvenlik analizi.",
    keywords: ["Mekanbahis güvenilir mi", "Mekanbahis lisans", "Mekanbahis yorum"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Mekanbahis lisanslı mı?",
        a: "Evet. Curaçao eGaming lisansı altında hizmet verir.",
      },
      {
        q: "Para çekimi güvenli mi?",
        a: "Onaylı hesaplarda ortalama 3 dakikada Papara/kripto çekim tamamlanır.",
      },
    ],
    content: getSeoPageBody("mekanbahis-guvenilir-mi"),
  },
  {
    slug: "mekanbahis-ucretsiz-bonus",
    title: "Mekanbahis Ücretsiz Bonus | Deneme ve Free Spin",
    h1: "Mekanbahis Ücretsiz Bonus — Kampanya Rehberi",
    description:
      "Mekanbahis ücretsiz bonus, deneme bonusu ve free spin fırsatları. Yeni üyelere özel promosyonlar ve çevrim şartları.",
    keywords: ["Mekanbahis ücretsiz bonus", "Mekanbahis deneme bonusu", "Mekanbahis free spin"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Deneme bonusu var mı?",
        a: "Yeni üyelere %100 hoş geldin + 50 free spin verilir; minimum 50 TL yatırım gerekir.",
      },
    ],
    content: getSeoPageBody("mekanbahis-ucretsiz-bonus"),
  },
  {
    slug: "mekanbahis-yeni-adres",
    title: "Mekanbahis Yeni Adres 2026 | Domain Güncellemesi",
    h1: "Mekanbahis Yeni Adres — Son Domain Değişikliği",
    description:
      "Mekanbahis yeni adres duyurusu. Domain güncellemesi sonrası giriş, hesap güvenliği ve bildirim kanalları.",
    keywords: ["Mekanbahis yeni adres", "Mekanbahis domain", "mekangiris link"],
    updatedAt: "2026-07-28",
    faq: [
      {
        q: "Yeni adrese geçince hesabım silinir mi?",
        a: "Hayır. Tüm veriler merkezi sunucuda saklanır, aynı bilgilerle giriş yapılır.",
      },
    ],
    content: getSeoPageBody("mekanbahis-yeni-adres"),
  },
  ...ENTRY_SEO_PAGES,
];

export function getSeoPageBySlug(slug: string): SeoPage | undefined {
  const page = SEO_PAGES.find((p) => p.slug === slug);
  if (!page) return undefined;
  return {
    ...page,
    keywords: SEO_PAGE_KEYWORDS[page.slug] ?? page.keywords,
  };
}

export function getAllSeoPages(): SeoPage[] {
  return SEO_PAGES.map((p) => ({
    ...p,
    keywords: SEO_PAGE_KEYWORDS[p.slug] ?? p.keywords,
  }));
}
