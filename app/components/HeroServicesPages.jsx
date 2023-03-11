"use client";

import Image from "next/image";
import CTAButton from "./CTAButton";

const HeroServicesPages = ({
  description,
  title,
  clientsNum,
  propertiesNum,
  btnText,
  btnAnchorSrc,
  imgSrc,
}) => {
  return (
    <header className="grid py-10 lg:py-20 lg:grid-cols-2 lg:gap-x-0 gap-y-12 lg:gap-y-0">
      <div className="flex flex-col items-center justify-center mx-auto space-y-6 text-center lg:text-left lg:items-start md:space-y-8">
        <p className="text-base font-semibold tracking-widest uppercase text-green-brand">
          {description}
        </p>
        <h2 className="max-w-md text-4xl font-medium md:max-w-lg md:text-5xl xl:text-6xl xl:max-w-xl font-fraunces lg:pr-8">
          {title}
        </h2>
        <div className="flex space-x-12">
          <div className="flex flex-col">
            <div className="text-3xl font-semibold text-green-brand">{`${clientsNum}+`}</div>
            <div className="text-sm">Clients served</div>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-semibold text-green-brand">{`${propertiesNum}+`}</div>
            <div className="text-sm">Properties sold</div>
          </div>
        </div>
        <CTAButton text={btnText} anchorSrc={btnAnchorSrc} />
      </div>
      <div className="overflow-hidden rounded-md">
        <Image
          src={imgSrc}
          alt={title}
          className="object-cover h-80 sm:h-[26rem]"
        />
      </div>
    </header>
  );
};

export default HeroServicesPages;
