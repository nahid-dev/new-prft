import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Tool = ({ index, skill }) => {
  return (
    <div
      key={index}
      className="p-10 bg-white rounded-lg shadow w-full sticky top-36"
    >
      <div className="flex items-start justify-start gap-5">
        <div>
          <Image
            src={skill.image}
            width={450}
            height={450}
            alt="Skill Image"
            className="size-[50px] object-cover"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-[22px] font-semibold">{skill.name}</h3>
          <p className="text-[17px] text-foreground/40 font-semibold">
            {skill.description}
          </p>
          <div className="w-full h-[6px] bg-gray-200 rounded-full mt-6 relative">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-highlight rounded-full"
            />
            <span className="absolute right-0 -top-2 text-[13px] bg-highlight text-dark px-2 rounded-full">
              {skill.percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
