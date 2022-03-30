import useToggle from "hooks/useToggle"
import { useState } from "react"
import Dropdown from "components/SearchAndFilters/Dropdown"
import PropertyTypeOption from "components/SearchAndFilters/PropertyType/PropertyTypeOption"
import { ChevronDownIcon } from "@heroicons/react/solid"

export default function PropertyType() {
  const { isActive, toggleActive } = useToggle()
  const [value, setValue] = useState<string>("Development")

  const handleClick = (propertyType: string) => {
    setValue(propertyType)
  }

  return (
    <div
      className="group relative w-72 cursor-pointer border-r-2 border-white px-8 text-left text-white"
      onClick={toggleActive}
    >
      <span className="block text-xs">Type of property</span>
      <span className="flex items-center justify-between group-hover:text-brand-blue-light">
        {value}
        <ChevronDownIcon className="ml-2 h-5 w-5 text-white group-hover:text-brand-blue-light" />
      </span>
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
    </div>
  )
}

// mock
export const propertyTypes = ["House", "Apartment", "Development"]
