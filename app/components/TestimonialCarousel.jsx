"use client";

import { useState, useRef } from "react";

import ArrowRight from "./svg/ArrowRight";

const data = [
  {
    id: 1,
    title: '"Working with Next Propety was a seamless experience"',
    description:
      '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."',
    name: "Dave Walker",
    company: "Deer Park",
  },
  {
    id: 2,
    title: '"The best agents in town"',
    description:
      '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."',
    name: "Susan James",
    company: "Plus Pets co.",
  },
  {
    id: 3,
    title: '"Simply an amazing team"',
    description:
      '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."',
    name: "Jimmy Adams",
    company: "Jim Logics",
  },
  {
    id: 4,
    title: '"Just bought our dream home"',
    description:
      '"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."',
    name: "Mr. and Mrs. Clark",
    company: "",
  },
  {
    id: 5,
    title: '"Fantastic team to work with!"',
    description:
      '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."',
    name: "Jimmy Adams",
    company: "Jim Logics",
  },
];

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideWidthRef = useRef(null);

  return (
    <div className="flex flex-col overflow-hidden py-14 md:py-20 bg-green-dark">
      <div
        id="testimonial-carousel"
        ref={slideWidthRef}
        className="flex items-start gap-8 px-14 scroll-smooth sm:gap-14 sm:mx-0 sm:min-w-[80rem] lg:min-w-[140rem]"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full border-2 rounded-md sm:w-1/2 lg:w-1/3 xl:w-1/4 border-green-brand"
          >
            <div className="flex flex-col p-6 space-y-3 bg-transparent md:space-y-5 text-slate-50">
              <h5 className="flex text-2xl md:text-3xl lg:text-4xl font-fraunces">
                {item.title}
              </h5>
              <p className="flex text-lg md:text-xl text-slate-50/80">
                {item.description}
              </p>
              <div className="flex items-center space-x-1 text-lg font-medium whitespace-nowrap">
                <p className="flex">{item.name}</p>
                <span className="flex text-green-400">
                  {item.company ? "-" : null}
                </span>
                <p className="flex text-green-400">{item?.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {data.length > 1 && (
        <div className="flex mt-5 space-x-4 ml-14 sm:ml-32 md:ml-56 w-fit text-slate-100">
          <button className="p-4 rounded-full bg-[#7C9C714D] -rotate-180 hover:bg-black transition-colors duration-200 ease">
            <ArrowRight />
          </button>
          <button className="p-4 transition-colors duration-200 rounded-full bg-green-brand hover:bg-black ease">
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
