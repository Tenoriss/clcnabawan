import { p as STORAGE_KEYS } from "./router-yia4NVan.mjs";
import { r as writeJSON, t as readJSON } from "./storage-B1pSBwjl.mjs";
import { c as seedNews } from "./mock-data-C2o-IRtg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/newsService-C3cduh5J.js
function all() {
	const stored = readJSON(STORAGE_KEYS.news, null);
	if (stored) return stored;
	writeJSON(STORAGE_KEYS.news, seedNews);
	return seedNews;
}
function persist(items) {
	writeJSON(STORAGE_KEYS.news, items);
}
function listNews() {
	return [...all()].sort((a, b) => a.date < b.date ? 1 : -1);
}
function getNewsBySlug(slug) {
	return all().find((n) => n.slug === slug);
}
function saveNews(item) {
	const items = all();
	const idx = items.findIndex((n) => n.id === item.id);
	if (idx >= 0) {
		const next = [...items];
		next[idx] = item;
		persist(next);
	} else persist([item, ...items]);
}
function deleteNews(id) {
	persist(all().filter((n) => n.id !== id));
}
function slugify(title) {
	return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 72) || `berita-${Date.now()}`;
}
//#endregion
export { slugify as a, saveNews as i, getNewsBySlug as n, listNews as r, deleteNews as t };
