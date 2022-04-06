import React, { ReactNode } from "react"

interface Props {
  index: number
}

export default function StepDividerTop({ index }: Props) {
  return (
    <div
      className={`h-1/2 w-0.5 ${
        index !== 0 ? "bg-brand-blue" : "bg-transparent"
      }`}
    />
  )
}
