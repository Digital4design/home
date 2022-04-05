import React from "react"
import { ChildrenProps } from "types"
import Header from "../Header"

export default function PropertiesLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
