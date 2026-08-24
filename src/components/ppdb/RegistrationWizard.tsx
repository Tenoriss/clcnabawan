import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, FileUp, Trash2 } from "lucide-react";
import { BANK, RELIGIONS, unitLabel } from "@/lib/config";
import { schools } from "@/lib/mock-data";
import {
  REG_STEPS,
  emptyDraft,
  loadDraft,
  saveDraft,
  submitDraft,
  whatsappConfirmUrl,
  type RegistrationDraft,
} from "@/lib/services/registrationService";
import type { Registration, SchoolUnit, UploadedDoc } from "@/lib/types";
import { useHydrated } from "@/lib/hooks";
import { formatBytes } from "@/lib/utils";
import { SelectField, TextAreaField, TextField } from "@/components/ui/field";
import { SiteShell } from "@/components/layout/SiteShell";

function onFiles(files: FileList | null, kind: UploadedDoc["kind"]): UploadedDoc[] {
  if (!files) return [];
  return Array.from(files).map((f) => ({
    id: `${kind}-${f.name}-${f.size}-${Date.now()}`,
    kind,
    name: f.name,
    size: f.size,
    type: f.type || "application/octet-stream",
    status: "ready" as const,
  }));
}

export function RegistrationWizard({ unit }: { unit: SchoolUnit }) {
  const hydrated = useHydrated();
  const school = schools[unit];
  const [draft, setDraft] = useState<RegistrationDraft>(() => emptyDraft(unit));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Registration | null>(null);

  useEffect(() => {
    if (!hydrated) return;
    setDraft(loadDraft(unit));
  }, [hydrated, unit]);

  const update = (patch: Partial<RegistrationDraft>) => {
    setDraft((d) => {
      const next = { ...d, ...patch, unit };
      saveDraft(next);
      return next;
    });
  };

  const step = Math.min(draft.step, REG_STEPS.length - 1);

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 0) {
      if (!draft.student.fullName.trim()) e.fullName = "Wajib diisi";
      if (!draft.student.whatsapp.trim()) e.whatsapp = "Nomor WhatsApp wajib";
      if (!draft.student.birthDate) e.birthDate = "Wajib diisi";
      if (!draft.student.gender) e.gender = "Pilih jenis kelamin";
    }
    if (step === 1) {
      if (
        !draft.parent.motherName.trim() &&
        !draft.parent.fatherName.trim() &&
        !draft.parent.guardianName.trim()
      ) {
        e.parent = "Isi minimal nama ayah, ibu, atau wali";
      }
      if (!draft.parent.whatsapp.trim()) e.pwa = "WhatsApp orang tua/wali wajib";
    }
    if (step === 4) {
      if (!draft.payment.method) e.pay = "Pilih metode pembayaran";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    update({ step: Math.min(step + 1, REG_STEPS.length - 1) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    update({ step: Math.max(step - 1, 0) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = () => {
    if (!validate()) return;
    const rec = submitDraft(draft);
    setResult(rec);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevLabel = unit === "SD" ? "Asal TK/RA" : "Asal SD/MI";
  const progress = ((step + 1) / REG_STEPS.length) * 100;
  const label = unitLabel(unit);

  if (result) {
    return (
      <SiteShell hideChat>
        <section className="bg-navy pt-[calc(5.5rem+env(safe-area-inset-top))] pb-10 text-paper">
          <div className="container-page max-w-xl">
            <p className="eyebrow text-gold">Formulir {label}</p>
            <h1 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
              Pendaftaran Berhasil
            </h1>
            <p className="mt-2 text-sm text-paper/70">Simpan nomor pendaftaran Anda.</p>
          </div>
        </section>
        <section className="container-page max-w-xl py-12">
          <div className="rounded-xl bg-cream p-6 md:p-8">
            <p className="eyebrow text-teal">Nomor pendaftaran</p>
            <p className="mt-2 font-display text-2xl font-medium tracking-tight">{result.id}</p>
            <dl className="mt-6 grid gap-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Nama</dt>
                <dd className="font-medium">{result.student.fullName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Jenjang</dt>
                <dd className="font-medium">{label}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Sekolah</dt>
                <dd className="text-right font-medium">{school.fullName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Status</dt>
                <dd className="font-medium">Menunggu Verifikasi</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Pembayaran</dt>
                <dd className="font-medium">
                  {result.payment.method === "cash"
                    ? "Menunggu Pembayaran Tunai"
                    : "Menunggu Verifikasi"}
                </dd>
              </div>
            </dl>
            <a
              href={whatsappConfirmUrl(result)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy"
            >
              Konfirmasi via WhatsApp
            </a>
            <Link
              to="/ppdb/status"
              search={{ id: result.id }}
              className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full bg-navy text-sm font-medium text-paper"
            >
              Cek status pendaftaran
            </Link>
          </div>
        </section>
      </SiteShell>
    );
  }

  return (
    <SiteShell hideChat>
      <section className="bg-navy pt-[calc(5.5rem+env(safe-area-inset-top))] pb-6 text-paper md:pt-28">
        <div className="container-page max-w-xl">
          <p className="eyebrow text-gold">Formulir PPDB 2026</p>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
            Formulir Pendaftaran {label}
          </h1>
          <p className="mt-2 text-sm text-paper/75">{school.fullName}</p>
          <p className="mt-1 text-xs text-paper/55">
            Data tersimpan otomatis di perangkat ini sampai dikirim.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2" role="tablist" aria-label="Pilih jenjang">
            <Link
              to="/ppdb/sd"
              className={
                unit === "SD"
                  ? "inline-flex h-12 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy"
                  : "inline-flex h-12 items-center justify-center rounded-full bg-paper/10 text-sm font-medium text-paper"
              }
            >
              Formulir SD
            </Link>
            <Link
              to="/ppdb/smp"
              className={
                unit === "SMP"
                  ? "inline-flex h-12 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy"
                  : "inline-flex h-12 items-center justify-center rounded-full bg-paper/10 text-sm font-medium text-paper"
              }
            >
              Formulir SMPT
            </Link>
          </div>
        </div>
      </section>

      <div className="sticky top-[calc(4.15rem+env(safe-area-inset-top))] z-30 bg-paper/90 py-3 backdrop-blur-md">
        <div className="container-page">
          <div className="mb-2 flex items-center justify-between text-xs text-muted">
            <span>
              Langkah {step + 1} / {REG_STEPS.length}
            </span>
            <span>{REG_STEPS[step]}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-cream">
            <div className="h-full rounded-full bg-gold" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <section className="container-page max-w-xl py-8 pb-[max(8rem,env(safe-area-inset-bottom)+6rem)]">
        {step === 0 ? (
          <div className="grid gap-4">
            <div>
              <h2 className="font-display text-xl font-medium">Data calon siswa {label}</h2>
              <p className="mt-1 text-sm text-muted">
                {unit === "SD"
                  ? "Formulir SDK St. Fransisco Yasinta Nabawan (Sekolah Dasar)."
                  : "Formulir CLC SMPT Nabawan (Sekolah Menengah Pertama)."}
              </p>
            </div>
            <TextField
              id="fullName"
              label="Nama Lengkap"
              value={draft.student.fullName}
              error={errors.fullName}
              autoComplete="name"
              onChange={(e) => update({ student: { ...draft.student, fullName: e.target.value } })}
            />
            <TextField
              id="nik"
              label="NIK"
              inputMode="numeric"
              value={draft.student.nik}
              onChange={(e) => update({ student: { ...draft.student, nik: e.target.value } })}
            />
            <TextField
              id="nisn"
              label="NISN"
              hint="jika ada"
              value={draft.student.nisn}
              onChange={(e) => update({ student: { ...draft.student, nisn: e.target.value } })}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField
                id="birthPlace"
                label="Tempat Lahir"
                value={draft.student.birthPlace}
                onChange={(e) =>
                  update({ student: { ...draft.student, birthPlace: e.target.value } })
                }
              />
              <TextField
                id="birthDate"
                label="Tanggal Lahir"
                type="date"
                value={draft.student.birthDate}
                error={errors.birthDate}
                onChange={(e) =>
                  update({ student: { ...draft.student, birthDate: e.target.value } })
                }
              />
            </div>
            <SelectField
              id="gender"
              label="Jenis Kelamin"
              value={draft.student.gender}
              error={errors.gender}
              onChange={(e) =>
                update({ student: { ...draft.student, gender: e.target.value as "L" | "P" | "" } })
              }
            >
              <option value="">Pilih</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </SelectField>
            <SelectField
              id="religion"
              label="Agama"
              value={draft.student.religion}
              onChange={(e) => update({ student: { ...draft.student, religion: e.target.value } })}
            >
              <option value="">Pilih</option>
              {RELIGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </SelectField>
            <TextAreaField
              id="address"
              label="Alamat"
              value={draft.student.address}
              onChange={(e) => update({ student: { ...draft.student, address: e.target.value } })}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <TextField
                id="village"
                label="Desa"
                value={draft.student.village}
                onChange={(e) => update({ student: { ...draft.student, village: e.target.value } })}
              />
              <TextField
                id="district"
                label="Kecamatan"
                value={draft.student.district}
                onChange={(e) => update({ student: { ...draft.student, district: e.target.value } })}
              />
              <TextField
                id="regency"
                label="Kabupaten"
                value={draft.student.regency}
                onChange={(e) => update({ student: { ...draft.student, regency: e.target.value } })}
              />
            </div>
            <TextField
              id="wa"
              label="Nomor WhatsApp"
              inputMode="tel"
              value={draft.student.whatsapp}
              error={errors.whatsapp}
              onChange={(e) => update({ student: { ...draft.student, whatsapp: e.target.value } })}
            />
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-4">
            <h2 className="font-display text-xl font-medium">Data orang tua / wali</h2>
            {errors.parent ? <p className="text-sm text-red-800">{errors.parent}</p> : null}
            <TextField
              id="father"
              label="Nama Ayah"
              value={draft.parent.fatherName}
              onChange={(e) => update({ parent: { ...draft.parent, fatherName: e.target.value } })}
            />
            <TextField
              id="mother"
              label="Nama Ibu"
              value={draft.parent.motherName}
              onChange={(e) => update({ parent: { ...draft.parent, motherName: e.target.value } })}
            />
            <TextField
              id="guardian"
              label="Nama Wali"
              hint="jika ada"
              value={draft.parent.guardianName}
              onChange={(e) =>
                update({ parent: { ...draft.parent, guardianName: e.target.value } })
              }
            />
            <TextField
              id="pwa"
              label="Nomor WhatsApp"
              inputMode="tel"
              value={draft.parent.whatsapp}
              error={errors.pwa}
              onChange={(e) => update({ parent: { ...draft.parent, whatsapp: e.target.value } })}
            />
            <TextField
              id="fjob"
              label="Pekerjaan Ayah"
              value={draft.parent.fatherJob}
              onChange={(e) => update({ parent: { ...draft.parent, fatherJob: e.target.value } })}
            />
            <TextField
              id="mjob"
              label="Pekerjaan Ibu"
              value={draft.parent.motherJob}
              onChange={(e) => update({ parent: { ...draft.parent, motherJob: e.target.value } })}
            />
            <TextAreaField
              id="paddr"
              label="Alamat"
              value={draft.parent.address}
              onChange={(e) => update({ parent: { ...draft.parent, address: e.target.value } })}
            />
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-4">
            <h2 className="font-display text-xl font-medium">{prevLabel}</h2>
            <TextField
              id="prev"
              label={prevLabel}
              value={draft.previousSchool.name}
              onChange={(e) =>
                update({ previousSchool: { ...draft.previousSchool, name: e.target.value } })
              }
            />
            <TextField
              id="year"
              label="Tahun lulus / terakhir"
              value={draft.previousSchool.year}
              onChange={(e) =>
                update({ previousSchool: { ...draft.previousSchool, year: e.target.value } })
              }
            />
            <TextAreaField
              id="notes"
              label="Catatan"
              value={draft.previousSchool.notes}
              onChange={(e) =>
                update({ previousSchool: { ...draft.previousSchool, notes: e.target.value } })
              }
            />
          </div>
        ) : null}

        {step === 3 ? <DocStep draft={draft} update={update} unit={unit} /> : null}

        {step === 4 ? (
          <div className="grid gap-4">
            {errors.pay ? <p className="text-sm text-red-800">{errors.pay}</p> : null}
            <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-cream p-4">
              <input
                type="radio"
                name="pay"
                className="mt-1 size-4"
                checked={draft.payment.method === "transfer"}
                onChange={() => update({ payment: { ...draft.payment, method: "transfer" } })}
              />
              <span>
                <span className="block font-medium">Transfer</span>
                <span className="mt-2 block text-sm text-muted">
                  {BANK.name}
                  <br />
                  {BANK.account}
                  <br />
                  a.n. {BANK.holder}
                  <br />
                  Biaya (contoh): {BANK.feeLabel}
                </span>
                <span className="mt-2 block text-xs text-muted">{BANK.feeNote}</span>
              </span>
            </label>
            {draft.payment.method === "transfer" ? (
              <label className="block rounded-lg bg-paper p-4 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_10%,transparent)]">
                <span className="text-sm font-medium">Unggah Bukti Pembayaran</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="mt-2 block w-full text-sm"
                  onChange={(e) => {
                    const docs = onFiles(e.target.files, "bukti_bayar");
                    update({
                      payment: {
                        ...draft.payment,
                        method: "transfer",
                        proof: docs[0],
                        status: docs[0] ? "menunggu_verifikasi" : "belum_bayar",
                      },
                    });
                  }}
                />
                {draft.payment.proof ? (
                  <p className="mt-2 text-xs text-muted">
                    {draft.payment.proof.name} · {formatBytes(draft.payment.proof.size)}
                  </p>
                ) : null}
              </label>
            ) : null}
            <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-cream p-4">
              <input
                type="radio"
                name="pay"
                className="mt-1 size-4"
                checked={draft.payment.method === "cash"}
                onChange={() =>
                  update({
                    payment: { method: "cash", status: "tunai_menunggu" },
                  })
                }
              />
              <span>
                <span className="block font-medium">Tunai di sekolah</span>
                <span className="mt-1 block text-sm text-muted">
                  Pembayaran dapat dilakukan secara langsung di sekolah dan dibawa oleh calon
                  siswa atau wali.
                </span>
                <span className="mt-2 block text-xs font-medium text-navy">
                  Status: Menunggu Pembayaran Tunai
                </span>
              </span>
            </label>
          </div>
        ) : null}

        {step === 5 ? <Review draft={draft} unit={unit} prevLabel={prevLabel} /> : null}

        <div className="mt-8 flex gap-3">
          {step > 0 ? (
            <button
              type="button"
              onClick={back}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-cream text-sm font-medium"
            >
              Kembali
            </button>
          ) : (
            <Link
              to="/ppdb"
              className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-cream text-sm font-medium"
            >
              Ganti jenjang
            </Link>
          )}
          {step < REG_STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-navy text-sm font-semibold text-paper"
            >
              Lanjutkan
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy"
            >
              Kirim Pendaftaran
            </button>
          )}
        </div>
        {step === 5 ? (
          <button
            type="button"
            className="mt-3 w-full text-center text-sm text-muted"
            onClick={() => update({ step: 0 })}
          >
            Edit Data
          </button>
        ) : null}
      </section>
    </SiteShell>
  );
}

function DocStep({
  draft,
  update,
  unit,
}: {
  draft: RegistrationDraft;
  update: (p: Partial<RegistrationDraft>) => void;
  unit: SchoolUnit;
}) {
  const kinds: { kind: UploadedDoc["kind"]; label: string; hint?: string }[] = [
    { kind: "kk", label: "Kartu Keluarga" },
    { kind: "akta", label: "Akta Kelahiran" },
    { kind: "ijazah", label: "Ijazah / SKL", hint: "jika ada" },
    { kind: "lainnya", label: "Dokumen lain" },
  ];
  return (
    <div className="grid gap-4">
      <p className="text-sm text-muted">
        Unggahan hanya tersimpan di perangkat ini sebagai nama file — belum dikirim ke server.
      </p>
      {kinds.map((k) => {
        const docs = draft.documents.filter((d) => d.kind === k.kind);
        return (
          <div key={k.kind} className="rounded-lg bg-cream p-4">
            <p className="text-sm font-medium">
              {k.label}{" "}
              {k.hint ? <span className="font-normal text-muted">({k.hint})</span> : null}
            </p>
            <label className="mt-3 inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-navy px-4 text-sm text-paper">
              <FileUp className="size-4" />
              Pilih berkas
              <input
                type="file"
                className="sr-only"
                accept="image/*,.pdf"
                onChange={(e) =>
                  update({ documents: [...draft.documents, ...onFiles(e.target.files, k.kind)] })
                }
              />
            </label>
            <ul className="mt-3 grid gap-2">
              {docs.map((d) => (
                <li
                  key={d.id}
                  className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2 text-sm"
                >
                  <span className="min-w-0 truncate">
                    {d.name} · {formatBytes(d.size)}
                    <span className="ml-2 text-teal">Siap</span>
                  </span>
                  <button
                    type="button"
                    className="grid size-9 place-items-center rounded-full"
                    aria-label={`Hapus ${d.name}`}
                    onClick={() =>
                      update({ documents: draft.documents.filter((x) => x.id !== d.id) })
                    }
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      {unit === "SMP" ? (
        <p className="text-xs text-muted">Untuk SMPT, Ijazah/SKL SD/MI sangat disarankan.</p>
      ) : null}
    </div>
  );
}

function Review({
  draft,
  unit,
  prevLabel,
}: {
  draft: RegistrationDraft;
  unit: SchoolUnit;
  prevLabel: string;
}) {
  const rows = useMemo(
    () => [
      ["Jenjang", unit === "SD" ? "SD" : "SMPT"],
      ["Nama", draft.student.fullName],
      ["NIK", draft.student.nik || "—"],
      ["NISN", draft.student.nisn || "—"],
      ["Lahir", `${draft.student.birthPlace || "—"}, ${draft.student.birthDate || "—"}`],
      [
        "Jenis kelamin",
        draft.student.gender === "L"
          ? "Laki-laki"
          : draft.student.gender === "P"
            ? "Perempuan"
            : "—",
      ],
      ["Agama", draft.student.religion || "—"],
      ["Alamat siswa", draft.student.address || "—"],
      ["WhatsApp siswa", draft.student.whatsapp],
      ["Ayah", draft.parent.fatherName || "—"],
      ["Ibu", draft.parent.motherName || "—"],
      ["Wali", draft.parent.guardianName || "—"],
      ["WhatsApp orang tua", draft.parent.whatsapp],
      [prevLabel, draft.previousSchool.name || "—"],
      ["Dokumen", `${draft.documents.length} berkas`],
      [
        "Pembayaran",
        draft.payment.method === "cash"
          ? "Tunai"
          : draft.payment.method === "transfer"
            ? "Transfer"
            : "—",
      ],
    ],
    [draft, prevLabel, unit],
  );
  return (
    <div>
      <p className="text-sm text-muted">
        Periksa kembali sebelum mengirim. Anda bisa mengedit data.
      </p>
      <dl className="mt-4 divide-y divide-mist rounded-lg bg-cream px-4">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-3 text-sm">
            <dt className="text-muted">{k}</dt>
            <dd className="max-w-[60%] text-right font-medium">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 flex items-start gap-2 text-xs text-muted">
        <Check className="mt-0.5 size-4 text-teal" />
        Setelah dikirim, Anda mendapat nomor pendaftaran dan dapat konfirmasi via WhatsApp.
      </p>
    </div>
  );
}
