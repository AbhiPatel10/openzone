import FeatureSection from "@/components/FeatureSection/page";
import HeroSection from "@/components/HeroSection/page";
import ProjectDescriptionSection from "@/components/ProjectDescriptionSection/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectDescriptionSection />
      <FeatureSection />
    </main>
  );
}
