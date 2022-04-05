import { ViewListIcon } from "@heroicons/react/solid"
import React from "react"
import { ViewProps } from "types/search"

export default function ListViewButton({ toggleView }: ViewProps) {
  return (
    <span className="search-view-button" onClick={toggleView}>
      <ViewListIcon className="search-view-button-icon" /> List view
    </span>
  )
}
