import { MapIcon } from "@heroicons/react/outline"
import SearchAndFilters from "components/Search/SearchAndFilters"
import { SearchFilters } from "types/search"
import SearchPropertyPreview from "components/Search/SearchPropertyPreview"
import Head from "next/head"
import { capitaliseWord, replaceHyphensWithSpaces } from "utils"
import mockData from "../mockProperties.json"
import SearchSidebar from "components/Search/SearchSidebar"
import PropertyPreview from "components/PropertyPreview"
import NoResults from "components/NoResults"
import Sidebar from "components/Sidebar"
import HowItWorks from "components/propertyDetails/howItWorks"
import CashBackAnnounce from "components/CashBackAnnounce"

interface Props {
  queries: SearchFilters
}

interface ServerProps {
  query: SearchFilters
}

export default function Properties({ queries }: Props) {
  // check if size of screen is mobile so we can render large search preview
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
        <NoResults />
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
              <div className="rounded bg-brand-alert">
                <span className="block py-1 text-center text-xs uppercase text-white">
                  Last available property in this development
                </span>
                <PropertyPreview property={properties[0]} sidebarItem />
              </div>
              <CashBackAnnounce
                title="Get up to 5% cashback on selected properties!"
                showBrowseButton
              />
              <HowItWorks />
            </Sidebar>
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
