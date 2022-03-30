import useToggle from "hooks/useToggle"
import { useState } from "react"
import Dropdown from "components/SearchAndFilters/Dropdown"
import SearchDistanceOption from "components/SearchAndFilters/SearchBar/SearchDistanceOption"
import { useSearchFilters } from "context/SearchAndFilterContext"

export default function SearchDistance() {
  const { updateFilters } = useSearchFilters()
  const { isActive, toggleActive } = useToggle()
  const [value, setValue] = useState<number>(0)

  const handleClick = (distance: number) => {
    setValue(distance)
    updateFilters("radius", distance)
  }

  // using the state value to show the main radius search value in filter i.e. + 0 miles
  const displayValue = `+ ${value} ${value === 1 ? "mile" : "miles"}`

  // loop through distance values and render all options, use as child of the Dropdown component
  const DistanceOptions = distances.map(({ distance }) => (
    <SearchDistanceOption
      distance={distance}
      value={value}
      handleClick={handleClick}
      key={distance}
    />
  ))

  return (
    <div
      className="absolute right-0 flex h-10 w-4/12 cursor-pointer items-center justify-center pl-3 font-light"
      onClick={toggleActive}
    >
      {displayValue}
      <Dropdown isActive={isActive} toggleActive={toggleActive} margin="mt-3">
        {DistanceOptions}
      </Dropdown>
    </div>
  )
}

// mock
export const distances = [
  {
    distance: 0,
  },
  {
    distance: 1,
  },
  {
    distance: 3,
  },
  {
    distance: 5,
  },
  {
    distance: 10,
  },
  {
    distance: 15,
  },
  {
    distance: 20,
  },
  {
    distance: 30,
  },
  {
    distance: 40,
  },
  {
    distance: 50,
  },
]
