import Link from "next/link";
import Image from "next/image";

import employee1 from "../../public/employees/pexels-employee-1.jpg";
import employee2 from "../../public/employees/pexels-employee-2.jpg";
import employee3 from "../../public/employees/pexels-employee-3.jpg";
import employee4 from "../../public/employees/pexels-employee-4.jpg";
import employee5 from "../../public/employees/pexels-employee-5.jpg";
import employee6 from "../../public/employees/pexels-employee-6.jpg";

const employeeImages = [
  {
    src: employee1,
    id: "11",
    name: "Nicole Smith",
    job: "real estate agent",
    slug: "nicole-smith",
  },
  {
    src: employee2,
    id: "12",
    name: "James Marshall",
    job: "head of sales",
    slug: "james-marshall",
  },
  {
    src: employee3,
    id: "13",
    name: "Sarah Harrison",
    job: "property manager",
    slug: "sarah-harrison",
  },
  {
    src: employee4,
    id: "14",
    name: "Clarke Davis",
    job: "vice president",
    slug: "clarke-davis",
  },
  {
    src: employee5,
    id: "15",
    name: "Angela Steele",
    job: "real estate agent",
    slug: "angela-steele",
  },
  {
    src: employee6,
    id: "16",
    name: "Michael Prince",
    job: "director",
    slug: "michael-prince",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="max-w-6xl py-10 mx-auto space-y-12 ">
      <h3 className="text-4xl font-medium text-center font-fraunces md:text-5xl">
        Meet our team
      </h3>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        {employeeImages.map((card) => (
          <Link
            href={`/team-members/${card.slug}`}
            key={card.id}
            className="flex flex-col border-b border-black cursor-pointer group"
          >
            <div className="overflow-hidden rounded-md md:h-80 lg:h-[28rem]">
              <Image
                src={card.src}
                className="object-cover w-full h-full transition duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-3 text-center bg-white md:py-6">
              <p className="text-xl font-medium sm:text-3xl font-fraunces">
                {card.name}
              </p>
              <p className="text-lg font-medium capitalize text-green-brand">
                {card.job}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
