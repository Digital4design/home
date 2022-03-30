import { SearchIcon } from "@heroicons/react/outline"
import { useSearchFilters } from "context/SearchAndFilterContext"
import { useRouter } from "next/router"
import React from "react"

export default function SearchButton() {
  const { filters } = useSearchFilters()
  const router = useRouter()

  const handleSearch = () => {
    const query = `?location=${filters.location}&radius=${filters.radius}&price=${filters.price}&type=${filters.type}&rooms=${filters.rooms}`
    const url = `/properties${query}`

    router.push(url)
  }

  return (
    <div className="w-auto pl-4">
      <button
        className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-green transition-all duration-100 ease-in-out hover:bg-brand-green-medium active:bg-brand-green-dark"
        onClick={handleSearch}
      >
        <SearchIcon className="h-5 w-5 text-white" />
      </button>
    </div>
  )
}
