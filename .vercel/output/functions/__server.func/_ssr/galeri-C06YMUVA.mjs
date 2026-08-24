import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./LogoMark-Cf1GSumj.mjs";
import { t as useHydrated } from "./hooks-4SQ71jJZ.mjs";
import { s as seedGallery, t as IMG } from "./mock-data-C2o-IRtg.mjs";
import { t as PageHero } from "./PageHero-B7GZIv8u.mjs";
import { t as SiteShell } from "./SiteShell-CWBQOXD-.mjs";
import { r as listGallery } from "./galleryService-TcCx-Zju.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/galeri-C06YMUVA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	"Semua",
	"SD",
	"SMP",
	"Kegiatan",
	"Pembelajaran",
	"Sekolah"
];
function GalleryPage() {
	const all = useHydrated() ? listGallery() : seedGallery;
	const [cat, setCat] = (0, import_react.useState)("Semua");
	const items = (0, import_react.useMemo)(() => all.filter((g) => cat === "Semua" ? true : g.category === cat), [all, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		compact: true,
		eyebrow: "Gallery",
		title: "Suasana sekolah",
		subtitle: "Foto dokumenter-prototipe. Foto resmi sekolah dapat ditambahkan dari dasbor admin.",
		image: IMG.garden
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-wide py-12 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2 overflow-x-auto pb-2",
			children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setCat(c),
				className: cn("h-11 shrink-0 rounded-full px-4 text-sm", cat === c ? "bg-navy text-paper" : "bg-cream text-foreground"),
				children: c
			}, c))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 columns-1 gap-3 sm:columns-2 lg:columns-3",
			children: items.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mb-3 break-inside-avoid overflow-hidden rounded-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: g.image,
					alt: g.title,
					className: cn("w-full object-cover", i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"),
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "bg-cream px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium",
						children: g.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: g.category
					})]
				})]
			}, g.id))
		})]
	})] });
}
//#endregion
export { GalleryPage as component };
