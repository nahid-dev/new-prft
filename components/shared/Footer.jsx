"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import SubTag from "./common/SubTag";
import { ArrowUp } from "lucide-react";
import ProfileCard from "./common/ProfileCard";
import HighlightButton from "./common/HighlightButton";
import Modal from "../modal/Modal";
import ResumeViewModal from "../ResumeViewModal";

const Footer = () => {
  const [isOpenResumeModal, setIsOpenResumeModal] = useState(false);
  const handleOpenResumeModal = () => {
    setIsOpenResumeModal((prev) => !prev);
  };

  const handleGoToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-dark">
      {/* FOOTER TOP SECTION */}
      <div className="border-b">
        <Container>
          <div className="flex items-center justify-between py-8">
            <SubTag className="text-white text-[15px]" />
            <div
              onClick={handleGoToTopButton}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="overflow-hidden">
                <p className="text-gray-400 text-[15px] font-semibold p-1 translate-y-3 group-hover:-translate-y-6 transition-all duration-300 leading-tight">
                  Back to top
                </p>
                <p className="text-white text-[15px] font-semibold p-1 translate-y-6 group-hover:-translate-y-3 transition-all duration-300 leading-tight">
                  Back to top
                </p>
              </div>
              <div className="bg-white inline-block rounded-full p-2.5">
                <ArrowUp className="text-foreground" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* FOOTER BOTTOM SECTION */}
      <div className="py-20 md:py-40 xl:bg-[url('/custom-svg/footer.svg')] bg-no-repeat ">
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <div>
                <h2 className="text-3xl md:text-[40px] xl:text-[70px] leading-none text-white text-center md:text-left">
                  Looking for a skilled developer? Let&apos;s build something
                  amazing together<span className="text-highlight">.</span>
                </h2>
              </div>
            </motion.div>

            <div className="xl:ml-24 flex flex-col gap-10 items-center xl:items-start mt-5 md:mt-0">
              {/* <ProfileCard nameStyle="text-white" /> */}
              <div>
                <p className="text-[15px] text-gray-400 font-semibold text-center md:text-left">
                  Contact me
                </p>
                <div className="space-y-5">
                  <p className="text-white text-2xl md:text-[40px] font-semibold text-center md:text-left">
                    khalek.2md<span className="text-highlight">@</span>gmail.com
                  </p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    className="text-gray-400 text-lg md:text-[22px] font-semibold text-center md:text-left"
                  >
                    Looking for a skilled{" "}
                    <span className="text-white">frontend developer</span> who
                    builds <span className="text-white">high-performance,</span>{" "}
                    scalable applications? Let’s connect!
                  </motion.p>
                </div>
              </div>
              <div>
                <HighlightButton
                  onClick={handleOpenResumeModal}
                  isGlowing={true}
                  animationType="fadeUpMid"
                >
                  View my resume
                </HighlightButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* RESUME MODAL */}
      <Modal open={isOpenResumeModal} setOpen={setIsOpenResumeModal}>
        <ResumeViewModal setIsOpenResumeModal={setIsOpenResumeModal} />
      </Modal>
    </div>
  );
};

export default Footer;
