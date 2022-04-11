import { MapIcon } from "@heroicons/react/outline"
import React from "react"
import { ViewProps } from "types/search"

export default function MapViewButton({ toggleView }: ViewProps) {
  return (
    <button className="search-view-button" onClick={toggleView}>
      <MapIcon className="search-view-button-icon" /> Map view
    </button>
  )
}
