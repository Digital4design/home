import FooterBottom from "./FooterBottom"
import FooterLinks from "./FooterLinks"

export default function Footer() {
  return (
    <footer className="bg-brand-grey-light">
      <div className="container-sm">
        <FooterLinks />
        <hr />
        <FooterBottom />
      </div>
    </footer>
  )
}
