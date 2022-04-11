import useToggle from "hooks/useToggle"
import { useState } from "react"
import Dropdown from "components/Search/SearchAndFilters/Dropdown"
import PropertyTypeOption from "components/Search/SearchAndFilters/PropertyType/PropertyTypeOption"
import FilterSection from "components/Search/SearchAndFilters/FilterSection"
import FilterLabel from "components/Search/SearchAndFilters/FilterSection/FilterLabel"
import FilterDisplay from "components/Search/SearchAndFilters/FilterSection/FilterDisplay"
import { useSearchFilters } from "context/SearchAndFilterContext"

export default function PropertyType() {
  const { updateFilters } = useSearchFilters()
  const { isActive, toggleActive } = useToggle()
  const [value, setValue] = useState<string>("Development")

  const handleClick = (propertyType: string) => {
    setValue(propertyType)
    updateFilters("type", propertyType.toLowerCase())
  }

  return (
    <FilterSection onClick={toggleActive} width="w-[200px]">
      <FilterLabel>Type of property</FilterLabel>

      <FilterDisplay>{value}</FilterDisplay>

      <Dropdown isActive={isActive} toggleActive={toggleActive}>
        {propertyTypes.map((type) => (
          <PropertyTypeOption
            key={type}
            value={value}
            type={type}
            handleClick={handleClick}
          />
        ))}
      </Dropdown>
    </FilterSection>
  )
}

// mock
export const propertyTypes = ["House", "Apartment", "Development"]
