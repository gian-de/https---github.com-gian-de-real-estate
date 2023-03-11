"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import PeopleTalking from "../../public/accordian-images/pexels-2-people.jpg";
import InitialChat from "../../public/accordian-images/pexels-initial-chat.jpg";
import HomePending from "../../public/accordian-images/pexels-sale-pending.jpg";
import HomeForSale from "../../public/accordian-images/pexels-home-for-sale.jpg";

import HomeIcon from "../../public/small-icons-for-accordian/house-money-icon.webp";
import MessageIcon from "../../public/small-icons-for-accordian/message-bubble-icon.webp";
import SaleSignIcon from "../../public/small-icons-for-accordian/sale-sign-icon.webp";
import SearchHouseIcon from "../../public/small-icons-for-accordian/search-house-icon.webp";

const accordianImages = [PeopleTalking, InitialChat, HomeForSale, HomePending];

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const AccordionComponent = ({ heading1, heading2, heading3, heading4 }) => {
  const [open, setOpen] = useState(1);
  const [accordianIndex, setAccordianIndex] = useState(accordianImages[0]);

  const handleOpen = (value, idx) => {
    setOpen(open === value ? 0 : value);
    setAccordianIndex(accordianImages[idx]);
  };
  return (
    <div className="grid gap-4 px-10 py-8 mx-auto md:px-16 max-w-7xl lg:py-12 lg:grid-cols-2 lg:gap-10 lg:items-center">
      <div className="max-w-lg col-span-1 mx-auto lg:order-2 lg:max-w-3xl">
        <Image src={accordianIndex} className="object-cover drop-shadow-xl" />
      </div>
      <div className="col-span-1 divide-y-2 border-y-2">
        <Fragment className="border-t">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1, 0)}>
              <div className="flex items-center space-x-3 font-semibold font-fraunces">
                <Image src={HomeIcon} className="object-cover w-8 h-8" />
                <p className="transition-colors duration-75 ease-in-out hover:text-green-brand">
                  {heading1}
                </p>
              </div>
            </AccordionHeader>
            <AccordionBody className="pl-4 text-base text-black bg-gray-100 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores
              eos doloremque autem iusto, culpa perspiciatis odit neque rem
              quidem.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2, 1)}>
              <div className="flex items-center space-x-3 font-semibold font-fraunces">
                <Image src={MessageIcon} className="object-cover w-8 h-8" />
                <p className="transition-colors duration-75 ease-in-out hover:text-green-brand">
                  {heading2}
                </p>
              </div>
            </AccordionHeader>
            <AccordionBody className="pl-4 text-base text-black bg-gray-100 lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              repellat minima modi dolorum necessitatibus! Eveniet.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3, 2)}>
              <div className="flex items-center space-x-3 font-semibold font-fraunces">
                <Image src={SaleSignIcon} className="object-cover w-8 h-8" />
                <p className="transition-colors duration-75 ease-in-out hover:text-green-brand">
                  {heading3}
                </p>
              </div>
            </AccordionHeader>
            <AccordionBody className="pl-4 text-base text-black bg-gray-100 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              architecto, voluptatum, quidem dolor ea consequuntur quasi esse
              tempore expedita dolorum, fugiat reprehenderit aliquid autem
              veniam nihil pariatur non earum quaerat!
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(4, 3)}>
              <div className="flex items-center space-x-3 font-semibold font-fraunces">
                <Image src={SearchHouseIcon} className="object-cover w-8 h-8" />
                <p className="transition-colors duration-75 ease-in-out hover:text-green-brand">
                  {heading4}
                </p>
              </div>
            </AccordionHeader>
            <AccordionBody className="pl-4 text-base text-black bg-gray-100 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              architecto, voluptatum, quidem dolor ea consequuntur quasi esse
              tempore expedita dolorum, fugiat reprehenderit aliquid autem
              veniam nihil pariatur non earum quaerat!
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  );
};

export default AccordionComponent;
