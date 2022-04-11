import PropertyPreview from "components/PropertyPreview"
import Image from "next/image"
import React from "react"
import { SearchResultProps } from "types/search"
import SearchHeader from "./SearchHeader"

interface Props extends SearchResultProps {
  toggleView: () => void
}

export default function MapView({ properties, toggleView }: Props) {
  return (
    <section className="relative">
      {/* Left Column */}
      <div className="fixed top-[169px] left-0 right-0 block px-4 lg:static lg:hidden">
        <SearchHeader isMapView={true} toggleView={toggleView} />
      </div>
      <div className="hidden pl-4 lg:block lg:w-1/4" id="left-column">
        <SearchHeader isMapView={true} toggleView={toggleView} />
        {properties.map((property, index) => (
          <article key={index}>
            <PropertyPreview
              property={property}
              tooltip={property.tooltip}
              key={index}
              sidebarItem
            />
          </article>
        ))}
      </div>

      {/* Map */}
      <div className="fixed left-0 top-[245px] h-full w-full bg-brand-grey lg:top-[169px] lg:left-1/4 lg:ml-4 lg:block lg:w-3/4">
        <Image
          src="/assets/placeholder/map.jpeg"
          alt=""
          placeholder="blur"
          blurDataURL="/assets/placeholder/map.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  )
}
