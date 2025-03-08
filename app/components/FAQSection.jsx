'use client'
import SectionHeaderTag from "@/components/SectionHeaderTag";
import Container from "@/components/shared/Container";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const faqs = [
    {
        id: 1, 
        question: "What technologies do you specialize in?",
        answer: "I specialize in React.js, Next.js, Tailwind CSS, Node.js, and MongoDB/PostgreSQL for full-stack development."
    },
    {
        id: 2,
        question: "Do you have experience with scalable applications?",
        answer: "Yes, I have worked on optimizing performance, implementing server-side rendering, and managing database queries for scalability."
    },
    {
        id: 3,
        question: "Have you worked with backend APIs and databases?",
        answer: "Yes, I have integrated RESTful APIs and worked with databases like MongoDB and PostgreSQL, ensuring efficient data handling."
    },
    {
        id: 4,
        question: "Are you open to remote or on-site roles?",
        answer: "Yes, I am open to both remote and on-site opportunities based on project requirements."
    }
]

const FAQSection = () => {
    const [activeIndices, setActiveIndices] = useState([]);
    const toggleAccordion = (index) => {
        setActiveIndices(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
      <div className="py-10 md:py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <SectionHeaderTag
              title="{05} — FAQ"
              className="justify-start md:justify-center"
            />
            <h4 className="text-[40px] md:text-[50px] xl:text-[90px] md:text-center">
              Got Questions?
            </h4>
          </motion.div>
          {/* ACCORDION SECTION */}
          <div className="md:w-2/3 mx-auto flex flex-col gap-3">
            {faqs.map((faq, index) => (
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                key={faq.id}
                className={` ${
                  activeIndices.includes(index)
                    ? "border-white"
                    : "border-gray-300"
                } border  cursor-pointer p-4 md:p-7 rounded-xl transition-colors duration-300`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h6 className="text-base md:text-xl font-semibold flex gap-3">
                    <span className="text-gray-400">0{faq.id}/</span>{" "}
                    <span>{faq.question}</span>
                  </h6>
                  <motion.div
                    className="bg-gray-200 rounded-full p-2"
                    animate={{ rotate: activeIndices.includes(index) ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="text-foreground size-6" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {activeIndices.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm md:text-[15px] font-semibold w-4/5 pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    );
};

export default FAQSection;
