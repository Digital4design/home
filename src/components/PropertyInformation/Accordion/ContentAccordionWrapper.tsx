import React from "react"
import { Accordion } from "react-accessible-accordion"
import { ChildrenProps } from "types"

export default function ContentAccordionWrapper({ children }: ChildrenProps) {
  return (
    <Accordion allowZeroExpanded allowMultipleExpanded>
      {children}
    </Accordion>
  )
}
