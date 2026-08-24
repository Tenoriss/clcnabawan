export type SchoolUnit = "SD" | "SMP";

export type RegistrationStatus =
  | "menunggu_verifikasi"
  | "diverifikasi"
  | "ditolak"
  | "selesai";

export type PaymentStatus =
  | "belum_bayar"
  | "menunggu_verifikasi"
  | "lunas"
  | "tunai_menunggu";

export type PaymentMethod = "transfer" | "cash";

export type Gender = "L" | "P";

export type NewsCategory =
  | "PPDB"
  | "Pembelajaran"
  | "Kegiatan"
  | "Prestasi"
  | "Pengumuman";

export type ActivityCategory =
  | "Pembelajaran"
  | "Kegiatan Sekolah"
  | "Ekstrakurikuler"
  | "Perayaan"
  | "Sosial"
  | "Prestasi";

export type GalleryCategory = "SD" | "SMP" | "Kegiatan" | "Pembelajaran" | "Sekolah";

export interface StudentData {
  fullName: string;
  nik: string;
  nisn: string;
  birthPlace: string;
  birthDate: string;
  gender: Gender | "";
  religion: string;
  address: string;
  village: string;
  district: string;
  regency: string;
  whatsapp: string;
}

export interface ParentData {
  fatherName: string;
  motherName: string;
  guardianName: string;
  whatsapp: string;
  fatherJob: string;
  motherJob: string;
  address: string;
}

export interface PreviousSchoolData {
  name: string;
  year: string;
  notes: string;
}

export interface UploadedDoc {
  id: string;
  kind: "kk" | "akta" | "ijazah" | "lainnya" | "bukti_bayar";
  name: string;
  size: number;
  type: string;
  status: "ready" | "pending";
}

export interface PaymentInfo {
  method: PaymentMethod | "";
  status: PaymentStatus;
  proof?: UploadedDoc;
}

export interface Registration {
  id: string;
  unit: SchoolUnit;
  createdAt: string;
  updatedAt: string;
  student: StudentData;
  parent: ParentData;
  previousSchool: PreviousSchoolData;
  documents: UploadedDoc[];
  payment: PaymentInfo;
  status: RegistrationStatus;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: NewsCategory;
  date: string;
  image: string;
  unit?: SchoolUnit | "ALL";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  caption?: string;
}

export interface TeacherRole {
  id: string;
  role: string;
  unit: SchoolUnit | "ALL";
  note: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: ActivityCategory;
  unit: SchoolUnit | "ALL";
  excerpt: string;
  image: string;
  date: string;
}

export interface SchoolProfile {
  unit: SchoolUnit;
  shortName: string;
  fullName: string;
  levelId: string;
  levelEn: string;
  tagline: string;
  description: string;
  vision: string;
  missions: string[];
  facilities: { title: string; detail: string }[];
  href: "/sd" | "/smp";
  ppdbHref: "/ppdb/sd" | "/ppdb/smp";
  heroImage: string;
  youtube: { label: string; href: string };
}

export interface AdminUser {
  email: string;
  name: string;
}
