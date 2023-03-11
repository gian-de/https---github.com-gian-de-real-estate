import HeroServicesPages from "../components/HeroServicesPages";

import HeroSrc from "../../public/selling-your-home-src.jpg";

const SellingPage = () => {
  return (
    <>
      <div className="container px-6 mx-auto sm:px-10 md:px-16 xl:px-0 max-w-7xl bg-green-50/20">
        <HeroServicesPages
          description="cotswolds real estate agents"
          title="Sell with the top rural agency in South England"
          clientsNum="234"
          propertiesNum="883"
          btnText="Get an appraisal"
          btnAnchorSrc="/appraisal"
          imgSrc={HeroSrc}
        />
      </div>
    </>
  );
};

export default SellingPage;
