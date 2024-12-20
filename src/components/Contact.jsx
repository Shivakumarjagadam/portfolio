import { CONTACT } from "../constants";
import { motion } from "motion/react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import {FaLinkedin,FaGithub} from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "225b18fa-2463-4b81-8b2b-f02d245ed73e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    
if (data.success) {
  setResult("Thank you for reaching out! I'll get back to you shortly.");
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Your message has been sent. You'll hear from me soon.",
    timer: 3000,
    showConfirmButton: false,
  });
  event.target.reset();
} else {
  console.log("Error", data);
  Swal.fire({
    icon: "error",
    title: "Oops!",
    text: "Something went wrong. Please try again.",
    timer: 3000,
    showConfirmButton: false,
  });
  setResult(data.message);
}


};

  return (
    <div id="contact" className="border-b border-neutral-900 pb-4 overflow-hidden mb-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center my-20 text-4xl"
      >
        Contact
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-4  overflow-hidden">
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl mb-8 w-full md:w-auto px-8 py-3 rounded bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent font-bold">
            Let's talk
          </h2>

          <p className="text-gray-300 text-xl mb-5 ">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8">
                <IoIosMail size={28}></IoIosMail>
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8">
                <FiPhoneCall size={28}></FiPhoneCall>
              </div>
              <p className="text-gray-300">{CONTACT.phoneNo}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8">
                 <FaLinkedin size={28}></FaLinkedin>
              </div>
              <a
                href="https://www.linkedin.com/in/shivakumar-jagadam-12559425a/"
                alt="Linkedin"
                className="text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8">
                <FaGithub size={28}></FaGithub>
              </div>
              <a
                href="https://github.com/Shivakumarjagadam"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Github
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mt-9"
        >
          <form onSubmit={onSubmit}>
            <div>
              <label className="text-gray-300 block mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-gray-300 block mb-2">Your Message</label>
              <textarea
                placeholder="Enter your message"
                rows="4"
                name="message"
                required
                className="w-full p-3 rounded bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-purple-500 resize-none"
              />
            </div>

            <button
              className="w-full md:w-auto px-8 py-3 rounded bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent font-bold   border border-neutral-700 hover:bg-gradient-to-r from-pink-800 to-orange-400 hover:text-white transition-colors"
              type="submit"
            >
              Submit now
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
