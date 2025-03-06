import React from "react";
import Button from "./shared/common/Button";

const ResumeViewModal = ({ setIsOpenResumeModal }) => {
  return (
    <div className="flex flex-col gap-3 h-full">
      {/* HEADER */}
      <div className="flex items-center justify-end">
        <Button size="sm" onClick={() => setIsOpenResumeModal(false)}>
          Close
        </Button>
      </div>

      {/* PDF VIEWER - Full height */}
      <div className="flex-grow">
        <iframe
          src="/resume_of_khalek.pdf"
          className="w-full h-full"
          title="PDF Preview"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeViewModal;
