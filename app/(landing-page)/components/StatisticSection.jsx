import Container from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const statistics = [
  {
    id: 1,
    title: "Production Experience",
    helper_Text: "Years",
    length: 1.5,
    theme: {
      background: "highlight",
      icon: "/custom-svg/circle.svg",
    },
  },
  {
    id: 2,
    title: "Real-world Applications",
    helper_Text: "projects",
    length: 10,
    theme: {
      background: "dark-gray",
        icon: "/custom-svg/triangle.svg",
        border: true,
    },
  },
  {
    id: 3,
    title: "In modern web stack",
    helper_Text: "Technologies",
    length: 15,
    theme: {
      background: "lighter",
      icon: "/custom-svg/star.svg",
    },
  },
];

// const dynamicBG = (prop) => {
//     let bg;
//     if(prop)
// }

const themes = {
    highlight: "bg-highlight",
    "dark-gray": "bg-[#1a1a1a] text-white",
    lighter: "bg-white"
}

const StatisticSection = () => {
    
  return (
    <div className="bg-dark py-20">
      <Container>
        <div className="grid grid-cols-3 gap-5">
          {statistics.map((item) => (
            <div
              key={item.id}
              className={`col-span-3 md:col-span-1 rounded-2xl p-6 md:p-8 xl:p-[50px] relative overflow-hidden ${
                themes[item.theme.background]
              } ${item.theme.border ? "border" : ""}`}
            >
              <div className="relative flex flex-col z-50 gap-10">
                <h4 className="text-[40px] xl:text-[78px] leading-tight xl:-mt-6">
                  {item.length}+
                </h4>
                <div className="text-right">
                  <p className="text-[17px] font-semibold">
                    {item.helper_Text}
                  </p>
                  <h4
                    className={`text-xl xl:text-2xl font-semibold ${
                      item.id === 2 ? "text-gray-300" : "text-foreground/85"
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
              <Image
                src={item.theme.icon}
                width={450}
                height={450}
                alt="Statistics svg"
                className="size-[278px] top-16 xl:top-24 absolute z-10 "
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StatisticSection;
