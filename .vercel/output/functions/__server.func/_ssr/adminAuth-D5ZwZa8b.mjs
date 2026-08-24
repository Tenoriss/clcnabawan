import { p as STORAGE_KEYS, s as DEMO_ADMIN } from "./router-yia4NVan.mjs";
import { n as removeKey, r as writeJSON, t as readJSON } from "./storage-B1pSBwjl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/adminAuth-D5ZwZa8b.js
function getAdminSession() {
	return readJSON(STORAGE_KEYS.adminSession, null);
}
function loginAdmin(email, password) {
	if (email.trim().toLowerCase() === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
		writeJSON(STORAGE_KEYS.adminSession, {
			email: DEMO_ADMIN.email,
			name: DEMO_ADMIN.name
		});
		return { ok: true };
	}
	return {
		ok: false,
		error: "Email atau kata sandi tidak sesuai."
	};
}
function logoutAdmin() {
	removeKey(STORAGE_KEYS.adminSession);
}
//#endregion
export { loginAdmin as n, logoutAdmin as r, getAdminSession as t };
