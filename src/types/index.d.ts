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
  height: number
  url: string
  width: number
}
