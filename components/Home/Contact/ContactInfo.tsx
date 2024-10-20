import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-8">
      <div className="flex items-center space-x-6 w-full max-w-md">
        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900">
          <FaPhone className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg sm:text-xl font-bold text-white">Phone No</h1>
          <a
            href={`tel:${contactData.phone}`}
            className="text-base sm:text-lg text-white text-opacity-70"
          >
            {contactData.phone}
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-6 w-full max-w-md">
        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900">
          <FaEnvelope className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg sm:text-xl font-bold text-white">Email</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.email}
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-6 w-full max-w-md">
        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900">
          <FaMap className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg sm:text-xl font-bold text-white">Address</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
