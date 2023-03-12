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

import HeroSrc from "../../public/selling-your-home-src.jpg";
import Property1Src from "../../public/houses-sold/large-family-home.jpg";
import Property2Src from "../../public/houses-sold/hidden-gem-in-the-hills.jpg";
import Property3Src from "../../public/houses-sold/stylish-home-near-bently.jpg";

import CTAImageSrc from "../../public/pexels-guide-books.jpg";

const SellingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-gray-50">
        <div className="container px-6 mx-auto sm:px-10 md:px-16 xl:px-10 max-w-7xl ">
          <HeroServicesPages
            description="cotswolds real estate agents"
            title="Sell with the top rural agency in South England"
            clientsNum="234"
            propertiesNum="883"
            btnText="Get your free appraisal"
            btnAnchorSrc="/appraisal"
            imgSrc={HeroSrc}
          />
        </div>
      </div>
      <section className="py-16">
        <h3 className="flex py-4 mx-auto space-x-2 text-3xl font-medium text-center w-fit sm:text-4xl l font-fraunces">
          Four <span className="flex px-2 text-green-brand">simple</span> steps
          to sell
        </h3>
        <AccordionComponent
          heading1="Get your free appraisal"
          heading2="Initial chat"
          heading3="Listing Presentation"
          heading4="Go to Market!"
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
          <div className="flex flex-col h-full">
            <CardProperty
              sold={true}
              imgSrc={Property1Src}
              slug="/properties/large-family-home"
              title="Large family home surrounded by lawn"
              description="This property is ideal for a family looking to settle down"
              bedQty="5"
              bathQty="3"
              roomQty="2"
              carGarageQty="3"
            />
          </div>
          <div className="flex flex-col h-full">
            <CardProperty
              sold={true}
              imgSrc={Property2Src}
              slug="/properties/hidden-gem-in-the-hills"
              title="Hidden gem in the hills of Birmingham"
              description="This property is ideal for a family looking to settle down"
              bedQty="4"
              bathQty="3"
              roomQty="1"
              carGarageQty="2"
            />
          </div>
          <div className="flex flex-col h-full">
            <CardProperty
              sold={true}
              imgSrc={Property3Src}
              slug="/properties/stylish-home-near-bently-forest"
              title="Stylish home near Bently's forest"
              description="This property is ideal for a family looking to settle down"
              bedQty="5"
              bathQty="4"
              roomQty="2"
              carGarageQty="3"
            />
          </div>
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

export default SellingPage;
