import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { IMG } from "@/lib/mock-data";
import { useHydrated } from "@/lib/hooks";
import {
  PAYMENT_LABEL,
  STATUS_LABEL,
  getRegistration,
  whatsappConfirmUrl,
} from "@/lib/services/registrationService";
import { cn } from "@/lib/utils";

type Search = { id?: string };

export const Route = createFileRoute("/ppdb/status")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>): Search => ({
    id: typeof s.id === "string" ? s.id : undefined,
  }),
  component: StatusPage,
  head: () => ({
    meta: [{ title: "Status Pendaftaran · PPDB" }],
  }),
});

function StatusPage() {
  const { id: qid } = Route.useSearch();
  const hydrated = useHydrated();
  const [input, setInput] = useState(qid ?? "");
  const [lookup, setLookup] = useState(qid ?? "");

  const rec = useMemo(
    () => (hydrated && lookup ? getRegistration(lookup.trim()) : undefined),
    [hydrated, lookup],
  );

  const steps = rec
    ? [
        { label: "Formulir diterima", on: true },
        {
          label: "Data diperiksa",
          on: rec.status !== "menunggu_verifikasi",
        },
        {
          label: "Dokumen diverifikasi",
          on: rec.status === "diverifikasi" || rec.status === "selesai",
        },
        {
          label: "Pembayaran",
          on: rec.payment.status === "lunas" || rec.status === "selesai",
        },
        { label: "Pendaftaran selesai", on: rec.status === "selesai" },
      ]
    : [];

  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow="PPDB"
        title="Status Pendaftaran"
        subtitle="Masukkan nomor pendaftaran, misalnya PPDB-SD-2026-0001."
        image={IMG.corridor}
      />
      <section className="container-page max-w-xl py-12">
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setLookup(input.trim());
          }}
        >
          <label className="sr-only" htmlFor="regid">
            Nomor Pendaftaran
          </label>
          <input
            id="regid"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="PPDB-SD-2026-0001"
            className="h-12 min-w-0 flex-1 rounded-full bg-cream px-5 text-[16px] outline-none focus:shadow-[0_0_0_2px_var(--color-gold)]"
            autoCapitalize="characters"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-navy px-6 text-sm font-semibold text-paper"
          >
            Cek
          </button>
        </form>

        {lookup && !rec ? (
          <p className="mt-8 text-sm text-muted" role="status">
            Nomor tidak ditemukan di perangkat ini. Coba contoh{" "}
            <button
              type="button"
              className="font-medium text-navy underline"
              onClick={() => {
                setInput("PPDB-SD-2026-0001");
                setLookup("PPDB-SD-2026-0001");
              }}
            >
              PPDB-SD-2026-0001
            </button>
            .
          </p>
        ) : null}

        {rec ? (
          <div className="mt-10 rounded-xl bg-cream p-6">
            {rec.status === "ditolak" ? (
              <p className="mb-4 rounded-md bg-red-800 px-3 py-2 text-sm text-paper">
                Pendaftaran ditolak. Hubungi admin via WhatsApp untuk keterangan.
              </p>
            ) : null}
            <p className="eyebrow text-teal">{rec.id}</p>
            <h2 className="mt-2 font-display text-2xl font-medium">{rec.student.fullName}</h2>
            <p className="mt-1 text-sm text-muted">
              {rec.unit} · {STATUS_LABEL[rec.status]} · {PAYMENT_LABEL[rec.payment.status]}
            </p>
            <ol className="mt-6 space-y-3">
              {steps.map((s) => (
                <li key={s.label} className="flex items-center gap-3 text-sm">
                  <span
                    className={cn(
                      "grid size-6 place-items-center rounded-full text-[11px] font-semibold",
                      s.on ? "bg-teal text-paper" : "bg-paper text-muted",
                    )}
                    aria-hidden
                  >
                    {s.on ? "✓" : "○"}
                  </span>
                  <span className={s.on ? "text-foreground" : "text-muted"}>{s.label}</span>
                </li>
              ))}
            </ol>
            <a
              href={whatsappConfirmUrl(rec)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy"
            >
              Konfirmasi via WhatsApp
            </a>
          </div>
        ) : null}
      </section>
    </SiteShell>
  );
}
