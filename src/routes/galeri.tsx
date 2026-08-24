import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { useHydrated } from "@/lib/hooks";
import { IMG, seedGallery } from "@/lib/mock-data";
import { listGallery } from "@/lib/services/galleryService";
import type { GalleryCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

const CATS: Array<"Semua" | GalleryCategory> = [
  "Semua",
  "SD",
  "SMP",
  "Kegiatan",
  "Pembelajaran",
  "Sekolah",
];

export const Route = createFileRoute("/galeri")({
  component: GalleryPage,
  head: () => ({
    meta: [{ title: "Galeri · Yasinta Nabawan Education" }],
  }),
});

function GalleryPage() {
  const hydrated = useHydrated();
  const all = hydrated ? listGallery() : seedGallery;
  const [cat, setCat] = useState<(typeof CATS)[number]>("Semua");
  const items = useMemo(
    () => all.filter((g) => (cat === "Semua" ? true : g.category === cat)),
    [all, cat],
  );

  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow="Gallery"
        title="Suasana sekolah"
        subtitle="Foto dokumenter-prototipe. Foto resmi sekolah dapat ditambahkan dari dasbor admin."
        image={IMG.garden}
      />
      <section className="container-wide py-12 md:py-16">
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
        <div className="mt-8 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <figure key={g.id} className="mb-3 break-inside-avoid overflow-hidden rounded-xl">
              <img
                src={g.image}
                alt={g.title}
                className={cn("w-full object-cover", i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]")}
                loading="lazy"
              />
              <figcaption className="bg-cream px-4 py-3 text-sm">
                <span className="block font-medium">{g.title}</span>
                <span className="text-xs text-muted">{g.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
