import Image from "next/image"
import React, { ReactNode } from "react"

interface Props {
  index: number
  id: string
  title: string
  imageURL: string
  alt: string
  placeholderURL?: string
  children: ReactNode
  active: number
}

export default function StepImage({
  id,
  title,
  imageURL,
  index,
  alt,
  placeholderURL,
  children,
  active,
}: Props) {
  const imageOrder = index % 2 === 0 ? "order-3" : "order-1"
  const textOrder = index % 2 === 0 ? "order-1" : "order-3"
  return (
    <section className="h-[400px]" id={id}>
      <div className="container-sm flex h-full items-center">
        <article className={`w-5/12 p-4 ${textOrder}`}>
          <h2 className="mb-6 text-2xl">{title}</h2>
          {children}
        </article>
        <div className="order-2 flex h-full w-2/12 flex-col items-center justify-center">
          <div
            className={`h-1/2 w-0.5 ${
              index !== 0 ? "bg-brand-blue" : "bg-transparent"
            }`}
          />
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-sm border-2 border-brand-blue ${
              index === active
                ? "bg-brand-blue text-lg text-white"
                : "bg-white text-brand-blue"
            }`}
          >
            {index + 1}
          </span>
          <div
            className={`h-1/2 w-0.5 ${
              index !== 7 ? "bg-brand-blue" : "bg-transparent"
            }`}
          />
        </div>
        <figure className={`relative -z-[1] h-full w-5/12 ${imageOrder}`}>
          <Image
            src={imageURL}
            alt={alt ?? ""}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={placeholderURL}
          />
        </figure>
      </div>
    </section>
  )
}
