import { ChevronDownIcon } from "@heroicons/react/outline"
import { useSearchFilters } from "context/SearchAndFilterContext"
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
  const { isSearchPage } = useSearchFilters()
  const classes = !isSearchPage
    ? "text-white group-hover:text-brand-blue-light"
    : "text-brand-grey-dark group-hover:text-brand-blue"
  return (
    <span
      className={`flex items-center justify-between font-medium ${classes}`}
    >
      {children}
      {chevron && <ChevronDownIcon className={`ml-2 h-5 w-5 ${classes}`} />}
    </span>
  )
}
