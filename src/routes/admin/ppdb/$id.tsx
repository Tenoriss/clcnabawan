import { useState, type ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { useHydrated } from "@/lib/hooks";
import {
  PAYMENT_LABEL,
  STATUS_LABEL,
  getRegistration,
  updateRegistration,
  whatsappConfirmUrl,
} from "@/lib/services/registrationService";
import type { PaymentStatus, RegistrationStatus } from "@/lib/types";
import { formatBytes, formatDate } from "@/lib/utils";

export const Route = createFileRoute("/admin/ppdb/$id")({
  ssr: false,
  component: AdminPpdbDetail,
  head: ({ params }) => ({
    meta: [{ title: `${params.id} · PPDB` }],
  }),
});

const REG_OPTS: RegistrationStatus[] = [
  "menunggu_verifikasi",
  "diverifikasi",
  "ditolak",
  "selesai",
];
const PAY_OPTS: PaymentStatus[] = [
  "belum_bayar",
  "menunggu_verifikasi",
  "tunai_menunggu",
  "lunas",
];

function AdminPpdbDetail() {
  const { id } = Route.useParams();
  const hydrated = useHydrated();
  const [tick, setTick] = useState(0);
  const rec = hydrated ? getRegistration(id) : undefined;
  void tick;

  if (hydrated && !rec) throw notFound();
  if (!rec) {
    return (
      <AdminShell title="Detail">
        <p className="text-sm text-muted">Memuat…</p>
      </AdminShell>
    );
  }

  const setStatus = (status: RegistrationStatus) => {
    updateRegistration(rec.id, { status });
    setTick((n) => n + 1);
  };
  const setPay = (status: PaymentStatus) => {
    updateRegistration(rec.id, { payment: { ...rec.payment, status } });
    setTick((n) => n + 1);
  };

  return (
    <AdminShell title={rec.student.fullName}>
      <p className="text-sm text-muted">
        <Link to="/admin/ppdb" className="text-navy">
          PPDB
        </Link>{" "}
        · {rec.id} · {formatDate(rec.createdAt)}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Section title="Data Siswa">
          <Rows
            rows={[
              ["Nama", rec.student.fullName],
              ["NIK", rec.student.nik || "—"],
              ["NISN", rec.student.nisn || "—"],
              ["Lahir", `${rec.student.birthPlace || "—"}, ${rec.student.birthDate || "—"}`],
              ["Jenis kelamin", rec.student.gender || "—"],
              ["Agama", rec.student.religion || "—"],
              ["Alamat", rec.student.address || "—"],
              [
                "Desa / Kec / Kab",
                `${rec.student.village || "—"} / ${rec.student.district || "—"} / ${rec.student.regency || "—"}`,
              ],
              ["WhatsApp", rec.student.whatsapp],
            ]}
          />
        </Section>
        <Section title="Data Orang Tua">
          <Rows
            rows={[
              ["Ayah", rec.parent.fatherName || "—"],
              ["Ibu", rec.parent.motherName || "—"],
              ["Wali", rec.parent.guardianName || "—"],
              ["WhatsApp", rec.parent.whatsapp],
              ["Pekerjaan ayah", rec.parent.fatherJob || "—"],
              ["Pekerjaan ibu", rec.parent.motherJob || "—"],
              ["Alamat", rec.parent.address || "—"],
              ["Asal sekolah", rec.previousSchool.name || "—"],
            ]}
          />
        </Section>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Section title="Dokumen">
          {rec.documents.length === 0 ? (
            <p className="text-sm text-muted">Belum ada berkas.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {rec.documents.map((d) => (
                <li key={d.id} className="flex justify-between gap-3">
                  <span>
                    {d.kind.toUpperCase()} · {d.name}
                  </span>
                  <span className="text-muted">{formatBytes(d.size)}</span>
                </li>
              ))}
            </ul>
          )}
        </Section>
        <Section title="Pembayaran & Status">
          <p className="text-sm">
            Metode: {rec.payment.method || "—"} · {PAYMENT_LABEL[rec.payment.status]}
          </p>
          {rec.payment.proof ? (
            <p className="mt-1 text-sm text-muted">
              Bukti: {rec.payment.proof.name} ({formatBytes(rec.payment.proof.size)})
            </p>
          ) : null}
          <label className="mt-4 block text-sm font-medium">
            Status pendaftaran
            <select
              className="mt-1 h-11 w-full rounded-md bg-paper px-3"
              value={rec.status}
              onChange={(e) => setStatus(e.target.value as RegistrationStatus)}
            >
              {REG_OPTS.map((o) => (
                <option key={o} value={o}>
                  {STATUS_LABEL[o]}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-3 block text-sm font-medium">
            Status pembayaran
            <select
              className="mt-1 h-11 w-full rounded-md bg-paper px-3"
              value={rec.payment.status}
              onChange={(e) => setPay(e.target.value as PaymentStatus)}
            >
              {PAY_OPTS.map((o) => (
                <option key={o} value={o}>
                  {PAYMENT_LABEL[o]}
                </option>
              ))}
            </select>
          </label>
          <a
            href={whatsappConfirmUrl(rec)}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex h-11 items-center rounded-full bg-navy px-4 text-sm text-paper"
          >
            Buka WhatsApp
          </a>
        </Section>
      </div>
    </AdminShell>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-lg bg-cream p-5">
      <h2 className="font-display text-lg font-medium">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Rows({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="space-y-2 text-sm">
      {rows.map(([k, v]) => (
        <div key={k} className="flex justify-between gap-4">
          <dt className="text-muted">{k}</dt>
          <dd className="max-w-[60%] text-right">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
