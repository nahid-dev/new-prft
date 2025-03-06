import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TextInputField from '@/components/TextInputField';
import Button from '@/components/shared/common/Button';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleSendContactMessage = () => {
        if (!formData.name) {
            return toast.error("Please enter a name.")
        } else if (!formData.email || !formData.email.includes("@") || !formData.email.includes(".com")) {
            return toast.error("Please enter a valid email")
        } else if(!formData.message) {
            return toast.error("Please write a message.")
        } else {
            setFormData({
                name: "",
                email: "",
                message: ""
            })
            toast.success("Thank you for sending me a message!")
        }
    }
    return (
        <motion.div
        initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            className="p-10 rounded-md bg-white">
              <h4 className="text-lg md:text-3xl lg:text-4xl font-semibold pb-5">
                Let&apos;s get in touch
              </h4>
              <div
                className="gap-4 flex flex-col"
              >
                <div>
                  <TextInputField
                    id="name"
                    type="text"
                        placeholder="Name"
                        value={formData.name}
                    className="font-semibold"
                        onChange={(e) => setFormData({
                            ...formData,
                            name: e.target.value
                    })}
                  />
                </div>
                <div>
                  <TextInputField
                    id="name"
                    type="email"
                        placeholder="Email"
                        value={formData.email}
                    className="font-semibold"
                        onChange={(e) => setFormData({
                            ...formData,
                            email: e.target.value
                    })}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                        id="message"
                        value={formData.message}
                    className="bg-gray-50 p-5 rounded-md font-semibold w-full focus:outline-none"
                        placeholder="Leave me a message"
                        onChange={(e) => setFormData({
                            ...formData,
                            message: e.target.value
                        })}
                  ></textarea>
                </div>
                <Button onClick={handleSendContactMessage}>Send Message</Button>
              </div>
            </motion.div>
    );
};

export default ContactForm;