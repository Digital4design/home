import useToggle from "hooks/useToggle"
import { useState } from "react"
import Dropdown from "components/SearchAndFilters/Dropdown"
import FilterSection from "components/SearchAndFilters/FilterSection"
import BedroomsOption from "components/SearchAndFilters/Bedrooms/BedroomsOption"
import FilterLabel from "components/SearchAndFilters/FilterSection/FilterLabel"
import FilterDisplay from "components/SearchAndFilters/FilterSection/FilterDisplay"
import { useSearchFilters } from "context/SearchAndFilterContext"

export default function Bedrooms() {
  const { updateFilters } = useSearchFilters()
  const { isActive, toggleActive } = useToggle()
  const [value, setValue] = useState<number>(0)

  const handleClick = (rooms: number) => {
    setValue(rooms)
    updateFilters("rooms", rooms)
  }

  return (
    <FilterSection onClick={toggleActive}>
      <FilterLabel>Bedrooms</FilterLabel>

      <FilterDisplay>
        {value === 6 ? `${value}+` : value === 0 ? "Any" : value}
      </FilterDisplay>

      <Dropdown isActive={isActive} toggleActive={toggleActive}>
        {rooms.map((room) => (
          <BedroomsOption key={room} rooms={room} handleClick={handleClick} />
        ))}
      </Dropdown>
    </FilterSection>
  )
}

// mock
export const rooms = [0, 1, 2, 3, 4, 5, 6]
