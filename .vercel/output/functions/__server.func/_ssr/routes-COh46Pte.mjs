import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as formatDate } from "./LogoMark-Cf1GSumj.mjs";
import { n as useIsCoarsePointer, r as usePrefersReducedMotion, t as useHydrated } from "./hooks-4SQ71jJZ.mjs";
import { a as schools, c as seedNews, t as IMG } from "./mock-data-C2o-IRtg.mjs";
import { t as SiteShell } from "./SiteShell-CWBQOXD-.mjs";
import { r as listNews } from "./newsService-C3cduh5J.mjs";
import { n as SocialSection, t as SchoolPair } from "./SocialSection-BS1RqQ59.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-COh46Pte.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATS = [
	{
		k: "SD",
		v: "Elementary Education"
	},
	{
		k: "SMP",
		v: "Junior High Education"
	},
	{
		k: "Nabawan",
		v: "Sabah, Malaysia"
	}
];
function AboutEditorial() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-navy py-20 text-paper md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-12 md:grid-cols-12 md:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "About this portal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium tracking-tight md:text-5xl",
						children: "Pendidikan yang dekat, meski jaraknya jauh."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-paper/72",
						children: "Yasinta Nabawan Education adalah rumah digital bersama. Bukan dua situs terpisah — satu portal, dua jenjang, satu komunitas."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:col-span-5",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-paper/15 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: s.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-paper/60",
						children: s.v
					})]
				}, s.k))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-wide mt-14 overflow-hidden rounded-[28px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: IMG.assembly,
				alt: "Aula sekolah sebagai ruang komunitas",
				className: "aspect-[21/9] w-full object-cover",
				loading: "lazy"
			})
		})]
	});
}
function CinematicHero() {
	const rootRef = (0, import_react.useRef)(null);
	const coarse = useIsCoarsePointer();
	const reduced = usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		if (!root || coarse || reduced) return;
		let tx = window.innerWidth * .5;
		let ty = window.innerHeight * .4;
		let cx = tx;
		let cy = ty;
		let raf = 0;
		const onMove = (e) => {
			tx = e.clientX;
			ty = e.clientY;
		};
		const loop = () => {
			cx += (tx - cx) * .1;
			cy += (ty - cy) * .1;
			const dx = (cx / window.innerWidth - .5) * 16;
			const dy = (cy / window.innerHeight - .5) * 12;
			root.style.setProperty("--sx", `${cx}px`);
			root.style.setProperty("--sy", `${cy}px`);
			root.style.setProperty("--px", `${dx}px`);
			root.style.setProperty("--py", `${dy}px`);
			raf = requestAnimationFrame(loop);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		raf = requestAnimationFrame(loop);
		return () => {
			window.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(raf);
		};
	}, [coarse, reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: rootRef,
		className: "relative min-h-dvh overflow-hidden bg-midnight text-paper",
		style: {
			"--sx": "50%",
			"--sy": "40%",
			"--px": "0px",
			"--py": "0px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-grid absolute inset-[-8%] z-10",
				style: { transform: "translate3d(var(--px), var(--py), 0)" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					media: "(max-width: 640px)",
					srcSet: IMG.heroSm
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG.hero,
					alt: "",
					className: "h-full w-full object-cover",
					style: {
						outline: "none",
						transform: "scale(1.08) translate3d(calc(var(--px) * -0.4), calc(var(--py) * -0.35), 0)"
					}
				})] })
			}),
			!coarse && !reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 z-20 hidden md:block",
				style: {
					WebkitMaskImage: "radial-gradient(circle 250px at var(--sx) var(--sy), #000 0%, transparent 70%)",
					maskImage: "radial-gradient(circle 250px at var(--sx) var(--sy), #000 0%, transparent 70%)"
				},
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG.classroom,
					alt: "",
					className: "h-full w-full object-cover opacity-90",
					style: { outline: "none" }
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-30 bg-gradient-to-b from-midnight/55 via-navy/45 to-midnight/88",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 z-30 h-48 bg-gradient-to-t from-midnight to-transparent",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-40 flex min-h-dvh flex-col pt-28 pb-28 md:pt-32 md:pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-wide flex flex-1 flex-col justify-end md:justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Education · Nabawan · Sabah"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "sr-only",
							children: "Yasinta Nabawan Education — Growing Together, Learning for Tomorrow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "display-giant pointer-events-none mt-4 select-none text-paper/90",
							"aria-hidden": true,
							style: { transform: "translate3d(calc(var(--px) * 0.25), calc(var(--py) * 0.2), 0)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[clamp(3.4rem,16vw,13rem)]",
								children: "Yasinta"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[clamp(3.4rem,16vw,13rem)] text-sky/80",
								children: "Nabawan"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 max-w-xl md:mt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-[1.65rem] font-medium leading-[1.15] tracking-tight text-paper md:text-4xl",
									children: "Growing Together, Learning for Tomorrow"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-md text-sm leading-relaxed text-paper/72 md:text-base",
									children: "A unified education portal for SDK St. Fransisco Yasinta Nabawan and CLC SMPT Nabawan."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#schools",
										className: "inline-flex h-12 items-center rounded-full bg-gold px-5 text-sm font-semibold text-navy transition-transform duration-150 active:scale-[0.96]",
										children: "Explore Our Schools"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/ppdb",
										className: "inline-flex h-12 items-center rounded-full px-5 text-sm font-semibold text-paper liquid-glass",
										children: "Register for PPDB"
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-wide mt-10 mb-16 grid gap-3 md:mb-0 md:grid-cols-2",
					children: ["SD", "SMP"].map((unit) => {
						const s = schools[unit];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: s.href,
							className: "group relative overflow-hidden rounded-xl p-5 liquid-glass md:p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-gold",
										children: s.shortName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-sm font-display text-xl font-medium tracking-tight text-paper md:text-2xl",
										children: s.fullName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-paper/65",
										children: s.levelId
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex h-11 w-fit shrink-0 items-center gap-1 rounded-full bg-paper/10 px-4 text-sm font-medium text-paper transition-transform duration-200 group-hover:translate-x-0.5",
									children: [
										"Explore ",
										s.shortName,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "size-4",
											"aria-hidden": true
										})
									]
								})]
							})
						}, unit);
					})
				})]
			})
		]
	});
}
function IntroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid items-center gap-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-teal",
						children: "Yasinta Nabawan Education"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium tracking-tight md:text-5xl",
						children: "One Community, Two Learning Journeys"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-foreground/80",
						children: "Portal ini menyatukan SDK St. Fransisco Yasinta Nabawan dan CLC SMPT Nabawan dalam satu ekosistem digital. Kedua jenjang setara: SD dan SMP berdiri berdampingan di lingkungan sekolah yang sama di Nabawan, Sabah."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-foreground/80",
						children: "Informasi sekolah, kegiatan, berita, galeri, dan PPDB dirancang agar orang tua dapat mengurus pendaftaran dari rumah — ringan, jelas, dan ramah koneksi yang tidak selalu stabil."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[28px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMG.landscape,
						alt: "Lanskap interior Sabah dekat lingkungan sekolah",
						className: "aspect-[4/3] w-full object-cover"
					})
				})
			})]
		})
	});
}
function NewsPreview() {
	const items = (useHydrated() ? listNews() : seedNews).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-teal",
					children: "Berita"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl",
					children: "Kabar sekolah"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/berita",
					className: "text-sm font-medium text-navy",
					children: "Semua berita"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-3",
				children: items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/berita/$slug",
					params: { slug: n.slug },
					className: "group block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[22px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: n.image,
								alt: "",
								className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-xl font-medium tracking-tight",
							children: n.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: n.excerpt
						})
					]
				}, n.id))
			})]
		})
	});
}
function PpdbTeaser() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-navy py-20 text-paper md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 md:grid-cols-12 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "PPDB 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium tracking-tight md:text-5xl",
						children: "Daftar dari rumah, tanpa bolak-balik ke sekolah."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm leading-relaxed text-paper/70 md:text-base",
						children: "Formulir SD dan SMP diisi lewat HP. Unggah dokumen, pilih cara bayar, lalu konfirmasi via WhatsApp. Dirancang untuk keluarga yang jaraknya jauh dan koneksi yang tidak selalu stabil."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/ppdb/sd",
						className: "flex h-14 items-center justify-between rounded-full bg-gold px-6 text-sm font-semibold text-navy",
						children: ["Daftar SD", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/ppdb/smp",
						className: "flex h-14 items-center justify-between rounded-full px-6 text-sm font-semibold text-paper liquid-glass",
						children: ["Daftar SMP", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/ppdb/status",
						className: "text-center text-sm text-paper/60 hover:text-paper",
						children: "Sudah daftar? Cek status"
					})
				]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CinematicHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchoolPair, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutEditorial, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PpdbTeaser, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialSection, {})
	] });
}
//#endregion
export { Home as component };
