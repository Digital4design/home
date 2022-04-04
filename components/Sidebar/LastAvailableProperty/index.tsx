import PropertyPreview from "components/PropertyPreview"
import React from "react"
import { Property } from "types/property"

interface Props {
  property: Property
}

export default function LastAvailableProperty({ property }: Props) {
  return (
    <div className="rounded bg-brand-alert shadow-lg">
      <span className="block py-1 text-center text-xs uppercase text-white">
        Last available property in this development
      </span>
      <PropertyPreview property={property} sidebarItem />
    </div>
  )
}
