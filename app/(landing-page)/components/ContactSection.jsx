import SectionHeaderTag from "@/components/SectionHeaderTag";
import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";

const contactData = [
  {
    id: 1,
    title: "Facebook",
    icon: "/logo/outline/facebook.png",
    link: "https://www.facebook.com/profile.php?id=100007464525154",
  },
  {
    id: 2,
    title: "Twitter/X",
    icon: "/logo/outline/x.png",
    link: "#",
  },
  {
    id: 3,
    title: "LinkedIn",
    icon: "/logo/outline/linkedin.png",
    link: "https://www.linkedin.com/in/md-abdul-khalek-dev/",
  },
  {
    id: 4,
    title: "GitHub",
    icon: "/logo/outline/github.png",
    link: "https://github.com/nahid-dev",
  },
];

const ContactSection = () => {
  return (
    <div className="py-5">
      <div
        className="py-28 relative"
        style={{
          backgroundImage: "url('/custom-svg/contact.svg')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <SectionHeaderTag title="{06} — Contact me" />
          <h2 className="text-[50px] xl:text-[90px] leading-tight">
            I’m all over the internet
          </h2>
          {/* CONTACT SECTION */}
          <div className="grid grid-col-1 md:grid-cols-3 gap-6 mt-10">
            {contactData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 rounded-xl shadow flex flex-col gap-10 group cursor-pointer border border-white hover:border-highlight transition-all duration-400"
              >
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <div className="flex justify-end">
                  <div className="bg-highlight rounded-full p-3">
                    <Image
                      src={item.icon}
                      alt="Contact Icon"
                      width={64}
                      height={64}
                      className="size-6"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div
              className="bg-highlight p-8 rounded-xl shadow flex flex-col gap-10 group cursor-pointer transition-all duration-400 group"
            >
              <h4 className="text-lg font-semibold group-hover:ml-2 transition-all duration-300">Get in touch</h4>
              <div className="flex justify-end">
                <div className="bg-highlight rounded-full p-3">
                  <Image
                    src="/logo/outline/arrow.png"
                    alt="Contact Icon"
                    width={64}
                    height={64}
                    className="size-6 group-hover:mr-2 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactSection;
