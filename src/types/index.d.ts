// General

import { ReactNode } from "react"

export interface ChildrenProps {
  children: ReactNode
}

export interface IconProps {
  classes: string
}

export interface ImageProperties {
  alt: string
  url: string
  height?: number
  width?: number
  responsiveImage?: Record<"src", string>
}
