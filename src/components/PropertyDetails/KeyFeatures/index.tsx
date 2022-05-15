import SectionHeading from "components/global/sectionHeading"
import { BedroomIcon } from "components/Icons"
import { Features } from "types/property"
import FeaturedItem from "./FeaturedItem"

interface Props {
  features: Features
  otherFeatures: string[]
}

export default function KeyFeatures({ features, otherFeatures }: Props) {
  console.log(features)

  const allFeatures = sortKeyFeatures(features)

  return (
    <section>
      <SectionHeading heading="Key Features" />
      <article className="flex flex-wrap items-center pb-6">
        {allFeatures.map((feature, index) => (
          <div className="inline-flex h-32 w-1/6 p-3" key={index}>
            {feature}
          </div>
        ))}
      </article>
      <b>Other Features</b>
      <ul className="list-inside list-disc py-4 pl-2">
        {otherFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  )
}

/**
 ******************************************************************************
 ******************************************************************************
 * @param features - an object with the key features for the property
 * @returns an array of JSX elements sorted based on each expected key feature
 ******************************************************************************
 */

export const sortKeyFeatures = (features: Features) => {
  let allFeatures = []

  for (const [key, value] of Object.entries(features)) {
    switch (key) {
      case "bedrooms":
        allFeatures.push(
          <FeaturedItem value={value === 1 ? `${value} bed` : `${value} beds`}>
            <BedroomIcon classes="w-7 h-7 text-brand-blue" />
          </FeaturedItem>
        )
        break
      case "bathrooms":
        allFeatures.push(
          <FeaturedItem
            value={value === 1 ? `${value} bathroom` : `${value} bathrooms`}
          >
            <BedroomIcon classes="w-7 h-7 text-brand-blue" />
          </FeaturedItem>
        )
        break
      case "parkingSpaces":
        allFeatures.push(
          <FeaturedItem value="Parking">
            <BedroomIcon classes="w-7 h-7 text-brand-blue" />
          </FeaturedItem>
        )
        break
      case "wheelchairAccessible":
        if (value === false) break
        allFeatures.push(
          <FeaturedItem value={`Wheelchair access`}>
            <BedroomIcon classes="w-7 h-7 text-brand-blue" />
          </FeaturedItem>
        )
        break
      case "openPlanLayout":
        if (value === false) break
        allFeatures.push(
          <FeaturedItem value={`Open plan layout`}>
            <BedroomIcon classes="w-7 h-7 text-brand-blue" />
          </FeaturedItem>
        )
    }
  }

  return allFeatures
}
