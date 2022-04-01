import { MapIcon } from "@heroicons/react/outline"
import SearchAndFilters from "components/SearchAndFilters"
import { SearchFilters } from "types/search"
import SearchPropertyPreview from "components/SearchPropertyPreview"
import Head from "next/head"
import { capitaliseWord, replaceHyphensWithSpaces } from "utils"
import mockData from "../mockProperties.json"
import SearchSidebar from "components/SearchSidebar"
import Image from "next/image"
import PropertyPreview from "components/PropertyPreview"
import useMatchMedia from "hooks/useMatchMedia"

interface Props {
  queries: SearchFilters
}

interface ServerProps {
  query: SearchFilters
}

export default function Properties({ queries }: Props) {
  // check if size of screen is mobile so we can render large search preview
  const isTabletResolution = useMatchMedia("(max-width:760px)", true)
  const { properties } = mockData
  const { location, rooms, price, radius, type } = queries

  const queriesLength = Object.keys(queries).length

  if (queriesLength === 0) {
    return (
      <>
        <Head>
          <title>No results | Home Reach</title>
        </Head>
        <SearchAndFilters />
        <main role="main">
          <section className="my-6">
            <div className="container-sm rounded bg-brand-blue-light py-20 pb-10 text-center">
              <h2 className="mb-6 text-xl font-medium tracking-wide">
                We couldn&apos;t find properties fitting your needs
              </h2>
              <p className="font-light leading-[1.7]">
                Try again by changing your search criteria or{" "}
                <a
                  href="http://localhost:3000"
                  className="font-medium text-brand-green"
                >
                  subscribe to our notifications
                </a>
                .<br />
                As soon as there is a new offer that meets your requirements, we
                will inform you about it.
              </p>
              <figure className="relative mt-10 h-[200px]">
                <Image
                  src="/assets/search-not-found.jpg"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
            </div>
          </section>
        </main>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>
          {capitaliseWord(type)}s within {radius} miles of{" "}
          {replaceHyphensWithSpaces(location)} | Home Reach
        </title>
      </Head>
      <SearchAndFilters />
      <main role="main">
        {/* sort and map/list view button section, make this a component this */}
        <section className="py-6">
          <div className="container-sm flex h-full items-center justify-end">
            <span className="mr-8 inline-block font-light">
              Sort by: <b className="font-bold">newest</b>
            </span>
            <span className="flex items-center">
              <MapIcon className="mr-2 h-5 w-5 text-brand-blue" /> Map view
            </span>
          </div>
        </section>
        <section className="pb-12">
          <div className="container-sm flex">
            {/* Left Column */}
            <div className="w-full lg:w-2/3" id="left-column">
              {properties.map((property, index) => (
                <>
                  {!isTabletResolution ? (
                    <SearchPropertyPreview property={property} key={index} />
                  ) : (
                    <PropertyPreview
                      property={property}
                      tooltip={property.tooltip}
                      key={index}
                    />
                  )}
                </>
              ))}
            </div>
            {/* Right Column */}
            <SearchSidebar />
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
