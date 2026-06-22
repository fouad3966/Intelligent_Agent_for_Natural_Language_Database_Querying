import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MissionSection from "@/components/MissionSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import PipelineSection from "@/components/PipelineSection";
import SecuritySection from "@/components/SecuritySection";
import DemoSection from "@/components/DemoSection";
import ConclusionSection from "@/components/ConclusionSection";
import ThankYouSection from "@/components/ThankYouSection";
import SectionNavigator from "@/components/SectionNavigator";
import GlobalBackground from "@/components/GlobalBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <GlobalBackground />
      <SectionNavigator />
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <MissionSection />
      <ObjectivesSection />
      <ArchitectureSection />
      <PipelineSection />
      <SecuritySection />
      <DemoSection />
      <ConclusionSection />
      <ThankYouSection />
    </main>
  );
}
