import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ project, cardTopClasses }) => {
  return (
    <div
      key={project.id}
      className={`cursor-pointer p-5 pt-16 hover:bg-[#1A1A1A] transition-all duration-300 ${
        project.id === 1 ? "border-r-0" : ""
      }`}
      style={{
        border: "1px solid #4444",
        borderRight: project.id === 1 || project.id === 4 ? "0" : "1px solid #4444",
        borderLeft: project.id === 4 ? "0" : "1px solid #4444"
      }}
    >
      {/* CARD TOP */}
      <div className={cn("flex flex-col gap-4 pl-12 pb-12", cardTopClasses)}>
        <p className="text-[17px] font-semibold"><span className="text-highlight" dangerouslySetInnerHTML={{ __html: '{' }}></span> {project.tag} <span className="text-highlight" dangerouslySetInnerHTML={{ __html: '}' }}></span></p>
        <h4 className="text-3xl">{project.name}</h4>
        <p className="text-gray-500 text-[15px] font-semibold flex items-center gap-2">
          {project.technology.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </p>
      </div>
      {/* CARD BOTTOM */}
      <div>
        <Image
          src={project.image}
          width={1080}
          height={1080}
          alt="Project Image"
          className="object-fill w-full rounded-xl "
        />
      </div>
    </div>
  );
};

export default ProjectCard;
