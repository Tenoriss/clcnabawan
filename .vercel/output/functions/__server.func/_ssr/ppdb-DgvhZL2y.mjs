import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as formatDate, n as cn } from "./LogoMark-Cf1GSumj.mjs";
import { t as useHydrated } from "./hooks-4SQ71jJZ.mjs";
import { t as AdminShell } from "./AdminShell-u1FgaaXy.mjs";
import { o as listRegistrations, r as STATUS_LABEL, t as PAYMENT_LABEL } from "./registrationService-C14u-rFl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ppdb-DgvhZL2y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "Semua",
		label: "Semua"
	},
	{
		id: "SD",
		label: "SD"
	},
	{
		id: "SMP",
		label: "SMP"
	},
	{
		id: "menunggu_verifikasi",
		label: "Menunggu Verifikasi"
	},
	{
		id: "diverifikasi",
		label: "Terverifikasi"
	},
	{
		id: "menunggu_pembayaran",
		label: "Menunggu Pembayaran"
	},
	{
		id: "selesai",
		label: "Selesai"
	}
];
function matches(r, f, q) {
	if (f === "SD" || f === "SMP") {
		if (r.unit !== f) return false;
	} else if (f === "menunggu_pembayaran") {
		if (r.payment.status !== "belum_bayar" && r.payment.status !== "menunggu_verifikasi" && r.payment.status !== "tunai_menunggu") return false;
	} else if (f !== "Semua") {
		if (r.status !== f) return false;
	}
	if (!q) return true;
	return `${r.id} ${r.student.fullName} ${r.student.whatsapp} ${r.parent.whatsapp}`.toLowerCase().includes(q.toLowerCase());
}
function AdminPpdb() {
	const hydrated = useHydrated();
	const [filter, setFilter] = (0, import_react.useState)("Semua");
	const [q, setQ] = (0, import_react.useState)("");
	const list = hydrated ? listRegistrations() : [];
	const rows = (0, import_react.useMemo)(() => list.filter((r) => matches(r, filter, q)), [
		list,
		filter,
		q
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: "PPDB",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Cari nama, ID, atau WhatsApp",
					className: "h-11 w-full max-w-sm rounded-full bg-cream px-4 text-[16px] outline-none focus:shadow-[0_0_0_2px_var(--color-gold)]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2 overflow-x-auto pb-1",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(f.id),
					className: cn("h-10 shrink-0 rounded-full px-3 text-sm", filter === f.id ? "bg-navy text-paper" : "bg-cream"),
					children: f.label
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 overflow-x-auto rounded-lg bg-cream",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[760px] text-left text-sm",
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
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Pembayaran"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Aksi"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-xs",
								children: r.id
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
								children: STATUS_LABEL[r.status]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: PAYMENT_LABEL[r.payment.status]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin/ppdb/$id",
									params: { id: r.id },
									className: "font-medium text-navy",
									children: "Detail"
								})
							})
						]
					}, r.id)) })]
				}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-8 text-center text-sm text-muted",
					children: "Tidak ada data pada filter ini."
				}) : null]
			})
		]
	});
}
//#endregion
export { AdminPpdb as component };
