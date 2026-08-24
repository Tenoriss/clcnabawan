import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as MapPin, f as Instagram, l as Mail, o as MessageCircle, t as Youtube } from "../_libs/lucide-react.mjs";
import { f as SOCIAL, o as CONTACT } from "./router-yia4NVan.mjs";
import { t as IMG } from "./mock-data-C2o-IRtg.mjs";
import { t as PageHero } from "./PageHero-B7GZIv8u.mjs";
import { t as SiteShell } from "./SiteShell-CWBQOXD-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontak-lFbl-1Vg.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			compact: true,
			eyebrow: "Contact",
			title: "Hubungi komunitas sekolah",
			subtitle: "Gunakan kanal resmi yang tersedia. Nomor WhatsApp pada prototipe ini adalah placeholder.",
			image: IMG.assembly
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page grid gap-6 py-12 md:grid-cols-2 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-cream p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-teal",
						children: "Alamat"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 flex items-center gap-2 font-display text-2xl font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-teal" }), "Nabawan, Sabah"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Malaysia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-foreground/80",
						children: "SDK St. Fransisco Yasinta Nabawan dan CLC SMPT Nabawan berada dalam satu lingkungan sekolah. Alamat lengkap akan dilengkapi setelah konfirmasi resmi."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-cream p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-teal",
						children: "WhatsApp & email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://wa.me/${CONTACT.whatsapp.replace("+", "")}`,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-3 flex h-12 items-center gap-2 font-medium text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), CONTACT.whatsappDisplay]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), CONTACT.email]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs leading-relaxed text-muted",
						children: CONTACT.note
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-teal",
					children: "Kanal resmi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl font-medium",
					children: "Media sosial yang sudah ada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 md:grid-cols-3",
					children: SOCIAL.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: s.href,
						target: "_blank",
						rel: "noreferrer",
						className: "flex min-h-24 flex-col justify-between rounded-xl bg-navy p-5 text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.network === "Instagram" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-5" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 text-sm font-medium",
							children: s.label
						})]
					}) }, s.id))
				})
			]
		})
	] });
}
//#endregion
export { ContactPage as component };
