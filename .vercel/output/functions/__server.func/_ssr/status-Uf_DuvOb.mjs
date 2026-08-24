import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$2 } from "./router-yia4NVan.mjs";
import { n as cn } from "./LogoMark-Cf1GSumj.mjs";
import { t as useHydrated } from "./hooks-4SQ71jJZ.mjs";
import { t as IMG } from "./mock-data-C2o-IRtg.mjs";
import { a as getRegistration, f as whatsappConfirmUrl, r as STATUS_LABEL, t as PAYMENT_LABEL } from "./registrationService-C14u-rFl.mjs";
import { t as PageHero } from "./PageHero-B7GZIv8u.mjs";
import { t as SiteShell } from "./SiteShell-CWBQOXD-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-Uf_DuvOb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StatusPage() {
	const { id: qid } = Route$2.useSearch();
	const hydrated = useHydrated();
	const [input, setInput] = (0, import_react.useState)(qid ?? "");
	const [lookup, setLookup] = (0, import_react.useState)(qid ?? "");
	const rec = (0, import_react.useMemo)(() => hydrated && lookup ? getRegistration(lookup.trim()) : void 0, [hydrated, lookup]);
	const steps = rec ? [
		{
			label: "Formulir diterima",
			on: true
		},
		{
			label: "Data diperiksa",
			on: rec.status !== "menunggu_verifikasi"
		},
		{
			label: "Dokumen diverifikasi",
			on: rec.status === "diverifikasi" || rec.status === "selesai"
		},
		{
			label: "Pembayaran",
			on: rec.payment.status === "lunas" || rec.status === "selesai"
		},
		{
			label: "Pendaftaran selesai",
			on: rec.status === "selesai"
		}
	] : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		eyebrow: "PPDB",
		title: "Status Pendaftaran",
		subtitle: "Masukkan nomor pendaftaran, misalnya PPDB-SD-2026-0001.",
		image: IMG.corridor
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page max-w-xl py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-3 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					setLookup(input.trim());
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "regid",
						children: "Nomor Pendaftaran"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "regid",
						value: input,
						onChange: (e) => setInput(e.target.value),
						placeholder: "PPDB-SD-2026-0001",
						className: "h-12 min-w-0 flex-1 rounded-full bg-cream px-5 text-[16px] outline-none focus:shadow-[0_0_0_2px_var(--color-gold)]",
						autoCapitalize: "characters"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "h-12 rounded-full bg-navy px-6 text-sm font-semibold text-paper",
						children: "Cek"
					})
				]
			}),
			lookup && !rec ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-muted",
				role: "status",
				children: [
					"Nomor tidak ditemukan di perangkat ini. Coba contoh",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "font-medium text-navy underline",
						onClick: () => {
							setInput("PPDB-SD-2026-0001");
							setLookup("PPDB-SD-2026-0001");
						},
						children: "PPDB-SD-2026-0001"
					}),
					"."
				]
			}) : null,
			rec ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-xl bg-cream p-6",
				children: [
					rec.status === "ditolak" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 rounded-md bg-red-800 px-3 py-2 text-sm text-paper",
						children: "Pendaftaran ditolak. Hubungi admin via WhatsApp untuk keterangan."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-teal",
						children: rec.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl font-medium",
						children: rec.student.fullName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							rec.unit,
							" · ",
							STATUS_LABEL[rec.status],
							" · ",
							PAYMENT_LABEL[rec.payment.status]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 space-y-3",
						children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid size-6 place-items-center rounded-full text-[11px] font-semibold", s.on ? "bg-teal text-paper" : "bg-paper text-muted"),
								"aria-hidden": true,
								children: s.on ? "✓" : "○"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: s.on ? "text-foreground" : "text-muted",
								children: s.label
							})]
						}, s.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappConfirmUrl(rec),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy",
						children: "Konfirmasi via WhatsApp"
					})
				]
			}) : null
		]
	})] });
}
//#endregion
export { StatusPage as component };
