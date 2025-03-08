import HeadingButton from "@/components/shared/common/HeadingButton";
import React from "react";
import { motion } from "framer-motion";

const MainHeading = () => {
  return (
    <h1 className="leading-tight text-[51px] lg:text-[79px]">
      <div className="flex items-center gap-4">
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          Hi! I&apos;m
        </motion.p>
        <HeadingButton
          className="bg-white text-foreground"
          animationType="fadeInDown"
        >
          Abdul Khalek
        </HeadingButton>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          a
        </motion.p>
        <HeadingButton
          className="bg-foreground text-white shadow-none"
          animationType="fadeInUp"
        >
          Software Developer
        </HeadingButton>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          from
        </motion.p>
        <HeadingButton
          className="bg-transparent border-2 border-gray-300 text-foreground shadow-none"
          animationType="fadeInRight"
        >
          Dhaka
        </HeadingButton>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      >
        <p>building scalable and high-performance applications</p>
      </motion.div>
    </h1>
  );
};

export default MainHeading;
