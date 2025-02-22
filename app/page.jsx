import InfinityMovingSection from "@/components/InfinityMovingSection";
import HeroSection from "./(landing-page)/components/HeroSection";
import ProjectSection from "./(landing-page)/components/ProjectSection";
import ToolBox from "./(landing-page)/components/Toolbox";
import HowItWorkSection from "./(landing-page)/components/HowItWorkSection";
import StatisticSection from "./(landing-page)/components/StatisticSection";
import Testimonial from "./(landing-page)/components/Testimonial";

export default function Home() {
  return (
    <div className="py-20">
      <HeroSection />
      <InfinityMovingSection />
      <ProjectSection />
      <ToolBox />
      <InfinityMovingSection />
      <HowItWorkSection />
      <StatisticSection />
      <Testimonial />
    </div>
  );
}
