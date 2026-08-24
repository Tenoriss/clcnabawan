import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { SelectField, TextAreaField, TextField } from "@/components/ui/field";
import { useHydrated } from "@/lib/hooks";
import { IMG } from "@/lib/mock-data";
import { deleteNews, listNews, saveNews, slugify } from "@/lib/services/newsService";
import type { NewsCategory, NewsItem } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/admin/news")({
  ssr: false,
  component: AdminNews,
  head: () => ({
    meta: [{ title: "Berita Admin" }],
  }),
});

const CATS: NewsCategory[] = ["PPDB", "Pembelajaran", "Kegiatan", "Prestasi", "Pengumuman"];
const IMAGES = Object.values(IMG);

const empty: Omit<NewsItem, "id"> = {
  slug: "",
  title: "",
  excerpt: "",
  body: "",
  category: "Pengumuman",
  date: new Date().toISOString().slice(0, 10),
  image: IMG.still,
  unit: "ALL",
};

function AdminNews() {
  const hydrated = useHydrated();
  const [tick, setTick] = useState(0);
  const [form, setForm] = useState<Omit<NewsItem, "id"> & { id?: string }>({ ...empty });
  const items = hydrated ? listNews() : [];
  void tick;

  const persist = () => {
    if (!form.title.trim()) return;
    const id = form.id ?? `n-${Date.now()}`;
    const slug = form.slug.trim() || slugify(form.title);
    saveNews({ ...form, id, slug, unit: form.unit ?? "ALL" });
    setForm({ ...empty });
    setTick((n) => n + 1);
  };

  return (
    <AdminShell title="Berita">
      <div className="grid gap-8 lg:grid-cols-12">
        <form
          className="grid gap-3 lg:col-span-5"
          onSubmit={(e) => {
            e.preventDefault();
            persist();
          }}
        >
          <h2 className="font-display text-lg font-medium">
            {form.id ? "Edit berita" : "Tambah berita"}
          </h2>
          <TextField
            id="ntitle"
            label="Judul"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <SelectField
            id="ncat"
            label="Kategori"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value as NewsCategory })}
          >
            {CATS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </SelectField>
          <TextField
            id="ndate"
            label="Tanggal"
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <SelectField
            id="nimg"
            label="Gambar"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          >
            {IMAGES.map((src) => (
              <option key={src} value={src}>
                {src.replace("/images/", "")}
              </option>
            ))}
          </SelectField>
          <TextAreaField
            id="nexcerpt"
            label="Ringkasan"
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          />
          <TextAreaField
            id="nbody"
            label="Isi"
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-navy text-sm font-medium text-paper"
            >
              Simpan
            </button>
            {form.id ? (
              <button
                type="button"
                className="h-11 rounded-full bg-cream px-4 text-sm"
                onClick={() => setForm({ ...empty })}
              >
                Batal
              </button>
            ) : null}
          </div>
        </form>
        <div className="lg:col-span-7">
          <ul className="grid gap-3">
            {items.map((n) => (
              <li key={n.id} className="flex gap-3 rounded-lg bg-cream p-3">
                <img src={n.image} alt="" className="size-16 rounded-md object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{n.title}</p>
                  <p className="text-xs text-muted">
                    {n.category} · {formatDate(n.date)}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      className="text-sm text-navy"
                      onClick={() => setForm(n)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="text-sm text-red-800"
                      onClick={() => {
                        deleteNews(n.id);
                        if (form.id === n.id) setForm({ ...empty });
                        setTick((x) => x + 1);
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminShell>
  );
}
