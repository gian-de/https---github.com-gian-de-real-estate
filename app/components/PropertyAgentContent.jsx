import Image from "next/image";

const PropertyAgentContent = () => {
  return (
    <div className="md:flex">
      <div className="bg-red-100 md:w-3/5 md:pr-8 h-96">
        {/* Content of the left div */}
      </div>
      <div className="h-32 bg-blue-100 md:w-2/5 md:sticky md:top-0">
        {/* Content of the right div */}
      </div>
    </div>
    // <div className="grid md:grid-cols-5 md:gap-8">
    //   <div className="md:col-span-3">
    //     {/* Left div */}
    //     <div className="bg-gray-100 h-96 md:h-full">test</div>
    //   </div>
    //   <div className="md:col-span-2 md:sticky md:top-0">
    //     {/* Right div */}
    //     <div className="h-40 bg-gray-800 md:h-full">agent</div>
    //   </div>
    // </div>
  );
};

export default PropertyAgentContent;
