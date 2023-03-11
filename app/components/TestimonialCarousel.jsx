"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

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

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const swiperRef = useRef(null);

  const handlePrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleBreakpointChange = () => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1340) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };
  // this useEffect is to render either 1, 2, or 3 slides depending on the vw
  useEffect(() => {
    window.addEventListener("resize", handleBreakpointChange);

    return () => window.removeEventListener("resize", handleBreakpointChange);
  }, []);

  return (
    <div className="py-20 text-white bg-green-dark">
      <Swiper
        className="px-10 lg:px-16"
        ref={swiperRef}
        spaceBetween={80}
        slidesPerView={slidesPerView}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col max-w-2xl p-8 mx-auto space-y-4 border-2 rounded-lg shadow-md border-green-brand bg-green-dark text-slate-100">
              <h4 className="flex text-2xl md:text-3xl lg:text-4xl font-fraunces ">
                {testimonial.title}
              </h4>
              <p className=" lg:text-lg text-slate-100/70">
                {testimonial.description}
              </p>
              <div className="flex items-center">
                <div className="flex items-center space-x-1 text-lg font-medium whitespace-nowrap">
                  <p className="flex">{testimonial.name}</p>

                  <span className="flex text-green-400">
                    {testimonial.company ? "-" : null}
                  </span>
                  <p className="flex text-green-400">{testimonial?.company}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex mt-5 space-x-4 ml-14 sm:ml-32 w-fit text-slate-100">
          <button
            onClick={handlePrevButtonClick}
            className="p-4 rounded-full bg-[#7C9C714D] -rotate-180 hover:bg-black transition-colors duration-200 ease"
          >
            <ArrowRight />
          </button>

          <button
            onClick={handleNextButtonClick}
            className="p-4 transition-colors duration-200 rounded-full bg-green-brand hover:bg-black ease"
          >
            <ArrowRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
