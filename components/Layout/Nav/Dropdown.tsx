import { LinkProps } from "types"
import DropdownLink from "./DropdownLink"

interface Props {
  hasDropdown: boolean | undefined
  dropdownItems: LinkProps[] | undefined // array of { slug: string, name: string } or undefined for cases where it's not required
}

export default function Dropdown({ hasDropdown, dropdownItems }: Props) {
  // if hasDropdown or dropdownItems is false, don't render anything
  if (!hasDropdown || !dropdownItems) return null

  // if array of name/slug objects have been passed down, map through them and render each as a drop down link
  // index used as key here as items will not be added/removed by the user
  const dropdownLinks = dropdownItems.map((item, index) => (
    <DropdownLink slug={`/${item.slug}`} name={item.name} key={index} />
  ))

  // render the dropdown links inside a dropdown container div
  return (
    <div className="pointer-events-none absolute top-full left-0 h-auto w-auto translate-y-6 whitespace-nowrap rounded-b bg-white py-4 px-5 opacity-0 shadow-lg transition-all duration-100 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
      {dropdownLinks}
    </div>
  )
}
