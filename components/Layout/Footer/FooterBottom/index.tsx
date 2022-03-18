import Image from "next/image"
import Socials from "./Socials"

export default function FooterBottom() {
  return (
    <div className="flex flex-wrap items-center justify-between py-5">
      <figure className="relative h-12 w-12">
        <Image
          src="/assets/homes-england.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </figure>
      <span className="text-sm">
        Copyright © {new Date().getFullYear()} Heylo Housing Group | Home Reach
      </span>
      <Socials />
    </div>
  )
}
