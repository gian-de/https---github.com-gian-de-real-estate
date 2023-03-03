import Link from "next/link";

const CTAButton = ({ text, anchorSrc }) => {
  return (
    <Link
      href={anchorSrc}
      className="block transition-all duration-200 rounded-full w-fit bg-green-brand text-gray-50 hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-md"
    >
      <p className="px-5 py-2">{text}</p>
    </Link>
  );
};

export default CTAButton;
