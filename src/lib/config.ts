export function unitLabel(unit: "SD" | "SMP") {
  return unit === "SD" ? "SD" : "SMPT";
}

export const APP_NAME = "Yasinta Nabawan Education";
export const APP_TAGLINE = "Growing Together, Learning for Tomorrow";
export const PPDB_YEAR = 2026;

export const CONTACT = {
  whatsapp: "+60000000000",
  whatsappDisplay: "+60 00-0000-0000 (placeholder)",
  email: "admin@yasintanabawan.edu",
  address: "Nabawan, Sabah, Malaysia",
  note: "Nomor WhatsApp di atas adalah placeholder prototipe — bukan nomor resmi sekolah.",
};

export const SOCIAL = [
  {
    id: "ig-smp",
    network: "Instagram",
    label: "Instagram CLC SMPT Nabawan",
    href: "https://www.instagram.com/clcsmptnabawan/",
    unit: "SMP" as const,
  },
  {
    id: "yt-smp",
    network: "YouTube",
    label: "YouTube CLC SMPT Nabawan",
    href: "https://www.youtube.com/@clcnabawan4145",
    unit: "SMP" as const,
  },
  {
    id: "yt-sd",
    network: "YouTube",
    label: "YouTube SDK St. Fransisco Yasinta Nabawan",
    href: "https://www.youtube.com/@clcfransiskoyasinta2332",
    unit: "SD" as const,
  },
] as const;

export const BANK = {
  name: "Maybank (contoh)",
  account: "0000-0000-0000",
  holder: "YASINTA NABAWAN EDUCATION",
  feeLabel: "RM 30",
  feeNote:
    "Nilai biaya dan rekening di atas adalah data contoh untuk prototipe. Sekolah akan mengonfirmasi rekening resmi melalui WhatsApp.",
};

export const DEMO_ADMIN = {
  email: "admin@yasintanabawan.edu",
  password: "admin123",
  name: "Admin Portal",
};

export const NAV_PUBLIC = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sd", label: "SD" },
  { to: "/smp", label: "SMP" },
  { to: "/kegiatan", label: "Activities" },
  { to: "/ppdb", label: "PPDB" },
  { to: "/kontak", label: "Contact" },
] as const;

export const FOOTER_NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sd", label: "SD" },
  { to: "/smp", label: "SMP" },
  { to: "/kegiatan", label: "Activities" },
  { to: "/berita", label: "News" },
  { to: "/galeri", label: "Gallery" },
  { to: "/ppdb", label: "PPDB" },
  { to: "/kontak", label: "Contact" },
] as const;

export const RELIGIONS = [
  "Islam",
  "Kristen",
  "Katolik",
  "Hindu",
  "Buddha",
  "Konghucu",
  "Lainnya",
] as const;

export const STORAGE_KEYS = {
  registrations: "yne.registrations.v1",
  news: "yne.news.v1",
  gallery: "yne.gallery.v1",
  adminSession: "yne.admin.session.v1",
  draftSd: "yne.ppdb.draft.SD",
  draftSmp: "yne.ppdb.draft.SMP",
  newsSeeded: "yne.news.seeded",
  gallerySeeded: "yne.gallery.seeded",
  regSeeded: "yne.reg.seeded",
} as const;
