import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_PUBLIC } from "@/lib/config";
import { cn } from "@/lib/utils";
import { LogoMark } from "./LogoMark";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link">
        Loncat ke konten
      </a>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
        <div className="container-wide flex items-center justify-between gap-2 py-2.5 md:gap-3 md:py-4">
          <Link
            to="/"
            className="pointer-events-auto flex min-w-0 items-center gap-2 rounded-full pr-2 md:gap-2.5 md:pr-3"
            aria-label="Yasinta Nabawan Education, beranda"
          >
            <LogoMark className="size-11 shrink-0 md:size-12" />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-[0.72rem] font-semibold tracking-wide text-paper md:text-[0.85rem]">
                YASINTA NABAWAN
              </span>
              <span className="block text-[0.58rem] font-medium tracking-[0.16em] text-sky/90 md:text-[0.62rem] md:tracking-[0.18em]">
                EDUCATION
              </span>
            </span>
          </Link>

          <nav
            className={cn(
              "pointer-events-auto hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex",
              "liquid-glass-dark",
              scrolled && "bg-navy/78",
            )}
            aria-label="Utama"
          >
            {NAV_PUBLIC.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[0.8rem] font-medium tracking-wide text-paper/75 transition-colors duration-150",
                    active && "bg-paper/10 text-paper",
                    !active && "hover:text-paper",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pointer-events-auto flex items-center gap-2">
            <Link
              to="/ppdb"
              className="hidden h-11 items-center rounded-full bg-gold px-4 text-sm font-semibold text-navy transition-transform duration-150 active:scale-[0.96] md:inline-flex"
            >
              Daftar PPDB
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full text-paper liquid-glass-dark md:hidden"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-navy px-6 pt-[calc(5.5rem+env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Menu ponsel" className="flex flex-col gap-1">
              {NAV_PUBLIC.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.to}
                    className="block rounded-2xl px-2 py-3 font-display text-3xl font-medium tracking-tight text-paper"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              to="/ppdb"
              className="mt-auto inline-flex h-12 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy"
            >
              Daftar PPDB
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
