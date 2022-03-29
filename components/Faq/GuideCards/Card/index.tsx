import Image from "next/image";
import Link from "next/link";

interface PropTypes {
  img: string;
  title: string;
  link: string;
}

function GuideCard({ img, title, link }: PropTypes) {
  return (
    <div className="flex w-full flex-col justify-between gap-8 rounded bg-brand-grey-light p-6 pr-8 lg:w-[280px]">
      <div className="relative  h-20 w-20">
        <Image src={img} alt={title} layout="fill" objectFit="contain" />
      </div>
      <p className="text-lg font-semibold text-brand-blue-dark">{title}</p>
      <p className="cursor-pointer text-brand-green">Discover</p>
    </div>
  );
}

export default GuideCard;
