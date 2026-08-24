import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { useHydrated } from "@/lib/hooks";
import { IMG, seedNews } from "@/lib/mock-data";
import { listNews } from "@/lib/services/newsService";
import type { NewsCategory } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";

const CATS: Array<"Semua" | NewsCategory> = [
  "Semua",
  "PPDB",
  "Pembelajaran",
  "Kegiatan",
  "Prestasi",
  "Pengumuman",
];

export const Route = createFileRoute("/berita/")({
  component: NewsListPage,
  head: () => ({
    meta: [{ title: "Berita · Yasinta Nabawan Education" }],
  }),
});

function NewsListPage() {
  const hydrated = useHydrated();
  const all = hydrated ? listNews() : seedNews;
  const [cat, setCat] = useState<(typeof CATS)[number]>("Semua");
  const items = useMemo(
    () => all.filter((n) => (cat === "Semua" ? true : n.category === cat)),
    [all, cat],
  );

  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow="News"
        title="Kabar sekolah"
        subtitle="Pengumuman, pembelajaran, dan kehidupan komunitas Yasinta Nabawan."
        image={IMG.corridor}
      />
      <section className="container-page py-12 md:py-16">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "h-11 shrink-0 rounded-full px-4 text-sm",
                cat === c ? "bg-navy text-paper" : "bg-cream text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {items.map((n) => (
            <article key={n.id} className="group">
              <Link to="/berita/$slug" params={{ slug: n.slug }} className="block">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={n.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-muted">
                  {n.category} · {formatDate(n.date)}
                </p>
                <h2 className="mt-1 font-display text-2xl font-medium tracking-tight">{n.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{n.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-medium text-navy">Baca selengkapnya</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
