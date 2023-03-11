"use client";
import Image from "next/image";

import Marquee from "react-fast-marquee";

import house1 from "public/marquee-houses/pexels-house-1.jpg";
import house2 from "public/marquee-houses/pexels-house-2.jpg";
import house3 from "public/marquee-houses/pexels-house-3.jpg";
import house4 from "public/marquee-houses/pexels-house-4.jpg";
import house5 from "public/marquee-houses/pexels-house-5.jpg";
import house6 from "public/marquee-houses/pexels-house-6.jpg";
import house7 from "public/marquee-houses/pexels-house-7.jpg";
import house8 from "public/marquee-houses/pexels-house-8.jpg";
import house9 from "public/marquee-houses/pexels-house-9.jpg";

import employee1 from "public/employees/pexels-employee-1.jpg";
import employee2 from "public/employees/pexels-employee-2.jpg";
import employee3 from "public/employees/pexels-employee-3.jpg";
import employee4 from "public/employees/pexels-employee-4.jpg";
import employee5 from "public/employees/pexels-employee-5.jpg";
import employee6 from "public/employees/pexels-employee-6.jpg";
import employee7 from "public/employees/pexels-employee-7.jpg";
import Link from "next/link";

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
  {
    src: employee1,
    id: "11",
    name: "Nicole Smith",
    job: "real estate agent",
    slug: "nicole-smith",
  },
  {
    src: employee2,
    id: "12",
    name: "James Marshall",
    job: "head of sales",
    slug: "james-marshall",
  },
  {
    src: employee3,
    id: "13",
    name: "Sarah Harrison",
    job: "property manager",
    slug: "sarah-harrison",
  },
  {
    src: employee4,
    id: "14",
    name: "Clarke Davis",
    job: "vice president",
    slug: "clarke-davis",
  },
  {
    src: employee5,
    id: "15",
    name: "Angela Steele",
    job: "real estate agent",
    slug: "angela-steele",
  },
  {
    src: employee6,
    id: "16",
    name: "Michael Prince",
    job: "director",
    slug: "michael-prince",
  },
  {
    src: employee7,
    id: "17",
    name: "Sammy Johnson",
    job: "real estate agent",
    slug: "sammy-johnson",
  },
];

export const MarqueeHouseSlider = () => {
  return (
    <div className="w-full">
      <Marquee speed={120} gradientWidth={false}>
        <div className="flex items-center gap-10 py-10 md:gap-24">
          {houseImages.map(({ src, id }) => (
            <span
              key={id}
              className="flex w-80 h-48 md:h-64 md:w-[27rem] shrink-0 transition duration-300 ease md:last:mr-24 last:mr-10 cursor-pointer hover:-rotate-1 shadow-xl hover:shadow-green-200"
            >
              <Image
                className="object-cover rounded-sm"
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
      <Marquee speed={80} gradientWidth={false}>
        <div className="flex items-center gap-10 py-10 md:gap-24">
          {employeeImages.map(({ src, id, name, job, slug }) => (
            <Link
              href={`/team-members/${slug}`}
              key={id}
              className="flex flex-col transition-transform duration-150 ease-linear cursor-pointer drop-shadow-md hover:scale-105 md:last:mr-24 last:mr-10 hover:rotate-2 hover:shadow-lg hover:shadow-green-200"
            >
              <div
                key={id}
                className="flex w-56 sm:w-72 h-72 sm:h-80 shrink-0 "
              >
                <Image
                  className="object-cover rounded-t-md"
                  src={src}
                  alt="employee image with name and job description"
                  priority
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center bg-gray-100 rounded-b-md">
                <h3 className="w-full pt-4 pb-1 text-xl font-medium md:text-2xl font-fraunces">
                  {name}
                </h3>
                <p className="w-full pb-4 text-sm font-bold tracking-wide uppercase md:text-md text-green-brand">
                  {job}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
