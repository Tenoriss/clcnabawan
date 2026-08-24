import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { CONTACT, SOCIAL } from "@/lib/config";
import { IMG } from "@/lib/mock-data";

export const Route = createFileRoute("/kontak")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Kontak · Yasinta Nabawan Education" }],
  }),
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow="Contact"
        title="Hubungi komunitas sekolah"
        subtitle="Gunakan kanal resmi yang tersedia. Nomor WhatsApp pada prototipe ini adalah placeholder."
        image={IMG.assembly}
      />
      <section className="container-page grid gap-6 py-12 md:grid-cols-2 md:py-16">
        <article className="rounded-xl bg-cream p-6">
          <p className="eyebrow text-teal">Alamat</p>
          <h2 className="mt-3 flex items-center gap-2 font-display text-2xl font-medium">
            <MapPin className="size-5 text-teal" />
            Nabawan, Sabah
          </h2>
          <p className="mt-2 text-sm text-muted">Malaysia</p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            SDK St. Fransisco Yasinta Nabawan dan CLC SMPT Nabawan berada dalam satu
            lingkungan sekolah. Alamat lengkap akan dilengkapi setelah konfirmasi resmi.
          </p>
        </article>
        <article className="rounded-xl bg-cream p-6">
          <p className="eyebrow text-teal">WhatsApp & email</p>
          <a
            href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex h-12 items-center gap-2 font-medium text-navy"
          >
            <MessageCircle className="size-5" />
            {CONTACT.whatsappDisplay}
          </a>
          <p className="flex items-center gap-2 text-sm text-muted">
            <Mail className="size-4" />
            {CONTACT.email}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-muted">{CONTACT.note}</p>
        </article>
      </section>
      <section className="container-page pb-16">
        <p className="eyebrow text-teal">Kanal resmi</p>
        <h2 className="mt-3 font-display text-2xl font-medium">Media sosial yang sudah ada</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {SOCIAL.map((s) => (
            <li key={s.id}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-24 flex-col justify-between rounded-xl bg-navy p-5 text-paper"
              >
                <span>
                  {s.network === "Instagram" ? (
                    <Instagram className="size-5" />
                  ) : (
                    <Youtube className="size-5" />
                  )}
                </span>
                <span className="mt-4 text-sm font-medium">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
