import SearchBar from "components/SearchAndFilters/SearchBar"
import AdvancedSearch from "./AdvancedSearch"
import Bedrooms from "./Bedrooms"
import MonthlyRange from "./MonthlyRange"
import PropertyType from "./PropertyType"
import SearchButton from "./SearchButton"

export default function SearchAndFilters() {
  return (
    <div className="mx-auto h-20 w-full rounded-sm bg-brand-blue shadow-lg">
      <div className="flex h-full w-full items-center justify-center px-4">
        <SearchBar />
        <PropertyType />
        <MonthlyRange />
        <Bedrooms />
        <AdvancedSearch />
        <SearchButton />
      </div>
    </div>
  )
}
