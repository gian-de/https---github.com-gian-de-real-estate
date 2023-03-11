import Image from "next/image";
import Link from "next/link";

import LogoSrc from "../../public/logo.png";
import FacebookSVG from "./svg/Facebook";
import TwitterSVG from "./svg/Twitter";
import LinkedInSVG from "./svg/LinkedIn";

const footerData = [
  {
    locationInfo: {
      streetName: "45 Stirling Road",
      city: "Birch Park",
      state: "Whitby",
      country: "United Kingdom",
    },
  },
  {
    credits: {
      developerInfo: {
        name: "Giandemir Jaen",
        linkSrc: "https://www.linkedin.com/in/giande/",
      },
      designerInfo: {
        name: "Finn Dollimore",
        linkSrc: "https://www.finndollimore.com",
      },
    },
  },
];

const footerMenuLinks = [
  {
    title: "resources",
    links: [{ Blog: "/blog" }, { Ebook: "/ebook" }],
  },
  {
    title: "services",
    links: [
      { "Buying a property": "/buying" },
      { "Selling your property": "/selling" },
      { "Renting your property": "/property-management" },
    ],
  },
  {
    title: "company",
    links: [
      { About: "/about-us" },
      { phoneNumber: "+354 587 5555" },
      { emailInfo: "email@business.com" },
    ],
  },
];

const Footer = () => {
  const { streetName, city, state, country } = footerData[0].locationInfo;
  const { developerInfo, designerInfo } = footerData[1].credits;
  return (
    <section className="container px-6 mx-auto mt-32 max-w-7xl md:px-10">
      <footer className="grid mt-20 md:grid-cols-3 ">
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:grid md:col-span-1">
          <div>
            <Image
              src={LogoSrc}
              className="object-cover"
              height={60}
              width={240}
              alt="Logo of Green Havens"
            />
          </div>
          <div className="flex flex-col py-8 space-y-6 text-sm md:pl-3">
            <div className="flex flex-col">
              <p>{streetName}</p>
              <p>{city}</p>
              <div className="flex space-x-1">
                <p>{`${state},`} </p>
                <p>{country}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p>
                Coded by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to Giandemir's LinkedIn"
                  href={developerInfo.linkSrc}
                  className="hover:underline text-green-brand"
                >
                  {developerInfo.name}
                </a>
              </p>
              <p>
                Designed by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to Finn's personal website"
                  href={designerInfo.linkSrc}
                  className="hover:underline text-green-brand"
                >
                  {designerInfo.name}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="py-8 md:col-span-2 md:pt-2">
          <div className="grid grid-cols-3 gap-2 pl-6 text-sm md:gap-1 md:text-base md:pl-2">
            {footerMenuLinks.map((item) => {
              return (
                <div className="flex flex-col pb-8 " key={item.title}>
                  <h6 className="text-lg font-semibold tracking-tight uppercase">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col items-start mt-3 space-y-2 text-gray-700 ">
                    {Object.keys(item.links).map((key) => {
                      const linkObj = item.links[key];
                      // check to see if the title is phoneNumber or Email and make the "value" the text instead of having the "key" the srcLink like every other "[key, value]" pair
                      if (linkObj.phoneNumber || linkObj.emailInfo) {
                        return (
                          <li key={key} className="break-all ">
                            {linkObj.phoneNumber || linkObj.emailInfo}
                          </li>
                        );
                      } else {
                        const linkText = Object.keys(linkObj)[0];
                        return (
                          <Link
                            href={linkObj[linkText]}
                            key={key}
                            className="pr-2 hover:underline hover:text-green-brand w-fit"
                          >
                            <li>{linkText}</li>
                          </Link>
                        );
                      }
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid py-4 border-t sm:py-8 md:mt-8 border-t-gray-300 md:col-span-3">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-sm">© 2023 Green Havens. All Rights Reserved.</p>
            <div className="flex pt-2 space-x-3 md:pt-0">
              <button className="text-gray-600 transition duration-150 ease-in-out hover:text-green-brand">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to Twitter homepage"
                  href="https://twitter.com/"
                >
                  <TwitterSVG className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </button>
              <button className="text-gray-600 transition duration-150 ease-in-out hover:text-green-brand">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to LinkIn homepage"
                  href="https://www.linkedin.com/"
                >
                  <LinkedInSVG className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </button>
              <button className="text-gray-600 transition duration-150 ease-in-out hover:text-green-brand">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Link to Facebook homepage"
                  href="https://www.facebook.com/"
                >
                  <FacebookSVG className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
