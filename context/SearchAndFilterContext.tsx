import { useRouter } from "next/router"
import { createContext, ReactNode, useContext, useState } from "react"

interface Props {
  children: ReactNode
}

interface Filters {
  location: string
  radius: number
  type: string
  price: string | number
  rooms: string | number
}

interface FiltersContext {
  filters: Filters
  updateFilters: (key: string, filter: string | number) => void
  searchProperties: () => void
  setFiltersFromQueries: (filters: Filters) => void
}

const initialState = {
  location: "",
  radius: 0,
  type: "development",
  price: "any",
  rooms: "any",
}

export const SearchAndFilterContext = createContext<FiltersContext>({
  filters: initialState,
  updateFilters: () => {},
  searchProperties: () => {},
  setFiltersFromQueries: () => {},
})

export default function SearchAndFilterContextProvider({ children }: Props) {
  const router = useRouter()
  const [filters, setFilters] = useState<Filters>(initialState)

  const updateFilters = (key: string, filter: string | number) => {
    setFilters({ ...filters, [key]: filter })
  }

  const setFiltersFromQueries = (queries: Filters) => {
    setFilters(queries)
  }

  const searchProperties = () => {
    const query = `?location=${filters.location}&radius=${filters.radius}&price=${filters.price}&type=${filters.type}&rooms=${filters.rooms}`
    const url = `/properties${query}`

    router.push(url)
  }

  const value = {
    filters,
    updateFilters,
    searchProperties,
    setFiltersFromQueries,
  }
  return (
    <SearchAndFilterContext.Provider value={value}>
      {children}
    </SearchAndFilterContext.Provider>
  )
}

export const useSearchFilters = () => {
  const router = useRouter()
  const { filters, updateFilters, searchProperties, setFiltersFromQueries } =
    useContext(SearchAndFilterContext)

  const isSearchPage =
    router.pathname === "/properties" || router.pathname === "/property"
      ? true
      : false

  return {
    filters,
    updateFilters,
    searchProperties,
    isSearchPage,
    setFiltersFromQueries,
  }
}
