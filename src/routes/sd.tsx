import { createFileRoute } from "@tanstack/react-router";
import { SchoolPage } from "@/components/schools/SchoolPage";
import { schools } from "@/lib/mock-data";

export const Route = createFileRoute("/sd")({
  component: SdPage,
  head: () => ({
    meta: [{ title: "SDK St. Fransisco Yasinta Nabawan" }],
  }),
});

function SdPage() {
  return <SchoolPage school={schools.SD} />;
}
