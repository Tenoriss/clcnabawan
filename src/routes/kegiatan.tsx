import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { IMG, seedActivities } from "@/lib/mock-data";
import type { ActivityCategory } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";

const CATS: Array<"Semua" | ActivityCategory> = [
  "Semua",
  "Pembelajaran",
  "Kegiatan Sekolah",
  "Ekstrakurikuler",
  "Perayaan",
  "Sosial",
  "Prestasi",
];

export const Route = createFileRoute("/kegiatan")({
  component: ActivitiesPage,
  head: () => ({
    meta: [{ title: "Kegiatan · Yasinta Nabawan Education" }],
  }),
});

function ActivitiesPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Semua");
  const items = useMemo(
    () => seedActivities.filter((a) => (cat === "Semua" ? true : a.category === cat)),
    [cat],
  );

  return (
    <SiteShell>
      <PageHero
        eyebrow="Activities"
        title="Ritme belajar dan kehidupan sekolah"
        subtitle="Kegiatan SD dan SMP dalam satu kalender komunitas. Foto bersifat dokumenter-prototipe."
        image={IMG.field}
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
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <article key={a.id} className="group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={a.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-3 left-4 font-display text-lg text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {a.title}
                </p>
              </div>
              <p className="mt-3 text-xs uppercase tracking-wider text-muted">
                {a.category} · {a.unit === "ALL" ? "SD & SMP" : a.unit} · {formatDate(a.date)}
              </p>
              <h2 className="mt-1 font-display text-xl font-medium">{a.title}</h2>
              <p className="mt-1 text-sm text-muted">{a.excerpt}</p>
            </article>
          ))}
        </div>
        {items.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted">Belum ada kegiatan pada kategori ini.</p>
        ) : null}
      </section>
    </SiteShell>
  );
}
