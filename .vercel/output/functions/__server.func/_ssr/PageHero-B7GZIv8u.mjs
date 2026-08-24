import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./LogoMark-Cf1GSumj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-B7GZIv8u.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, subtitle, image, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative flex items-end overflow-hidden bg-navy text-paper", compact ? "min-h-[48vh] pt-28 pb-10" : "min-h-[70vh] pt-32 pb-14"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover",
				style: { outline: "none" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 container-page",
				children: [
					eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: eyebrow
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-4xl font-display text-4xl font-medium tracking-tight md:text-6xl",
						children: title
					}),
					subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base text-paper/75 md:text-lg",
						children: subtitle
					}) : null
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
