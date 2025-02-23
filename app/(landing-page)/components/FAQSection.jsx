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
        <div className="py-20 bg-white">
            <Container>
                <SectionHeaderTag title="{05} — FAQ" className="justify-center" />
                <h4 className="text-[50px] xl:text-[90px] text-center">
                    Got Questions?
                </h4>
                {/* ACCORDION SECTION */}
                <div className="w-2/3 mx-auto flex flex-col gap-3">
                    {faqs.map((faq, index) => (
                        <div 
                            key={faq.id} 
                            className={` ${activeIndices.includes(index) ? "border-white" : "border-gray-300"} border  cursor-pointer p-7 rounded-xl transition-colors duration-300`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h6 className="text-xl font-semibold flex gap-3">
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
                                        <p className="text-gray-400 text-[15px] font-semibold w-4/5 pt-3">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default FAQSection;
