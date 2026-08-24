import { Instagram, Youtube } from "lucide-react";
import { SOCIAL } from "@/lib/config";

export function SocialSection() {
  return (
    <section className="bg-cream py-14 md:py-24">
      <div className="container-page">
        <p className="eyebrow text-teal">Community</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
          Follow Our School Community
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Tautan resmi yang tersedia saat ini. Tidak ada akun lain yang ditambahkan.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {SOCIAL.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-32 flex-col justify-between rounded-[24px] bg-paper p-5 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy text-paper">
                {s.network === "Instagram" ? (
                  <Instagram className="size-4" />
                ) : (
                  <Youtube className="size-4" />
                )}
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted">{s.network}</span>
                <span className="mt-1 block font-medium leading-snug">{s.label}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
