import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { useHydrated } from "@/lib/hooks";
import { listRegistrations, statsFrom } from "@/lib/services/registrationService";
import { listNews } from "@/lib/services/newsService";
import { listGallery } from "@/lib/services/galleryService";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/admin/")({
  ssr: false,
  component: AdminHome,
  head: () => ({
    meta: [{ title: "Dasbor Admin" }],
  }),
});

function AdminHome() {
  const hydrated = useHydrated();
  const list = hydrated ? listRegistrations() : [];
  const stats = statsFrom(list);
  const newsCount = hydrated ? listNews().length : 0;
  const galleryCount = hydrated ? listGallery().length : 0;
  const recent = list.slice(0, 5);

  const cards = [
    { k: "Total Pendaftar", v: stats.total },
    { k: "SD", v: stats.sd },
    { k: "SMP", v: stats.smp },
    { k: "Menunggu Verifikasi", v: stats.menungguVerifikasi },
    { k: "Terverifikasi", v: stats.terverifikasi },
    { k: "Menunggu Pembayaran", v: stats.menungguPembayaran },
    { k: "Selesai", v: stats.selesai },
    { k: "Berita / Galeri", v: `${newsCount} / ${galleryCount}` },
  ];

  return (
    <AdminShell title="Dasbor">
      <p className="text-sm text-muted">
        Data prototipe tersimpan di perangkat ini (localStorage). Belum terhubung ke server.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.k} className="rounded-lg bg-cream p-4">
            <p className="text-xs uppercase tracking-wider text-muted">{c.k}</p>
            <p className="mt-2 font-display text-3xl font-medium tabular-nums">{c.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-medium">Pendaftar terbaru</h2>
          <Link to="/admin/ppdb" className="text-sm font-medium text-navy">
            Kelola PPDB
          </Link>
        </div>
        <div className="mt-4 overflow-x-auto rounded-lg bg-cream">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">Nama</th>
                <th className="px-4 py-3 font-medium">Jenjang</th>
                <th className="px-4 py-3 font-medium">Tanggal</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r) => (
                <tr key={r.id} className="border-t border-paper">
                  <td className="px-4 py-3 font-mono text-xs">
                    <Link to="/admin/ppdb/$id" params={{ id: r.id }} className="text-navy">
                      {r.id}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{r.student.fullName}</td>
                  <td className="px-4 py-3">{r.unit}</td>
                  <td className="px-4 py-3">{formatDate(r.createdAt)}</td>
                  <td className="px-4 py-3">{r.status.replaceAll("_", " ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
