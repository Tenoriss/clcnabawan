import { createFileRoute } from "@tanstack/react-router";
import { RegistrationWizard } from "@/components/ppdb/RegistrationWizard";

export const Route = createFileRoute("/ppdb/smp")({
  ssr: false,
  component: PpdbSmp,
  head: () => ({
    meta: [{ title: "Daftar SMP · PPDB Yasinta Nabawan" }],
  }),
});

function PpdbSmp() {
  return <RegistrationWizard unit="SMP" />;
}
