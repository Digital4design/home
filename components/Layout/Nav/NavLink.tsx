import Link from "next/link"
import Dropdown from "components/Layout/Nav/Dropdown"
import { LinkProps } from "types/Layout"

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
    <Link href={slug}>
      <a className="group relative mx-4 inline-block py-6 text-brand-grey-dark after:absolute after:bottom-3 after:left-0 after:right-0 after:h-0.5 hover:text-brand-green hover:after:bg-brand-green hover:after:content-['']">
        {/* children holds the text to be displayed */}
        {children}
        <Dropdown hasDropdown={hasDropdown} dropdownItems={dropdownItems} />
      </a>
    </Link>
  )
}
