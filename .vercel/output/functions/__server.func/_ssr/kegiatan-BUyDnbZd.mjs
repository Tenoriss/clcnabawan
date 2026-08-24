import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as formatDate, n as cn } from "./LogoMark-Cf1GSumj.mjs";
import { o as seedActivities, t as IMG } from "./mock-data-C2o-IRtg.mjs";
import { t as PageHero } from "./PageHero-B7GZIv8u.mjs";
import { t as SiteShell } from "./SiteShell-CWBQOXD-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kegiatan-BUyDnbZd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	"Semua",
	"Pembelajaran",
	"Kegiatan Sekolah",
	"Ekstrakurikuler",
	"Perayaan",
	"Sosial",
	"Prestasi"
];
function ActivitiesPage() {
	const [cat, setCat] = (0, import_react.useState)("Semua");
	const items = (0, import_react.useMemo)(() => seedActivities.filter((a) => cat === "Semua" ? true : a.category === cat), [cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Activities",
		title: "Ritme belajar dan kehidupan sekolah",
		subtitle: "Kegiatan SD dan SMP dalam satu kalender komunitas. Foto bersifat dokumenter-prototipe.",
		image: IMG.field
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-2",
				children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCat(c),
					className: cn("h-11 shrink-0 rounded-full px-4 text-sm", cat === c ? "bg-navy text-paper" : "bg-cream text-foreground"),
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: a.image,
									alt: "",
									className: "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "absolute bottom-3 left-4 font-display text-lg text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100",
									children: a.title
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs uppercase tracking-wider text-muted",
							children: [
								a.category,
								" · ",
								a.unit === "ALL" ? "SD & SMP" : a.unit,
								" · ",
								formatDate(a.date)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-xl font-medium",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: a.excerpt
						})
					]
				}, a.id))
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-16 text-center text-sm text-muted",
				children: "Belum ada kegiatan pada kategori ini."
			}) : null
		]
	})] });
}
//#endregion
export { ActivitiesPage as component };
