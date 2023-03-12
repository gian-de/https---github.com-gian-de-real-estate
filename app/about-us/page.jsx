"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MarqueeEmployeeSlider } from "../components/MarqueeSlider";

import HeroSrc from "../../public/about-us-hero-img.jpg";
import MeetOurTeam from "../components/MeetOurTeam";
import Testimonials from "../components/TestimonialCarousel";
import ContactForm from "../components/ContactForm";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="py-10 bg-gray-100 md:py-20">
        <div className="flex flex-col items-center justify-center max-w-4xl px-6 mx-auto space-y-6 text-center md:space-y-8">
          <p className="px-6 text-sm font-semibold uppercase sm:tracking-wider sm:text-md md:text-xl text-green-brand">
            england's premium rural property agency
          </p>
          <h2 className="text-2xl font-medium sm:text-4xl font-fraunces md:text-5xl">
            About our amazing team
          </h2>
          <div className="flex justify-between space-x-4 sm:space-x-8 md:space-x-10 lg:space-x-14">
            <div className="flex-col items-start justify-center w-1/4 text-center md:w-fit">
              <p className="text-2xl font-semibold md:text-3xl text-green-brand">
                32+
              </p>
              <p className="text-sm md:text-base">Team members</p>
            </div>
            <div className="flex-col items-start justify-center w-1/4 text-center md:w-fit">
              <p className="text-2xl font-semibold md:text-3xl text-green-brand">
                12+
              </p>
              <p className="text-sm md:text-base">Year's in business</p>
            </div>
            <div className="flex-col items-start justify-center w-1/4 text-center md:w-fit">
              <p className="text-2xl font-semibold md:text-3xl text-green-brand">
                918+
              </p>
              <p className="text-sm md:text-base">Clients helped</p>
            </div>
          </div>
        </div>
      </header>
      <section className="-mt-10 bg-gray-100 md:-mt-16">
        <MarqueeEmployeeSlider />
      </section>
      <section className="px-10 py-12 mx-auto max-w-7xl md:py-20">
        <div>
          <Image
            src={HeroSrc}
            className="object-cover"
            priority
            alt="large image of 4 people sitting together at a desk"
          />
        </div>
        <div className="flex flex-col items-center justify-center pt-10 md:pt-16">
          <div className="flex justify-center w-16 h-1 bg-green-brand" />
          <p className="max-w-3xl pt-6 text-xl font-medium text-center sm:text-2xl md:text-3xl md:px-6 font-fraunces">
            Providing exceptional customer service and creating lasting
            relationships with clients are at the core of our real estate
            company's goals. We aim to help individuals and families find their
            dream home while also maximizing their investment. Our view is that
            real estate is not just a transaction, but a means to improve lives
            and communities.
          </p>
        </div>
      </section>
      <section className="px-8 py-8 md:px-12 xl:px-6">
        <MeetOurTeam />
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="max-w-6xl px-8 py-12 mx-auto md:pt-20">
        <ContactForm />
      </section>
    </>
  );
};

export default AboutPage;
