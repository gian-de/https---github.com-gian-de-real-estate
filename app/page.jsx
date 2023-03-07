import {
  MarqueeEmployeeSlider,
  MarqueeHouseSlider,
} from "./components/MarqueeSlider";

import CardImageText from "./components/CardImageText";
import CTASection from "./components/CTASection";
import CardProperty from "./components/CardProperty";
import CardBlog from "./components/CardBlog";

import SellingHomeSrc from "../public/selling-your-home-src.jpg";
import BuyingPropertySrc from "../public/buying-property-src.jpg";
import CTAHomepageSrc from "../public/cta-homepage.jpg";
import Property1Src from "../public/featured-houses/cosy-riverside-cottage.jpg";
import Property2Src from "../public/featured-houses/charming-classic-home.jpg";
import Property3Src from "../public/featured-houses/private-lifestyle-block.jpg";
import CTAImageRight from "./components/CTAImageRight";

import GovTaxSrc from "../public/blog/government-tax-blog.jpg";
import FindRuralBlogSrc from "../public/blog/find-best-rural-property-blog.jpg";
import InvestingRuralBlogSrc from "../public/blog/investing-into-rural-blog.jpg";
import TestimonialCarousel from "./components/TestimonialCarousel";
import CTAEmailInput from "./components/CTAEmailInput";
import GuideBooksSrc from "../public/pexels-guide-books.jpg";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col w-full py-10 space-y-4 bg-white md:py-16 lg:py-20">
        <h2 className="flex flex-col text-3xl font-medium text-center sm:text-4xl md:text-5xl lg:text-6xl font-fraunces">
          Find your dream
          <span className="pt-1 lg:pt-4 text-green-brand">
            countryside haven
          </span>
        </h2>
        <p className="text-sm tracking-wider text-center md:text-base lg:text-lg lg:pt-2">
          PREMIUM COTSWALDS RURAL PROPERTY
        </p>
        <div className="pt-8 md:pt-10">
          <MarqueeHouseSlider />
        </div>
      </section>
      <section className="bg-gray-100 ">
        <div className="container flex flex-col w-full max-w-6xl py-10 mx-auto space-y-4 md:py-16 lg:py-20">
          <h3 className="text-3xl text-center font-fraunces md:text-4xl lg:text-5xl">
            How can we help?
          </h3>
          <p className="w-4/5 mx-auto text-center md:text-lg">
            We connect buyers and sellers of premium rural property
          </p>
          <div className="grid w-full px-6 pt-6 sm:pb-6 sm:px-10 sm:grid-cols-2 gap-14 xl:px-0">
            <div className="w-full">
              <CardImageText
                imgSrc={SellingHomeSrc}
                title="Selling your home"
                description="We help hundreds of families sell their homes every year, let us help you."
                anchorLink="/selling"
              />
            </div>
            <div className="w-full">
              <CardImageText
                imgSrc={BuyingPropertySrc}
                title="Buy rural property"
                description="We make buying a home as easy and stressfree as possible."
                anchorLink="/buying"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green-dark">
        <CTASection
          imgSrc={CTAHomepageSrc}
          title="Whitby's leading property team"
          description="Thanks to them, we sold our home within a month. The team was great to work with, true professionals."
          btnSrc="/about-us"
          btnText="See more"
        />
      </section>
      <section className="py-8">
        <MarqueeEmployeeSlider />
      </section>
      <section className="py-12 space-y-8 bg-gray-100 md:space-y-0">
        <h4 className="px-5 text-3xl text-center font-fraunces whitespace-nowrap sm:text-4xl md:text-5xl">
          Featured properties
        </h4>
        <div className="container grid max-w-6xl gap-10 px-12 mx-auto sm:px-20 md:px-8 md:grid-cols-3 md:place-items-stretch xl:px-0 md:py-16 md:gap-6">
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
      <section>
        <CTAImageRight />
      </section>
      <section className="py-12 bg-gray-100 md:space-y-0 md:py-20">
        <h4 className="px-5 text-3xl text-center font-fraunces whitespace-nowrap sm:text-4xl md:text-5xl">
          Learn on our blog
        </h4>
        <div className="container grid max-w-6xl gap-10 px-12 pt-8 mx-auto md:pt-10 sm:grid-cols-2 sm:px-8 md:grid-cols-3 xl:px-0 md:gap-6">
          <CardBlog
            imgSrc={GovTaxSrc}
            slug="/blog/the-government-upcoming-property-tax"
            categoryTag="Industry News"
            title="UK's upcoming property tax bill"
            description="Everything you need to know about the upcoming property tax of 2023."
            date="January 25, 2023"
          />
          <CardBlog
            imgSrc={FindRuralBlogSrc}
            slug="/blog/rural-property-in-uk"
            categoryTag="Property Advise"
            title="Find great rural property in UK"
            description="South England is home to some of the best rural property in the country."
            date="February 13, 2023"
          />
          <CardBlog
            imgSrc={InvestingRuralBlogSrc}
            slug="/blog/how-to-start-investing-into-rural-properties"
            categoryTag="Tips & Tricks"
            title="Investing into rural properties"
            description="If you're looking to get into the rural property market - start here!"
            date="February 19, 2023"
          />
        </div>
      </section>
      <section>
        <TestimonialCarousel />
      </section>
      <section className="px-6 py-12 overflow-hidden md:px-12 md:py-16">
        <CTAEmailInput
          imgSrc={GuideBooksSrc}
          title="The definitive guide"
          text="The definitive guide to buying &selling property in Whitby, start learning now."
          checkText1="Where to buy"
          checkText2="Get started with investing"
          checkText3="Future market analysis"
        />
      </section>
      <section className="px-6 py-2 mx-auto max-w-7xl md:px-12 md:py-16 lg:px-0">
        <ContactForm />
      </section>
      <div className="py-80">spacer</div>
    </>
  );
}
