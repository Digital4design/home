import SearchBar from "components/SearchAndFilters/SearchBar"
import SearchAndFilterContextProvider, {
  useSearchFilters,
} from "context/SearchAndFilterContext"
import AdvancedSearch from "./AdvancedSearch"
import Bedrooms from "./Bedrooms"
import MonthlyRange from "./MonthlyRange"
import PropertyType from "./PropertyType"
import SearchButton from "./SearchButton"

// The search and filters bar which shows on home page and above property search or properties
export default function SearchAndFilters() {
  // The filters are displayed differently if it isn't the home page so we use this isHomePage variable from the hook to change classes
  // this hook is used within the individual pieces to the filters too
  const { isSearchPage } = useSearchFilters()

  // if not the home page, we want the filter and search to be white bg, full width in a container and stick beneath the navigation
  const stickyClasses = isSearchPage
    ? "sticky top-[73px] h-24 bg-white"
    : "rounded-sm bg-brand-blue h-20"
  return (
    <SearchAndFilterContextProvider>
      <div className={`sticky z-500 mx-auto w-full shadow-lg ${stickyClasses}`}>
        <div className={`${isSearchPage ? "container h-full" : "h-full px-4"}`}>
          <div className="flex h-full w-full items-center justify-center">
            <SearchBar />
            <PropertyType />
            <MonthlyRange />
            <Bedrooms />
            <AdvancedSearch />
            <SearchButton />
          </div>
        </div>
      </div>
    </SearchAndFilterContextProvider>
  )
}
