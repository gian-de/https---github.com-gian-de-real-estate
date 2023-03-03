import Image from "next/image";
import Link from "next/link";

const CardImageText = ({ imgSrc, title, description, anchorLink }) => {
  return (
    <Link href={anchorLink}>
      <div className="flex-col transition-all duration-200 shadow hover:-translate-x-2 hover:-translate-y-2 hover:drop-shadow-xl">
        <div className="overflow-hidden rounded-t-md">
          <Image src={imgSrc} alt={title} className="object-cover h-60" />
        </div>
        <div className="flex flex-col px-10 py-8 space-y-4 text-center bg-white sm:pb-6 sm:h-72 md:h-60 rounded-b-md">
          <h4 className="text-3xl font-fraunces">{title}</h4>
          <p className="max-w-sm mx-auto leading-5 sm:block sm:h-24 lg:flex lg:h-auto">
            {description}
          </p>
          <div>
            <Link
              href={anchorLink}
              className=" text-green-brand hover:underline"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardImageText;
