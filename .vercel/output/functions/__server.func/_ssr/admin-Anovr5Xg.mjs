import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as formatDate } from "./LogoMark-Cf1GSumj.mjs";
import { t as useHydrated } from "./hooks-4SQ71jJZ.mjs";
import { t as AdminShell } from "./AdminShell-u1FgaaXy.mjs";
import { l as statsFrom, o as listRegistrations } from "./registrationService-C14u-rFl.mjs";
import { r as listNews } from "./newsService-C3cduh5J.mjs";
import { r as listGallery } from "./galleryService-TcCx-Zju.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Anovr5Xg.js
var import_jsx_runtime = require_jsx_runtime();
function AdminHome() {
	const hydrated = useHydrated();
	const list = hydrated ? listRegistrations() : [];
	const stats = statsFrom(list);
	const newsCount = hydrated ? listNews().length : 0;
	const galleryCount = hydrated ? listGallery().length : 0;
	const recent = list.slice(0, 5);
	const cards = [
		{
			k: "Total Pendaftar",
			v: stats.total
		},
		{
			k: "SD",
			v: stats.sd
		},
		{
			k: "SMP",
			v: stats.smp
		},
		{
			k: "Menunggu Verifikasi",
			v: stats.menungguVerifikasi
		},
		{
			k: "Terverifikasi",
			v: stats.terverifikasi
		},
		{
			k: "Menunggu Pembayaran",
			v: stats.menungguPembayaran
		},
		{
			k: "Selesai",
			v: stats.selesai
		},
		{
			k: "Berita / Galeri",
			v: `${newsCount} / ${galleryCount}`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: "Dasbor",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Data prototipe tersimpan di perangkat ini (localStorage). Belum terhubung ke server."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-cream p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted",
						children: c.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-3xl font-medium tabular-nums",
						children: c.v
					})]
				}, c.k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: "Pendaftar terbaru"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/ppdb",
						className: "text-sm font-medium text-navy",
						children: "Kelola PPDB"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-x-auto rounded-lg bg-cream",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[640px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-xs uppercase tracking-wider text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Nama"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Jenjang"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Tanggal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Status"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: recent.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-paper",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/admin/ppdb/$id",
										params: { id: r.id },
										className: "text-navy",
										children: r.id
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: r.student.fullName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: r.unit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: formatDate(r.createdAt)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: r.status.replaceAll("_", " ")
								})
							]
						}, r.id)) })]
					})
				})]
			})
		]
	});
}
//#endregion
export { AdminHome as component };
