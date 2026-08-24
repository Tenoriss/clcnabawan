//#region node_modules/.nitro/vite/services/ssr/assets/storage-B1pSBwjl.js
function canUseStorage() {
	return typeof window !== "undefined";
}
function readJSON(key, fallback) {
	if (!canUseStorage()) return fallback;
	try {
		const raw = window.localStorage.getItem(key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function writeJSON(key, value) {
	if (!canUseStorage()) return;
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function removeKey(key) {
	if (!canUseStorage()) return;
	window.localStorage.removeItem(key);
}
//#endregion
export { removeKey as n, writeJSON as r, readJSON as t };
