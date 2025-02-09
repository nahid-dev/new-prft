import HeadingButton from "@/components/shared/common/HeadingButton";
import React from "react";

const DEFAULT_STYLE = "text";

const MainHeading = () => {
  return (
    <h1 className="leading-tight text-[79px]">
      <div className="flex items-center gap-4">
        <p>Hi! I&apos;m</p>
        <HeadingButton className="bg-white text-foreground">
          Abdul Khalek
        </HeadingButton>
      </div>
      <div className="flex items-center gap-4">
        <p>a</p>
        <HeadingButton className="bg-foreground text-white shadow-none">
          Software Developer
        </HeadingButton>
        <p>from</p>
        <HeadingButton className="bg-transparent border-2 border-gray-300 text-foreground shadow-none">
          Dhaka
        </HeadingButton>
      </div>
      <div>
        <p>building scalable and high-performance applications</p>
      </div>
    </h1>
  );
};

export default MainHeading;
