import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

const SubTag = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 2 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="flex items-center gap-2"
    >
      <span className="size-[10px] bg-highlight rounded-full"></span>{" "}
      <span className={cn(`text-sm text-gray-400`, className)}>
        Available for project
      </span>
    </motion.div>
  );
};

export default SubTag;
