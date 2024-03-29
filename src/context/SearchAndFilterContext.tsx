import { useRouter } from "next/router"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

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
})

export default function SearchAndFilterContextProvider({ children }: Props) {
  const router = useRouter()
  const [filters, setFilters] = useState<Filters>(initialState)

  // used in individual filter sections to add a filter to filters object, which we then use in the searchProperties function
  // if certain filters aren't chosen, the initial state filters will remain
  const updateFilters = (key: string, filter: string | number) => {
    setFilters({ ...filters, [key]: filter })
  }

  const searchProperties = () => {
    const queries = `?location=${filters.location}&radius=${filters.radius}&price=${filters.price}&type=${filters.type}&rooms=${filters.rooms}`
    const url = `/properties${queries}`

    router.push(url)
  }

  const value = {
    filters,
    updateFilters,
    searchProperties,
  }
  return (
    <SearchAndFilterContext.Provider value={value}>
      {children}
    </SearchAndFilterContext.Provider>
  )
}

export const useSearchFilters = () => {
  const router = useRouter()
  const { filters, updateFilters, searchProperties } = useContext(
    SearchAndFilterContext
  )

  const isSearchPage =
    router.pathname === "/properties" || router.pathname === "/property"
      ? true
      : false

  return {
    filters,
    updateFilters,
    searchProperties,
    isSearchPage,
  }
}
