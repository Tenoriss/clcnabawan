import { DEMO_ADMIN, STORAGE_KEYS } from "@/lib/config";
import type { AdminUser } from "@/lib/types";
import { readJSON, removeKey, writeJSON } from "./storage";

export function getAdminSession(): AdminUser | null {
  return readJSON<AdminUser | null>(STORAGE_KEYS.adminSession, null);
}

export function loginAdmin(email: string, password: string): { ok: true } | { ok: false; error: string } {
  if (
    email.trim().toLowerCase() === DEMO_ADMIN.email &&
    password === DEMO_ADMIN.password
  ) {
    writeJSON<AdminUser>(STORAGE_KEYS.adminSession, {
      email: DEMO_ADMIN.email,
      name: DEMO_ADMIN.name,
    });
    return { ok: true };
  }
  return { ok: false, error: "Email atau kata sandi tidak sesuai." };
}

export function logoutAdmin() {
  removeKey(STORAGE_KEYS.adminSession);
}
