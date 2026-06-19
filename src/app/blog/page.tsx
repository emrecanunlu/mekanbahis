import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { BlogList } from "@/components/BlogList";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Blog & Rehber",
  description:
    "Mekanbahis hakkında rehberler, bonus duyuruları, oyun incelemeleri ve güncel gelişmeler. Spor bahsi, casino, slot ve Aviator stratejileri.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink/30 bg-pink/10 px-3 py-1 text-xs font-medium text-[#ff7ab8]">
              <span className="h-1.5 w-1.5 rounded-full bg-pink" />
              Blog &amp; Rehber
            </span>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Mekanbahis Hakkında Tüm Yazılar
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#cfc6ef]">
              Bonus rehberleri, oyun incelemeleri, ödeme yöntemleri ve güncel
              kampanya duyuruları. Mekanbahis ile ilgili bilmen gereken her şey
              burada.
            </p>
          </div>
        </section>

        <section className="border-b border-soft">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
              <BlogList showHeader={false} />
              <Sidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
