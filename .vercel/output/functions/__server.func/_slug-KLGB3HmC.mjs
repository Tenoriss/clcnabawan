import { B as notFound, v as Link, x as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Route$6 } from "./_ssr/router-yia4NVan.mjs";
import { i as formatDate } from "./_ssr/LogoMark-Cf1GSumj.mjs";
import { t as useHydrated } from "./_ssr/hooks-4SQ71jJZ.mjs";
import { c as seedNews } from "./_ssr/mock-data-C2o-IRtg.mjs";
import { t as PageHero } from "./_ssr/PageHero-B7GZIv8u.mjs";
import { t as SiteShell } from "./_ssr/SiteShell-CWBQOXD-.mjs";
import { n as getNewsBySlug, r as listNews } from "./_ssr/newsService-C3cduh5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-KLGB3HmC.js
var import_jsx_runtime = require_jsx_runtime();
function NewsDetailPage() {
	const { slug } = Route$6.useParams();
	const hydrated = useHydrated();
	const item = hydrated ? getNewsBySlug(slug) : seedNews.find((n) => n.slug === slug);
	if (hydrated && !item) throw notFound();
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-[50vh] place-items-center text-sm text-muted",
		children: "Memuat…"
	}) });
	const related = (hydrated ? listNews() : seedNews).filter((n) => n.slug !== item.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			compact: true,
			eyebrow: item.category,
			title: item.title,
			subtitle: formatDate(item.date),
			image: item.image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "container-page max-w-2xl py-12 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-foreground/85",
					children: item.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-4 text-base leading-relaxed text-foreground/80",
					children: item.body.split("\n\n").map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-xs text-muted",
					children: "Naskah prototipe. Konten resmi akan diperbarui dari dasbor admin sekolah."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-teal",
				children: "Berita lain"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-3",
				children: related.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/berita/$slug",
					params: { slug: n.slug },
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: n.image,
						alt: "",
						className: "aspect-[16/10] w-full rounded-lg object-cover",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-lg font-medium",
						children: n.title
					})]
				}, n.id))
			})]
		})
	] });
}
//#endregion
export { NewsDetailPage as component };
