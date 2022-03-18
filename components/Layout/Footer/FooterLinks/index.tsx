import Link from "next/link"
import FooterLink from "components/Layout/Footer/FooterLinks/FooterLink"
import FooterHeading from "./FooterHeading"
import ContactField from "./ContactField"

export default function FooterLinks() {
  return (
    <div className="flex flex-wrap py-16 pt-20">
      <div className="flex w-2/12 flex-col">
        <FooterHeading value="Explore" />
        <FooterLink href="/" value="Properties" />
        <FooterLink href="/" value="About us" />
        <FooterLink href="/" value="Blog" />
        <FooterLink href="/" value="Contact" />
      </div>
      <div className="flex w-3/12 flex-col">
        <FooterHeading value="Learn more" />
        <FooterLink href="/" value="Guides & FAQs" />
        <FooterLink href="/" value="How it works" />
        <FooterLink href="/" value="What is shared ownership?" />
        <FooterLink href="/" value="Rights & responsibilities" />
      </div>
      <div className="flex w-3/12 flex-col">
        <FooterHeading value="Other links" />
        <FooterLink href="/" value="Terms & Conditions" />
        <FooterLink href="/" value="Privacy policy" />
        <FooterLink href="/" value="Cookies policy" />
        <FooterLink href="/" value="Site map" />
      </div>
      <div className="flex w-4/12 flex-col">
        <FooterHeading value="Get in touch" />
        <ContactField
          label="Phone number"
          value="03330 151 254"
          url="tel:0330151254"
        />
        <ContactField
          label="E-mail"
          value="info@homereach.org.uk"
          url="mailto:info@homereach.org.uk"
        />
        <ContactField
          label="Newsletter"
          value="Sign up!"
          onClick={() => PopUp()}
        />
      </div>
    </div>
  )
}

export const PopUp = () => {
  alert("Placeholder!")
}
