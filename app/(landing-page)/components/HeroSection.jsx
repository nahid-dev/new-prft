import ProfileCard from "@/components/shared/common/ProfileCard";
import SubTag from "@/components/shared/common/SubTag";
import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";
import MainHeading from "./MainHeading";
import HighlightButton from "@/components/shared/common/HighlightButton";

const HeroSection = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-3">
          {/* LEFT SIDE - PROFILE SECTION */}
          <div className="col-span-3 lg:col-span-1">
            <ProfileCard />
          </div>
          {/* RIGHT SIDE - HERO HEADING SECTION */}
          <div className="col-span-3 lg:col-span-2">
            <SubTag />
            <MainHeading />
          </div>
          {/* BOTTOM - LATEST WORK SITE */}
          <div className="col-span-3 lg:col-span-1">
            <p className="text-xl font-medium mt-10">(2024-PRESENT)</p>
          </div>
          <div className="col-span-3 lg:col-span-2 flex flex-col gap-10">
            <p className="text-2xl mt-10">
              I’m dedicated to crafting websites that bring your ideas to life,
              combining design and development to deliver fast, impactful
              results.
            </p>
            <div>
              <HighlightButton>View my resume</HighlightButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
