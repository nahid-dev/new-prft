import SectionHeaderTag from "@/components/SectionHeaderTag";
import Container from "@/components/shared/Container";
import { Asterisk } from "lucide-react";
import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-dark py-20">
      <Container>
        <SectionHeaderTag
          title="{04} — Testimonials"
          className="justify-center"
        />
        <div>
          <h2 className="text-[50px] xl:text-[90px] text-white text-center leading-tight">
            <span>Don’t take my <br /> word for it <Asterisk className="text-highlight inline size-16 -mt-14" /></span>
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
