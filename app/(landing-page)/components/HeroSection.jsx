"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import ProfileCard from "@/components/shared/common/ProfileCard";
import SubTag from "@/components/shared/common/SubTag";
import Container from "@/components/shared/Container";
import React, { useRef, useState } from "react";
import MainHeading from "./MainHeading";
import HighlightButton from "@/components/shared/common/HighlightButton";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Modal from "@/components/modal/Modal";
import ResumeViewModal from "@/components/ResumeViewModal";

const HeroSection = () => {
  const ref = useRef();
  const [isOpenResumeModal, setIsOpenResumeModal] = useState(false);
  const handleOpenResumeModal = () => {
    setIsOpenResumeModal((prev) => !prev);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const slowScroll = useTransform(scrollYProgress, [0, 1], ["0px", "-200px"]);

  return (
    <div ref={ref} className="py-20 relative">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <Container>
        <motion.div
          style={{ y: slowScroll }}
          className="grid grid-cols-3 relative z-10 mt-10 gap-10 lg:gap-0"
        >
          {/* LEFT SIDE - PROFILE SECTION */}
          <div className="col-span-3 xl:col-span-1 pt-10 lg:pt-20 xl:pt-32">
            <ProfileCard />
          </div>
          {/* RIGHT SIDE - HERO HEADING SECTION */}
          <div className="col-span-3 xl:col-span-2">
            <SubTag />
            <MainHeading />
          </div>
          {/* BOTTOM - LATEST WORK SITE */}
          <div className="col-span-3 lg:col-span-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl font-medium mt-10"
            >
              (2024-PRESENT)
            </motion.p>
          </div>
          <div className="col-span-3 lg:col-span-2 flex flex-col gap-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl mt-10"
            >
              I’m dedicated to crafting websites that bring your ideas to life,
              combining design and development to deliver fast, impactful
              results.
            </motion.p>
            <div>
              <HighlightButton
                onClick={handleOpenResumeModal}
                animationType="fadeUpMid"
              >
                View my resume
              </HighlightButton>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* RESUME MODAL */}
      <Modal open={isOpenResumeModal} setOpen={setIsOpenResumeModal}>
        <ResumeViewModal setIsOpenResumeModal={setIsOpenResumeModal} />
      </Modal>
    </div>
  );
};

export default HeroSection;
