import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as schools, t as IMG } from "./mock-data-C2o-IRtg.mjs";
import { t as PageHero } from "./PageHero-B7GZIv8u.mjs";
import { t as SiteShell } from "./SiteShell-CWBQOXD-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ppdb-TRzYpoqu.js
var import_jsx_runtime = require_jsx_runtime();
function PpdbLanding() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		eyebrow: "PPDB 2026",
		title: "Penerimaan Peserta Didik Baru",
		subtitle: "Daftar dengan mudah melalui HP, tanpa harus datang ke sekolah hanya untuk mengurus formulir.",
		image: IMG.still
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-base leading-relaxed text-foreground/80",
				children: "Sistem ini membantu orang tua dan calon siswa yang tinggal jauh dari sekolah. Formulir ringan, langkahnya pendek, dan data tersimpan di perangkat Anda sampai dikirim. Setelah itu, konfirmasi cukup lewat WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-2",
				children: ["SD", "SMP"].map((unit) => {
					const s = schools[unit];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col rounded-xl bg-cream p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow text-teal",
								children: ["PPDB ", s.shortName]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl font-medium tracking-tight",
								children: s.fullName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted",
								children: [
									s.levelId,
									" · ",
									s.levelEn
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex-1 text-sm leading-relaxed text-foreground/80",
								children: [s.tagline, " Alur yang sama untuk kedua jenjang — bobot yang setara."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: s.ppdbHref,
								className: "mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-paper",
								children: [
									"Daftar ",
									s.shortName,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
								]
							})
						]
					}, unit);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-3",
				children: [
					{
						n: "01",
						t: "Pilih jenjang",
						d: "SD atau SMP — dua kartu yang sama pentingnya."
					},
					{
						n: "02",
						t: "Isi & unggah",
						d: "Data siswa, orang tua, asal sekolah, dan dokumen."
					},
					{
						n: "03",
						t: "Konfirmasi WA",
						d: "Dapat nomor pendaftaran, lalu kabari admin via WhatsApp."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-mist p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-gold",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-medium",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: s.d
						})
					]
				}, s.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ppdb/status",
					className: "inline-flex h-12 items-center rounded-full bg-cream px-5 text-sm font-medium",
					children: "Cek status pendaftaran"
				})
			})
		]
	})] });
}
//#endregion
export { PpdbLanding as component };
