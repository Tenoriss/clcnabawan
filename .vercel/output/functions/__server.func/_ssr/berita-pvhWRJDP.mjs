import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as formatDate, n as cn } from "./LogoMark-Cf1GSumj.mjs";
import { t as useHydrated } from "./hooks-4SQ71jJZ.mjs";
import { c as seedNews, t as IMG } from "./mock-data-C2o-IRtg.mjs";
import { t as PageHero } from "./PageHero-B7GZIv8u.mjs";
import { t as SiteShell } from "./SiteShell-CWBQOXD-.mjs";
import { r as listNews } from "./newsService-C3cduh5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/berita-pvhWRJDP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	"Semua",
	"PPDB",
	"Pembelajaran",
	"Kegiatan",
	"Prestasi",
	"Pengumuman"
];
function NewsListPage() {
	const all = useHydrated() ? listNews() : seedNews;
	const [cat, setCat] = (0, import_react.useState)("Semua");
	const items = (0, import_react.useMemo)(() => all.filter((n) => cat === "Semua" ? true : n.category === cat), [all, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		eyebrow: "News",
		title: "Kabar sekolah",
		subtitle: "Pengumuman, pembelajaran, dan kehidupan komunitas Yasinta Nabawan.",
		image: IMG.corridor
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-12 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2 overflow-x-auto pb-2",
			children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setCat(c),
				className: cn("h-11 shrink-0 rounded-full px-4 text-sm", cat === c ? "bg-navy text-paper" : "bg-cream text-foreground"),
				children: c
			}, c))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-8 md:grid-cols-2",
			children: items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "group",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/berita/$slug",
					params: { slug: n.slug },
					className: "block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: n.image,
								alt: "",
								className: "aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105",
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs uppercase tracking-wider text-muted",
							children: [
								n.category,
								" · ",
								formatDate(n.date)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-2xl font-medium tracking-tight",
							children: n.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: n.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-3 inline-block text-sm font-medium text-navy",
							children: "Baca selengkapnya"
						})
					]
				})
			}, n.id))
		})]
	})] });
}
//#endregion
export { NewsListPage as component };
