import HeroServicesPages from "../components/HeroServicesPages";

import HeroSrc from "../../public/buying-heropage-image.jpg";

const BuyingPage = () => {
  return (
    <>
      <div className="container px-6 mx-auto sm:px-10 md:px-16 xl:px-0 max-w-7xl bg-green-50/20">
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
    </>
  );
};

export default BuyingPage;
