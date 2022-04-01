import { SearchIcon } from "@heroicons/react/outline"
import { useSearchFilters } from "context/SearchAndFilterContext"
import React from "react"

export default function SearchButton() {
  const { searchProperties, isHomePage } = useSearchFilters()

  const classes = isHomePage ? "pl-4" : "pl-6"

  return (
    <div className={classes}>
      <button
        className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-green transition-all duration-100 ease-in-out hover:bg-brand-green-medium active:bg-brand-green-dark"
        onClick={searchProperties}
      >
        <SearchIcon className="h-5 w-5 text-white" />
      </button>
    </div>
  )
}
