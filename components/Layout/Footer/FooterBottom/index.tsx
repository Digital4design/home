import Image from "next/image"
import Socials from "./Socials"

export default function FooterBottom() {
  return (
    <div className="flex flex-wrap items-center justify-between py-5">
      <figure className="relative hidden h-12 w-12 md:block">
        <Image
          src="/assets/homes-england.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </figure>
      <div className="text-sm">
        <span className="block md:inline">
          Copyright © {new Date().getFullYear()}
        </span>{" "}
        heylo housing group | Home Reach
      </div>
      <Socials />
    </div>
  )
}
