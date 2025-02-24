import { cn } from "@/lib/utils";
import React from "react";

const SubTag = ({ className }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="size-[10px] bg-highlight rounded-full"></span>{" "}
      <span className={cn(`text-sm text-gray-400`, className)}>
        Available for project
      </span>
    </div>
  );
};

export default SubTag;
