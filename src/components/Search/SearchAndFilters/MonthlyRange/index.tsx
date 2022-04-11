import useToggle from "hooks/useToggle"
import { useState } from "react"
import Dropdown from "components/Search/SearchAndFilters/Dropdown"
import MonthlyRangeOption from "components/Search/SearchAndFilters/MonthlyRange/MonthlyRangeOption"
import FilterSection from "components/Search/SearchAndFilters/FilterSection"
import FilterLabel from "components/Search/SearchAndFilters/FilterSection/FilterLabel"
import FilterDisplay from "components/Search/SearchAndFilters/FilterSection/FilterDisplay"
import { useSearchFilters } from "context/SearchAndFilterContext"

export default function MonthlyRange() {
  const { updateFilters } = useSearchFilters()
  const { isActive, toggleActive } = useToggle()
  const [value, setValue] = useState<number>(0)

  const handleClick = (price: number) => {
    setValue(price)
    updateFilters("price", price)
  }

  return (
    <FilterSection onClick={toggleActive} width="w-[200px]">
      <FilterLabel>Monthly cost range</FilterLabel>

      <FilterDisplay>{value === 0 ? "Any" : `£${value}`}</FilterDisplay>

      <Dropdown isActive={isActive} toggleActive={toggleActive}>
        <div className="mb-2 flex items-center justify-between px-4 text-black">
          Amount{" "}
          <input
            type="text"
            className="h-12 max-w-[80px] grow rounded-sm border"
          />
        </div>
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
