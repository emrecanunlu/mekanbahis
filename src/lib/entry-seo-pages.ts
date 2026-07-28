import { SITE } from "./site";
import { getSeoPageBody } from "./seo-page-bodies";

const UPDATED = "2026-07-28";
const LINK = SITE.domain;
const TG = SITE.telegramUrl.replace("https://", "");

export const ENTRY_SEO_PAGES = [
  {
    slug: "mekanbahis-telegram-giris",
    title: "Mekanbahis Telegram Giriş 2026 | Resmi Kanal ve Güncel Link",
    h1: "Mekanbahis Telegram Giriş — Resmi Kanal",
    description:
      "Mekanbahis Telegram giriş kanalı t.me/mekanbahis. Güncel adres duyuruları, bonus bildirimleri ve anlık giriş linki. Resmi kanal rehberi.",
    keywords: [],
    updatedAt: UPDATED,
    faq: [
      {
        q: "Mekanbahis Telegram kanalı nedir?",
        a: "Resmi Telegram kanalı t.me/mekanbahis adresindedir. Domain değişiklikleri ve bonus duyuruları buradan paylaşılır.",
      },
      {
        q: "Telegram'dan giriş güvenli mi?",
        a: "Evet. Kanaldaki linkler resmi yönlendirme adresi mkngrs.link/mekangiris üzerinden SSL korumalı siteye gider.",
      },
    ],
    content: getSeoPageBody("mekanbahis-telegram-giris"),
  },
  {
    slug: "mekanbahis-kayit-ol",
    title: "Mekanbahis Kayıt Ol 2026 | Üyelik ve Hoş Geldin Bonusu",
    h1: "Mekanbahis Kayıt Ol — 30 Saniyede Üyelik",
    description:
      "Mekanbahis kayıt ol rehberi: ücretsiz üyelik, telefon doğrulama, ilk yatırım %100 hoş geldin bonusu ve 50 free spin. Adım adım kayıt.",
    keywords: [],
    updatedAt: UPDATED,
    faq: [
      {
        q: "Mekanbahis'e kayıt olmak ücretsiz mi?",
        a: "Evet. Üyelik tamamen ücretsizdir; kayıt sonrası ilk yatırımda hoş geldin bonusu alınabilir.",
      },
      {
        q: "Kayıt için ne gerekli?",
        a: "Geçerli telefon numarası, e-posta, kullanıcı adı ve şifre yeterlidir. Kimlik doğrulama çekim öncesinde istenebilir.",
      },
    ],
    content: getSeoPageBody("mekanbahis-kayit-ol"),
  },
  {
    slug: "mekanbahis-papara-yatirim",
    title: "Mekanbahis Papara Yatırım 2026 | Hızlı Para Yatırma Rehberi",
    h1: "Mekanbahis Papara Yatırım — Anında Bakiye",
    description:
      "Mekanbahis Papara yatırım rehberi: minimum limit, adım adım yatırım, komisyonsuz işlem ve hızlı çekim. Papara ile bonus alma.",
    keywords: [],
    updatedAt: UPDATED,
    faq: [
      {
        q: "Mekanbahis Papara minimum yatırım?",
        a: "Papara ile minimum yatırım genelde 50 TL'dir; kampanyaya göre değişebilir.",
      },
      {
        q: "Papara çekim ne kadar sürer?",
        a: "Onaylı hesaplarda Papara çekimleri ortalama 3 dakikada tamamlanır.",
      },
    ],
    content: getSeoPageBody("mekanbahis-papara-yatirim"),
  },
];
