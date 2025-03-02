"use client";
import React from "react";
import ProjectHeader from "./ProjectHeader";
import Container from "@/components/shared/Container";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { ArrowUp } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Car Garage",
    tag: "Car serving website",
    technology: ["React.js", "TailwindCSS", "Daisy UI", "Figma"],
    image: "/images/projects/car-workshop.png",
  },
  {
    id: 2,
    name: "Traditional Food",
    tag: "Traditional Japanese Food Site",
    technology: ["React.js", "TailwindCSS", "Daisy UI", "Figma"],
    image: "/images/projects/trad-food.png",
  },
  {
    id: 3,
    name: "LEGO Toys",
    tag: "LEGO Toys- An E-commerce website",
    technology: ["React.js", "Figma", "Node.js", "Express.js", "MongoDB"],
    image: "/images/projects/lego-macbook.png",
  },
  {
    id: 4,
    name: "Movix",
    tag: "Latest movies with IMDB rating",
    technology: ["React.js", "Figma", "Redux", "CSS variable"],
    image: "/images/projects/movie.png",
  },
];

const ProjectSection = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className="bg-dark text-white">
      {/* SECTION HEADER */}
      <div className="overflow-hidden relative">
        <Container>
          <ProjectHeader />
        </Container>
        <motion.div style={{ rotate }} className="absolute -right-20 top-10">
          <Image
            src="/custom-svg/flower.svg"
            width={750}
            height={750}
            alt="Flower SVG"
            className="rotate-45"
          />
        </motion.div>
      </div>

      {/* SECTION BODY */}
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            cardTopClasses="pl-0 lg:pl-12 pb-8 lg:pb-12"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3">
        {projects.slice(2).map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            cardTopClasses="pl-0 lg:pl-10 pb-8 lg:pb-[50px]"
          />
        ))}
        <motion.div
          whileHover={{
            padding: 0,
            borderRadius: 0,
          }}
          transition={{ duration: 0.3 }}
          className="p-5 group cursor-pointer h-[300px] xl:h-full"
        >
          <motion.div
            whileHover={{
              borderRadius: 0,
            }}
            transition={{ duration: 0.3 }}
            className="bg-highlight text-gray-800 font-semibold text-xl h-full flex items-center justify-center rounded-xl"
          >
            <motion.div className="flex items-center gap-4 group-hover:gap-2 transition-all duration-100 ">
              <p>View all projects</p>
              <p className="bg-foreground text-white p-2 rounded-full">
                <ArrowUp className="rotate-45 size-6 group-hover:rotate-90 transition duration-300" />
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSection;
