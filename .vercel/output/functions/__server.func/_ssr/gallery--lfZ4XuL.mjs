import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useHydrated } from "./hooks-4SQ71jJZ.mjs";
import { t as AdminShell } from "./AdminShell-u1FgaaXy.mjs";
import { t as IMG } from "./mock-data-C2o-IRtg.mjs";
import { n as deleteGalleryItem, r as listGallery, t as addGalleryItem } from "./galleryService-TcCx-Zju.mjs";
import { r as TextField, t as SelectField } from "./field-DUPkloPP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery--lfZ4XuL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	"SD",
	"SMP",
	"Kegiatan",
	"Pembelajaran",
	"Sekolah"
];
var IMAGES = Object.values(IMG);
function AdminGallery() {
	const hydrated = useHydrated();
	const [tick, setTick] = (0, import_react.useState)(0);
	const [title, setTitle] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("Sekolah");
	const [image, setImage] = (0, import_react.useState)(IMG.still);
	const items = hydrated ? listGallery() : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: "Galeri",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-3 rounded-lg bg-cream p-5 md:grid-cols-4",
			onSubmit: (e) => {
				e.preventDefault();
				if (!title.trim()) return;
				addGalleryItem({
					id: `g-${Date.now()}`,
					title: title.trim(),
					category,
					image
				});
				setTitle("");
				setTick((n) => n + 1);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "gtitle",
					label: "Judul",
					value: title,
					onChange: (e) => setTitle(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
					id: "gcat",
					label: "Kategori",
					value: category,
					onChange: (e) => setCategory(e.target.value),
					children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
					id: "gimg",
					label: "Gambar",
					value: image,
					onChange: (e) => setImage(e.target.value),
					children: IMAGES.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: src,
						children: src.replace("/images/", "")
					}, src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "h-11 w-full rounded-full bg-navy text-sm font-medium text-paper",
						children: "Tambah"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: items.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "overflow-hidden rounded-lg bg-cream",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: g.image,
					alt: g.title,
					className: "aspect-[4/3] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "flex items-center justify-between gap-2 p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium",
						children: g.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: g.category
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-red-800",
						onClick: () => {
							deleteGalleryItem(g.id);
							setTick((n) => n + 1);
						},
						children: "Hapus"
					})]
				})]
			}, g.id))
		})]
	});
}
//#endregion
export { AdminGallery as component };
