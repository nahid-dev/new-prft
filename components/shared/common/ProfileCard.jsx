import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard = () => {
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
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center">
        <div className="w-[11px] overflow-hidden">
          <div
            style={{
              borderRadius: "45px",
            }}
            className="bg-[#284056] h-[70px] w-[70px]"
          ></div>
        </div>
        <div className="w-[20px] overflow-hidden">
          <div
            style={{
              borderRadius: "45px",
            }}
            className="bg-[#284056] h-[70px] w-[70px]"
          ></div>
        </div>
        <div className="w-[27px] overflow-hidden">
          <div
            style={{
              borderRadius: "45px",
            }}
            className="bg-[#284056] h-[70px] w-[70px]"
          ></div>
        </div>

        <Image
          src="/images/me.png"
          alt="Person Image"
          width={300}
          height={300}
          className="size-[70px] rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="text-xl font-semibold">Md Abdul Khalek</h4>
          <p className="text-[15px] font-medium text-gray-400">
            Software Developer - Frontend
          </p>
        </div>
        {/* SOCIAL ICON */}
        <div className="flex items-center gap-3">
          {socialIconList?.map((item, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
