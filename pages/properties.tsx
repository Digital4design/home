import Paragraph from "components/global/Paragraph"
import ParagraphHeading from "components/global/Paragraph/ParagraphHeading"
import SectionHeading from "components/global/sectionHeading"
import HomeSection from "components/HomeSection"
import SearchAndFilters from "components/SearchAndFilters"
import { useSearchFilters } from "context/SearchAndFilterContext"
import { useEffect } from "react"
import { SearchFilters } from "types/search"

interface Props {
  queries: SearchFilters
}

interface ServerProps {
  query: SearchFilters
}

export default function Properties({ queries }: Props) {
  const { setFiltersFromQueries } = useSearchFilters()
  const { location, rooms, price, radius, type } = queries

  const queriesLength = Object.keys(queries).length

  if (queriesLength === 0) {
    return (
      <section className="py-24">
        <div className="container-sm">
          <h1 className="mb-8 text-6xl">No results</h1>
          <p className="text-lg leading-[1.7]">
            It looks like you have not chosen any search queries. Please search
            above to find related properties
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      <SearchAndFilters />
      <main role="main">
        <section className="py-24">
          <div className="container-sm">
            <h1 className="mb-8 text-6xl">Your search results</h1>
            <p className="text-lg leading-[1.7]">
              You searched for{" "}
              {rooms == "any" ? "any number of bedroom" : `${rooms} bedroom`}{" "}
              {type}s in {location === "" ? "any location" : location} within a
              radius of {radius} miles with a price starting from{" "}
              {price == "any" ? `£0` : `£${price}`}.
            </p>
          </div>
        </section>
        <section className="bg-brand-blue py-24 text-brand-blue-light">
          <div className="container-sm">
            <pre>queries: {JSON.stringify(queries, undefined, 2)}</pre>
          </div>
        </section>
      </main>
    </>
  )
}

export function getServerSideProps({ query }: ServerProps) {
  return {
    props: {
      queries: query,
    },
  }
}
