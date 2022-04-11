import Link from "next/link"

interface Props {
  href: string
  value: string
}

/**
 *
 * @property href - the route you would like to navigate to
 * @property value - the text you would like the link to display
 * @returns a styled link for the footer of the site
 */

export default function FooterLink({ href, value }: Props) {
  return (
    <Link href={href}>
      <a className="text-sm font-light leading-10 text-brand-grey-dark hover:text-brand-green">
        {value}
      </a>
    </Link>
  )
}
