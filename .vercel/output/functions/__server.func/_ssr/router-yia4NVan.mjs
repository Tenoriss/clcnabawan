import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, _ as createRootRoute, b as useRouter, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-yia4NVan.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var APP_NAME = "Yasinta Nabawan Education";
var APP_TAGLINE = "Growing Together, Learning for Tomorrow";
var PPDB_YEAR = 2026;
var CONTACT = {
	whatsapp: "+60000000000",
	whatsappDisplay: "+60 00-0000-0000 (placeholder)",
	email: "admin@yasintanabawan.edu",
	address: "Nabawan, Sabah, Malaysia",
	note: "Nomor WhatsApp di atas adalah placeholder prototipe — bukan nomor resmi sekolah."
};
var SOCIAL = [
	{
		id: "ig-smp",
		network: "Instagram",
		label: "Instagram CLC SMPT Nabawan",
		href: "https://www.instagram.com/clcsmptnabawan/",
		unit: "SMP"
	},
	{
		id: "yt-smp",
		network: "YouTube",
		label: "YouTube CLC SMPT Nabawan",
		href: "https://www.youtube.com/@clcnabawan4145",
		unit: "SMP"
	},
	{
		id: "yt-sd",
		network: "YouTube",
		label: "YouTube SDK St. Fransisco Yasinta Nabawan",
		href: "https://www.youtube.com/@clcfransiskoyasinta2332",
		unit: "SD"
	}
];
var BANK = {
	name: "Maybank (contoh)",
	account: "0000-0000-0000",
	holder: "YASINTA NABAWAN EDUCATION",
	feeLabel: "RM 30",
	feeNote: "Nilai biaya dan rekening di atas adalah data contoh untuk prototipe. Sekolah akan mengonfirmasi rekening resmi melalui WhatsApp."
};
var DEMO_ADMIN = {
	email: "admin@yasintanabawan.edu",
	password: "admin123",
	name: "Admin Portal"
};
var NAV_PUBLIC = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/sd",
		label: "SD"
	},
	{
		to: "/smp",
		label: "SMP"
	},
	{
		to: "/kegiatan",
		label: "Activities"
	},
	{
		to: "/ppdb",
		label: "PPDB"
	},
	{
		to: "/kontak",
		label: "Contact"
	}
];
var FOOTER_NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/sd",
		label: "SD"
	},
	{
		to: "/smp",
		label: "SMP"
	},
	{
		to: "/kegiatan",
		label: "Activities"
	},
	{
		to: "/berita",
		label: "News"
	},
	{
		to: "/galeri",
		label: "Gallery"
	},
	{
		to: "/ppdb",
		label: "PPDB"
	},
	{
		to: "/kontak",
		label: "Contact"
	}
];
var RELIGIONS = [
	"Islam",
	"Kristen",
	"Katolik",
	"Hindu",
	"Buddha",
	"Konghucu",
	"Lainnya"
];
var STORAGE_KEYS = {
	registrations: "yne.registrations.v1",
	news: "yne.news.v1",
	gallery: "yne.gallery.v1",
	adminSession: "yne.admin.session.v1",
	draftSd: "yne.ppdb.draft.SD",
	draftSmp: "yne.ppdb.draft.SMP",
	newsSeeded: "yne.news.seeded",
	gallerySeeded: "yne.gallery.seeded",
	regSeeded: "yne.reg.seeded"
};
var styles_default = "/assets/styles-9CqjhxyZ.css";
var Route$19 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: APP_TAGLINE
			},
			{
				name: "theme-color",
				content: "#07111F"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: RootDocument,
	notFoundComponent: NotFound
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "id",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-navy px-6 text-center text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-gold",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-medium",
				children: "Halaman tidak ditemukan"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-paper/70",
				children: "Kembali ke beranda Yasinta Nabawan Education."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-flex h-12 items-center rounded-full bg-gold px-5 text-sm font-semibold text-navy",
				children: "Beranda"
			})
		] })
	});
}
var $$splitComponentImporter$18 = () => import("./routes-COh46Pte.mjs");
var Route$18 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$18, "component"),
	head: () => ({ meta: [{ title: "Yasinta Nabawan Education" }] })
});
var $$splitComponentImporter$17 = () => import("./about-CBVoB0jm.mjs");
var Route$17 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$17, "component"),
	head: () => ({ meta: [{ title: "About · Yasinta Nabawan Education" }] })
});
var $$splitComponentImporter$16 = () => import("./galeri-C06YMUVA.mjs");
var Route$16 = createFileRoute("/galeri")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	head: () => ({ meta: [{ title: "Galeri · Yasinta Nabawan Education" }] })
});
var $$splitComponentImporter$15 = () => import("./kegiatan-BUyDnbZd.mjs");
var Route$15 = createFileRoute("/kegiatan")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	head: () => ({ meta: [{ title: "Kegiatan · Yasinta Nabawan Education" }] })
});
var $$splitComponentImporter$14 = () => import("./kontak-lFbl-1Vg.mjs");
var Route$14 = createFileRoute("/kontak")({
	component: lazyRouteComponent($$splitComponentImporter$14, "component"),
	head: () => ({ meta: [{ title: "Kontak · Yasinta Nabawan Education" }] })
});
var $$splitComponentImporter$13 = () => import("./sd-DJn8ayK_.mjs");
var Route$13 = createFileRoute("/sd")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({ meta: [{ title: "SDK St. Fransisco Yasinta Nabawan" }] })
});
var $$splitComponentImporter$12 = () => import("./smp-CEieoCsA.mjs");
var Route$12 = createFileRoute("/smp")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => ({ meta: [{ title: "CLC SMPT Nabawan" }] })
});
var $$splitComponentImporter$11 = () => import("./admin-Anovr5Xg.mjs");
var Route$11 = createFileRoute("/admin/")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: "Dasbor Admin" }] })
});
var $$splitComponentImporter$10 = () => import("./gallery--lfZ4XuL.mjs");
var Route$10 = createFileRoute("/admin/gallery")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({ meta: [{ title: "Galeri Admin" }] })
});
var $$splitComponentImporter$9 = () => import("./login-BWUH4gKK.mjs");
var Route$9 = createFileRoute("/admin/login")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [{ title: "Admin · Yasinta Nabawan Education" }] })
});
var $$splitComponentImporter$8 = () => import("./news-CE3-A8fx.mjs");
var Route$8 = createFileRoute("/admin/news")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [{ title: "Berita Admin" }] })
});
var $$splitComponentImporter$7 = () => import("./berita-pvhWRJDP.mjs");
var Route$7 = createFileRoute("/berita/")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "Berita · Yasinta Nabawan Education" }] })
});
var $$splitComponentImporter$6 = () => import("../_slug-KLGB3HmC.mjs");
var Route$6 = createFileRoute("/berita/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: ({ params }) => ({ meta: [{ title: `${params.slug} · Berita` }] })
});
var $$splitComponentImporter$5 = () => import("./ppdb-TRzYpoqu.mjs");
var Route$5 = createFileRoute("/ppdb/")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "PPDB 2026 · Yasinta Nabawan Education" }] })
});
var $$splitComponentImporter$4 = () => import("./sd-BpACL-6O.mjs");
var Route$4 = createFileRoute("/ppdb/sd")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Daftar SD · PPDB Yasinta Nabawan" }] })
});
var $$splitComponentImporter$3 = () => import("./smp-CsC3CycV.mjs");
var Route$3 = createFileRoute("/ppdb/smp")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Daftar SMP · PPDB Yasinta Nabawan" }] })
});
var $$splitComponentImporter$2 = () => import("./status-Uf_DuvOb.mjs");
var Route$2 = createFileRoute("/ppdb/status")({
	ssr: false,
	validateSearch: (s) => ({ id: typeof s.id === "string" ? s.id : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Status Pendaftaran · PPDB" }] })
});
var $$splitComponentImporter$1 = () => import("./ppdb-DgvhZL2y.mjs");
var Route$1 = createFileRoute("/admin/ppdb/")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "PPDB Admin" }] })
});
var $$splitComponentImporter = () => import("../_id-DTizwOnk.mjs");
var Route = createFileRoute("/admin/ppdb/$id")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => ({ meta: [{ title: `${params.id} · PPDB` }] })
});
var IndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var AboutRoute = Route$17.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$19
});
var GaleriRoute = Route$16.update({
	id: "/galeri",
	path: "/galeri",
	getParentRoute: () => Route$19
});
var KegiatanRoute = Route$15.update({
	id: "/kegiatan",
	path: "/kegiatan",
	getParentRoute: () => Route$19
});
var KontakRoute = Route$14.update({
	id: "/kontak",
	path: "/kontak",
	getParentRoute: () => Route$19
});
var SdRoute = Route$13.update({
	id: "/sd",
	path: "/sd",
	getParentRoute: () => Route$19
});
var SmpRoute = Route$12.update({
	id: "/smp",
	path: "/smp",
	getParentRoute: () => Route$19
});
var AdminIndexRoute = Route$11.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => Route$19
});
var AdminGalleryRoute = Route$10.update({
	id: "/admin/gallery",
	path: "/admin/gallery",
	getParentRoute: () => Route$19
});
var AdminLoginRoute = Route$9.update({
	id: "/admin/login",
	path: "/admin/login",
	getParentRoute: () => Route$19
});
var AdminNewsRoute = Route$8.update({
	id: "/admin/news",
	path: "/admin/news",
	getParentRoute: () => Route$19
});
var BeritaIndexRoute = Route$7.update({
	id: "/berita/",
	path: "/berita/",
	getParentRoute: () => Route$19
});
var BeritaSlugRoute = Route$6.update({
	id: "/berita/$slug",
	path: "/berita/$slug",
	getParentRoute: () => Route$19
});
var PpdbIndexRoute = Route$5.update({
	id: "/ppdb/",
	path: "/ppdb/",
	getParentRoute: () => Route$19
});
var PpdbSdRoute = Route$4.update({
	id: "/ppdb/sd",
	path: "/ppdb/sd",
	getParentRoute: () => Route$19
});
var PpdbSmpRoute = Route$3.update({
	id: "/ppdb/smp",
	path: "/ppdb/smp",
	getParentRoute: () => Route$19
});
var PpdbStatusRoute = Route$2.update({
	id: "/ppdb/status",
	path: "/ppdb/status",
	getParentRoute: () => Route$19
});
var AdminPpdbIndexRoute = Route$1.update({
	id: "/admin/ppdb/",
	path: "/admin/ppdb/",
	getParentRoute: () => Route$19
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	GaleriRoute,
	KegiatanRoute,
	KontakRoute,
	SdRoute,
	SmpRoute,
	AdminGalleryRoute,
	AdminLoginRoute,
	AdminNewsRoute,
	BeritaSlugRoute,
	PpdbSdRoute,
	PpdbSmpRoute,
	PpdbStatusRoute,
	AdminIndexRoute,
	BeritaIndexRoute,
	PpdbIndexRoute,
	AdminPpdbIdRoute: Route.update({
		id: "/admin/ppdb/$id",
		path: "/admin/ppdb/$id",
		getParentRoute: () => Route$19
	}),
	AdminPpdbIndexRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { BANK as a, FOOTER_NAV as c, RELIGIONS as d, SOCIAL as f, Route$6 as i, NAV_PUBLIC as l, Route as n, CONTACT as o, STORAGE_KEYS as p, Route$2 as r, DEMO_ADMIN as s, router_exports as t, PPDB_YEAR as u };
