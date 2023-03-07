"use client";
import { useState } from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";

import ContactFormSrc from "../../public/contactForm-person-sitting.jpg";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:space-x-5 lg:flex-row md:px-8 lg:px-0 lg:items-center lg:justify-center">
      <div className="flex-col p-6 transition ease-in-out bg-white rounded-md shadow-2xl lg:w-[40%] duration-400 hover:drop-shadow-xl">
        <h3 className="flex py-2 text-3xl font-medium sm:text-4xl font-fraunces">
          Contact Us
        </h3>
        <p className="py-4 text-gray-800">Reach out and send us a message!</p>
        <form className="grid grid-cols-2 gap-6 pb-3 my-auto">
          <div className="flex-col space-y-2">
            <label
              htmlFor="name"
              className="flex text-sm font-semibold text-gray-600 "
            >
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="flex-1 w-full px-3 py-2 text-sm bg-gray-100 rounded-full ring-1 ring-gray-300"
            />
          </div>
          <div className="flex-col w-full space-y-2">
            <label
              htmlFor="phone"
              className="flex text-sm font-semibold text-gray-600 "
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="(713)555-5555"
              className="flex-1 w-full px-3 py-2 text-sm bg-gray-100 rounded-full ring-1 ring-gray-300"
            />
          </div>
          <div className="flex-col space-y-2">
            <label
              htmlFor="name"
              className="flex text-sm font-semibold text-gray-600 "
            >
              Email*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="example@test.com"
              className="flex-1 w-full py-2 pl-3 text-sm bg-gray-100 rounded-full ring-1 ring-gray-300"
            />
          </div>
          <div className="flex-col w-full space-y-2">
            <label
              htmlFor="interest"
              className="flex text-sm font-semibold text-gray-600"
            >
              Area of interest
            </label>
            <select
              id="interest"
              name="interest"
              className="flex-1 w-full py-2 pl-3 text-sm bg-gray-100 rounded-full cursor-pointer ring-1 ring-gray-300"
            >
              <option value="null">Select one...</option>
              <option value="buying">Buying property</option>
              <option value="management">Property management</option>
              <option value="enquiry">General enquiry</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex-col w-full col-span-2 space-y-2">
            <label
              htmlFor="text-area"
              className="flex text-sm font-semibold text-gray-600"
            >
              How can we help?
            </label>
            <textarea
              type="text"
              id="name"
              name="name"
              rows="4"
              cols="50"
              placeholder="Enter message here"
              className="flex-1 w-full p-5 text-sm bg-gray-100 rounded-md ring-1 ring-gray-300"
            ></textarea>
          </div>
          <CTAButton anchorSrc="/" text="Submit" />
        </form>
      </div>
      <div className="hidden overflow-hidden bg-red-400 rounded-md lg:flex h-[40rem] w-[32rem]">
        <Image src={ContactFormSrc} className="object-cover" />
      </div>
    </div>
  );
};

export default ContactForm;
