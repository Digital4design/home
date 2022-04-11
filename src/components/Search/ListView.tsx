import PropertyPreview from "components/PropertyPreview"
import Sidebar from "components/Sidebar"
import CashBackAnnounce from "components/Sidebar/CashbackAnnounce"
import HowItWorks from "components/Sidebar/HowItWorks"
import LastAvailableProperty from "components/Sidebar/LastAvailableProperty"
import React from "react"
import { SearchResultProps } from "types/search"
import SearchPropertyPreview from "components/Search/SearchPropertyPreview"
import SearchSidebar from "./SearchSidebar"

export default function ListView({ properties }: SearchResultProps) {
  return (
    <section className="pb-12">
      <div className="container-sm flex">
        {/* Left Column */}
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
                  key={index}
                />
              </div>
            </article>
          ))}
        </div>
        {/* Right Column */}
        <Sidebar>
          <SearchSidebar />
          <LastAvailableProperty property={properties[0]} />
          <CashBackAnnounce
            title="Get up to 5% cashback on selected properties!"
            showBrowseButton
          />
          <HowItWorks />
        </Sidebar>
      </div>
    </section>
  )
}
