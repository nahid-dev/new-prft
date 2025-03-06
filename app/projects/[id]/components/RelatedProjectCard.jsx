import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedProjectCard = ({ project, cardTopClasses, index }) => {
  return (
      <Link
          href={`/projects/${project.id}`}
      key={project.id}
      className={`cursor-pointer p-5 pt-8 lg:pt-16 hover:bg-white transition-all duration-300 flex flex-col justify-between`}
      style={{
        // border: "1px solid #4444",
        borderRight:
          index === 0 ? "1px solid #4444" : 0,
        borderLeft: index === 2 ? "1px solid #4444" : 0,
      }}
    >
      {/* CARD TOP */}
      <div className={cn("flex flex-col gap-4 pl-12 pb-12", cardTopClasses)}>
        <p className="text-[17px] font-semibold">
          <span
            className="text-highlight"
            dangerouslySetInnerHTML={{ __html: "{" }}
          ></span>{" "}
          {project.tag}{" "}
          <span
            className="text-highlight"
            dangerouslySetInnerHTML={{ __html: "}" }}
          ></span>
        </p>
        <h4 className="text-3xl">{project.name}</h4>
        <p className="text-gray-500 text-[15px] font-semibold flex items-center gap-2 flex-wrap">
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
          loading="lazy"
          className="object-fill w-full rounded-xl "
        />
      </div>
    </Link>
  );
};

export default RelatedProjectCard;
