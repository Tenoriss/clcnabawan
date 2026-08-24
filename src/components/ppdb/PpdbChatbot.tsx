import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, X } from "lucide-react";
import { BANK, CONTACT } from "@/lib/config";

type Msg = { from: "bot" | "user"; text: string };

const REPLIES: Record<string, string> = {
  "Informasi PPDB":
    "PPDB 2026 punya dua formulir: SD (SDK St. Fransisco Yasinta Nabawan) dan SMPT (CLC SMPT Nabawan). Pilih jenjang, isi data, unggah dokumen, lalu konfirmasi via WhatsApp.",
  Persyaratan:
    "SD: Kartu Keluarga dan Akta Kelahiran. SMPT: ditambah Ijazah/SKL SD/MI. Nomor WhatsApp orang tua wajib.",
  "Biaya Pendaftaran": `Biaya contoh prototipe: ${BANK.feeLabel}. ${BANK.feeNote}`,
  "Cara Pembayaran":
    "Transfer ke rekening contoh di portal, lalu unggah bukti — atau bayar tunai di sekolah. Status awal: menunggu verifikasi / menunggu pembayaran tunai.",
  "Cek Status":
    "Masukkan nomor pendaftaran di halaman Cek Status, misalnya PPDB-SD-2026-0001.",
  "Hubungi Admin": `WhatsApp admin (placeholder): ${CONTACT.whatsappDisplay}. ${CONTACT.note}`,
};

const OPTIONS = Object.keys(REPLIES);

export function PpdbChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Selamat datang di layanan PPDB Yasinta Nabawan Education.",
    },
  ]);

  const last = messages[messages.length - 1];
  const showOptions = last?.from === "bot";

  const panel = useMemo(
    () => (
      <div className="flex h-[min(32rem,70dvh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[24px] bg-paper shadow-[0_20px_60px_rgba(5,11,20,0.28)]">
        <div className="flex items-center justify-between bg-navy px-4 py-3 text-paper">
          <div>
            <p className="text-sm font-semibold">Layanan PPDB WhatsApp</p>
            <p className="text-[11px] text-paper/60">Prototipe percakapan · bukan API resmi</p>
          </div>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full hover:bg-paper/10"
            onClick={() => setOpen(false)}
            aria-label="Tutup chat"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={
                m.from === "bot"
                  ? "max-w-[90%] rounded-2xl rounded-tl-md bg-cream px-3 py-2 text-sm text-foreground"
                  : "ml-auto max-w-[90%] rounded-2xl rounded-tr-md bg-navy px-3 py-2 text-sm text-paper"
              }
            >
              {m.text}
            </div>
          ))}
          {showOptions ? (
            <div className="flex flex-wrap gap-2 pt-1">
              {OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className="rounded-full bg-navy/5 px-3 py-2 text-xs font-medium text-navy shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-navy)_12%,transparent)]"
                  onClick={() => {
                    setMessages((prev) => [
                      ...prev,
                      { from: "user", text: opt },
                      { from: "bot", text: REPLIES[opt] },
                    ]);
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-mist px-4 py-3 text-xs">
          <Link to="/ppdb/status" className="font-medium text-teal">
            Cek status
          </Link>
          <a
            href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-navy"
          >
            WhatsApp admin
          </a>
        </div>
      </div>
    ),
    [messages, showOptions],
  );

  return (
    <div className="fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {open ? panel : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-12 items-center gap-2 rounded-full bg-navy px-4 text-sm font-medium text-paper shadow-[0_10px_30px_rgba(5,11,20,0.28)]"
        aria-expanded={open}
      >
        <MessageCircle className="size-4" aria-hidden />
        Chat PPDB
      </button>
    </div>
  );
}
