"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Tool from "./Tool";
import SectionHeaderTag from "@/components/SectionHeaderTag";
import Container from "@/components/shared/Container";

const skills = [
  {
    name: "Figma",
    description: "Leading collaborative design tool",
    image: "/skills/figma.png",
    percentage: 60,
  },
  {
    name: "Next.js",
    description: "Powerful React framework",
    image: "/skills/next-js.svg",
    percentage: 95,
  },
  {
    name: "React.js",
    description: "Powerful JavaScript Library",
    image: "/skills/react.png",
    percentage: 95,
  },
  {
    name: "JavaScript",
    description: "Modern Programming Language",
    image: "/skills/javascript.png",
    percentage: 85,
  },
  {
    name: "Node.js",
    description: "Powerful Runtime Environment",
    image: "/skills/node-js.png",
    percentage: 60,
  },
  {
    name: "Express.js",
    description: "A Framework based on Node.js",
    image: "/skills/express-js.png",
    percentage: 75,
  },
  {
    name: "MongoDB",
    description: "Powerful Database",
    image: "/skills/mongo-db.png",
    percentage: 55,
  },
];

export default function ToolBox() {

  return (
    <div className="py-36">
      <Container>
        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-28"
        >
          <div className="ml-10">
            <SectionHeaderTag title="{02} — Tools & Skills" className="justify-center xl:justify-end" />
            <h2 className="text-[50px] xl:text-[90px] text-center xl:text-right leading-tight">My Creative Toolbox</h2>
          </div>

          <div className="flex flex-col gap-y-8 w-full">
            {skills.map((skill, index) => (
              <Tool
                key={index}
                skills={skills}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
