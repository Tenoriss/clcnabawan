import { p as STORAGE_KEYS } from "./router-yia4NVan.mjs";
import { r as writeJSON, t as readJSON } from "./storage-B1pSBwjl.mjs";
import { s as seedGallery } from "./mock-data-C2o-IRtg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/galleryService-TcCx-Zju.js
function all() {
	const stored = readJSON(STORAGE_KEYS.gallery, null);
	if (stored) return stored;
	writeJSON(STORAGE_KEYS.gallery, seedGallery);
	return seedGallery;
}
function listGallery() {
	return all();
}
function addGalleryItem(item) {
	writeJSON(STORAGE_KEYS.gallery, [item, ...all()]);
}
function deleteGalleryItem(id) {
	writeJSON(STORAGE_KEYS.gallery, all().filter((g) => g.id !== id));
}
//#endregion
export { deleteGalleryItem as n, listGallery as r, addGalleryItem as t };
