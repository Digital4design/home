import Link from "next/link"
import { NavLinkProps } from "types/layout"

export default function DropdownLink({ slug, name }: NavLinkProps) {
  return (
    <Link href={slug}>
      <a className="block px-1 py-3 text-left text-brand-grey-dark hover:text-brand-green">
        {name}
      </a>
    </Link>
  )
}
