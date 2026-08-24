import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, d as useRouterState, v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowUpRight, a as Newspaper, d as LayoutDashboard, h as ClipboardList, p as Images, u as LogOut } from "../_libs/lucide-react.mjs";
import { n as cn, t as LogoMark } from "./LogoMark-Cf1GSumj.mjs";
import { t as useHydrated } from "./hooks-4SQ71jJZ.mjs";
import { r as logoutAdmin, t as getAdminSession } from "./adminAuth-D5ZwZa8b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminShell-u1FgaaXy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/admin",
		label: "Dasbor",
		icon: LayoutDashboard
	},
	{
		to: "/admin/ppdb",
		label: "PPDB",
		icon: ClipboardList
	},
	{
		to: "/admin/news",
		label: "Berita",
		icon: Newspaper
	},
	{
		to: "/admin/gallery",
		label: "Galeri",
		icon: Images
	}
];
function AdminShell({ title, children }) {
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const hydrated = useHydrated();
	const [user, setUser] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const session = getAdminSession();
		setUser(session);
		if (!session) navigate({ to: "/admin/login" });
	}, [hydrated, navigate]);
	if (!hydrated || !user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-navy text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-paper/60",
			children: "Memuat dasbor…"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-foreground md:grid md:grid-cols-[240px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "bg-navy text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 px-5 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "size-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold tracking-tight",
						children: "YASINTA NABAWAN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] tracking-[0.18em] text-sky/80",
						children: "ADMIN DEMO"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:overflow-visible md:px-3",
					"aria-label": "Admin",
					children: NAV.map((item) => {
						const active = item.to === "/admin" ? pathname === "/admin" : pathname.startsWith(item.to);
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-3 text-sm", active ? "bg-paper/12 text-paper" : "text-paper/70 hover:text-paper"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4",
								"aria-hidden": true
							}), item.label]
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden border-t border-paper/10 p-3 md:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 text-xs text-paper/50",
						children: user.email
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 text-[11px] text-paper/35",
						children: "Kredensial demo — bukan akun resmi."
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3 border-b border-mist bg-paper px-4 py-3 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl font-medium tracking-tight",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex h-10 items-center gap-1 rounded-full px-3 text-sm text-muted hover:text-foreground",
						children: ["Situs", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex h-10 items-center gap-1 rounded-full bg-cream px-3 text-sm",
						onClick: () => {
							logoutAdmin();
							navigate({ to: "/admin/login" });
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), "Keluar"]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 px-4 py-6 md:px-8 md:py-8",
				children
			})]
		})]
	});
}
//#endregion
export { AdminShell as t };
