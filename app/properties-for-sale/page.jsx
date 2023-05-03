"use client";
import { useState, useEffect } from "react";

import link from "next/link";
import image from "next/image";
import ContactForm from "../components/ContactForm";

import CardProperty from "../components/CardProperty";

const propertyList = [
  {
    id: 1,
    slug: "/properties/cosy-riverside-cottage",
    title: "Cosy riverside cottage, the perfect retreat",
    description: "This property is ideal for a family looking to settle down",
    imgSrc: "/../public/houses-featured/cosy-riverside-cottage.jpg",
    date: "January 25, 2023",
    bedQty: 4,
    bathQty: 2,
    roomQty: 1,
    carGarageQty: 2,
    type_of_property: "house",
  },
  {
    id: 2,
    slug: "/properties/charming-classic-home",
    title: "Charming classic home with modern interior",
    description: "This property is ideal for a family looking to settle down",
    imgSrc: "/../public/houses-featured/charming-classic-home.jpg",
    date: "March 15, 2023",
    bedQty: 2,
    bathQty: 2,
    roomQty: 1,
    carGarageQty: 3,
    type_of_property: "house",
  },
  {
    id: 3,
    slug: "/properties/private-lifestyle-block-hidden-behind-a-hedge",
    title: "Private lifestyle block hidden behind a hedge",
    description: "This property is ideal for a family looking to settle down",
    imgSrc: "/../public/houses-featured/private-lifestyle-block.jpg",
    date: "March 22, 2023",
    bedQty: 6,
    bathQty: 3,
    roomQty: 3,
    carGarageQty: 2,
    type_of_property: "house",
  },
  {
    id: 4,
    slug: "/properties/rural-living",
    title: "Rural living 15 mins from city center",
    description: "This property is ideal for a family looking to settle down",
    imgSrc: "/../public/houses-featured/rural-living.jpg",
    buyNow: "1,200,000",
    bedQty: 5,
    bathQty: 4,
    roomQty: 2,
    carGarageQty: 4,
    type_of_property: "house",
  },
  {
    id: 5,
    slug: "/properties/stunning-mansion-fit-for-luxury-living",
    title: "Stunning mansion fit for luxury living",
    description: "This property is ideal for a family looking to settle down",
    imgSrc: "/../public/houses-featured/stunning-mansion.jpg",
    buyNow: "2,200,000",
    bedQty: 5,
    bathQty: 4,
    roomQty: 2,
    carGarageQty: 2,
    type_of_property: "house",
  },
  {
    id: 6,
    slug: "/properties/modern-apartment",
    title: "Modern 2 bed 2 bath apartment",
    description: "This property is ideal for a family looking to settle down",
    imgSrc: "/../public/houses-featured/apartment-building.jpeg",
    buyNow: "600,000",
    bedQty: 2,
    bathQty: 2,
    roomQty: 1,
    carGarageQty: 1,
    type_of_property: "apartment",
  },
];

const PropertiesPage = () => {
  const [filters, setFilters] = useState({
    bedQty: null,
    bathQty: null,
    carGarageQty: null,
    type_of_property: null,
  });
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProperties = propertyList.filter((property) => {
    return (
      (!filters.bedQty || property.bedQty === parseInt(filters.bedQty)) &&
      (!filters.bathQty || property.bathQty === parseInt(filters.bathQty)) &&
      (!filters.type_of_property ||
        property.type_of_property === filters.type_of_property) &&
      (!filters.carGarageQty ||
        property.carGarageQty === parseInt(filters.carGarageQty))
    );
  });
  return (
    <>
      <header className="py-10 bg-gray-100 md:py-20">
        <div className="flex flex-col items-center justify-center max-w-4xl px-6 mx-auto space-y-6 text-center">
          <p className="px-6 text-sm font-semibold uppercase sm:tracking-wider sm:text-md md:text-xl text-green-brand">
            property for sale in whitby
          </p>
          <h2 className="text-2xl font-medium sm:text-4xl font-fraunces md:text-5xl">
            Browse Whitby's top property
          </h2>
        </div>
      </header>
      <section className="py-12 space-y-10 bg-white lg:space-y-12">
        <h4 className="px-5 text-4xl font-medium text-center font-fraunces whitespace-nowrap md:text-5xl">
          placeholder
        </h4>
        <div className="container grid max-w-6xl gap-10 px-16 mx-auto sm:grid-cols-2 sm:px-8 lg:px-8 lg:grid-cols-3 xl:px-4">
          {propertyList.map((property) => (
            <CardProperty
              id={property.id}
              imgSrc={property.imgSrc}
              slug={property.slug}
              date={property?.date}
              buyNow={property?.buyNow}
              title={property.title}
              description={property.description}
              bedQty={property.bedQty}
              bathQty={property.bathQty}
              roomQty={property.roomQty}
              carGarageQty={property.carGarageQty}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;

{
  /* <section className="px-6 pt-12 mx-auto max-w-7xl md:px-12 md:py-16 lg:px-0">
        <ContactForm />
      </section> */
}
