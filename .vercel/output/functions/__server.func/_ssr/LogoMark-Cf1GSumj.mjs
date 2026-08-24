import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LogoMark-Cf1GSumj.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatDate(iso, locale = "id-ID") {
	try {
		return new Intl.DateTimeFormat(locale, {
			day: "numeric",
			month: "long",
			year: "numeric"
		}).format(new Date(iso));
	} catch {
		return iso;
	}
}
function formatBytes(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / 1048576).toFixed(1)} MB`;
}
function padReg(n) {
	return String(n).padStart(4, "0");
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo.png",
		alt: "",
		width: 44,
		height: 44,
		className: cn("object-contain", className),
		style: { outline: "none" }
	});
}
//#endregion
export { padReg as a, formatDate as i, cn as n, formatBytes as r, LogoMark as t };
