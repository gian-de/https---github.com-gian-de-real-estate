import React from "react";
import Image from "next/image";

import CTAButton from "./CTAButton";

import CtaImg from "../../public/cta-img-left.jpg";

const CTAImageLeft = () => {
  return (
    <div className="container grid max-w-6xl gap-4 px-6 py-12 mx-auto space-y-4 lg:space-y-0 sm:px-10 xl:px-0 lg:grid-cols-2 md:py-16 lg:gap-12 lg:py-20">
      <div className="pt-2 overflow-hidden rounded-md sm:px-20 lg:px-0 lg:pt-0">
        <Image
          src={CtaImg}
          width="auto"
          height="auto"
          className="object-contain mx-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center pt-6 mx-auto space-y-6 text-center text-gray-900 lg:pt-0 lg:text-left lg:items-start">
        <h4 className="text-2xl font-fraunces sm:text-3xl md:text-4xl lg:text-5xl">
          Get your property <br className="hidden sm:block" /> valued,{" "}
          <span className="ml-1 text-green-brand">for free</span>
        </h4>
        <p className="max-w-sm text-sm md:text-base">
          Thanks to company, we sold our home in under one month. The team was
          great to work with, true professionals.
        </p>
        <CTAButton anchorSrc="/appraisal" text="Get your free appraisal" />
      </div>
    </div>
  );
};

export default CTAImageLeft;
