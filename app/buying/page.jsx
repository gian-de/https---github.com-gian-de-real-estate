"use client";
import { useEffect } from "react";

import HeroServicesPages from "../components/HeroServicesPages";
import AccordionComponent from "../components/AccordionComponent";
import CTAImageLeft from "../components/CTAImageLeft";
import CardProperty from "../components/CardProperty";
import MeetOurTeam from "../components/MeetOurTeam";
import Testimonials from "../components/TestimonialCarousel";
import CTAEmailInput from "../components/CTAEmailInput";
import ContactForm from "../components/ContactForm";

import HeroSrc from "../../public/buying-heropage-image.jpg";
import Property1Src from "../../public/houses-featured/cosy-riverside-cottage.jpg";
import Property2Src from "../../public/houses-featured/charming-classic-home.jpg";
import Property3Src from "../../public/houses-featured/private-lifestyle-block.jpg";

import CTAImageSrc from "../../public/pexels-guide-books.jpg";

const BuyingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-gray-50">
        <div className="container px-6 mx-auto sm:px-10 md:px-16 xl:px-0 max-w-7xl ">
          <HeroServicesPages
            description="cotswolds real estate agents"
            title="Buy with England's top rural agency"
            clientsNum="234"
            propertiesNum="883"
            btnText="View available properties"
            btnAnchorSrc="/properties-for-sale"
            imgSrc={HeroSrc}
          />
        </div>
      </div>
      <section className="py-16">
        <h3 className="flex py-4 mx-auto space-x-2 text-3xl font-medium text-center w-fit sm:text-4xl l font-fraunces">
          Four <span className="flex px-2 text-green-brand">simple</span> steps
          to buy
        </h3>
        <AccordionComponent
          heading1="Secure your finance"
          heading2="Contact an agent"
          heading3="View properties"
          heading4="Time to buy"
        />
      </section>
      <section className="py-6 bg-gray-100">
        <CTAImageLeft />
      </section>
      <section className="py-12 space-y-10 bg-gray-200 lg:space-y-12 md:py-20">
        <h4 className="px-5 text-4xl font-medium text-center font-fraunces whitespace-nowrap md:text-5xl">
          Featured properties
        </h4>
        <div className="container grid max-w-6xl gap-10 px-16 mx-auto sm:gap-6 sm:grid-cols-2 sm:px-8 lg:px-8 lg:grid-cols-3 xl:px-4 lg:gap-y-0 lg:gap-x-6">
          <CardProperty
            imgSrc={Property1Src}
            slug="/properties/cosy-riverside-cottage"
            date="January 15, 2023"
            title="Cosy riverside cottage, the perfect retreat"
            description="This property is ideal for a family looking to settle down"
            bedQty="4"
            bathQty="2"
            roomQty="1"
            carGarageQty="2"
          />

          <CardProperty
            imgSrc={Property2Src}
            slug="/properties/charming-classic-home"
            date="March 15, 2023"
            title="Charming classic home with modern interior"
            description="This property is ideal for a family looking to settle down"
            bedQty="2"
            bathQty="1"
            roomQty="1"
            carGarageQty="3"
          />

          <CardProperty
            imgSrc={Property3Src}
            slug="/properties/private-lifestyle-block-hidden-behind-a-lodge"
            date="March 22, 2023"
            title="Private lifestyle block hidden behind a hedge"
            description="This property is ideal for a family looking to settle down"
            bedQty="6"
            bathQty="3"
            roomQty="3"
            carGarageQty="2"
          />
        </div>
      </section>
      <section className="px-8 py-12 ">
        <MeetOurTeam />
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="px-6 py-12 sm:px-10 md:py-20">
        <CTAEmailInput
          imgSrc={CTAImageSrc}
          title="The definitive guide"
          titleExtra="to Cotswolds property"
          text="The definitive guide to buying & selling property in Whitby, start learning now."
          checkText1="Where to buy"
          checkText2="Get started with investing"
          checkText3="Future market analysis"
        />
      </section>
      <section className="px-6 py-16 md:py-20">
        <ContactForm />
      </section>
    </>
  );
};

export default BuyingPage;
