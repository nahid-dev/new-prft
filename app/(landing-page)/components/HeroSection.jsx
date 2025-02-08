import ProfileCard from "@/components/shared/common/ProfileCard";
import SubTag from "@/components/shared/common/SubTag";
import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";
import MainHeading from "./MainHeading";

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
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
