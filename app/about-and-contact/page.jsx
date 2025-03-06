"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeaderTag from "@/components/SectionHeaderTag";
import Container from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import { socialIconList } from "@/lib/options";
import HighlightButton from "@/components/shared/common/HighlightButton";
import Modal from "@/components/modal/Modal";
import ResumeViewModal from "@/components/ResumeViewModal";
import ContactForm from "./components/ContactForm";

const AboutAndContactPage = () => {
  const [isOpenResumeModal, setIsOpenResumeModal] = useState(false);
  const handleOpenResumeModal = () => {
    setIsOpenResumeModal((prev) => !prev);
  };
  return (
    <div className="mt-[110px] pb-8 md:pb-10 xl:pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="py-12 lg:py-20"
        >
          <SectionHeaderTag title="Available for projects" />
          <h2 className="text-[40px] lg:text-[50px] xl:text-[90px] leading-tight">
            About me
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex gap-5 justify-start flex-col md:flex-row">
            <div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="size-[70px] xl:size-[90px]"
              >
                <Image
                  src="/images/me.png"
                  alt="Person Image"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="size-[70px] xl:size-[90px] rounded-full"
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col-reverse md:flex-col gap-4">
                {/* SOCIAL ICONS */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  {socialIconList.map((item, index) => (
                    <Link
                      target="_blank"
                      href={item.href}
                      key={index}
                      className="group"
                    >
                      <Image
                        src={item.logo}
                        alt="Social Logo"
                        width={60}
                        height={60}
                        loading="lazy"
                        className="size-5 group-hover:rotate-45 transition duration-200"
                      />
                    </Link>
                  ))}
                </motion.div>
                <div>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    whileHover={{ x: 10 }}
                    className="text-2xl md:text-3xl lg:text-[32px] font-semibold cursor-pointer"
                  >
                    khalek.2md@gmail.com
                  </motion.p>
                </div>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="md:text-lg text-gray-500 font-semibold"
                >
                  I am Abdul Khalek, a passionate frontend developer
                  specializing in React.js, Next.js, and modern UI/UX design.
                  With 1 year of production experience, I focus on building
                  high-performance, visually stunning, and user-friendly web
                  applications.
                </motion.p>
              </div>
              <div>
                <HighlightButton
                  onClick={handleOpenResumeModal}
                  animationType="fadeUpMid"
                >
                  View my resume
                </HighlightButton>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="font-semibold md:text-lg lg:text-xl xl:text-2xl"
            >
              I&apos;m Abdul Khalek, a passionate frontend developer
              specializing in React.js, Next.js, and modern UI/UX design. With
              1.5 years of production experience, I focus on building
              high-performance, visually stunning, and user-friendly web
              applications.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:text-lg text-gray-500 font-semibold"
            >
              🚀 I enjoy working with Framer Motion, TailwindCSS, and headless
              CMS to craft engaging digital experiences. I am always exploring
              cutting-edge technologies to push the limits of modern web
              development.
            </motion.p>

            <p className="font-semibold md:text-lg">
              📞 Let’s create something amazing together!
            </p>
            <ContactForm />
          </div>
        </div>
      </Container>

      {/* RESUME MODAL */}
      <Modal open={isOpenResumeModal} setOpen={setIsOpenResumeModal}>
        <ResumeViewModal setIsOpenResumeModal={setIsOpenResumeModal} />
      </Modal>
    </div>
  );
};

export default AboutAndContactPage;
