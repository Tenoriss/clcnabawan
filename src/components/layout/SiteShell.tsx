import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { PpdbChatbot } from "@/components/ppdb/PpdbChatbot";

export function SiteShell({
  children,
  hideChat,
}: {
  children: ReactNode;
  hideChat?: boolean;
}) {
  return (
    <div className="min-h-dvh bg-paper text-foreground">
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      {hideChat ? null : <PpdbChatbot />}
    </div>
  );
}
