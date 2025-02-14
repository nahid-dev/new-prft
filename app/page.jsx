import InfinityMovingSection from "@/components/InfinityMovingSection";
import HeroSection from "./(landing-page)/components/HeroSection";

export default function Home() {
  return (
    <div className="py-20" style={{ maskImage: "linear-gradient()" }}>
      <HeroSection />
      <InfinityMovingSection />
    </div>
  );
}
