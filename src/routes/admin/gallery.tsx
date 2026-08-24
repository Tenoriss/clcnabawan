import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { SelectField, TextField } from "@/components/ui/field";
import { useHydrated } from "@/lib/hooks";
import { IMG } from "@/lib/mock-data";
import { addGalleryItem, deleteGalleryItem, listGallery } from "@/lib/services/galleryService";
import type { GalleryCategory } from "@/lib/types";

export const Route = createFileRoute("/admin/gallery")({
  ssr: false,
  component: AdminGallery,
  head: () => ({
    meta: [{ title: "Galeri Admin" }],
  }),
});

const CATS: GalleryCategory[] = ["SD", "SMP", "Kegiatan", "Pembelajaran", "Sekolah"];
const IMAGES = Object.values(IMG);

function AdminGallery() {
  const hydrated = useHydrated();
  const [tick, setTick] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<GalleryCategory>("Sekolah");
  const [image, setImage] = useState<string>(IMG.still);
  const items = hydrated ? listGallery() : [];
  void tick;

  return (
    <AdminShell title="Galeri">
      <form
        className="grid gap-3 rounded-lg bg-cream p-5 md:grid-cols-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim()) return;
          addGalleryItem({
            id: `g-${Date.now()}`,
            title: title.trim(),
            category,
            image,
          });
          setTitle("");
          setTick((n) => n + 1);
        }}
      >
        <TextField id="gtitle" label="Judul" value={title} onChange={(e) => setTitle(e.target.value)} />
        <SelectField
          id="gcat"
          label="Kategori"
          value={category}
          onChange={(e) => setCategory(e.target.value as GalleryCategory)}
        >
          {CATS.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </SelectField>
        <SelectField id="gimg" label="Gambar" value={image} onChange={(e) => setImage(e.target.value)}>
          {IMAGES.map((src) => (
            <option key={src} value={src}>
              {src.replace("/images/", "")}
            </option>
          ))}
        </SelectField>
        <div className="flex items-end">
          <button
            type="submit"
            className="h-11 w-full rounded-full bg-navy text-sm font-medium text-paper"
          >
            Tambah
          </button>
        </div>
      </form>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((g) => (
          <figure key={g.id} className="overflow-hidden rounded-lg bg-cream">
            <img src={g.image} alt={g.title} className="aspect-[4/3] w-full object-cover" />
            <figcaption className="flex items-center justify-between gap-2 p-3 text-sm">
              <span>
                <span className="block font-medium">{g.title}</span>
                <span className="text-xs text-muted">{g.category}</span>
              </span>
              <button
                type="button"
                className="text-red-800"
                onClick={() => {
                  deleteGalleryItem(g.id);
                  setTick((n) => n + 1);
                }}
              >
                Hapus
              </button>
            </figcaption>
          </figure>
        ))}
      </div>
    </AdminShell>
  );
}
