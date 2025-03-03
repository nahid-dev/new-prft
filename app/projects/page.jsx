"use client";
import { motion } from "framer-motion";
import SectionHeaderTag from "@/components/SectionHeaderTag";
import Button from "@/components/shared/common/Button";
import Container from "@/components/shared/Container";
import { projects } from "@/lib/options";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-[110px] pb-8 md:pb-10 xl:pb-20">
      <Container>
        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="py-8 md:py-10 lg:py-20"
        >
          <SectionHeaderTag
            title="My recent projects"
            className="justify-center"
          />
          <h2 className="text-[54px] xl:text-[86px] text-center leading-none">
            Selected Works
          </h2>
        </motion.div>
        {/* PROJECTS */}
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              className="xl:max-w-6xl w-full mx-auto"
              key={project.id}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt="Project Image"
                  width={1440}
                  height={1440}
                  loading="lazy"
                  className="object-fill w-full rounded-xl mb-5 lg:mb-14"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="flex flex-col gap-5"
              >
                <p className="text-[17px] font-semibold">
                  <span dangerouslySetInnerHTML={{ __html: "{" }}></span>{" "}
                  {project.tag}{" "}
                  <span dangerouslySetInnerHTML={{ __html: "}" }}></span>
                </p>
                <div className="flex">
                  <div className="w-full">
                    <h3 className="text-4xl lg:text-[60px] flex-grow mb-7">
                      {project.name}
                    </h3>
                    <p className="text-gray-500 text-[15px] font-semibold flex items-center gap-2 flex-wrap">
                      {project.technology.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <Button className="text-nowrap w-fit">Learn more</Button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
