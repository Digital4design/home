import React from "react"
import { ChildrenProps } from "types"

export default function Sidebar({ children }: ChildrenProps) {
  return <aside className="hidden lg:block lg:w-1/3 lg:pl-6">{children}</aside>
}
