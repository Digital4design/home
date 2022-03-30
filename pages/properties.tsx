import Paragraph from "components/global/Paragraph"
import ParagraphHeading from "components/global/Paragraph/ParagraphHeading"
import SectionHeading from "components/global/sectionHeading"
import HomeSection from "components/HomeSection"
import { SearchFilters } from "types/search"

interface Props {
  queries: SearchFilters
}

interface ServerProps {
  query: SearchFilters
}

export default function Properties({ queries }: Props) {
  const { location, rooms, price, radius, type } = queries

  return (
    <>
      <section className="py-24">
        <div className="container-sm">
          <h1 className="mb-8 text-6xl">Your search results</h1>
          <p className="text-lg leading-[1.7]">
            You searched for {type}s in {location} within a radius of {radius}{" "}
            miles, with a price starting from £{price} and {rooms} bedrooms.
          </p>
        </div>
      </section>
      <section className="bg-brand-blue py-24 text-brand-blue-light">
        <div className="container-sm">
          <pre>queries: {JSON.stringify(queries, undefined, 2)}</pre>
        </div>
      </section>
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
