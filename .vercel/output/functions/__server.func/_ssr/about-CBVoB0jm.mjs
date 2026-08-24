import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as schools, t as IMG } from "./mock-data-C2o-IRtg.mjs";
import { t as PageHero } from "./PageHero-B7GZIv8u.mjs";
import { t as SiteShell } from "./SiteShell-CWBQOXD-.mjs";
import { n as SocialSection, t as SchoolPair } from "./SocialSection-BS1RqQ59.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CBVoB0jm.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About",
			title: "Satu komunitas, dua jenjang.",
			subtitle: "Yasinta Nabawan Education adalah portal digital bersama untuk SD dan SMP di Nabawan, Sabah.",
			image: IMG.landscape
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page grid gap-10 py-16 md:grid-cols-12 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-teal",
						children: "Portal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl",
						children: "Bukan dua situs terpisah."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-foreground/80",
						children: "SDK St. Fransisco Yasinta Nabawan dan CLC SMPT Nabawan berada di lingkungan sekolah yang sama. Portal ini menyatukan informasi, kegiatan, dan PPDB agar orang tua, guru, dan siswa menemui satu rumah digital — dengan kedua jenjang yang setara."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-foreground/80",
						children: "Visi, misi, dan data kelembagaan pada halaman ini masih berupa kerangka prototipe. Isi resmi akan dilengkapi setelah observasi lapangan dan konfirmasi sekolah."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl bg-cream p-6 md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-teal",
						children: "Lokasi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl",
						children: "Nabawan, Sabah"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Malaysia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "Jarak ke sekolah dapat menjadi tantangan. Karena itu PPDB dirancang agar pendaftaran bisa diurus dari rumah melalui HP."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy py-16 text-paper md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid gap-6 md:grid-cols-2",
				children: ["SD", "SMP"].map((unit) => {
					const s = schools[unit];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl p-6 liquid-glass",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-gold",
								children: s.shortName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl font-medium",
								children: s.fullName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-paper/65",
								children: [
									s.levelId,
									" · ",
									s.levelEn
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-paper/75",
								children: s.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: s.href,
								className: "mt-6 inline-flex h-11 items-center rounded-full bg-paper px-4 text-sm font-medium text-navy",
								children: ["Profil ", s.shortName]
							})
						]
					}, unit);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-teal",
					children: "Cara kerja portal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-medium",
					children: "Tiga hal yang bisa dilakukan sekarang"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: [
						{
							t: "Mengenal sekolah",
							d: "Profil SD dan SMP, kegiatan, berita, dan galeri dalam satu tempat."
						},
						{
							t: "Mendaftar PPDB",
							d: "Formulir bertahap, unggah dokumen, pilih pembayaran, konfirmasi WhatsApp."
						},
						{
							t: "Mengikuti kabar",
							d: "Kanal Instagram dan YouTube resmi yang sudah tersedia saat ini."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-cream p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-medium",
							children: item.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: item.d
						})]
					}, item.t))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchoolPair, { heading: "Kedua jenjang, bobot yang sama" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialSection, {})
	] });
}
//#endregion
export { AboutPage as component };
