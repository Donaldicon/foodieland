import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import contact from '../assets/contact/contact-chef.png'

const ContactChef = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    enquiry: "Advertising",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 items-start mb-10 md:mb-20 px-[5%] bigScreens:px-[13%] font-Inter">
      <img src={contact} alt="" className=" md:w-[30%] max-h-[380px] object-contain"/>
      <form
        className="w-full md:w-[65%] bg-white dark:text-gray-200 dark:bg-gray-700 bg rounded-lg space-y-6 text-[10px] md:text-[14px] text-black text-opacity-60 "
      >
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 ">Name</label>
            <input
              type="text"
              name="name"
              className="border p-3 w-full rounded"
              placeholder="Enter your name..."
              required
            />
          </div>
          <div>
            <label className="block mb-1 ">Email Address</label>
            <input
              type="email"
              name="email"
              className="border p-3 w-full rounded"
              placeholder="Your email address..."
              required
            />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              className="border p-3 w-full rounded"
              required
              placeholder="Enter subject..."
            />
          </div>
          <div className="relative  text-black dark:text-gray-200 text-opacity-40">
            <label className="block mb-1 font-semibold">Enquiry Details</label>
            <div
              className="border p-3 w-full rounded flex justify-between items-center cursor-pointer bg-white text-black text-opacity-40"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {formData.enquiry || "Select an option"}
              <FontAwesomeIcon icon={faChevronDown} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </div>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-white border rounded-lg mt-[0px] w-full shadow-lg z-10 text-black text-opacity-40"
                >
                  {["Advertising", "General Inquiry", "Support", "Feedback"].map((option) => (
                    <li
                      key={option}
                      onClick={() => {
                        setFormData({ ...formData, enquiry: option });
                        setIsDropdownOpen(false);
                      }}
                      className="p-3 hover:bg-gray-100 cursor-pointer "
                    >
                      {option}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            className="border p-3 w-full rounded outline-black"
            placeholder="Enter your messages.."
            required
          ></textarea>
        </div>

        <div className="text-left mx-auto">
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactChef;
