import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { SchoolPair } from "@/components/home/SchoolPair";
import { SocialSection } from "@/components/home/SocialSection";
import { IMG, schools } from "@/lib/mock-data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About · Yasinta Nabawan Education" }],
  }),
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="Satu komunitas, dua jenjang."
        subtitle="Yasinta Nabawan Education adalah portal digital bersama untuk SD dan SMP di Nabawan, Sabah."
        image={IMG.landscape}
      />

      <section className="container-page grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="eyebrow text-teal">Portal</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
            Bukan dua situs terpisah.
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/80">
            SDK St. Fransisco Yasinta Nabawan dan CLC SMPT Nabawan berada di lingkungan
            sekolah yang sama. Portal ini menyatukan informasi, kegiatan, dan PPDB agar
            orang tua, guru, dan siswa menemui satu rumah digital — dengan kedua jenjang
            yang setara.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            Visi, misi, dan data kelembagaan pada halaman ini masih berupa kerangka
            prototipe. Isi resmi akan dilengkapi setelah observasi lapangan dan konfirmasi
            sekolah.
          </p>
        </div>
        <aside className="rounded-xl bg-cream p-6 md:col-span-5">
          <p className="eyebrow text-teal">Lokasi</p>
          <p className="mt-3 font-display text-2xl">Nabawan, Sabah</p>
          <p className="mt-2 text-sm text-muted">Malaysia</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Jarak ke sekolah dapat menjadi tantangan. Karena itu PPDB dirancang agar
            pendaftaran bisa diurus dari rumah melalui HP.
          </p>
        </aside>
      </section>

      <section className="bg-navy py-16 text-paper md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {(["SD", "SMP"] as const).map((unit) => {
            const s = schools[unit];
            return (
              <article key={unit} className="rounded-xl p-6 liquid-glass">
                <p className="eyebrow text-gold">{s.shortName}</p>
                <h3 className="mt-3 font-display text-2xl font-medium">{s.fullName}</h3>
                <p className="mt-2 text-sm text-paper/65">
                  {s.levelId} · {s.levelEn}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper/75">{s.description}</p>
                <Link
                  to={s.href}
                  className="mt-6 inline-flex h-11 items-center rounded-full bg-paper px-4 text-sm font-medium text-navy"
                >
                  Profil {s.shortName}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <p className="eyebrow text-teal">Cara kerja portal</p>
        <h2 className="mt-3 font-display text-3xl font-medium">Tiga hal yang bisa dilakukan sekarang</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Mengenal sekolah",
              d: "Profil SD dan SMP, kegiatan, berita, dan galeri dalam satu tempat.",
            },
            {
              t: "Mendaftar PPDB",
              d: "Formulir bertahap, unggah dokumen, pilih pembayaran, konfirmasi WhatsApp.",
            },
            {
              t: "Mengikuti kabar",
              d: "Kanal Instagram dan YouTube resmi yang sudah tersedia saat ini.",
            },
          ].map((item) => (
            <article key={item.t} className="rounded-xl bg-cream p-5">
              <h3 className="font-display text-xl font-medium">{item.t}</h3>
              <p className="mt-2 text-sm text-muted">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <SchoolPair heading="Kedua jenjang, bobot yang sama" />
      <SocialSection />
    </SiteShell>
  );
}
