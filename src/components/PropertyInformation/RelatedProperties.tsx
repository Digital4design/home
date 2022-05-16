import SectionHeading from "components/global/sectionHeading"
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
    </section>
  )
}

export default RelatedProperties
