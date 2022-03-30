import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { MapLocationMarker } from "components/Icons"
import SearchDistance from "components/SearchAndFilters/SearchBar/SearchDistance"
import { useSearchFilters } from "context/SearchAndFilterContext"

export default function SearchBar() {
  const { updateFilters, searchProperties } = useSearchFilters()
  const [value, setValue] = useState("")

  useEffect(() => {
    const enterKeyListener = (e: KeyboardEvent) => {
      if (e.code !== "Enter") return false

      searchProperties()
    }

    document.addEventListener("keydown", enterKeyListener)

    return () => {
      document.removeEventListener("keydown", enterKeyListener)
    }
  }, [searchProperties, value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase()
    const hyphenatedValue = inputValue.replace(" ", "-")
    setValue(e.target.value)
    updateFilters("location", hyphenatedValue)
  }

  return (
    <div className="relative flex h-[50px] w-4/12 max-w-[330px] items-center rounded-sm bg-white pl-12">
      <div className="absolute top-3 left-3 z-20">
        <MapLocationMarker classes="h-6 w-6 text-brand-green" />
      </div>
      <input
        type="text"
        className="border-r border-gray-300 pr-2 outline-none"
        placeholder="e.g. city, postcode..."
        value={value}
        onChange={handleChange}
      />
      <SearchDistance />
    </div>
  )
}
