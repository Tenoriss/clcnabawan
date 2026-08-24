import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <picture className="contents">
      <source
        type="image/webp"
        srcSet="/logo-96.webp 96w, /logo-192.webp 192w, /logo.webp 256w"
        sizes="(min-width: 768px) 48px, 44px"
      />
      <img
        src="/logo-96.png"
        srcSet="/logo-96.png 96w, /logo-192.png 192w, /logo.png 256w"
        sizes="(min-width: 768px) 48px, 44px"
        alt=""
        width={48}
        height={48}
        decoding="async"
        className={cn("rounded-full bg-transparent object-contain", className)}
        style={{ outline: "none", background: "transparent" }}
      />
    </picture>
  );
}
