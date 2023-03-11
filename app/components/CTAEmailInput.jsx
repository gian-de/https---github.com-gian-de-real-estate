"use client";
import { useState } from "react";

import Image from "next/image";
import Checkmark from "./svg/Checkmark";
import CTAButton from "./CTAButton";

const CTAEmailInput = ({
  imgSrc,
  title,
  titleExtra,
  text,
  checkText1,
  checkText2,
  checkText3,
}) => {
  const checkData = [checkText1, checkText2, checkText3];
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div className="grid max-w-5xl pb-10 mx-auto bg-gray-200 rounded-md md:pb-0 md:grid-cols-2">
      <div className="mx-auto my-10 overflow-hidden border-2 rounded-md md:m-8 border-green-brand ">
        <Image
          className="object-cover w-60 h-72 md:h-[28rem] md:w-[32rem]"
          src={imgSrc}
          alt="alt text"
        />
      </div>
      <div className="flex flex-col px-6 md:px-2 justify-center max-w-sm mx-auto space-y-4 sm:ml-[25%] md:ml-0 md:max-w-md">
        <h4 className="flex-col text-3xl font-medium text-green-brand font-fraunces md:text-4xl ">
          {title} <span className="text-black ">{titleExtra}</span>
        </h4>
        <p className="pr-3 mx-auto text-base md:text-lg">{text}</p>
        {checkData.map((text, idx) => (
          <div className="flex space-x-2" key={idx}>
            <span className="text-green-brand">
              <Checkmark />
            </span>
            <p className="font-semibold">{text}</p>
          </div>
        ))}
        <div className="flex pr-4">
          <form
            onClick={handleSubmit}
            className="flex justify-between w-full space-x-5"
          >
            <input
              type="email"
              placeholder="email@example.com"
              name="email"
              value={email}
              onChange={handleForm}
              required
              className="w-full px-4 py-2 text-sm rounded-full ring-1 ring-gray-400"
            />

            <CTAButton anchorSrc="/" text="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTAEmailInput;
