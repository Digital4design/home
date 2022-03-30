import useToggle from "hooks/useToggle"
import { useState } from "react"
import Dropdown from "components/SearchAndFilters/Dropdown"
import PropertyTypeOption from "components/SearchAndFilters/PropertyType/PropertyTypeOption"
import FilterSection from "components/SearchAndFilters/FilterSection"
import FilterLabel from "components/SearchAndFilters/FilterSection/FilterLabel"
import FilterDisplay from "components/SearchAndFilters/FilterSection/FilterDisplay"

export default function PropertyType() {
  const { isActive, toggleActive } = useToggle()
  const [value, setValue] = useState<string>("Development")

  const handleClick = (propertyType: string) => {
    setValue(propertyType)
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
