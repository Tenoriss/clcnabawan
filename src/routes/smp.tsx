import { createFileRoute } from "@tanstack/react-router";
import { SchoolPage } from "@/components/schools/SchoolPage";
import { schools } from "@/lib/mock-data";

export const Route = createFileRoute("/smp")({
  component: SmpPage,
  head: () => ({
    meta: [{ title: "CLC SMPT Nabawan" }],
  }),
});

function SmpPage() {
  return <SchoolPage school={schools.SMP} />;
}
