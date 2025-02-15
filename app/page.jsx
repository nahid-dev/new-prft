import InfinityMovingSection from "@/components/InfinityMovingSection";
import HeroSection from "./(landing-page)/components/HeroSection";
import ProjectSection from "./(landing-page)/components/ProjectSection";

export default function Home() {
  return (
    <div className="py-20">
      <HeroSection />
      <InfinityMovingSection />
      <ProjectSection />
    </div>
  );
}
