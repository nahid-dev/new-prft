import clsx from "clsx";
import React from "react";

const HeadingButton = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "px-[22px] py-[14px] rounded-full text-[22px] lg:text-[34px] shadow-md font-semibold text-nowrap",
        className
      )}
    >
      {children}
    </div>
  );
};

export default HeadingButton;
