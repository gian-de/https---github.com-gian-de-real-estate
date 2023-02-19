"use client";
import Image from "next/image";

import Marquee from "react-fast-marquee";

import house1 from "public/pexels-house-1.jpg";
import house2 from "public/pexels-house-2.jpg";
import house3 from "public/pexels-house-3.jpg";
import house4 from "public/pexels-house-4.jpg";
import house5 from "public/pexels-house-5.jpg";
import house6 from "public/pexels-house-6.jpg";
import house7 from "public/pexels-house-7.jpg";
import house8 from "public/pexels-house-8.jpg";
import house9 from "public/pexels-house-9.jpg";

import employee1 from "public/pexels-employee-1.jpg";
import employee2 from "public/pexels-employee-2.jpg";
import employee3 from "public/pexels-employee-3.jpg";
import employee4 from "public/pexels-employee-4.jpg";
import employee5 from "public/pexels-employee-5.jpg";
import employee6 from "public/pexels-employee-6.jpg";
import employee7 from "public/pexels-employee-7.jpg";

const houseImages = [
  { src: house1, id: "1" },
  { src: house2, id: "2" },
  { src: house3, id: "3" },
  { src: house4, id: "4" },
  { src: house5, id: "5" },
  { src: house6, id: "6" },
  { src: house7, id: "7" },
  { src: house8, id: "8" },
  { src: house9, id: "9" },
];

const employeeImages = [
  { src: employee1, id: "11", name: "Nicole Smith", job: "real estate agent" },
  { src: employee2, id: "12", name: "James Marshall", job: "head of sales" },
  {
    src: employee3,
    id: "13",
    name: "Sarah Harrison",
    job: "property manager",
  },
  { src: employee4, id: "14", name: "Clarke Davis", job: "vice president" },
  { src: employee5, id: "15", name: "Angela Steele", job: "real estate agent" },
  { src: employee6, id: "16", name: "Michael Prince", job: "director" },
  { src: employee7, id: "17", name: "Sammy Johnson", job: "real estate agent" },
];

export const MarqueeHouseSlider = () => {
  return (
    <div className="w-full">
      <Marquee speed={120} gradientWidth={50}>
        <div className="flex items-center gap-10 overflow-hidden md:gap-24">
          {houseImages.map(({ src, id }) => (
            <span
              key={id}
              className="flex w-48 h-56 md:h-[20rem] md:w-[28rem] shrink-0 md:last:mr-24 last:mr-10 cursor-pointer"
            >
              <Image
                className="object-cover transition-transform duration-150 ease-linear origin-center rounded-md hover:-rotate-2"
                src={src}
                alt="modern house that is move in ready, ready to be sold"
                priority
              />
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
export const MarqueeEmployeeSlider = () => {
  return (
    <div className="w-full">
      <Marquee speed={120} gradientWidth={50}>
        <div className="flex items-center gap-10 overflow-hidden md:gap-24">
          {employeeImages.map(({ src, id, name, job }) => (
            <div
              key={id}
              className="flex flex-col cursor-pointer group md:last:mr-24 last:mr-10"
            >
              <div
                key={id}
                className="flex w-56  h-80 md:h-[32rem] md:w-96 shrink-0 group-hover:scale-105 transition-transform duration-150 ease-linear origin-center"
              >
                <Image
                  className="object-cover rounded-t-md"
                  src={src}
                  alt="employee image with name and job description"
                  priority
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center transition-transform duration-150 ease-linear origin-center bg-gray-100 group-hover:scale-105">
                <h3 className="w-full pt-4 pb-2 text-xl font-medium md:text-3xl ">
                  {name}
                </h3>
                <p className="w-full pb-4 text-sm uppercase md:text-xl text-orange-default">
                  {job}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
