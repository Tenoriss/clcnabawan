import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as DEMO_ADMIN } from "./router-yia4NVan.mjs";
import { t as LogoMark } from "./LogoMark-Cf1GSumj.mjs";
import { n as loginAdmin, t as getAdminSession } from "./adminAuth-D5ZwZa8b.mjs";
import { r as TextField } from "./field-DUPkloPP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BWUH4gKK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)(DEMO_ADMIN.email);
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (getAdminSession()) navigate({ to: "/admin" });
	}, [navigate]);
	const onSubmit = (e) => {
		e.preventDefault();
		const res = loginAdmin(email, password);
		if (!res.ok) {
			setError(res.error);
			return;
		}
		navigate({ to: "/admin" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-navy px-4 text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "w-full max-w-sm rounded-xl bg-paper p-6 text-foreground md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "size-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display font-semibold tracking-tight",
						children: "YASINTA NABAWAN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] tracking-[0.18em] text-muted",
						children: "ADMIN DEMO"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 rounded-md bg-cream px-3 py-2 text-xs leading-relaxed text-muted",
					children: [
						"Kredensial demo saja — bukan akun resmi sekolah.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Email: ",
						DEMO_ADMIN.email,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Kata sandi: ",
						DEMO_ADMIN.password
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "email",
							label: "Email",
							type: "email",
							autoComplete: "username",
							value: email,
							onChange: (e) => setEmail(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "password",
							label: "Kata sandi",
							type: "password",
							autoComplete: "current-password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-1 inline-flex h-12 items-center justify-center rounded-full bg-navy text-sm font-semibold text-paper",
							children: "Masuk"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-5 block text-center text-sm text-muted",
					children: "Kembali ke situs"
				})
			]
		})
	});
}
//#endregion
export { AdminLogin as component };
