import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link passHref href="/">
      <figure className="relative h-full w-24 cursor-pointer">
        <Image
          src="/assets/home-reach-logo.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </figure>
    </Link>
  )
}
