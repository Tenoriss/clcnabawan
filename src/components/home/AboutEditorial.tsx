import { IMG } from "@/lib/mock-data";

const STATS = [
  { k: "SD", v: "Elementary Education" },
  { k: "SMP", v: "Junior High Education" },
  { k: "Nabawan", v: "Sabah, Malaysia" },
];

export function AboutEditorial() {
  return (
    <section className="bg-navy py-14 text-paper md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow text-gold">About this portal</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-5xl">
            Pendidikan yang dekat, meski jaraknya jauh.
          </h2>
          <p className="mt-5 max-w-xl text-paper/72">
            Yasinta Nabawan Education adalah rumah digital bersama. Bukan dua situs terpisah —
            satu portal, dua jenjang, satu komunitas.
          </p>
        </div>
        <div className="grid gap-6 md:col-span-5">
          {STATS.map((s) => (
            <div key={s.k} className="border-t border-paper/15 pt-4">
              <p className="font-display text-3xl font-medium tracking-tight">{s.k}</p>
              <p className="mt-1 text-sm text-paper/60">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container-wide mt-14 overflow-hidden rounded-[28px]">
        <img
          src={IMG.assembly}
          alt="Aula sekolah sebagai ruang komunitas"
          className="aspect-[21/9] w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}
