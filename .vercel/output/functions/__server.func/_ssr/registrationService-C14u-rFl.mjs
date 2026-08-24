import { p as STORAGE_KEYS, u as PPDB_YEAR } from "./router-yia4NVan.mjs";
import { a as padReg } from "./LogoMark-Cf1GSumj.mjs";
import { r as writeJSON, t as readJSON } from "./storage-B1pSBwjl.mjs";
import { i as emptyStudent, l as seedRegistrations, n as emptyParent, r as emptyPrevious } from "./mock-data-C2o-IRtg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/registrationService-C14u-rFl.js
function draftKey(unit) {
	return unit === "SD" ? STORAGE_KEYS.draftSd : STORAGE_KEYS.draftSmp;
}
function ensureSeeded() {
	const existing = readJSON(STORAGE_KEYS.registrations, null);
	if (existing) return existing;
	writeJSON(STORAGE_KEYS.registrations, seedRegistrations);
	return seedRegistrations;
}
function listRegistrations() {
	return ensureSeeded();
}
function getRegistration(id) {
	return listRegistrations().find((r) => r.id.toLowerCase() === id.toLowerCase());
}
function emptyDraft(unit) {
	return {
		unit,
		step: 0,
		student: { ...emptyStudent },
		parent: { ...emptyParent },
		previousSchool: { ...emptyPrevious },
		documents: [],
		payment: {
			method: "",
			status: "belum_bayar"
		}
	};
}
function loadDraft(unit) {
	return readJSON(draftKey(unit), emptyDraft(unit));
}
function saveDraft(draft) {
	writeJSON(draftKey(draft.unit), draft);
}
function clearDraft(unit) {
	writeJSON(draftKey(unit), emptyDraft(unit));
}
function nextId(unit, all) {
	const prefix = `PPDB-${unit}-${PPDB_YEAR}-`;
	const nums = all.filter((r) => r.id.startsWith(prefix)).map((r) => Number(r.id.replace(prefix, ""))).filter((n) => Number.isFinite(n));
	const next = (nums.length ? Math.max(...nums) : 0) + 1;
	return `${prefix}${padReg(next)}`;
}
function submitDraft(draft) {
	const all = listRegistrations();
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const payment = {
		...draft.payment,
		status: draft.payment.method === "cash" ? "tunai_menunggu" : draft.payment.proof ? "menunggu_verifikasi" : "belum_bayar"
	};
	const record = {
		id: nextId(draft.unit, all),
		unit: draft.unit,
		createdAt: now,
		updatedAt: now,
		student: draft.student,
		parent: draft.parent,
		previousSchool: draft.previousSchool,
		documents: draft.documents,
		payment,
		status: "menunggu_verifikasi"
	};
	writeJSON(STORAGE_KEYS.registrations, [record, ...all]);
	clearDraft(draft.unit);
	return record;
}
function updateRegistration(id, patch) {
	const all = listRegistrations();
	const idx = all.findIndex((r) => r.id === id);
	if (idx < 0) return void 0;
	const current = all[idx];
	const next = {
		...current,
		...patch,
		payment: patch.payment ? {
			...current.payment,
			...patch.payment
		} : current.payment,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	const copy = [...all];
	copy[idx] = next;
	writeJSON(STORAGE_KEYS.registrations, copy);
	return next;
}
function statsFrom(list) {
	const count = (pred) => list.filter(pred).length;
	return {
		total: list.length,
		sd: count((r) => r.unit === "SD"),
		smp: count((r) => r.unit === "SMP"),
		menungguVerifikasi: count((r) => r.status === "menunggu_verifikasi"),
		terverifikasi: count((r) => r.status === "diverifikasi"),
		menungguPembayaran: count((r) => r.payment.status === "belum_bayar" || r.payment.status === "menunggu_verifikasi" || r.payment.status === "tunai_menunggu"),
		selesai: count((r) => r.status === "selesai")
	};
}
var STATUS_LABEL = {
	menunggu_verifikasi: "Menunggu Verifikasi",
	diverifikasi: "Diverifikasi",
	ditolak: "Ditolak",
	selesai: "Selesai"
};
var PAYMENT_LABEL = {
	belum_bayar: "Belum Bayar",
	menunggu_verifikasi: "Menunggu Verifikasi",
	lunas: "Lunas",
	tunai_menunggu: "Menunggu Pembayaran Tunai"
};
function whatsappConfirmUrl(reg) {
	const phone = "60000000000";
	const text = [
		"Halo Admin Yasinta Nabawan Education,",
		"Saya ingin mengonfirmasi pendaftaran siswa baru.",
		`Nama calon siswa: ${reg.student.fullName}`,
		`Jenjang: ${reg.unit}`,
		`Nomor pendaftaran: ${reg.id}`,
		"Terima kasih."
	].join("\n");
	return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
var REG_STEPS = [
	"Data Siswa",
	"Data Orang Tua",
	"Asal Sekolah",
	"Dokumen",
	"Pembayaran",
	"Tinjau"
];
//#endregion
export { getRegistration as a, saveDraft as c, updateRegistration as d, whatsappConfirmUrl as f, emptyDraft as i, statsFrom as l, REG_STEPS as n, listRegistrations as o, STATUS_LABEL as r, loadDraft as s, PAYMENT_LABEL as t, submitDraft as u };
