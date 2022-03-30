import { ChevronDownIcon } from "@heroicons/react/outline"
import React from "react"
import { ChildrenProps } from "types"

interface Props extends ChildrenProps {
  chevron?: boolean
}

/**
 *
 * @param props.children the display value of the chosen filter option
 * @param props.chevron default true, if set to false the chevron down icon will not be displayed
 * @returns the value display section of a filter section
 */

export default function FilterDisplay({ children, chevron = true }: Props) {
  return (
    <span className="flex items-center justify-between font-medium group-hover:text-brand-blue-light">
      {children}
      {chevron && (
        <ChevronDownIcon className="ml-2 h-5 w-5 text-white group-hover:text-brand-blue-light" />
      )}
    </span>
  )
}
