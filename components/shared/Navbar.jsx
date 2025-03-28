"use client";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./common/Button";
import { motion } from "framer-motion";

const navItems = [
  { id: 1, name: "Projects", href: "/projects" },
  { id: 2, name: "About & Contact", href: "/about-and-contact" },
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
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 99 && currentScrollY > lastScrollY) {
        setHidden(true); // Hide when scrolling down past 99px
      } else {
        setHidden(false); // Show when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: hidden ? "-100%" : "0%", opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
      className={`fixed w-full top-0 z-50 ${
        lastScrollY > 99 ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* TOP NAVBAR */}
      <div className="py-4 lg:container mx-auto px-2 sm:px-3 md:py-8 flex items-center justify-between bg-white md:bg-transparent">
        {/* LEFT PART (LOGO) */}
        <Link
          onClick={() => setIsMenuToggle(false)}
          href="/"
          className="flex items-center gap-3"
        >
          <CodeXml strokeWidth={3} color="#91ff2e" className="size-8" />
          <p className="flex items-center gap-1 text-xl lg:text-2xl">
            <span className="font-bold">Abdul</span> <span>Khalek</span>
          </p>
        </Link>

        {/* MIDDLE (MENU ITEMS - Desktop) */}
        <ul className="items-center gap-3 hidden md:flex">
          {navItems.map((nav) => (
            <li key={nav.id} className="overflow-hidden">
              <Link
                className="text-[17px] font-semibold group "
                href={nav.href}
              >
                <p className="translate-y-3 group-hover:-translate-y-6 transition-all duration-300 leading-tight">
                  {nav.name}
                </p>
                <p className="translate-y-6 group-hover:-translate-y-3 transition-all duration-300 leading-tight">
                  {nav.name}
                </p>
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
          <Link href="/about-and-contact">
            <Button className="text-nowrap">Contact me</Button>
          </Link>
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
              <li onClick={() => setIsMenuToggle(false)} key={nav.id}>
                <Link className="text-[17px] font-semibold" href={nav.href}>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center gap-3">
            <p
              onClick={() => setIsMenuToggle(false)}
              className="text-[15px] font-semibold flex flex-col items-center"
            >
              <span className="text-gray-500  lg:inline">Email: </span>
              <span>khalek.2md@gmail.com</span>
            </p>
            <div className="flex justify-center mt-5">
              <Link
                onClick={() => setIsMenuToggle(false)}
                href="/about-and-contact"
              >
                <Button className="text-nowrap w-fit">Contact me</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
