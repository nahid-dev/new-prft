import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

const fadeVariants = {
  default: { opacity: 0, y: 0 },
  fadeInUp: { opacity: 0, y: 20 },
  fadeInRight: { opacity: 0, x: 20 },
  fadeInDown: { opacity: 0, y: -20 },
};

const HeadingButton = ({ children, className, animationType = "default" }) => {
  return (
    <motion.div
      initial={fadeVariants[animationType]}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "px-[22px] py-[14px] rounded-full text-[22px] lg:text-[34px] shadow-md font-semibold text-nowrap",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default HeadingButton;
