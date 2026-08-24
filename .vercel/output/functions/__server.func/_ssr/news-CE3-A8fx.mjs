import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as formatDate } from "./LogoMark-Cf1GSumj.mjs";
import { t as useHydrated } from "./hooks-4SQ71jJZ.mjs";
import { t as AdminShell } from "./AdminShell-u1FgaaXy.mjs";
import { t as IMG } from "./mock-data-C2o-IRtg.mjs";
import { a as slugify, i as saveNews, r as listNews, t as deleteNews } from "./newsService-C3cduh5J.mjs";
import { n as TextAreaField, r as TextField, t as SelectField } from "./field-DUPkloPP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-CE3-A8fx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	"PPDB",
	"Pembelajaran",
	"Kegiatan",
	"Prestasi",
	"Pengumuman"
];
var IMAGES = Object.values(IMG);
var empty = {
	slug: "",
	title: "",
	excerpt: "",
	body: "",
	category: "Pengumuman",
	date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
	image: IMG.still,
	unit: "ALL"
};
function AdminNews() {
	const hydrated = useHydrated();
	const [tick, setTick] = (0, import_react.useState)(0);
	const [form, setForm] = (0, import_react.useState)({ ...empty });
	const items = hydrated ? listNews() : [];
	const persist = () => {
		if (!form.title.trim()) return;
		const id = form.id ?? `n-${Date.now()}`;
		const slug = form.slug.trim() || slugify(form.title);
		saveNews({
			...form,
			id,
			slug,
			unit: form.unit ?? "ALL"
		});
		setForm({ ...empty });
		setTick((n) => n + 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Berita",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3 lg:col-span-5",
				onSubmit: (e) => {
					e.preventDefault();
					persist();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-medium",
						children: form.id ? "Edit berita" : "Tambah berita"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "ntitle",
						label: "Judul",
						value: form.title,
						onChange: (e) => setForm({
							...form,
							title: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
						id: "ncat",
						label: "Kategori",
						value: form.category,
						onChange: (e) => setForm({
							...form,
							category: e.target.value
						}),
						children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "ndate",
						label: "Tanggal",
						type: "date",
						value: form.date,
						onChange: (e) => setForm({
							...form,
							date: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
						id: "nimg",
						label: "Gambar",
						value: form.image,
						onChange: (e) => setForm({
							...form,
							image: e.target.value
						}),
						children: IMAGES.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: src,
							children: src.replace("/images/", "")
						}, src))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
						id: "nexcerpt",
						label: "Ringkasan",
						value: form.excerpt,
						onChange: (e) => setForm({
							...form,
							excerpt: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
						id: "nbody",
						label: "Isi",
						value: form.body,
						onChange: (e) => setForm({
							...form,
							body: e.target.value
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "inline-flex h-11 flex-1 items-center justify-center rounded-full bg-navy text-sm font-medium text-paper",
							children: "Simpan"
						}), form.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 rounded-full bg-cream px-4 text-sm",
							onClick: () => setForm({ ...empty }),
							children: "Batal"
						}) : null]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3",
					children: items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-lg bg-cream p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: n.image,
							alt: "",
							className: "size-16 rounded-md object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-medium",
									children: n.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										n.category,
										" · ",
										formatDate(n.date)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-sm text-navy",
										onClick: () => setForm(n),
										children: "Edit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-sm text-red-800",
										onClick: () => {
											deleteNews(n.id);
											if (form.id === n.id) setForm({ ...empty });
											setTick((x) => x + 1);
										},
										children: "Hapus"
									})]
								})
							]
						})]
					}, n.id))
				})
			})]
		})
	});
}
//#endregion
export { AdminNews as component };
