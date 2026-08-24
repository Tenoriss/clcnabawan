import { useEffect, useState, type ReactNode } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, LogOut, Images, Newspaper, ClipboardList, ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/layout/LogoMark";
import { useHydrated } from "@/lib/hooks";
import { getAdminSession, logoutAdmin } from "@/lib/services/adminAuth";
import type { AdminUser } from "@/lib/types";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/admin" as const, label: "Dasbor", icon: LayoutDashboard },
  { to: "/admin/ppdb" as const, label: "PPDB", icon: ClipboardList },
  { to: "/admin/news" as const, label: "Berita", icon: Newspaper },
  { to: "/admin/gallery" as const, label: "Galeri", icon: Images },
];

export function AdminShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hydrated = useHydrated();
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    if (!hydrated) return;
    const session = getAdminSession();
    setUser(session);
    if (!session) {
      void navigate({ to: "/admin/login" });
    }
  }, [hydrated, navigate]);

  if (!hydrated || !user) {
    return (
      <div className="grid min-h-dvh place-items-center bg-navy text-paper">
        <p className="text-sm text-paper/60">Memuat dasbor…</p>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-paper text-foreground md:grid md:grid-cols-[240px_1fr]">
      <aside className="bg-navy text-paper">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <LogoMark className="size-9" />
          <div>
            <p className="font-display text-sm font-semibold tracking-tight">YASINTA NABAWAN</p>
            <p className="text-[10px] tracking-[0.18em] text-sky/80">ADMIN DEMO</p>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:overflow-visible md:px-3" aria-label="Admin">
          {NAV.map((item) => {
            const active =
              item.to === "/admin" ? pathname === "/admin" : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-3 text-sm",
                  active ? "bg-paper/12 text-paper" : "text-paper/70 hover:text-paper",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden border-t border-paper/10 p-3 md:block">
          <p className="px-2 text-xs text-paper/50">{user.email}</p>
          <p className="px-2 text-[11px] text-paper/35">Kredensial demo — bukan akun resmi.</p>
        </div>
      </aside>
      <div className="flex min-w-0 flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-mist bg-paper px-4 py-3 md:px-8">
          <h1 className="font-display text-xl font-medium tracking-tight">{title}</h1>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex h-10 items-center gap-1 rounded-full px-3 text-sm text-muted hover:text-foreground"
            >
              Situs
              <ArrowUpRight className="size-3.5" />
            </Link>
            <button
              type="button"
              className="inline-flex h-10 items-center gap-1 rounded-full bg-cream px-3 text-sm"
              onClick={() => {
                logoutAdmin();
                void navigate({ to: "/admin/login" });
              }}
            >
              <LogOut className="size-3.5" />
              Keluar
            </button>
          </div>
        </header>
        <div className="flex-1 px-4 py-6 md:px-8 md:py-8">{children}</div>
      </div>
    </div>
  );
}
