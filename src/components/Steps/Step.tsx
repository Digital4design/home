import Image from "next/image"
import React, { ReactNode } from "react"
import StepDivider from "./StepDivider"
import StepDividerBottom from "./StepDividerBottom"
import StepDividerTop from "./StepDividerTop"
import StepImage from "./StepImage"
import StepNumber from "./StepNumber"

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

export default function Step({
  id,
  title,
  imageURL,
  index,
  alt,
  placeholderURL,
  children,
  active,
}: Props) {
  const textOrder = index % 2 === 0 ? "md:order-1" : "md:order-3"
  const activeTextClasses =
    index === active && "bg-white md:shadow-lg md:border md:border-gray-100"

  return (
    <section className="h-[400px]" id={id}>
      <div className="container-sm flex h-full flex-col items-center md:flex-row">
        <article
          className={`order-2 w-full rounded p-6 transition-all duration-300 ease-in-out md:w-5/12 ${textOrder} ${activeTextClasses}`}
        >
          <h2 className="mb-6 flex items-center text-2xl font-medium">
            <StepNumber index={index} active={active} mobile /> {title}
          </h2>
          {children}
        </article>
        <StepDivider>
          <StepDividerTop index={index} />
          <StepNumber index={index} active={active} />
          <StepDividerBottom index={index} />
        </StepDivider>
        <StepImage
          index={index}
          imageURL={imageURL}
          alt={alt}
          placeholderURL={placeholderURL}
        />
      </div>
    </section>
  )
}
