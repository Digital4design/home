import React from "react"
import ScrollIntoView from "react-scroll-into-view"

interface Props {
  index: number
  active?: number
  mobile?: boolean
}

export default function StepNumber({ index, active, mobile }: Props) {
  const classes = mobile ? "flex md:hidden mr-4" : "hidden md:flex"
  return (
    <span
      className={`${classes} flex h-8 w-8 items-center justify-center rounded-sm border-2 border-brand-blue text-brand-blue ${
        index === active
          ? "text-lg md:bg-brand-blue md:text-white"
          : "md:bg-white md:text-brand-blue"
      }`}
    >
      {index + 1}
    </span>
  )
}
