"use client";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./common/Button";
import { motion } from "framer-motion";

const navItems = [
  { id: 1, name: "Projects", href: "/projects" },
  { id: 2, name: "About & Contact", href: "/about_&_contact" },
];

const menuVariant = {
  open: { rotate: -45, y: 6 },
  close: { rotate: 0, y: 0 },
};
const menuVariant2 = {
  open: { rotate: 45, y: -6 },
  close: { rotate: 0, y: 0 },
};

const Navbar = () => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);

  return (
    <nav className="bg-transparent border-b fixed w-full top-0">
      {/* TOP NAVBAR */}
      <div className="px-6 md:px-10 py-4 md:py-8 flex items-center justify-between bg-white md:bg-transparent">
        {/* LEFT PART (LOGO) */}
        <div className="flex items-center gap-3">
          <CodeXml strokeWidth={3} color="#91ff2e" className="size-8" />
          <p className="flex items-center gap-1 text-xl lg:text-2xl">
            <span className="font-bold">Abdul</span> <span>Khalek</span>
          </p>
        </div>

        {/* MIDDLE (MENU ITEMS - Desktop) */}
        <ul className="items-center gap-3 hidden md:flex">
          {navItems.map((nav) => (
            <li key={nav.id}>
              <Link className="text-[17px] font-semibold" href={nav.href}>
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE (CONTACT - Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <p className="text-[15px] font-semibold">
            <span className="text-gray-500 hidden lg:inline">Email: </span>
            <span>khalek.2md@gmail.com</span>
          </p>
          <Button className="text-nowrap">Contact me</Button>
        </div>

        {/* MOBILE MENU ICON */}
        <div
          onClick={() => setIsMenuToggle((prev) => !prev)}
          className="bg-white shadow-md p-3 rounded-full hover:bg-gray-50 cursor-pointer md:hidden"
        >
          <div className="flex flex-col gap-1 items-end size-4 justify-center">
            <motion.span
              variants={menuVariant}
              animate={isMenuToggle ? "open" : "close"}
              transition={{ duration: 0.3 }}
              className={`${
                isMenuToggle ? "w-full" : "w-1/2"
              } h-0.5 bg-foreground block`}
            ></motion.span>
            <motion.span
              animate={{ opacity: isMenuToggle ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-foreground block"
            ></motion.span>

            <motion.span
              variants={menuVariant2}
              animate={isMenuToggle ? "open" : "close"}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-foreground block"
            ></motion.span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (ANIMATED EXPAND) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isMenuToggle
            ? { height: "max-content", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden bg-white"
      >
        <div className="flex flex-col md:hidden gap-5 pt-10 pb-5">
          <ul className="flex flex-col items-center gap-3">
            {navItems.map((nav) => (
              <li key={nav.id}>
                <Link className="text-[17px] font-semibold" href={nav.href}>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center gap-3">
            <p className="text-[15px] font-semibold flex flex-col items-center">
              <span className="text-gray-500  lg:inline">Email: </span>
              <span>khalek.2md@gmail.com</span>
            </p>
            <div className="flex justify-center">
              <Button className="text-nowrap w-fit">Contact me</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
