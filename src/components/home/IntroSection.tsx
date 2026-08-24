import { IMG } from "@/lib/mock-data";

export function IntroSection() {
  return (
    <section className="bg-cream py-14 md:py-28">
      <div className="container-page grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="eyebrow text-teal">Yasinta Nabawan Education</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-5xl">
            One Community, Two Learning Journeys
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            Portal ini menyatukan SDK St. Fransisco Yasinta Nabawan dan CLC SMPT Nabawan dalam
            satu ekosistem digital. Kedua jenjang setara: SD dan SMP berdiri berdampingan di
            lingkungan sekolah yang sama di Nabawan, Sabah.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Informasi sekolah, kegiatan, berita, galeri, dan PPDB dirancang agar orang tua
            dapat mengurus pendaftaran dari rumah — ringan, jelas, dan ramah koneksi yang
            tidak selalu stabil.
          </p>
        </div>
        <div className="md:col-span-6">
          <div className="overflow-hidden rounded-[28px]">
            <img src={IMG.landscape} alt="Lanskap interior Sabah dekat lingkungan sekolah" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
