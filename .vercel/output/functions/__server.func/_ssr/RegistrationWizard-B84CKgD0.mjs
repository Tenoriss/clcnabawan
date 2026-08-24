import { i as __toESM } from "../_runtime.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Check, i as Trash2, m as FileUp } from "../_libs/lucide-react.mjs";
import { a as BANK, d as RELIGIONS } from "./router-yia4NVan.mjs";
import { r as formatBytes } from "./LogoMark-Cf1GSumj.mjs";
import { t as useHydrated } from "./hooks-4SQ71jJZ.mjs";
import { a as schools } from "./mock-data-C2o-IRtg.mjs";
import { c as saveDraft, f as whatsappConfirmUrl, i as emptyDraft, n as REG_STEPS, s as loadDraft, u as submitDraft } from "./registrationService-C14u-rFl.mjs";
import { t as PageHero } from "./PageHero-B7GZIv8u.mjs";
import { t as SiteShell } from "./SiteShell-CWBQOXD-.mjs";
import { n as TextAreaField, r as TextField, t as SelectField } from "./field-DUPkloPP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RegistrationWizard-B84CKgD0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function onFiles(files, kind) {
	if (!files) return [];
	return Array.from(files).map((f) => ({
		id: `${kind}-${f.name}-${f.size}-${Date.now()}`,
		kind,
		name: f.name,
		size: f.size,
		type: f.type || "application/octet-stream",
		status: "ready"
	}));
}
function RegistrationWizard({ unit }) {
	const hydrated = useHydrated();
	const school = schools[unit];
	const [draft, setDraft] = (0, import_react.useState)(() => emptyDraft(unit));
	const [errors, setErrors] = (0, import_react.useState)({});
	const [result, setResult] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		setDraft(loadDraft(unit));
	}, [hydrated, unit]);
	const update = (patch) => {
		setDraft((d) => {
			const next = {
				...d,
				...patch,
				unit
			};
			saveDraft(next);
			return next;
		});
	};
	const step = Math.min(draft.step, REG_STEPS.length - 1);
	const validate = () => {
		const e = {};
		if (step === 0) {
			if (!draft.student.fullName.trim()) e.fullName = "Wajib diisi";
			if (!draft.student.whatsapp.trim()) e.whatsapp = "Nomor WhatsApp wajib";
			if (!draft.student.birthDate) e.birthDate = "Wajib diisi";
			if (!draft.student.gender) e.gender = "Pilih jenis kelamin";
		}
		if (step === 1) {
			if (!draft.parent.motherName.trim() && !draft.parent.fatherName.trim() && !draft.parent.guardianName.trim()) e.parent = "Isi minimal nama ayah, ibu, atau wali";
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
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const back = () => {
		update({ step: Math.max(step - 1, 0) });
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const submit = () => {
		if (!validate()) return;
		const rec = submitDraft(draft);
		setResult(rec);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const prevLabel = unit === "SD" ? "Asal TK/RA" : "Asal SD/MI";
	const progress = (step + 1) / REG_STEPS.length * 100;
	if (result) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		hideChat: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			compact: true,
			eyebrow: `PPDB ${unit}`,
			title: "Pendaftaran Berhasil",
			subtitle: "Simpan nomor pendaftaran Anda.",
			image: school.heroImage
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page max-w-xl py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-cream p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-teal",
						children: "Nomor pendaftaran"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl font-medium tracking-tight",
						children: result.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 grid gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Nama"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: result.student.fullName
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Jenjang"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: result.unit
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: "Menunggu Verifikasi"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Pembayaran"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: result.payment.method === "cash" ? "Menunggu Pembayaran Tunai" : "Menunggu Verifikasi"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappConfirmUrl(result),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy",
						children: "Konfirmasi via WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/ppdb/status",
						search: { id: result.id },
						className: "mt-3 inline-flex h-12 w-full items-center justify-center rounded-full bg-navy text-sm font-medium text-paper",
						children: "Cek status pendaftaran"
					})
				]
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		hideChat: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				compact: true,
				eyebrow: `PPDB ${unit}`,
				title: school.fullName,
				subtitle: "Isi perlahan. Data tersimpan otomatis di perangkat ini.",
				image: school.heroImage
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-16 z-30 bg-paper/90 py-3 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Langkah ",
							step + 1,
							" / ",
							REG_STEPS.length
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: REG_STEPS[step] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 overflow-hidden rounded-full bg-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-gold",
							style: { width: `${progress}%` }
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page max-w-xl py-8 pb-32",
				children: [
					step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "fullName",
								label: "Nama Lengkap",
								value: draft.student.fullName,
								error: errors.fullName,
								autoComplete: "name",
								onChange: (e) => update({ student: {
									...draft.student,
									fullName: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "nik",
								label: "NIK",
								inputMode: "numeric",
								value: draft.student.nik,
								onChange: (e) => update({ student: {
									...draft.student,
									nik: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "nisn",
								label: "NISN",
								hint: "jika ada",
								value: draft.student.nisn,
								onChange: (e) => update({ student: {
									...draft.student,
									nisn: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									id: "birthPlace",
									label: "Tempat Lahir",
									value: draft.student.birthPlace,
									onChange: (e) => update({ student: {
										...draft.student,
										birthPlace: e.target.value
									} })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									id: "birthDate",
									label: "Tanggal Lahir",
									type: "date",
									value: draft.student.birthDate,
									error: errors.birthDate,
									onChange: (e) => update({ student: {
										...draft.student,
										birthDate: e.target.value
									} })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
								id: "gender",
								label: "Jenis Kelamin",
								value: draft.student.gender,
								error: errors.gender,
								onChange: (e) => update({ student: {
									...draft.student,
									gender: e.target.value
								} }),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Pilih"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "L",
										children: "Laki-laki"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "P",
										children: "Perempuan"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectField, {
								id: "religion",
								label: "Agama",
								value: draft.student.religion,
								onChange: (e) => update({ student: {
									...draft.student,
									religion: e.target.value
								} }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Pilih"
								}), RELIGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: r,
									children: r
								}, r))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
								id: "address",
								label: "Alamat",
								value: draft.student.address,
								onChange: (e) => update({ student: {
									...draft.student,
									address: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "village",
										label: "Desa",
										value: draft.student.village,
										onChange: (e) => update({ student: {
											...draft.student,
											village: e.target.value
										} })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "district",
										label: "Kecamatan",
										value: draft.student.district,
										onChange: (e) => update({ student: {
											...draft.student,
											district: e.target.value
										} })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "regency",
										label: "Kabupaten",
										value: draft.student.regency,
										onChange: (e) => update({ student: {
											...draft.student,
											regency: e.target.value
										} })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "wa",
								label: "Nomor WhatsApp",
								inputMode: "tel",
								value: draft.student.whatsapp,
								error: errors.whatsapp,
								onChange: (e) => update({ student: {
									...draft.student,
									whatsapp: e.target.value
								} })
							})
						]
					}) : null,
					step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4",
						children: [
							errors.parent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-red-800",
								children: errors.parent
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "father",
								label: "Nama Ayah",
								value: draft.parent.fatherName,
								onChange: (e) => update({ parent: {
									...draft.parent,
									fatherName: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "mother",
								label: "Nama Ibu",
								value: draft.parent.motherName,
								onChange: (e) => update({ parent: {
									...draft.parent,
									motherName: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "guardian",
								label: "Nama Wali",
								hint: "jika ada",
								value: draft.parent.guardianName,
								onChange: (e) => update({ parent: {
									...draft.parent,
									guardianName: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "pwa",
								label: "Nomor WhatsApp",
								inputMode: "tel",
								value: draft.parent.whatsapp,
								error: errors.pwa,
								onChange: (e) => update({ parent: {
									...draft.parent,
									whatsapp: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "fjob",
								label: "Pekerjaan Ayah",
								value: draft.parent.fatherJob,
								onChange: (e) => update({ parent: {
									...draft.parent,
									fatherJob: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "mjob",
								label: "Pekerjaan Ibu",
								value: draft.parent.motherJob,
								onChange: (e) => update({ parent: {
									...draft.parent,
									motherJob: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
								id: "paddr",
								label: "Alamat",
								value: draft.parent.address,
								onChange: (e) => update({ parent: {
									...draft.parent,
									address: e.target.value
								} })
							})
						]
					}) : null,
					step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "prev",
								label: prevLabel,
								value: draft.previousSchool.name,
								onChange: (e) => update({ previousSchool: {
									...draft.previousSchool,
									name: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "year",
								label: "Tahun lulus / terakhir",
								value: draft.previousSchool.year,
								onChange: (e) => update({ previousSchool: {
									...draft.previousSchool,
									year: e.target.value
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
								id: "notes",
								label: "Catatan",
								value: draft.previousSchool.notes,
								onChange: (e) => update({ previousSchool: {
									...draft.previousSchool,
									notes: e.target.value
								} })
							})
						]
					}) : null,
					step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocStep, {
						draft,
						update,
						unit
					}) : null,
					step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4",
						children: [
							errors.pay ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-red-800",
								children: errors.pay
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-start gap-3 rounded-lg bg-cream p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "pay",
									className: "mt-1 size-4",
									checked: draft.payment.method === "transfer",
									onChange: () => update({ payment: {
										...draft.payment,
										method: "transfer"
									} })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium",
										children: "Transfer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-2 block text-sm text-muted",
										children: [
											BANK.name,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											BANK.account,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"a.n. ",
											BANK.holder,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Biaya (contoh): ",
											BANK.feeLabel
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block text-xs text-muted",
										children: BANK.feeNote
									})
								] })]
							}),
							draft.payment.method === "transfer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block rounded-lg bg-paper p-4 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_10%,transparent)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: "Unggah Bukti Pembayaran"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*,.pdf",
										className: "mt-2 block w-full text-sm",
										onChange: (e) => {
											const docs = onFiles(e.target.files, "bukti_bayar");
											update({ payment: {
												...draft.payment,
												method: "transfer",
												proof: docs[0],
												status: docs[0] ? "menunggu_verifikasi" : "belum_bayar"
											} });
										}
									}),
									draft.payment.proof ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-xs text-muted",
										children: [
											draft.payment.proof.name,
											" · ",
											formatBytes(draft.payment.proof.size)
										]
									}) : null
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-start gap-3 rounded-lg bg-cream p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "pay",
									className: "mt-1 size-4",
									checked: draft.payment.method === "cash",
									onChange: () => update({ payment: {
										method: "cash",
										status: "tunai_menunggu"
									} })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium",
										children: "Tunai di sekolah"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-muted",
										children: "Pembayaran dapat dilakukan secara langsung di sekolah dan dibawa oleh calon siswa atau wali."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block text-xs font-medium text-navy",
										children: "Status: Menunggu Pembayaran Tunai"
									})
								] })]
							})
						]
					}) : null,
					step === 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Review, {
						draft,
						unit,
						prevLabel
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex gap-3",
						children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: back,
							className: "inline-flex h-12 flex-1 items-center justify-center rounded-full bg-cream text-sm font-medium",
							children: "Kembali"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ppdb",
							className: "inline-flex h-12 flex-1 items-center justify-center rounded-full bg-cream text-sm font-medium",
							children: "Ganti jenjang"
						}), step < REG_STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: next,
							className: "inline-flex h-12 flex-1 items-center justify-center rounded-full bg-navy text-sm font-semibold text-paper",
							children: "Lanjutkan"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: submit,
							className: "inline-flex h-12 flex-1 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy",
							children: "Kirim Pendaftaran"
						})]
					}),
					step === 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-3 w-full text-center text-sm text-muted",
						onClick: () => update({ step: 0 }),
						children: "Edit Data"
					}) : null
				]
			})
		]
	});
}
function DocStep({ draft, update, unit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Unggahan hanya tersimpan di perangkat ini sebagai nama file — belum dikirim ke server."
			}),
			[
				{
					kind: "kk",
					label: "Kartu Keluarga"
				},
				{
					kind: "akta",
					label: "Akta Kelahiran"
				},
				{
					kind: "ijazah",
					label: "Ijazah / SKL",
					hint: "jika ada"
				},
				{
					kind: "lainnya",
					label: "Dokumen lain"
				}
			].map((k) => {
				const docs = draft.documents.filter((d) => d.kind === k.kind);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-cream p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-medium",
							children: [
								k.label,
								" ",
								k.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-normal text-muted",
									children: [
										"(",
										k.hint,
										")"
									]
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-3 inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-navy px-4 text-sm text-paper",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, { className: "size-4" }),
								"Pilih berkas",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									className: "sr-only",
									accept: "image/*,.pdf",
									onChange: (e) => update({ documents: [...draft.documents, ...onFiles(e.target.files, k.kind)] })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-2",
							children: docs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 truncate",
									children: [
										d.name,
										" · ",
										formatBytes(d.size),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 text-teal",
											children: "Siap"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-9 place-items-center rounded-full",
									"aria-label": `Hapus ${d.name}`,
									onClick: () => update({ documents: draft.documents.filter((x) => x.id !== d.id) }),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							}, d.id))
						})
					]
				}, k.kind);
			}),
			unit === "SMP" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Untuk SMP, Ijazah/SKL SD/MI sangat disarankan."
			}) : null
		]
	});
}
function Review({ draft, unit, prevLabel }) {
	const rows = (0, import_react.useMemo)(() => [
		["Jenjang", unit],
		["Nama", draft.student.fullName],
		["NIK", draft.student.nik || "—"],
		["NISN", draft.student.nisn || "—"],
		["Lahir", `${draft.student.birthPlace || "—"}, ${draft.student.birthDate || "—"}`],
		["Jenis kelamin", draft.student.gender === "L" ? "Laki-laki" : draft.student.gender === "P" ? "Perempuan" : "—"],
		["Agama", draft.student.religion || "—"],
		["Alamat siswa", draft.student.address || "—"],
		["WhatsApp siswa", draft.student.whatsapp],
		["Ayah", draft.parent.fatherName || "—"],
		["Ibu", draft.parent.motherName || "—"],
		["Wali", draft.parent.guardianName || "—"],
		["WhatsApp orang tua", draft.parent.whatsapp],
		[prevLabel, draft.previousSchool.name || "—"],
		["Dokumen", `${draft.documents.length} berkas`],
		["Pembayaran", draft.payment.method === "cash" ? "Tunai" : draft.payment.method === "transfer" ? "Transfer" : "—"]
	], [
		draft,
		prevLabel,
		unit
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Periksa kembali sebelum mengirim. Anda bisa mengedit data."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-4 divide-y divide-mist rounded-lg bg-cream px-4",
			children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between gap-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "max-w-[60%] text-right font-medium",
					children: v
				})]
			}, k))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 flex items-start gap-2 text-xs text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 text-teal" }), "Setelah dikirim, Anda mendapat nomor pendaftaran dan dapat konfirmasi via WhatsApp."]
		})
	] });
}
//#endregion
export { RegistrationWizard as t };
