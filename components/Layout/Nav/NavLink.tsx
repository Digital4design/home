import Link from "next/link"
import Dropdown from "components/Layout/Nav/Dropdown"
import { LinkProps } from "types"

interface Props {
  slug: string
  children: string
  hasDropdown?: boolean
  dropdownItems?: LinkProps[] // Array of { slug: string, name: string }
}

export default function NavLink({
  slug,
  children,
  hasDropdown,
  dropdownItems,
}: Props) {
  return (
    <Link passHref href={slug}>
      <div
        className={`group relative mx-4 block w-full cursor-pointer py-6 text-center text-brand-grey-dark ${
          hasDropdown &&
          "after:absolute after:bottom-3 after:left-0 after:right-0 after:hidden after:h-0.5 hover:after:bg-brand-green hover:after:content-[''] lg:after:block"
        } hover:text-brand-green  lg:inline-block lg:w-auto `}
      >
        {/* children holds the text to be displayed */}
        <a>{children}</a>

        {/* The dropdown item, will render out any of the dropdown items as links if hasDropdown is true, and dropdownItems exist */}
        <Dropdown hasDropdown={hasDropdown} dropdownItems={dropdownItems} />
      </div>
    </Link>
  )
}
