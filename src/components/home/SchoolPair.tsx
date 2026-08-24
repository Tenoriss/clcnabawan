import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { schools } from "@/lib/mock-data";

export function SchoolPair({ heading = "Choose Your Learning Journey" }: { heading?: string }) {
  return (
    <section id="schools" className="bg-paper py-14 md:py-28">
      <div className="container-page">
        <p className="eyebrow text-teal">Two journeys, one community</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl">
          {heading}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {(["SD", "SMP"] as const).map((unit) => {
            const s = schools[unit];
            return (
              <article key={unit} className="group overflow-hidden rounded-[28px] bg-cream">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.heroImage}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <p className="absolute bottom-4 left-5 eyebrow text-gold">{s.shortName}</p>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-2xl font-medium tracking-tight">{s.fullName}</h3>
                  <p className="mt-1 text-sm text-muted">{s.levelId} · {s.levelEn}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{s.description}</p>
                  <Link
                    to={s.href}
                    className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-navy px-4 text-sm font-medium text-paper transition-transform duration-150 active:scale-[0.96]"
                  >
                    Explore {s.shortName}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
