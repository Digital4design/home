import SectionHeading from "components/global/sectionHeading"
import PropertyCarousel from "components/PropertyCarousel"
import PropertyPreview from "components/PropertyPreview"
import PropertyPreviewNew from "components/PropertyPreview/PropertyPreviewNew"
import React from "react"
import { DevelopmentPropertyPreview } from "types/development"

interface PropTypes {
  heading: String
  properties: DevelopmentPropertyPreview[]
}

function RelatedProperties({ heading, properties }: PropTypes) {
  return (
    <section>
      <SectionHeading heading={heading} />
      {/* <pre className="w-full overflow-hidden break-words bg-gray-50 p-4">
        {JSON.stringify(properties, null, 2)}
      </pre> */}
      <div className="flex flex-wrap">
        {properties.map((property) => (
          <PropertyPreviewNew
            key={property.name}
            property={property}
            isRelatedProperty
          />
        ))}
      </div>
    </section>
  )
}

export default RelatedProperties
