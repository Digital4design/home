import Link from "next/link"
import { LinkProps } from "types/Layout"

export default function DropdownLink({ slug, name }: LinkProps) {
  return (
    <Link href={slug}>
      <a className="block py-2 text-brand-grey-dark hover:text-brand-green">
        {name}
      </a>
    </Link>
  )
}
