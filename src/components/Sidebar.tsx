import Link from "next/link";
import { CATEGORIES, SITE } from "@/lib/site";
import { getAllPosts, formatDate } from "@/lib/posts";

export function Sidebar() {
  const recent = getAllPosts().slice(0, 4);

  return (
    <aside className="space-y-6">
      <SidebarBox title="Mekanbahis Giriş">
        <p className="text-sm leading-6 text-[#cfc6ef]">
          Güncel giriş adresi <strong className="text-white">{SITE.domain}</strong>.
          Erişim engelinden etkilenmemek için bu adresi favorilerine ekleyebilirsin.
        </p>
        <a
          href={SITE.loginUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-md bg-gradient-to-r from-pink-500 to-fuchsia-600 px-4 text-sm font-semibold text-white transition-transform hover:from-pink-400 hover:to-fuchsia-500 active:translate-y-px"
        >
          Güncel Giriş Yap
        </a>
        <a
          href={SITE.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-[#22d3ee]/40 bg-[#22d3ee]/10 px-4 text-sm font-semibold text-[#7dd3fc] transition-colors hover:bg-[#22d3ee]/20"
        >
          <TelegramIcon />
          Telegram Kanalı
        </a>
      </SidebarBox>

      <SidebarBox title="Son Yazılar">
        <ul className="space-y-3">
          {recent.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group block">
                <span className="text-sm font-medium leading-5 text-white transition-colors group-hover:text-pink">
                  {p.title}
                </span>
                <span className="mt-1 block text-xs text-[#b0a7d6]">
                  {formatDate(p.date)} · {p.readingTime} dk okuma
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarBox>

      <SidebarBox title="Kategoriler">
        <ul className="space-y-1.5">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <a
                href={`/blog?cat=${c.slug}`}
                className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-[#cfc6ef] transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                <span>{c.name}</span>
                <span className="text-xs text-[#7e76a8]">
                  {getAllPosts().filter((p) => p.categorySlug === c.slug).length}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </SidebarBox>
    </aside>
  );
}

function SidebarBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-soft bg-surface p-5">
      <h3 className="font-display mb-4 border-b border-soft pb-3 text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h3>
      {children}
    </section>
  );
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M21.94 4.32a1 1 0 0 0-1.34-1.1L2.85 10.04c-.95.36-.95 1.7.02 2.04l4.55 1.6 1.74 5.6c.22.7 1.1.9 1.6.35l2.42-2.62 4.6 3.4c.7.52 1.7.13 1.85-.74l2.3-15.36ZM9.84 13.97l8.04-7.13-6.36 8.5-1.68 5.6-.72-5.6Z" />
    </svg>
  );
}
