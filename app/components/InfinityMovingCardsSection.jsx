"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

const data = [
  {
    id: 1,
    name: "Shamim Bin Zahid",
    image: "/images/shamim.jpg",
    role: "Product Manager",
    link: "https://www.linkedin.com/in/shamemezahid/",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit voluptatum, laudantium nulla distinctio molestias?",
  },
  {
    id: 2,
    name: "Md Tanjil",
    image: "/images/tanjil.jpg",
    role: "Team Lead (Frontend)",
    link: "https://www.linkedin.com/in/iamtanjil/",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit voluptatum, laudantium nulla distinctio molestias?",
  },
  {
    id: 3,
    name: "Sanoth Debnath",
    image: "/images/sanoth.jpg",
    role: "Software Developer (Backend)",
    link: "https://www.linkedin.com/in/sanoth-debnath/",
    quote:
      "I had the pleasure of working with Md. Abdul Khalek for over a year on a recruitment management project. He expertly managed the frontend, kept up with the latest technologies, and handled client sprint updates professionally. A true team player, he consistently delivered high-quality work. I highly recommend him.",
  },
  {
    id: 4,
    name: "Joy Barman",
    image: "/images/joy.jpg",
    role: "Software Developer (Backend)",
    link: "https://www.linkedin.com/in/joy-barman/",
    quote:
      "Md. Abdul Khalek is an exceptional frontend developer who played a crucial role in building the frontend of our recruitment management platform. His deep understanding of modern web technologies, ability to translate complex requirements into seamless user experiences, and commitment to delivering high-quality work made him a valuable asset to the team. He is proactive, detail-oriented, and always ready to tackle challenges with a positive attitude. I highly recommend him to anyone looking for a skilled and reliable frontend developer.",
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
