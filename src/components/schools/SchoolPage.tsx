import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { seedActivities, seedGallery, teacherRoles } from "@/lib/mock-data";
import type { SchoolProfile } from "@/lib/types";

export function SchoolPage({ school }: { school: SchoolProfile }) {
  const teachers = teacherRoles.filter((t) => t.unit === school.unit);
  const activities = seedActivities.filter((a) => a.unit === school.unit || a.unit === "ALL").slice(0, 3);
  const gallery = seedGallery.filter((g) => g.category === school.unit || g.category === "Sekolah").slice(0, 4);

  return (
    <SiteShell>
      <PageHero
        eyebrow={school.shortName}
        title={school.fullName}
        subtitle={school.levelId}
        image={school.heroImage}
      />

      <section className="container-page grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="eyebrow text-teal">Profil</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">Tentang satuan ini</h2>
          <p className="mt-4 leading-relaxed text-foreground/80">{school.description}</p>
          <p className="mt-4 text-sm text-muted">{school.tagline}</p>
        </div>
        <aside className="rounded-[24px] bg-cream p-6 md:col-span-5">
          <p className="eyebrow text-teal">Jenjang</p>
          <p className="mt-3 font-display text-2xl">{school.levelEn}</p>
          <p className="mt-2 text-sm text-muted">Nabawan, Sabah, Malaysia</p>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Profil ini adalah kerangka portal. Nama pejabat, data siswa, dan prestasi resmi
            akan dilengkapi setelah konfirmasi sekolah.
          </p>
        </aside>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-page grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-teal">Visi & Misi</p>
            <h2 className="mt-3 font-display text-3xl font-medium">Arah pendidikan</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">{school.vision}</p>
          </div>
          <ol className="md:col-span-7 space-y-4">
            {school.missions.map((m, i) => (
              <li key={m} className="flex gap-4 rounded-[20px] bg-paper p-4">
                <span className="font-display text-xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed">{m}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <p className="eyebrow text-teal">Guru & Tenaga Pendidikan</p>
        <h2 className="mt-3 font-display text-3xl font-medium">Peran, bukan daftar nama fiktif</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {teachers.map((t) => (
            <div key={t.id} className="rounded-[20px] bg-cream p-5">
              <p className="font-medium">{t.role}</p>
              <p className="mt-1 text-sm text-muted">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-paper md:py-24">
        <div className="container-page">
          <p className="eyebrow text-gold">Fasilitas</p>
          <h2 className="mt-3 font-display text-3xl font-medium">Lingkungan belajar</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {school.facilities.map((f) => (
              <div key={f.title} className="rounded-[20px] p-5 liquid-glass">
                <p className="font-medium">{f.title}</p>
                <p className="mt-1 text-sm text-paper/70">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow text-teal">Kegiatan</p>
            <h2 className="mt-3 font-display text-3xl font-medium">Ritme sekolah</h2>
          </div>
          <Link to="/kegiatan" className="text-sm font-medium">Lihat semua</Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {activities.map((a) => (
            <article key={a.id}>
              <div className="overflow-hidden rounded-[20px]">
                <img src={a.image} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
              <p className="mt-3 text-xs uppercase tracking-wider text-muted">{a.category}</p>
              <h3 className="mt-1 font-display text-xl font-medium">{a.title}</h3>
              <p className="mt-1 text-sm text-muted">{a.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-page">
          <p className="eyebrow text-teal">Prestasi</p>
          <h2 className="mt-3 font-display text-3xl font-medium">Belum ada data resmi</h2>
          <p className="mt-4 max-w-xl text-sm text-muted">
            Daftar prestasi siswa dan sekolah akan ditampilkan setelah dokumentasi resmi tersedia.
            Prototipe ini tidak menampilkan pencapaian fiktif.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow text-teal">Galeri</p>
            <h2 className="mt-3 font-display text-3xl font-medium">Suasana {school.shortName}</h2>
          </div>
          <Link to="/galeri" className="text-sm font-medium">Galeri lengkap</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {gallery.map((g) => (
            <img key={g.id} src={g.image} alt={g.title} className="aspect-[4/3] w-full rounded-[18px] object-cover" loading="lazy" />
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-paper md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-gold">Formulir PPDB {school.unit === "SD" ? "SD" : "SMPT"}</p>
            <h2 className="mt-3 font-display text-3xl font-medium">Isi formulir dari rumah</h2>
            <p className="mt-2 max-w-lg text-sm text-paper/70">
              Formulir pendaftaran {school.fullName} diisi lewat HP, lalu dikonfirmasi via WhatsApp.
            </p>
          </div>
          <Link
            to={school.ppdbHref}
            className="inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-navy"
          >
            Isi Formulir {school.unit === "SD" ? "SD" : "SMPT"}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
