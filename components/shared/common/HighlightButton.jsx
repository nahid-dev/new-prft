import { ArrowRight, ArrowUp } from "lucide-react";
import React from "react";

const HighlightButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-highlight group pl-7 pr-[10px] py-[10px] rounded-full text-[19px] font-semibold text-foreground flex items-center gap-2 cursor-pointer"
    >
      <p>{children}</p>{" "}
      <p className="bg-white rounded-full p-2">
        <ArrowUp className="text-gray-600 rotate-45 size-6 group-hover:rotate-90 transition duration-300" />
      </p>
    </button>
  );
};

export default HighlightButton;
