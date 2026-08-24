import { i as __toESM } from "./_runtime.mjs";
import { B as notFound, V as require_react, v as Link, x as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-yia4NVan.mjs";
import { i as formatDate, r as formatBytes } from "./_ssr/LogoMark-Cf1GSumj.mjs";
import { t as useHydrated } from "./_ssr/hooks-4SQ71jJZ.mjs";
import { t as AdminShell } from "./_ssr/AdminShell-u1FgaaXy.mjs";
import { a as getRegistration, d as updateRegistration, f as whatsappConfirmUrl, r as STATUS_LABEL, t as PAYMENT_LABEL } from "./_ssr/registrationService-C14u-rFl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-DTizwOnk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REG_OPTS = [
	"menunggu_verifikasi",
	"diverifikasi",
	"ditolak",
	"selesai"
];
var PAY_OPTS = [
	"belum_bayar",
	"menunggu_verifikasi",
	"tunai_menunggu",
	"lunas"
];
function AdminPpdbDetail() {
	const { id } = Route.useParams();
	const hydrated = useHydrated();
	const [tick, setTick] = (0, import_react.useState)(0);
	const rec = hydrated ? getRegistration(id) : void 0;
	if (hydrated && !rec) throw notFound();
	if (!rec) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Detail",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Memuat…"
		})
	});
	const setStatus = (status) => {
		updateRegistration(rec.id, { status });
		setTick((n) => n + 1);
	};
	const setPay = (status) => {
		updateRegistration(rec.id, { payment: {
			...rec.payment,
			status
		} });
		setTick((n) => n + 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: rec.student.fullName,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/ppdb",
						className: "text-navy",
						children: "PPDB"
					}),
					" ",
					"· ",
					rec.id,
					" · ",
					formatDate(rec.createdAt)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Data Siswa",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rows, { rows: [
						["Nama", rec.student.fullName],
						["NIK", rec.student.nik || "—"],
						["NISN", rec.student.nisn || "—"],
						["Lahir", `${rec.student.birthPlace || "—"}, ${rec.student.birthDate || "—"}`],
						["Jenis kelamin", rec.student.gender || "—"],
						["Agama", rec.student.religion || "—"],
						["Alamat", rec.student.address || "—"],
						["Desa / Kec / Kab", `${rec.student.village || "—"} / ${rec.student.district || "—"} / ${rec.student.regency || "—"}`],
						["WhatsApp", rec.student.whatsapp]
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Data Orang Tua",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rows, { rows: [
						["Ayah", rec.parent.fatherName || "—"],
						["Ibu", rec.parent.motherName || "—"],
						["Wali", rec.parent.guardianName || "—"],
						["WhatsApp", rec.parent.whatsapp],
						["Pekerjaan ayah", rec.parent.fatherJob || "—"],
						["Pekerjaan ibu", rec.parent.motherJob || "—"],
						["Alamat", rec.parent.address || "—"],
						["Asal sekolah", rec.previousSchool.name || "—"]
					] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Dokumen",
					children: rec.documents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Belum ada berkas."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: rec.documents.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								d.kind.toUpperCase(),
								" · ",
								d.name
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: formatBytes(d.size)
							})]
						}, d.id))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Pembayaran & Status",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								"Metode: ",
								rec.payment.method || "—",
								" · ",
								PAYMENT_LABEL[rec.payment.status]
							]
						}),
						rec.payment.proof ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								"Bukti: ",
								rec.payment.proof.name,
								" (",
								formatBytes(rec.payment.proof.size),
								")"
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block text-sm font-medium",
							children: ["Status pendaftaran", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "mt-1 h-11 w-full rounded-md bg-paper px-3",
								value: rec.status,
								onChange: (e) => setStatus(e.target.value),
								children: REG_OPTS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: o,
									children: STATUS_LABEL[o]
								}, o))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-3 block text-sm font-medium",
							children: ["Status pembayaran", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "mt-1 h-11 w-full rounded-md bg-paper px-3",
								value: rec.payment.status,
								onChange: (e) => setPay(e.target.value),
								children: PAY_OPTS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: o,
									children: PAYMENT_LABEL[o]
								}, o))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappConfirmUrl(rec),
							target: "_blank",
							rel: "noreferrer",
							className: "mt-4 inline-flex h-11 items-center rounded-full bg-navy px-4 text-sm text-paper",
							children: "Buka WhatsApp"
						})
					]
				})]
			})
		]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-lg bg-cream p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-lg font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3",
			children
		})]
	});
}
function Rows({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "space-y-2 text-sm",
		children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-muted",
				children: k
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "max-w-[60%] text-right",
				children: v
			})]
		}, k))
	});
}
//#endregion
export { AdminPpdbDetail as component };
