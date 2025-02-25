"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const ProfileCard = ({ nameStyle }) => {
  const socialIconList = [
    {
      logo: "/logo/linkedin.png",
      href: "https://www.linkedin.com/in/md-abdul-khalek-dev/",
    },
    {
      logo: "/logo/facebook.png",
      href: "https://www.facebook.com/profile.php?id=100007464525154",
    },
    {
      logo: "/logo/github.png",
      href: "https://github.com/nahid-dev",
    },
  ];

  const supportElements = [11, 20, 27].reverse();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex items-center gap-6"
    >
      <div className="flex items-center">
        {/* SUPPORT ELEMENTS */}
        {[11, 20, 27].map((width, index) => (
          <motion.div
            key={index}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: (supportElements.length - index - 1) * 0.2,
              ease: "easeOut",
            }}
            className={`${
              width === 11
                ? "w-[11px]"
                : width === 20
                ? "w-[20px]"
                : width === 27
                ? "w-[27px]"
                : ""
            } overflow-hidden`}
          >
            <div
              style={{ borderRadius: "45px" }}
              className="bg-[#284056] size-[70px] xl:size-[90px]"
            ></div>
          </motion.div>
        ))}

        {/* PROFILE IMAGE */}
        <Image
          src="/images/me.png"
          alt="Person Image"
          width={300}
          height={300}
          loading="lazy"
          className="size-[70px] xl:size-[90px] rounded-full object-cover"
        />
      </div>

      {/* NAME AND ROLE */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-3"
      >
        <div>
          <h4 className={cn("text-xl font-semibold", nameStyle)}>
            Md Abdul Khalek
          </h4>
          <p className="text-[15px] font-medium text-gray-400">
            Software Developer - Frontend
          </p>
        </div>

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
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
