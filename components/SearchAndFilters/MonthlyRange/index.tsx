import useToggle from "hooks/useToggle"
import { useState } from "react"
import Dropdown from "components/SearchAndFilters/Dropdown"
import MonthlyRangeOption from "components/SearchAndFilters/MonthlyRange/MonthlyRangeOption"
import FilterSection from "components/SearchAndFilters/FilterSection"
import FilterLabel from "components/SearchAndFilters/FilterSection/FilterLabel"
import FilterDisplay from "components/SearchAndFilters/FilterSection/FilterDisplay"

export default function MonthlyRange() {
  const { isActive, toggleActive } = useToggle()
  const [value, setValue] = useState<number>(0)

  const handleClick = (price: number) => {
    setValue(price)
  }

  return (
    <FilterSection onClick={toggleActive} width="w-[200px]">
      <FilterLabel>Monthly cost range</FilterLabel>

      <FilterDisplay>{value === 0 ? "Any" : `£${value}`}</FilterDisplay>

      <Dropdown isActive={isActive} toggleActive={toggleActive}>
        {prices.map((price) => (
          <MonthlyRangeOption
            key={price}
            price={price}
            handleClick={handleClick}
          />
        ))}
      </Dropdown>
    </FilterSection>
  )
}

// mock
export const prices = [
  0, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500,
  1600, 1700, 1800, 1900, 2000, 2500, 3000,
]
