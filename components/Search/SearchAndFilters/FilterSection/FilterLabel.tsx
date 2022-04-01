import React from "react"
import { ChildrenProps } from "types"

export default function FilterLabel({ children }: ChildrenProps) {
  return <span className="mb-1 block text-xs">{children}</span>
}
