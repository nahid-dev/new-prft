'use client'
import React, { useState } from "react";
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
      <div className="border py-40 xl:bg-[url('/custom-svg/footer.svg')] bg-no-repeat">
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <div>
              <h2 className="text-[40px] xl:text-[70px] leading-none text-white">
                Looking for a skilled developer? Let&apos;s build something
                amazing together<span className="text-highlight">.</span>
              </h2>
            </div>
            <div className="xl:ml-24 flex flex-col gap-10 items-center xl:items-start">
              <ProfileCard nameStyle="text-white" />

              <div>
                <p className="text-[15px] text-gray-400 font-semibold">
                  Contact me
                </p>
                <div className="space-y-5">
                  <p className="text-white text-[40px] font-semibold">
                    khalek.2md<span className="text-highlight">@</span>gmail.com
                  </p>
                  <p className="text-gray-400 text-[22px] font-semibold">
                    Looking for a skilled{" "}
                    <span className="text-white">frontend developer</span> who
                    builds <span className="text-white">high-performance,</span>{" "}
                    scalable applications? Let’s connect!
                  </p>
                </div>
              </div>
              <div>
                <HighlightButton
                  onClick={handleOpenResumeModal}
                  isGlowing={true}
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
