import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function PpdbTeaser() {
  return (
    <section className="bg-navy py-14 text-paper md:py-24">
      <div className="container-page grid gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <p className="eyebrow text-gold">Formulir PPDB 2026</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-5xl">
            Dua formulir, satu portal — SD dan SMPT.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/70 md:text-base">
            Isi formulir SDK St. Fransisco Yasinta Nabawan atau CLC SMPT Nabawan dari HP.
            Tidak perlu datang ke sekolah hanya untuk mengurus pendaftaran.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-5">
          <Link
            to="/ppdb/sd"
            className="flex min-h-16 items-center justify-between rounded-xl bg-gold px-5 py-3 text-navy"
          >
            <span>
              <span className="block text-[11px] font-medium uppercase tracking-wider">Formulir SD</span>
              <span className="block text-sm font-semibold leading-snug">
                SDK St. Fransisco Yasinta Nabawan
              </span>
            </span>
            <ArrowRight className="size-4 shrink-0" />
          </Link>
          <Link
            to="/ppdb/smp"
            className="flex min-h-16 items-center justify-between rounded-xl px-5 py-3 text-paper liquid-glass"
          >
            <span>
              <span className="block text-[11px] font-medium uppercase tracking-wider text-gold">
                Formulir SMPT
              </span>
              <span className="block text-sm font-semibold leading-snug">CLC SMPT Nabawan</span>
            </span>
            <ArrowRight className="size-4 shrink-0" />
          </Link>
          <Link to="/ppdb/status" className="text-center text-sm text-paper/60 hover:text-paper">
            Sudah daftar? Cek status
          </Link>
        </div>
      </div>
    </section>
  );
}
