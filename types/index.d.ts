// General React

import { ReactNode } from "react"

export interface ChildrenProps {
  children: ReactNode
}

// Nav
export interface LinkProps {
  slug: string
  name: string
}