import React from "react"
import { ChildrenProps } from "types"

export default function FilterLabel({ children }: ChildrenProps) {
  return <span className="block text-xs">{children}</span>
}
