import Sidebar from "components/Sidebar"
import PropertyPreview from "components/PropertyPreview"
import SearchPropertyPreview from "components/Search/SearchPropertyPreview"
import Image from "next/image"
import React from "react"
import mockData from "../../../mockProperties.json"
import AreYouInterested from "components/Sidebar/AreYouInterested"
import HowItWorks from "components/Sidebar/HowItWorks"
import BackButton from "components/Core/BackButton"

// Specific List of properties in a development category
export default function Development() {
  const { properties } = mockData

  return (
    <main>
      <aside className="pt-5">
        <BackButton />
      </aside>
      <section className="py-4">
        <div className="container-sm flex items-center justify-between">
          <div className="">
            <h1 className="mb-1 font-secondary text-2xl font-normal">
              Taylor Whimpey Developments
            </h1>
            <p className="flex items-center text-sm text-brand-grey">
              3 developments available
            </p>
          </div>
          <figure className="relative ml-auto h-[40px] w-[100px]">
            <Image
              src="/assets/placeholder/partners/taylor.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </div>
      </section>
      <section className="pb-12">
        <div className="container-sm flex">
          <div className="w-full lg:w-2/3" id="left-column">
            {properties.map((property, index) => (
              <article key={index}>
                <div className="hidden md:inline">
                  <SearchPropertyPreview property={property} />
                </div>
                <div className="inline md:hidden">
                  <PropertyPreview
                    property={property}
                    tooltip={property.tooltip}
                  />
                </div>
              </article>
            ))}
          </div>
          <Sidebar>
            <AreYouInterested />
            <HowItWorks />
          </Sidebar>
        </div>
      </section>
    </main>
  )
}
