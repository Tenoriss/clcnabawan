import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { useHydrated } from "@/lib/hooks";
import {
  PAYMENT_LABEL,
  STATUS_LABEL,
  listRegistrations,
} from "@/lib/services/registrationService";
import type { Registration, RegistrationStatus, SchoolUnit } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";

type Filter =
  | "Semua"
  | SchoolUnit
  | RegistrationStatus
  | "menunggu_pembayaran";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "Semua", label: "Semua" },
  { id: "SD", label: "SD" },
  { id: "SMP", label: "SMP" },
  { id: "menunggu_verifikasi", label: "Menunggu Verifikasi" },
  { id: "diverifikasi", label: "Terverifikasi" },
  { id: "menunggu_pembayaran", label: "Menunggu Pembayaran" },
  { id: "selesai", label: "Selesai" },
];

export const Route = createFileRoute("/admin/ppdb/")({
  ssr: false,
  component: AdminPpdb,
  head: () => ({
    meta: [{ title: "PPDB Admin" }],
  }),
});

function matches(r: Registration, f: Filter, q: string) {
  if (f === "SD" || f === "SMP") {
    if (r.unit !== f) return false;
  } else if (f === "menunggu_pembayaran") {
    if (
      r.payment.status !== "belum_bayar" &&
      r.payment.status !== "menunggu_verifikasi" &&
      r.payment.status !== "tunai_menunggu"
    )
      return false;
  } else if (f !== "Semua") {
    if (r.status !== f) return false;
  }
  if (!q) return true;
  const hay = `${r.id} ${r.student.fullName} ${r.student.whatsapp} ${r.parent.whatsapp}`.toLowerCase();
  return hay.includes(q.toLowerCase());
}

function AdminPpdb() {
  const hydrated = useHydrated();
  const [filter, setFilter] = useState<Filter>("Semua");
  const [q, setQ] = useState("");
  const list = hydrated ? listRegistrations() : [];
  const rows = useMemo(() => list.filter((r) => matches(r, filter, q)), [list, filter, q]);

  return (
    <AdminShell title="PPDB">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari nama, ID, atau WhatsApp"
          className="h-11 w-full max-w-sm rounded-full bg-cream px-4 text-[16px] outline-none focus:shadow-[0_0_0_2px_var(--color-gold)]"
        />
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "h-10 shrink-0 rounded-full px-3 text-sm",
              filter === f.id ? "bg-navy text-paper" : "bg-cream",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="mt-4 overflow-x-auto rounded-lg bg-cream">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">ID</th>
              <th className="px-4 py-3 font-medium">Nama</th>
              <th className="px-4 py-3 font-medium">Jenjang</th>
              <th className="px-4 py-3 font-medium">Tanggal</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Pembayaran</th>
              <th className="px-4 py-3 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-paper">
                <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                <td className="px-4 py-3">{r.student.fullName}</td>
                <td className="px-4 py-3">{r.unit}</td>
                <td className="px-4 py-3">{formatDate(r.createdAt)}</td>
                <td className="px-4 py-3">{STATUS_LABEL[r.status]}</td>
                <td className="px-4 py-3">{PAYMENT_LABEL[r.payment.status]}</td>
                <td className="px-4 py-3">
                  <Link
                    to="/admin/ppdb/$id"
                    params={{ id: r.id }}
                    className="font-medium text-navy"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-muted">Tidak ada data pada filter ini.</p>
        ) : null}
      </div>
    </AdminShell>
  );
}
