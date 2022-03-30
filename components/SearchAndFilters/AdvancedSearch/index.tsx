import useToggle from "hooks/useToggle"
import React from "react"
import FilterSection from "../FilterSection"
import FilterDisplay from "../FilterSection/FilterDisplay"
import FilterLabel from "../FilterSection/FilterLabel"

export default function AdvancedSearch() {
  const { isActive, toggleActive } = useToggle()
  return (
    <FilterSection onClick={toggleActive} width="grow">
      <FilterLabel>Advanced search</FilterLabel>

      <FilterDisplay>See more</FilterDisplay>
    </FilterSection>
  )
}
