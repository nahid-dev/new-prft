import { ArrowUp } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const fadeVariant = {
  default: { opacity: 0, y: 0 },
  fadeUpLow: { opacity: 0, y: 20 },
  fadeUpMid: { opacity: 0, y: 30 },
  fadeUpMax: { opacity: 0, y: 40 },
};

const HighlightButton = ({
  children,
  isGlowing = false,
  animationType = "default",
  ...props
}) => {
  return (
    <motion.button
      initial={fadeVariant[animationType]}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`bg-highlight group pl-7 pr-[10px] py-[10px] rounded-full text-[19px] font-semibold text-foreground flex items-center gap-2 cursor-pointer ${
        isGlowing ? "hover-effect" : ""
      }`}
      {...props}
    >
      <p>{children}</p>
      <p className="bg-white rounded-full p-2">
        <ArrowUp className="text-gray-600 rotate-45 size-6 group-hover:rotate-90 transition duration-300" />
      </p>
    </motion.button>
  );
};

export default HighlightButton;
