import Image from "next/image";
import Link from "next/link";

const CardBlog = ({ imgSrc, slug, categoryTag, title, description, date }) => {
  return (
    <Link href={slug}>
      <div className="flex-col transition-all duration-200 shadow hover:-translate-x-2 hover:-translate-y-2 hover:drop-shadow-xl">
        <div className="overflow-hidden rounded-t-md">
          <Image src={imgSrc} alt={title} className="object-cover h-56" />
        </div>
        <div className="flex flex-col px-5 py-5 space-y-3 bg-white sm:pb-8 rounded-b-md">
          <p className="px-3 py-1 text-sm font-semibold tracking-wider rounded-full w-fit text-green-brand bg-green-brand/20">
            {categoryTag}
          </p>
          <h4 className="text-2xl font-fraunces">{title}</h4>
          <p className="max-w-sm text-sm">{description}</p>
          <p className="text-sm font-semibold tracking-wider uppercase text-green-brand">
            {date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
