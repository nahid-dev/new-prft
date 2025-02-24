"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller w-full relative z-20 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 px-8 py-6 md:w-[450px] flex flex-col gap-10"
            key={item.id}
          >
            <p className="flex items-center justify-end">
              <Image
                src="/custom-svg/quote.svg"
                alt="Quote"
                width={100}
                height={100}
                className="size-14"
              />
            </p>
            <blockquote className="text-white font-semibold text-[22px]">
              {item.quote}
            </blockquote>
            <div className="flex items-center gap-3">
              <div>
                <div className="size-16">
                  <Image
                    src={item.image}
                    alt="User Image"
                    width={450}
                    height={450}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-lg text-white">{item.name}</h4>
                <p className="text-gray-400 text-[15px]">
                  <span>{item.role}</span> @ <span>{item.company}</span>
                </p>
                <Link target="_blank" href={item.link} className="group">
                  <Image
                    src="/custom-svg/h-linkedin.svg"
                    alt="Social Logo"
                    width={60}
                    height={60}
                    loading="lazy"
                    className="size-5 group-hover:rotate-45 transition duration-200 inline"
                  />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
