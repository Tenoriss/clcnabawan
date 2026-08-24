import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Instagram, t as Youtube, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { f as SOCIAL } from "./router-yia4NVan.mjs";
import { a as schools } from "./mock-data-C2o-IRtg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SocialSection-BS1RqQ59.js
var import_jsx_runtime = require_jsx_runtime();
function SchoolPair({ heading = "Choose Your Learning Journey" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "schools",
		className: "bg-paper py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-teal",
					children: "Two journeys, one community"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl",
					children: heading
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2",
					children: ["SD", "SMP"].map((unit) => {
						const s = schools[unit];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group overflow-hidden rounded-[28px] bg-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.heroImage,
										alt: "",
										className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "absolute bottom-4 left-5 eyebrow text-gold",
										children: s.shortName
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 md:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl font-medium tracking-tight",
										children: s.fullName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: [
											s.levelId,
											" · ",
											s.levelEn
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-foreground/80",
										children: s.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: s.href,
										className: "mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-navy px-4 text-sm font-medium text-paper transition-transform duration-150 active:scale-[0.96]",
										children: [
											"Explore ",
											s.shortName,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												className: "size-4",
												"aria-hidden": true
											})
										]
									})
								]
							})]
						}, unit);
					})
				})
			]
		})
	});
}
function SocialSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-teal",
					children: "Community"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl",
					children: "Follow Our School Community"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm text-muted",
					children: "Tautan resmi yang tersedia saat ini. Tidak ada akun lain yang ditambahkan."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: SOCIAL.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: s.href,
						target: "_blank",
						rel: "noreferrer",
						className: "flex min-h-32 flex-col justify-between rounded-[24px] bg-paper p-5 transition-transform duration-200 hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-10 items-center justify-center rounded-full bg-navy text-paper",
							children: s.network === "Instagram" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs uppercase tracking-wider text-muted",
							children: s.network
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-medium leading-snug",
							children: s.label
						})] })]
					}, s.id))
				})
			]
		})
	});
}
//#endregion
export { SocialSection as n, SchoolPair as t };
