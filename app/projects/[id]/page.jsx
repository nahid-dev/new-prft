"use client";
import React from "react";
import { motion } from "framer-motion";
import { projectDetails, projects } from "@/lib/options";
import Container from "@/components/shared/Container";
import { Asterisk } from "lucide-react";
import HighlightButton from "@/components/shared/common/HighlightButton";
import Image from "next/image";
import Link from "next/link";
import SectionHeaderTag from "@/components/SectionHeaderTag";
import RelatedProjectCard from "./components/RelatedProjectCard";
const ProjectDetails = ({ params }) => {
  const data = projectDetails.find(
    (project) => project.id === Number(params.id)
  );

  const handleSiteVisit = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="mt-[110px] pb-8 md:pb-10 xl:pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-[54px] xl:text-[86px] pt-10 leading-none">
            {data?.name}
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-16 pt-6 md:pt-12">
          <div className="col-span-3 md:col-span-1 ">
            <div className="flex flex-col sticky top-10">
              <div className="pb-3">
                <p className="text-[17px] opacity-80">Services</p>
                <p className="text-xl font-semibold">{data?.tag}</p>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="py-3">
                <p className="text-[17px] opacity-80">Technologies</p>
                <p className="text-xl font-semibold gap-2 flex flex-wrap">
                  {data.technology.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </p>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="py-3">
                <p className="text-[17px] opacity-80">Features</p>
                <ul className="text-xl font-semibold space-y-3">
                  {data.features.map((tech, index) => (
                    <li key={index} className="flex items-start gap-1">
                      <span>
                        <Asterisk className="text-highlight" />
                      </span>{" "}
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="py-3 ">
                <Link
                  href={data.github_repository}
                  target="_blank"
                  className="w-fit flex items-center gap-2 group cursor-pointer"
                >
                  <Image
                    src="/logo/github.png"
                    alt="Social Logo"
                    width={60}
                    height={60}
                    loading="lazy"
                    className="size-5"
                  />
                  <span className="text-lg font-semibold group-hover:text-highlight">
                    Check on GitHub
                  </span>
                </Link>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="pt-3">
                <HighlightButton
                  onClick={() => handleSiteVisit(data.live_demo)}
                  animationType="fadeUpMid"
                >
                  Visit website
                </HighlightButton>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 flex flex-col gap-8">
            <p className="text-lg md:text-[21px] xl:text-[26px] font-semibold leading-normal">
              {data.description}
            </p>
            <p className="font-semibold text-lg lg:text-xl opacity-80">
              {data.role}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <Image
                src={data.image_1}
                alt="Project Image"
                width={1440}
                height={1440}
                loading="lazy"
                className="object-fill w-full rounded-xl mb-5 lg:mb-14"
              />
            </motion.div>
            <p className="font-semibold text-lg lg:text-xl opacity-80">
              {data.overview}
            </p>
            {data?.image_2 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <Image
                  src={data.image_2}
                  alt="Project Image"
                  width={1440}
                  height={1440}
                  loading="lazy"
                  className="object-fill w-full rounded-xl mb-5 lg:mb-14"
                />
              </motion.div>
            ) : null}
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="py-12 lg:py-20"
          >
            <SectionHeaderTag title="Latest projects" />
            <h2 className="text-[40px] lg:text-[50px] xl:text-[90px] leading-tight">
              Some of my other stuff
            </h2>
          </motion.div>
          <div
            className="grid grid-cols-1 lg:grid-cols-3 rounded-2xl"
            style={{ border: "1px solid #4444" }}
          >
            {projects
              .filter((item) => item.id !== Number(params.id))
              .map((project, index) => (
                <RelatedProjectCard
                  project={project}
                  key={project.id}
                  cardTopClasses="pl-0 lg:pl-10 pb-8 lg:pb-[50px]"
                  isAnimated={false}
                  index={index}
                />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
