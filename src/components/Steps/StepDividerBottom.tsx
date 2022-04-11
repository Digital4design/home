import React from "react"

interface Props {
  index: number
}

export default function StepDividerBottom({ index }: Props) {
  return (
    <div
      className={`h-1/2 w-0.5 ${
        index !== 7 ? "bg-brand-blue" : "bg-transparent"
      }`}
    />
  )
}
