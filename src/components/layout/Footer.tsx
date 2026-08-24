import { Link } from "@tanstack/react-router";
import { Instagram, Youtube } from "lucide-react";
import { FOOTER_NAV, SOCIAL } from "@/lib/config";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="bg-navy text-paper pb-[env(safe-area-inset-bottom)]">
      <div className="container-page grid gap-10 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <LogoMark className="size-12" />
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">YASINTA NABAWAN</p>
              <p className="eyebrow text-sky">Education</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
            Satu komunitas pendidikan untuk SDK St. Fransisco Yasinta Nabawan dan CLC SMPT
            Nabawan, Sabah, Malaysia.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-gold">Navigasi</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {FOOTER_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex min-h-11 items-center text-paper/75 transition-colors hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-gold">Komunitas</p>
          <ul className="mt-4 grid gap-3">
            {SOCIAL.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-paper/80 hover:text-paper"
                >
                  {s.network === "Instagram" ? (
                    <Instagram className="size-4" aria-hidden />
                  ) : (
                    <Youtube className="size-4" aria-hidden />
                  )}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-paper/45">
            Nabawan, Sabah, Malaysia
          </p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-paper/45">
          <p>© {new Date().getFullYear()} Yasinta Nabawan Education</p>
          <Link to="/admin/login" className="hover:text-paper/70">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
