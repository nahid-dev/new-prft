import { CodeXml } from "lucide-react";
import Link from "next/link";
import React from "react";
import Button from "./common/Button";

const navItems = [
  {
    id: 1,
    name: "Projects",
    query: "projects",
    href: "/projects",
  },
  {
    id: 2,
    name: "About & Contact",
    query: "about_&_contact",
    href: "/about_&_contact",
  },
];

const Navbar = () => {
  return (
    <nav className="px-10 py-8 bg-transparent flex items-center justify-between border-b">
      {/* LEFT PART (LOGO) */}
      <div className="flex items-center gap-3">
        <CodeXml strokeWidth={3} color="#91ff2e" className="size-8" />
        <p className="flex items-center gap-1 text-2xl">
          <span className="font-bold">Abdul</span> <span>Khalek</span>
        </p>
      </div>
      {/* MIDDLE (MENU ITEMS) */}
      <ul className="flex items-center gap-3">
        {navItems.map((nav, index) => (
          <li key={nav.id}>
            <Link className="text-[17px] font-semibold" href={nav.href}>
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE (CONTACT) */}
      <div className="flex items-center gap-3">
        <p className="text-[15px] font-semibold">
          <span className="text-gray-500">Email: </span>
          <span>khalek.2md@gmail.com</span>
        </p>
        <Button>Contact me</Button>
      </div>
    </nav>
  );
};

export default Navbar;
