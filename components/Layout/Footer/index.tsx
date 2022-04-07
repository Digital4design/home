import FooterBottom from "./FooterBottom"
import FooterLinks from "./FooterLinks"

interface Props {
  blue?: boolean
}

/**
 *
 * @param props.blue if true, the footer background will be branded light blue otherwise it will be branded light grey
 * @returns the website footer with footer links
 */

export default function Footer({ blue }: Props) {
  return (
    <footer className={blue ? "bg-brand-blue-light" : "bg-brand-grey-light"}>
      <div className="container-sm">
        <FooterLinks />
        <hr />
        <FooterBottom />
      </div>
    </footer>
  )
}
