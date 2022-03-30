import useToggle from "hooks/useToggle"
import { useState } from "react"
import Dropdown from "components/SearchAndFilters/Dropdown"
import FilterSection from "components/SearchAndFilters/FilterSection"
import BedroomsOption from "components/SearchAndFilters/Bedrooms/BedroomsOption"
import FilterLabel from "components/SearchAndFilters/FilterSection/FilterLabel"
import FilterDisplay from "components/SearchAndFilters/FilterSection/FilterDisplay"

export default function Bedrooms() {
  const { isActive, toggleActive } = useToggle()
  const [value, setValue] = useState<number>(1)

  const handleClick = (rooms: number) => {
    setValue(rooms)
  }

  return (
    <FilterSection onClick={toggleActive}>
      <FilterLabel>Bedrooms</FilterLabel>

      <FilterDisplay>{value === 6 ? `${value}+` : value}</FilterDisplay>

      <Dropdown isActive={isActive} toggleActive={toggleActive}>
        {rooms.map((room) => (
          <BedroomsOption key={room} rooms={room} handleClick={handleClick} />
        ))}
      </Dropdown>
    </FilterSection>
  )
}

// mock
export const rooms = [1, 2, 3, 4, 5, 6]
