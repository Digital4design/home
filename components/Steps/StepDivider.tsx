import React from "react"
import { ChildrenProps } from "types"

export default function StepDivider({ children }: ChildrenProps) {
  return (
    <div className="order-2 hidden h-full w-2/12 flex-col items-center justify-center md:flex">
      {children}
    </div>
  )
}
