import HeroServicesPages from "../components/HeroServicesPages";

import HeroSrc from "../../public/pexels-manage-property-page.webp";
import AccordionComponent from "../components/AccordionComponent";
import MeetOurTeam from "../components/MeetOurTeam";
import Testimonials from "../components/TestimonialCarousel";
import CTAEmailInput from "../components/CTAEmailInput";

import CTAImageSrc from "../../public/pexels-guide-books.jpg";
import ContactForm from "../components/ContactForm";

const ManagePage = () => {
  return (
    <>
      <div className="bg-green-50/30">
        <div className="container px-6 mx-auto sm:px-10 md:px-16 xl:px-10 max-w-7xl ">
          <HeroServicesPages
            description="cotswolds real estate agents"
            title="Let us manage your property"
            clientsNum="234"
            propertiesNum="883"
            btnText="Get a management appraisal"
            btnAnchorSrc="/appraisal"
            imgSrc={HeroSrc}
          />
        </div>
      </div>
      <section>
        <h3 className="flex py-4 mx-auto mt-16 space-x-2 text-3xl font-medium text-center w-fit sm:text-4xl l font-fraunces">
          Four <span className="flex px-2 text-green-brand">easy</span> steps to
          rent
        </h3>
        <AccordionComponent
          heading1="Get your free appraisal"
          heading2="Initial chat"
          heading3="Listing Presentation"
          heading4="Go to Market!"
        />
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

export default ManagePage;
