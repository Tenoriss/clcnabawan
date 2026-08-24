import { PPDB_YEAR, STORAGE_KEYS } from "@/lib/config";
import {
  emptyParent,
  emptyPrevious,
  emptyStudent,
  seedRegistrations,
} from "@/lib/mock-data";
import type {
  ParentData,
  PreviousSchoolData,
  Registration,
  RegistrationStatus,
  SchoolUnit,
  StudentData,
  UploadedDoc,
  PaymentInfo,
} from "@/lib/types";
import { padReg } from "@/lib/utils";
import { readJSON, writeJSON } from "./storage";

export interface RegistrationDraft {
  unit: SchoolUnit;
  step: number;
  student: StudentData;
  parent: ParentData;
  previousSchool: PreviousSchoolData;
  documents: UploadedDoc[];
  payment: PaymentInfo;
}

function draftKey(unit: SchoolUnit) {
  return unit === "SD" ? STORAGE_KEYS.draftSd : STORAGE_KEYS.draftSmp;
}

function ensureSeeded() {
  const existing = readJSON<Registration[] | null>(STORAGE_KEYS.registrations, null);
  if (existing) return existing;
  writeJSON(STORAGE_KEYS.registrations, seedRegistrations);
  return seedRegistrations;
}

export function listRegistrations(): Registration[] {
  return ensureSeeded();
}

export function getRegistration(id: string): Registration | undefined {
  return listRegistrations().find((r) => r.id.toLowerCase() === id.toLowerCase());
}

export function emptyDraft(unit: SchoolUnit): RegistrationDraft {
  return {
    unit,
    step: 0,
    student: { ...emptyStudent },
    parent: { ...emptyParent },
    previousSchool: { ...emptyPrevious },
    documents: [],
    payment: { method: "", status: "belum_bayar" },
  };
}

export function loadDraft(unit: SchoolUnit): RegistrationDraft {
  return readJSON(draftKey(unit), emptyDraft(unit));
}

export function saveDraft(draft: RegistrationDraft) {
  writeJSON(draftKey(draft.unit), draft);
}

export function clearDraft(unit: SchoolUnit) {
  writeJSON(draftKey(unit), emptyDraft(unit));
}

function nextId(unit: SchoolUnit, all: Registration[]) {
  const prefix = `PPDB-${unit}-${PPDB_YEAR}-`;
  const nums = all
    .filter((r) => r.id.startsWith(prefix))
    .map((r) => Number(r.id.replace(prefix, "")))
    .filter((n) => Number.isFinite(n));
  const next = (nums.length ? Math.max(...nums) : 0) + 1;
  return `${prefix}${padReg(next)}`;
}

export function submitDraft(draft: RegistrationDraft): Registration {
  const all = listRegistrations();
  const now = new Date().toISOString();
  const payment: PaymentInfo = {
    ...draft.payment,
    status:
      draft.payment.method === "cash"
        ? "tunai_menunggu"
        : draft.payment.proof
          ? "menunggu_verifikasi"
          : "belum_bayar",
  };
  const record: Registration = {
    id: nextId(draft.unit, all),
    unit: draft.unit,
    createdAt: now,
    updatedAt: now,
    student: draft.student,
    parent: draft.parent,
    previousSchool: draft.previousSchool,
    documents: draft.documents,
    payment,
    status: "menunggu_verifikasi",
  };
  writeJSON(STORAGE_KEYS.registrations, [record, ...all]);
  clearDraft(draft.unit);
  return record;
}

export function updateRegistration(
  id: string,
  patch: Partial<Pick<Registration, "status" | "payment">>,
): Registration | undefined {
  const all = listRegistrations();
  const idx = all.findIndex((r) => r.id === id);
  if (idx < 0) return undefined;
  const current = all[idx];
  const next: Registration = {
    ...current,
    ...patch,
    payment: patch.payment ? { ...current.payment, ...patch.payment } : current.payment,
    updatedAt: new Date().toISOString(),
  };
  const copy = [...all];
  copy[idx] = next;
  writeJSON(STORAGE_KEYS.registrations, copy);
  return next;
}

export function statsFrom(list: Registration[]) {
  const count = (pred: (r: Registration) => boolean) => list.filter(pred).length;
  return {
    total: list.length,
    sd: count((r) => r.unit === "SD"),
    smp: count((r) => r.unit === "SMP"),
    menungguVerifikasi: count((r) => r.status === "menunggu_verifikasi"),
    terverifikasi: count((r) => r.status === "diverifikasi"),
    menungguPembayaran: count(
      (r) =>
        r.payment.status === "belum_bayar" ||
        r.payment.status === "menunggu_verifikasi" ||
        r.payment.status === "tunai_menunggu",
    ),
    selesai: count((r) => r.status === "selesai"),
  };
}

export const STATUS_LABEL: Record<RegistrationStatus, string> = {
  menunggu_verifikasi: "Menunggu Verifikasi",
  diverifikasi: "Diverifikasi",
  ditolak: "Ditolak",
  selesai: "Selesai",
};

export const PAYMENT_LABEL: Record<PaymentInfo["status"], string> = {
  belum_bayar: "Belum Bayar",
  menunggu_verifikasi: "Menunggu Verifikasi",
  lunas: "Lunas",
  tunai_menunggu: "Menunggu Pembayaran Tunai",
};

export function whatsappConfirmUrl(reg: Registration) {
  const phone = "60000000000";
  const text = [
    "Halo Admin Yasinta Nabawan Education,",
    "Saya ingin mengonfirmasi pendaftaran siswa baru.",
    `Nama calon siswa: ${reg.student.fullName}`,
    `Jenjang: ${reg.unit}`,
    `Nomor pendaftaran: ${reg.id}`,
    "Terima kasih.",
  ].join("\n");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const REG_STEPS = [
  "Data Siswa",
  "Data Orang Tua",
  "Asal Sekolah",
  "Dokumen",
  "Pembayaran",
  "Tinjau",
] as const;
