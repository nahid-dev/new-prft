import InfinityMovingSection from "@/components/InfinityMovingSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import ToolBox from "./components/Toolbox";
import HowItWorkSection from "./components/HowItWorkSection";
import StatisticSection from "./components/StatisticSection";
import Testimonial from "./components/Testimonial";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfinityMovingSection />
      <ProjectSection />
      <ToolBox />
      <InfinityMovingSection />
      <HowItWorkSection />
      <StatisticSection />
      <Testimonial />
      <FAQSection />
      <ContactSection />
    </>
  );
}
