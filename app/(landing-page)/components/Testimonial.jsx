"use client";
import SectionHeaderTag from "@/components/SectionHeaderTag";
import Container from "@/components/shared/Container";
import { Asterisk } from "lucide-react";
import React from "react";
import InfiniteMovingCardsSection from "./InfinityMovingCardsSection";

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
            <span>
              Don’t take my <br /> word for it{" "}
              <Asterisk className="text-highlight inline size-10 -mt-10 xl:-mt-14 -ml-4" />
            </span>
          </h2>
          <p className="text-center text-gray-400 mt-5">
            <sup>
              <Asterisk className="text-highlight size-4 inline" />
            </sup>{" "}
            <span className="font-semibold text-[17px]">Take theirs</span>
          </p>
        </div>
      </Container>
      <InfiniteMovingCardsSection />
    </div>
  );
};

export default Testimonial;
