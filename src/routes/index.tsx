import { createFileRoute } from "@tanstack/react-router";
import { AboutEditorial } from "@/components/home/AboutEditorial";
import { CinematicHero } from "@/components/home/CinematicHero";
import { IntroSection } from "@/components/home/IntroSection";
import { NewsPreview } from "@/components/home/NewsPreview";
import { PpdbTeaser } from "@/components/home/PpdbTeaser";
import { SchoolPair } from "@/components/home/SchoolPair";
import { SocialSection } from "@/components/home/SocialSection";
import { SiteShell } from "@/components/layout/SiteShell";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Yasinta Nabawan Education" }],
  }),
});

function Home() {
  return (
    <SiteShell>
      <CinematicHero />
      <IntroSection />
      <SchoolPair />
      <AboutEditorial />
      <PpdbTeaser />
      <NewsPreview />
      <SocialSection />
    </SiteShell>
  );
}
