import Link from "next/link"
import Dropdown from "components/Layout/Nav/Dropdown"
import { NavLinkProps } from "types/layout"
import { useRouter } from "next/router"

interface Props {
  slug: string
  children: string
  hasDropdown?: boolean
  dropdownItems?: NavLinkProps[] // Array of { slug: string, name: string }
}

export default function NavLink({
  slug,
  children,
  hasDropdown,
  dropdownItems,
}: Props) {
  const router = useRouter()

  const activeClass =
    router.asPath === slug
      ? "text-brand-green hover:text-brand-green-dark"
      : "text-brand-grey-dark hover:text-brand-green "

  return (
    <Link passHref href={slug}>
      <div
        className={`group relative mx-4 block w-full cursor-pointer py-6 text-center  ${
          hasDropdown &&
          "after:absolute after:bottom-3 after:left-0 after:right-0 after:hidden after:h-0.5 hover:after:bg-brand-green hover:after:content-[''] lg:after:block"
        } lg:inline-block lg:w-auto ${activeClass}`}
      >
        {/* children holds the text to be displayed */}
        <a>{children}</a>

        {/* The dropdown item, will render out any of the dropdown items as links if hasDropdown is true, and dropdownItems exist */}
        <Dropdown hasDropdown={hasDropdown} dropdownItems={dropdownItems} />
      </div>
    </Link>
  )
}
