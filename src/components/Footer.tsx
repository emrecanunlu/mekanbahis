import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { SITE, NAV, CATEGORIES } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export function Footer() {
  const latest = getAllPosts().slice(0, 4);

  return (
    <footer className="border-t border-soft bg-[#070218] pb-24 pt-14 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandMark size="lg" />
            <p className="mt-4 text-sm leading-6 text-[#b0a7d6]">
              {SITE.name} – {SITE.tagline}. Lisanslı canlı bahis, casino ve slot
              oyunlarının resmi tanıtım sitesi. Güncel giriş, kampanyalar ve
              rehber yazıları burada.
            </p>
            <a
              href={SITE.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 cursor-pointer items-center gap-2 rounded-md border border-pink/30 bg-pink/10 px-4 text-sm font-semibold text-[#ff7ab8] transition-colors hover:bg-pink/20"
            >
              <span className="h-2 w-2 rounded-full bg-pink" />
              {SITE.domain}
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Menü
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#b0a7d6] transition-colors hover:text-pink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Kategoriler
            </h4>
            <ul className="mt-4 space-y-2">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/blog?cat=${c.slug}`}
                    className="text-sm text-[#b0a7d6] transition-colors hover:text-pink"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Son Yazılar
            </h4>
            <ul className="mt-4 space-y-3">
              {latest.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-sm leading-5 text-[#b0a7d6] transition-colors hover:text-pink"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-soft pt-6 text-xs text-[#8a82b3] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <span className="grid h-5 w-5 place-items-center rounded-full border border-pink/40 text-[10px] font-bold text-pink">
                18+
              </span>
              Yalnızca 18 yaş üstü
            </span>
            <span>Sorumlu Oyun</span>
            <span>Curaçao Lisansı</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
