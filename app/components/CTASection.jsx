import Image from "next/image";

import CTAButton from "./CTAButton";

const CTASection = ({ imgSrc, title, description, btnSrc, btnText }) => {
  return (
    <div className="container grid max-w-6xl gap-4 px-6 py-12 mx-auto space-y-4 lg:space-y-0 sm:px-10 xl:px-0 lg:grid-cols-2 md:py-16 lg:gap-12 lg:py-20">
      <div className="pt-2 overflow-hidden rounded-md lg:pt-0">
        <Image
          src={imgSrc}
          width="auto"
          height="auto"
          className="object-contain mx-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center pt-6 mx-auto space-y-6 text-center text-white lg:pt-0 lg:text-left lg:items-start">
        <h4 className="text-3xl font-fraunces md:text-4xl lg:text-5xl">
          {title}
        </h4>
        <p className="max-w-xs text-sm sm:max-w-md sm:text-base lg:text-lg">
          {description}
        </p>
        <CTAButton anchorSrc={btnSrc} text={btnText} />
      </div>
    </div>
  );
};

export default CTASection;
