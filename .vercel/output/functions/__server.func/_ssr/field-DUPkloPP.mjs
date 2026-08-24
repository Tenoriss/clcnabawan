import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./LogoMark-Cf1GSumj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/field-DUPkloPP.js
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "w-full min-h-11 rounded-xl bg-paper px-3.5 text-[16px] text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_14%,transparent)] outline-none transition-[box-shadow] duration-150 placeholder:text-stone focus:shadow-[0_0_0_2px_var(--color-gold)]";
function FieldLabel({ htmlFor, children, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor,
		className: "mb-1.5 block text-sm font-medium text-foreground",
		children: [children, hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "ml-1 font-normal text-muted",
			children: [
				"(",
				hint,
				")"
			]
		}) : null]
	});
}
function FieldError({ children }) {
	if (!children) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm text-red-800",
		role: "alert",
		children
	});
}
function TextField({ label, hint, error, id, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
			htmlFor: id,
			hint,
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			className: cn(fieldClass, className),
			...props
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: error })
	] });
}
function TextAreaField({ label, error, id, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
			htmlFor: id,
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			id,
			className: cn(fieldClass, "min-h-28 py-3", className),
			...props
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: error })
	] });
}
function SelectField({ label, error, id, children, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
			htmlFor: id,
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			id,
			className: cn(fieldClass, className),
			...props,
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: error })
	] });
}
//#endregion
export { TextAreaField as n, TextField as r, SelectField as t };
