import Image from "next/image"
import React from "react"

interface Props {
  index: number
  imageURL: string
  alt?: string
  placeholderURL?: string
}

export default function StepImage({
  index,
  imageURL,
  alt,
  placeholderURL,
}: Props) {
  const imageOrder = index % 2 === 0 ? "md:order-3" : "md:order-1"

  return (
    <figure
      className={`relative -z-[1] order-1 h-full w-full md:w-5/12 ${imageOrder}`}
    >
      <Image
        src={imageURL}
        alt={alt ?? ""}
        layout="fill"
        objectFit="contain"
        placeholder="blur"
        blurDataURL={placeholderURL}
      />
    </figure>
  )
}
