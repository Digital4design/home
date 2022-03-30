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
})

export default function SearchAndFilterContextProvider({ children }: Props) {
  const [filters, setFilters] = useState<Filters>(initialState)

  const updateFilters = (key: string, filter: string | number) => {
    setFilters({ ...filters, [key]: filter })
  }

  const value = {
    filters,
    updateFilters,
  }
  return (
    <SearchAndFilterContext.Provider value={value}>
      {children}
    </SearchAndFilterContext.Provider>
  )
}

export const useSearchFilters = () => {
  const { filters, updateFilters } = useContext(SearchAndFilterContext)

  return { filters, updateFilters }
}
