import { Link } from "@tanstack/react-router";
import { useHydrated } from "@/lib/hooks";
import { seedNews } from "@/lib/mock-data";
import { listNews } from "@/lib/services/newsService";
import { formatDate } from "@/lib/utils";

export function NewsPreview() {
  const hydrated = useHydrated();
  const items = (hydrated ? listNews() : seedNews).slice(0, 3);
  return (
    <section className="bg-paper py-14 md:py-24">
      <div className="container-page">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-teal">Berita</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
              Kabar sekolah
            </h2>
          </div>
          <Link to="/berita" className="text-sm font-medium text-navy">
            Semua berita
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((n) => (
            <Link key={n.id} to="/berita/$slug" params={{ slug: n.slug }} className="group block">
              <div className="overflow-hidden rounded-[22px]">
                <img
                  src={n.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-wider text-muted">
                {n.category} · {formatDate(n.date)}
              </p>
              <h3 className="mt-1 font-display text-xl font-medium tracking-tight">{n.title}</h3>
              <p className="mt-2 text-sm text-muted">{n.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
