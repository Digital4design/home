import { LinkProps } from "types/Layout"
import DropdownLink from "./DropdownLink"

interface Props {
  hasDropdown: boolean | undefined
  dropdownItems: LinkProps[] | undefined
}

export default function Dropdown({ hasDropdown, dropdownItems }: Props) {
  if (!hasDropdown) return null

  // if array of name/slug objects have been passed down, map through them and render each as a drop down link
  const dropdownLinks = dropdownItems?.map((item, index) => (
    <DropdownLink slug={item.slug} name={item.name} key={index} />
  ))

  return (
    <div className="pointer-events-none absolute top-full left-0 h-auto w-auto translate-y-6 whitespace-nowrap rounded-b-lg bg-white py-4 px-4 opacity-0 shadow-lg transition-all duration-100 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
      {dropdownLinks}
    </div>
  )
}
