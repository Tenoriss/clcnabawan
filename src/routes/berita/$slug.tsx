import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { useHydrated } from "@/lib/hooks";
import { seedNews } from "@/lib/mock-data";
import { getNewsBySlug, listNews } from "@/lib/services/newsService";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/berita/$slug")({
  component: NewsDetailPage,
  head: ({ params }) => ({
    meta: [{ title: `${params.slug} · Berita` }],
  }),
});

function NewsDetailPage() {
  const { slug } = Route.useParams();
  const hydrated = useHydrated();
  const item = hydrated
    ? getNewsBySlug(slug)
    : seedNews.find((n) => n.slug === slug);

  if (hydrated && !item) {
    throw notFound();
  }
  if (!item) {
    return (
      <SiteShell>
        <div className="grid min-h-[50vh] place-items-center text-sm text-muted">Memuat…</div>
      </SiteShell>
    );
  }

  const related = (hydrated ? listNews() : seedNews)
    .filter((n) => n.slug !== item.slug)
    .slice(0, 3);

  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow={item.category}
        title={item.title}
        subtitle={formatDate(item.date)}
        image={item.image}
      />
      <article className="container-page max-w-2xl py-12 md:py-16">
        <p className="text-lg leading-relaxed text-foreground/85">{item.excerpt}</p>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/80">
          {item.body.split("\n\n").map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted">
          Naskah prototipe. Konten resmi akan diperbarui dari dasbor admin sekolah.
        </p>
      </article>
      <section className="container-page pb-16">
        <p className="eyebrow text-teal">Berita lain</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((n) => (
            <Link key={n.id} to="/berita/$slug" params={{ slug: n.slug }} className="block">
              <img src={n.image} alt="" className="aspect-[16/10] w-full rounded-lg object-cover" loading="lazy" />
              <p className="mt-2 font-display text-lg font-medium">{n.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
