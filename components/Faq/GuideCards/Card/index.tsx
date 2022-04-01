import Image from "next/image"
import Link from "next/link"

interface PropTypes {
  img: string
  title: string
  link: string
}

function GuideCard({ img, title, link }: PropTypes) {
  return (
    <div className="flex w-full flex-col justify-between gap-8 rounded bg-brand-grey-light p-6 pr-8 transition-all hover:scale-105 hover:shadow-md lg:w-[280px]">
      <div className="relative  h-20 w-20">
        <Image src={img} alt={title} layout="fill" objectFit="contain" />
      </div>
      <p className="text-lg font-semibold text-brand-blue-dark">{title}</p>
      <Link href={link}>
        <a className="cursor-pointer text-brand-green hover:underline">
          Discover
        </a>
      </Link>
    </div>
  )
}

export default GuideCard
