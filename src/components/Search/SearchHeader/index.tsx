import React, { useState } from "react"
import ListViewButton from "components/Search/SearchHeader/ListViewButton"
import MapViewButton from "components/Search/SearchHeader/MapViewButton"

interface Props {
  isMapView: boolean
  toggleView: () => void
}

export default function SearchHeader({ isMapView, toggleView }: Props) {
  return (
    <section className="py-6">
      <div className={`${!isMapView && "container-sm"}`}>
        <div
          className={`flex h-full w-full items-center ${
            isMapView ? "justify-between" : "justify-between md:justify-end"
          }`}
        >
          <span className="mr-8 inline-block font-light">
            Sort by: <b className="font-bold">newest</b>
          </span>
          {isMapView ? (
            <ListViewButton toggleView={toggleView} />
          ) : (
            <MapViewButton toggleView={toggleView} />
          )}
        </div>
      </div>
    </section>
  )
}
