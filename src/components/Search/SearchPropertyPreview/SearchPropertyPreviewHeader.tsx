import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

interface Props {
  title: string
  address: string
  companyLogo: string
  alt: string
  placeholderURL: string
}

export default function SearchPropertyPreviewHeader({
  title,
  address,
  companyLogo,
  alt,
  placeholderURL,
}: Props) {
  const router = useRouter()
  return (
    <header className="flex items-center justify-between">
      <div>
        <h2
          className="leading-1 mt-0 cursor-pointer p-0 text-[18px] font-light hover:underline"
          onClick={() => router.push("/development/whittingham-park")}
        >
          {title}
        </h2>
        <h3 className="text-sm font-light text-gray-400">{address}</h3>
      </div>
      <figure
        className="relative aspect-[4/2] h-[40px] cursor-pointer"
        onClick={() => router.push("/developer/taylor-whimpley")}
      >
        <Image
          src={companyLogo}
          alt={alt}
          layout="fill"
          placeholder="blur"
          blurDataURL={placeholderURL}
        />
      </figure>
    </header>
  )
}
