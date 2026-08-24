import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, d as useRouterState, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Instagram, n as X, o as MessageCircle, s as Menu, t as Youtube } from "../_libs/lucide-react.mjs";
import { a as BANK, c as FOOTER_NAV, f as SOCIAL, l as NAV_PUBLIC, o as CONTACT } from "./router-yia4NVan.mjs";
import { n as cn, t as LogoMark } from "./LogoMark-Cf1GSumj.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteShell-CWBQOXD-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 py-16 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "size-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-semibold tracking-tight",
							children: "YASINTA NABAWAN"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-sky",
							children: "Education"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-sm text-sm leading-relaxed text-paper/70",
						children: "Satu komunitas pendidikan untuk SDK St. Fransisco Yasinta Nabawan dan CLC SMPT Nabawan, Sabah, Malaysia."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Navigasi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2 text-sm",
						children: FOOTER_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-paper/75 transition-colors hover:text-paper",
							children: item.label
						}) }, item.to))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Komunitas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-3",
							children: SOCIAL.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: s.href,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-3 text-sm text-paper/80 hover:text-paper",
								children: [s.network === "Instagram" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
									className: "size-4",
									"aria-hidden": true
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, {
									className: "size-4",
									"aria-hidden": true
								}), s.label]
							}) }, s.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs leading-relaxed text-paper/45",
							children: "Nabawan, Sabah, Malaysia"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-paper/45",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Yasinta Nabawan Education"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/login",
					className: "hover:text-paper/70",
					children: "Admin"
				})]
			})
		})]
	});
}
function Navbar() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "skip-link",
			children: "Loncat ke konten"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "pointer-events-none fixed inset-x-0 top-0 z-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide flex items-center justify-between gap-3 py-3 md:py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "pointer-events-auto flex items-center gap-2.5 rounded-full pr-3",
						"aria-label": "Yasinta Nabawan Education, beranda",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "size-10 shrink-0 md:size-11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-[0.78rem] font-semibold tracking-wide text-paper md:text-[0.85rem]",
								children: "YASINTA NABAWAN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[0.62rem] font-medium tracking-[0.18em] text-sky/90",
								children: "EDUCATION"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: cn("pointer-events-auto hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex", "liquid-glass-dark", scrolled && "bg-navy/78"),
						"aria-label": "Utama",
						children: NAV_PUBLIC.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-full px-3.5 py-2 text-[0.8rem] font-medium tracking-wide text-paper/75 transition-colors duration-150", active && "bg-paper/10 text-paper", !active && "hover:text-paper"),
								children: item.label
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ppdb",
							className: "hidden h-11 items-center rounded-full bg-gold px-4 text-sm font-semibold text-navy transition-transform duration-150 active:scale-[0.96] md:inline-flex",
							children: "Daftar PPDB"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-full text-paper liquid-glass-dark md:hidden",
							"aria-label": open ? "Tutup menu" : "Buka menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "fixed inset-0 z-40 flex flex-col bg-navy px-6 pt-24 pb-10 md:hidden",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: .25 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Menu ponsel",
				className: "flex flex-col gap-1",
				children: NAV_PUBLIC.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .04 * i,
						duration: .35,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "block rounded-2xl px-2 py-3 font-display text-3xl font-medium tracking-tight text-paper",
						children: item.label
					})
				}, item.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/ppdb",
				className: "mt-auto inline-flex h-12 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy",
				children: "Daftar PPDB"
			})]
		}) : null })
	] });
}
var REPLIES = {
	"Informasi PPDB": "PPDB 2026 untuk SD (SDK St. Fransisco Yasinta Nabawan) dan SMP (CLC SMPT Nabawan) dapat diisi dari HP. Pilih jenjang, lengkapi data, unggah dokumen, lalu konfirmasi via WhatsApp. Tidak perlu datang ke sekolah hanya untuk mengurus formulir.",
	Persyaratan: "Siapkan: Kartu Keluarga, Akta Kelahiran, dan Ijazah/SKL (jika ada, terutama untuk SMP). Nomor WhatsApp orang tua wajib diisi agar kami bisa menghubungi Anda.",
	"Biaya Pendaftaran": `Biaya contoh prototipe: ${BANK.feeLabel}. ${BANK.feeNote}`,
	"Cara Pembayaran": "Transfer ke rekening contoh di portal, lalu unggah bukti — atau bayar tunai di sekolah. Status awal: menunggu verifikasi / menunggu pembayaran tunai.",
	"Cek Status": "Masukkan nomor pendaftaran di halaman Cek Status, misalnya PPDB-SD-2026-0001.",
	"Hubungi Admin": `WhatsApp admin (placeholder): ${CONTACT.whatsappDisplay}. ${CONTACT.note}`
};
var OPTIONS = Object.keys(REPLIES);
function PpdbChatbot() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		from: "bot",
		text: "Selamat datang di layanan PPDB Yasinta Nabawan Education."
	}]);
	const showOptions = messages[messages.length - 1]?.from === "bot";
	const panel = (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[min(32rem,70dvh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[24px] bg-paper shadow-[0_20px_60px_rgba(5,11,20,0.28)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between bg-navy px-4 py-3 text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Layanan PPDB WhatsApp"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-paper/60",
					children: "Prototipe percakapan · bukan API resmi"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-9 place-items-center rounded-full hover:bg-paper/10",
					onClick: () => setOpen(false),
					"aria-label": "Tutup chat",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-3 overflow-y-auto p-4",
				children: [messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: m.from === "bot" ? "max-w-[90%] rounded-2xl rounded-tl-md bg-cream px-3 py-2 text-sm text-foreground" : "ml-auto max-w-[90%] rounded-2xl rounded-tr-md bg-navy px-3 py-2 text-sm text-paper",
					children: m.text
				}, i)), showOptions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2 pt-1",
					children: OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-full bg-navy/5 px-3 py-2 text-xs font-medium text-navy shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-navy)_12%,transparent)]",
						onClick: () => {
							setMessages((prev) => [
								...prev,
								{
									from: "user",
									text: opt
								},
								{
									from: "bot",
									text: REPLIES[opt]
								}
							]);
						},
						children: opt
					}, opt))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 border-t border-mist px-4 py-3 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ppdb/status",
					className: "font-medium text-teal",
					children: "Cek status"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `https://wa.me/${CONTACT.whatsapp.replace("+", "")}`,
					target: "_blank",
					rel: "noreferrer",
					className: "font-medium text-navy",
					children: "WhatsApp admin"
				})]
			})
		]
	}), [messages, showOptions]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 md:right-6 md:bottom-6",
		children: [open ? panel : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: "inline-flex h-12 items-center gap-2 rounded-full bg-navy px-4 text-sm font-medium text-paper shadow-[0_10px_30px_rgba(5,11,20,0.28)]",
			"aria-expanded": open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				className: "size-4",
				"aria-hidden": true
			}), "Chat PPDB"]
		})]
	});
}
function SiteShell({ children, hideChat }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			hideChat ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PpdbChatbot, {})
		]
	});
}
//#endregion
export { SiteShell as t };
