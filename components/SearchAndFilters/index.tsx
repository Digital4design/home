import { ChevronDownIcon } from "@heroicons/react/outline"
import SearchBar from "components/SearchAndFilters/SearchBar"
import PropertyType from "./PropertyType"

export default function SearchAndFilters() {
  return (
    <div className="mx-auto h-20 w-full rounded bg-brand-blue shadow-lg">
      <div className="flex h-full w-1/2 items-center p-4">
        <SearchBar />
        <PropertyType />
      </div>
    </div>
  )
}
