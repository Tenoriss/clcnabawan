import { createFileRoute } from "@tanstack/react-router";
import { RegistrationWizard } from "@/components/ppdb/RegistrationWizard";

export const Route = createFileRoute("/ppdb/sd")({
  ssr: false,
  component: PpdbSd,
  head: () => ({
    meta: [{ title: "Daftar SD · PPDB Yasinta Nabawan" }],
  }),
});

function PpdbSd() {
  return <RegistrationWizard unit="SD" />;
}
