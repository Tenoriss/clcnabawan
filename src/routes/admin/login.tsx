import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { LogoMark } from "@/components/layout/LogoMark";
import { DEMO_ADMIN } from "@/lib/config";
import { getAdminSession, loginAdmin } from "@/lib/services/adminAuth";
import { TextField } from "@/components/ui/field";

export const Route = createFileRoute("/admin/login")({
  ssr: false,
  component: AdminLogin,
  head: () => ({
    meta: [{ title: "Admin · Yasinta Nabawan Education" }],
  }),
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(DEMO_ADMIN.email);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (getAdminSession()) void navigate({ to: "/admin" });
  }, [navigate]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const res = loginAdmin(email, password);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    void navigate({ to: "/admin" });
  };

  return (
    <main className="grid min-h-dvh place-items-center bg-navy px-4 text-paper">
      <form onSubmit={onSubmit} className="w-full max-w-sm rounded-xl bg-paper p-6 text-foreground md:p-8">
        <div className="flex items-center gap-3">
          <LogoMark className="size-10" />
          <div>
            <p className="font-display font-semibold tracking-tight">YASINTA NABAWAN</p>
            <p className="text-[10px] tracking-[0.18em] text-muted">ADMIN DEMO</p>
          </div>
        </div>
        <p className="mt-5 rounded-md bg-cream px-3 py-2 text-xs leading-relaxed text-muted">
          Kredensial demo saja — bukan akun resmi sekolah.
          <br />
          Email: {DEMO_ADMIN.email}
          <br />
          Kata sandi: {DEMO_ADMIN.password}
        </p>
        <div className="mt-5 grid gap-4">
          <TextField
            id="email"
            label="Email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Kata sandi"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
          />
          <button
            type="submit"
            className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-navy text-sm font-semibold text-paper"
          >
            Masuk
          </button>
        </div>
        <Link to="/" className="mt-5 block text-center text-sm text-muted">
          Kembali ke situs
        </Link>
      </form>
    </main>
  );
}
