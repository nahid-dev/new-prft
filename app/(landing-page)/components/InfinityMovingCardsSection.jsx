"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

const data = [
  {
    id: 1,
    name: "Shamim Bin Zahid",
    image: "/images/shamim.jpg",
    role: "Product Manager",
    company: "REPLIQ Limited",
    link: "https://www.linkedin.com/in/shamemezahid/",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit voluptatum, laudantium nulla distinctio molestias?",
  },
  {
    id: 2,
    name: "Md Tanjil",
    image: "/images/tanjil.jpg",
    role: "Team Lead (Frontend)",
    company: "REPLIQ Limited",
    link: "https://www.linkedin.com/in/iamtanjil/",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit voluptatum, laudantium nulla distinctio molestias?",
  },
  {
    id: 3,
    name: "Sanoth Debnath",
    image: "/images/sanoth.jpg",
    role: "Software Developer (Backend)",
    company: "REPLIQ Limited",
    link: "https://www.linkedin.com/in/sanoth-debnath/",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit voluptatum, laudantium nulla distinctio molestias?",
  },
];
export default function InfiniteMovingCardsSection() {
  return (
    <div className=" bg-dark items-center justify-center relative overflow-hidden py-20">
      <InfiniteMovingCards
        items={data}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  );
}


