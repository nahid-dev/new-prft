"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { id: 1, image: "/skills/express-js.png", name: "Express.js" },
  { id: 2, image: "/skills/figma.png", name: "Figma" },
  { id: 3, image: "/skills/github.png", name: "GitHub" },
  { id: 4, image: "/skills/html-5.png", name: "HTML" },
  { id: 5, image: "/skills/javascript.png", name: "JavaScript" },
  { id: 6, image: "/skills/mongo-db.png", name: "MongoDB" },
  { id: 7, image: "/skills/node-js.png", name: "Node.js" },
  { id: 8, image: "/skills/react.png", name: "React.js" },
  { id: 9, image: "/skills/redux.png", name: "Redux" },
  { id: 10, image: "/skills/tailwind-css.png", name: "TailwindCSS" },
];

const InfinityMovingSection = () => {
  return (
    <div className="bg-[#1c1c1c]">
      <div className="masked-div flex items-center overflow-hidden p-4 whitespace-nowrap">
        <motion.div
          className="flex items-center gap-20"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 70, 
          }}
          style={{ display: "flex", minWidth: "max-content" }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src={skill.image}
                height={250}
                width={250}
                alt={skill.name}
                className="size-8 object-cover"
                loading="lazy"
              />
              <p className="text-white text-base sm:text-xl">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfinityMovingSection;
