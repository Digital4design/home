import SearchBar from "components/SearchAndFilters/SearchBar"
import Bedrooms from "./Bedrooms"
import MonthlyRange from "./MonthlyRange"
import PropertyType from "./PropertyType"

export default function SearchAndFilters() {
  return (
    <div className="mx-auto h-20 w-full rounded bg-brand-blue shadow-lg">
      <div className="flex h-full w-full items-center px-4">
        <SearchBar />
        <PropertyType />
        <MonthlyRange />
        <Bedrooms />
      </div>
    </div>
  )
}
