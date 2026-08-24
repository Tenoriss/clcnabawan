import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { IMG, schools } from "@/lib/mock-data";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function CinematicHero() {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    let tx = root.clientWidth * 0.5;
    let ty = root.clientHeight * 0.38;
    let cx = tx;
    let cy = ty;
    let lastPointer = 0;
    let raf = 0;
    const t0 = performance.now();

    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      lastPointer = performance.now();
    };

    const loop = (now: number) => {
      if (lastPointer === 0 || now - lastPointer > 2200) {
        const t = (now - t0) / 1000;
        const w = root.clientWidth;
        const h = root.clientHeight;
        tx = w * (0.5 + Math.sin(t * 0.32) * 0.22);
        ty = h * (0.36 + Math.cos(t * 0.24) * 0.12);
      }
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      const dx = (cx / Math.max(root.clientWidth, 1) - 0.5) * 16;
      const dy = (cy / Math.max(root.clientHeight, 1) - 0.5) * 12;
      root.style.setProperty("--sx", `${cx}px`);
      root.style.setProperty("--sy", `${cy}px`);
      root.style.setProperty("--px", `${dx}px`);
      root.style.setProperty("--py", `${dy}px`);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      className="hero-stage relative min-h-dvh overflow-hidden bg-midnight text-paper"
      style={
        {
          "--sx": "50%",
          "--sy": "40%",
          "--px": "0px",
          "--py": "0px",
        } as CSSProperties
      }
    >
      <div
        className="hero-grid absolute inset-[-8%] z-10"
        style={{ transform: "translate3d(var(--px), var(--py), 0)" }}
        aria-hidden
      />

      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 640px)" srcSet={IMG.heroSm} />
          <img
            src={IMG.hero}
            alt=""
            className="h-full w-full object-cover"
            style={{
              outline: "none",
              transform:
                "scale(1.08) translate3d(calc(var(--px) * -0.4), calc(var(--py) * -0.35), 0)",
            }}
          />
        </picture>
      </div>

      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-midnight/50 via-navy/38 to-midnight/78"
        aria-hidden
      />

      <div className="hero-light-reveal absolute inset-0 z-20" aria-hidden>
        <picture>
          <source media="(max-width: 640px)" srcSet={IMG.overlaySm} />
          <img
            src={IMG.overlay}
            alt=""
            className="h-full w-full object-cover"
            style={{
              outline: "none",
              transform:
                "scale(1.08) translate3d(calc(var(--px) * 0.4), calc(var(--py) * 0.35), 0)",
            }}
          />
        </picture>
      </div>

      <div className="hero-light-splash absolute inset-0 z-30" aria-hidden />
      <div className="hero-light-ring absolute inset-0 z-30" aria-hidden />
      <div className="hero-cursor" aria-hidden />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-40 bg-gradient-to-t from-midnight to-transparent"
        aria-hidden
      />

      <div className="relative z-40 flex min-h-[100svh] flex-col pt-[calc(5.25rem+env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] md:min-h-dvh md:pt-32 md:pb-16">
        <div className="container-wide flex flex-1 flex-col justify-center">
          <p className="eyebrow text-gold">Education · Nabawan · Sabah</p>

          <h1 className="sr-only">
            Yasinta Nabawan Education — Growing Together, Learning for Tomorrow
          </h1>

          <div
            className="display-giant pointer-events-none mt-3 select-none text-paper/90 md:mt-4"
            aria-hidden
            style={{
              transform: "translate3d(calc(var(--px) * 0.25), calc(var(--py) * 0.2), 0)",
            }}
          >
            <p className="text-[clamp(2.55rem,13vw,13rem)]">Yasinta</p>
            <p className="text-[clamp(2.55rem,13vw,13rem)] text-sky/80">Nabawan</p>
          </div>

          <div className="mt-5 max-w-xl md:mt-8">
            <p className="font-display text-[1.35rem] font-medium leading-[1.2] tracking-tight text-paper md:text-4xl">
              Growing Together, Learning for Tomorrow
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/72 md:text-base">
              A unified education portal for SDK St. Fransisco Yasinta Nabawan and CLC SMPT
              Nabawan.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#schools"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-navy transition-transform duration-150 active:scale-[0.96] sm:w-auto"
              >
                Explore Our Schools
              </a>
              <Link
                to="/ppdb"
                className="inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-paper liquid-glass"
              >
                Register for PPDB
              </Link>
            </div>
          </div>
        </div>

        <div className="container-wide mt-8 grid gap-3 md:mt-10 md:grid-cols-2">
          {(["SD", "SMP"] as const).map((unit) => {
            const s = schools[unit];
            return (
              <Link
                key={unit}
                to={s.href}
                className="group relative overflow-hidden rounded-xl p-5 liquid-glass md:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="eyebrow text-gold">{s.shortName}</p>
                    <p className="mt-2 max-w-sm font-display text-xl font-medium tracking-tight text-paper md:text-2xl">
                      {s.fullName}
                    </p>
                    <p className="mt-1 text-sm text-paper/65">{s.levelId}</p>
                  </div>
                  <span className="inline-flex h-11 w-fit shrink-0 items-center gap-1 rounded-full bg-paper/10 px-4 text-sm font-medium text-paper transition-transform duration-200 group-hover:translate-x-0.5">
                    Explore {s.shortName}
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
