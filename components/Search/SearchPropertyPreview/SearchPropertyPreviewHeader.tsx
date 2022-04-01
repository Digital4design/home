import Image from "next/image"
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
  return (
    <header className="flex justify-between">
      <div>
        <h2 className="text-base font-light">{title}</h2>
        <h3 className="text-sm font-light text-gray-400">{address}</h3>
      </div>
      <figure className="relative aspect-[4/2] h-[40px]">
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
