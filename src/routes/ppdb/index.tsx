import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Smartphone, MessageCircle } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { schools } from "@/lib/mock-data";
import { unitLabel } from "@/lib/config";

export const Route = createFileRoute("/ppdb/")({
  component: PpdbLanding,
  head: () => ({
    meta: [{ title: "Formulir PPDB · Yasinta Nabawan Education" }],
  }),
});

function PpdbLanding() {
  return (
    <SiteShell>
      <section className="bg-navy pt-[calc(5.5rem+env(safe-area-inset-top))] pb-8 text-paper md:pt-32 md:pb-14">
        <div className="container-page">
          <p className="eyebrow text-gold">PPDB 2026</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight md:text-6xl">
            Formulir pendaftaran SD dan SMPT
          </h1>
          <p className="mt-3 max-w-xl text-sm text-paper/75 md:text-base">
            Pilih jenjang, isi di HP, unggah dokumen, konfirmasi via WhatsApp.
          </p>
        </div>
      </section>

      <section className="container-page py-8 md:py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {(["SD", "SMP"] as const).map((unit) => {
            const s = schools[unit];
            const label = unitLabel(unit);
            return (
              <article
                key={unit}
                className="flex flex-col rounded-xl bg-cream p-6 md:p-7"
              >
                <p className="eyebrow text-teal">Formulir {label}</p>
                <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">
                  {s.fullName}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {s.levelId} · {s.levelEn}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-foreground/80">
                  {unit === "SD" ? (
                    <>
                      <li>Untuk calon siswa Sekolah Dasar</li>
                      <li>Asal sekolah: TK / RA (jika ada)</li>
                      <li>Kartu Keluarga dan Akta Kelahiran</li>
                    </>
                  ) : (
                    <>
                      <li>Untuk calon siswa CLC SMPT Nabawan</li>
                      <li>Asal sekolah: SD / MI</li>
                      <li>Kartu Keluarga, Akta, dan Ijazah/SKL</li>
                    </>
                  )}
                </ul>
                <Link
                  to={s.ppdbHref}
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-paper"
                >
                  Isi Formulir {label}
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: FileText,
              t: "Isi formulir",
              d: "Data siswa, orang tua, asal sekolah, dokumen, dan cara bayar.",
            },
            {
              icon: Smartphone,
              t: "Dari HP",
              d: "Ringan dan tersimpan di perangkat ini sampai Anda kirim.",
            },
            {
              icon: MessageCircle,
              t: "Konfirmasi WA",
              d: "Dapat nomor pendaftaran, lalu kabari admin via WhatsApp.",
            },
          ].map((s) => (
            <div key={s.t} className="rounded-xl border border-mist p-5">
              <s.icon className="size-5 text-teal" aria-hidden />
              <p className="mt-3 font-medium">{s.t}</p>
              <p className="mt-1 text-sm text-muted">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/ppdb/status"
            className="inline-flex h-12 items-center rounded-full bg-cream px-5 text-sm font-medium"
          >
            Cek status pendaftaran
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
