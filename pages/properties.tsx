import SearchAndFilters from "components/Search/SearchAndFilters"
import { SearchFilters } from "types/search"
import Head from "next/head"
import { capitaliseWord, replaceHyphensWithSpaces } from "utils"
import mockData from "../mockProperties.json"
import NoResults from "components/NoResults"
import SearchHeader from "components/Search/SearchHeader"
import { ReactElement, useState } from "react"
import ListView from "components/Search/ListView"
import MapView from "components/Search/MapView"
import Footer from "components/Layout/Footer"
import NoFooterLayout from "components/Layout/PageLayouts/NoFooterLayout"

interface Props {
  queries: SearchFilters
}
interface ServerProps {
  query: SearchFilters
}

export default function Properties({ queries }: Props) {
  const [isMapView, setIsMapView] = useState<boolean>(false)
  const { location, rooms, price, radius, type } = queries

  const { properties } = mockData

  const queriesLength = Object.keys(queries).length

  const toggleView = () => {
    setIsMapView(!isMapView)
  }

  if (queriesLength <= 0) {
    return (
      <>
        <Head>
          <title>No results | Home Reach</title>
        </Head>
        <SearchAndFilters />
        <NoResults />
        <Footer />
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
        {isMapView ? (
          // inside map view there is a search header component to match that layout there
          <MapView properties={properties} toggleView={toggleView} />
        ) : (
          <>
            {/* Map view layout is different so we need to include the search header with sort and map view button here */}
            <SearchHeader isMapView={isMapView} toggleView={toggleView} />
            <ListView properties={properties} />
          </>
        )}
      </main>
      {!isMapView && <Footer />}
    </>
  )
}

// different layout for this page, have no footer. Then, in the map view on sidebar left display the mobile footer
// if isMapView is not on then display footer as usual under the closing main tag

Properties.getLayout = function getLayout(page: ReactElement) {
  return <NoFooterLayout>{page}</NoFooterLayout>
}

export async function getServerSideProps({ query }: ServerProps) {
  return {
    props: {
      queries: query,
    },
  }
}
