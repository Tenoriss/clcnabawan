import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  compact,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-navy text-paper",
        compact ? "min-h-[38vh] pt-24 pb-8 md:min-h-[48vh] md:pt-28 md:pb-10" : "min-h-[56svh] pt-24 pb-10 md:min-h-[70vh] md:pt-32 md:pb-14",
      )}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ outline: "none" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/30" />
      <div className="relative z-10 container-page">
        {eyebrow ? <p className="eyebrow text-gold">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-4xl font-display text-[1.85rem] font-medium tracking-tight sm:text-4xl md:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-xl text-sm text-paper/75 md:mt-4 md:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
