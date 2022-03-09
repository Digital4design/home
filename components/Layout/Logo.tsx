import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link passHref href="/">
      <figure className="relative w-24 cursor-pointer">
        <Image src="/assets/hr-logo.svg" alt="" width="96" height="40" />
      </figure>
    </Link>
  )
}
