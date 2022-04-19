import React, { ReactNode } from "react"

interface Props {
  isFlex?: boolean
  size?: "xs" | "sm"
  children: ReactNode
}

export default function Container({ isFlex, size, children }: Props) {
  return (
    <div
      className={`${isFlex && "flex flex-wrap"} ${
        size === "sm"
          ? "container-sm"
          : size === "xs"
          ? "container-xs"
          : "container"
      }`}
    >
      {children}
    </div>
  )
}
