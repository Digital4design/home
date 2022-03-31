import NavLink from "components/Layout/Nav/NavLink"
import { useSearchFilters } from "context/SearchAndFilterContext"

export default function Nav() {
  const { isHomePage } = useSearchFilters()
  // when we pull in data, we will need the slug for each nav link and the text/name to use as children to <NavLink />
  // then for any dropdown navigation, we will need them in an array of objects with { slug, name } keys
  // the example below shows an array of objects which we feed in to <NavLink /> under the 'dropdownItems' prop
  const guidesLinks = [
    {
      slug: "what-is-shared-ownership",
      name: "What is shared ownership?",
    },
  ]

  return (
    <nav
      className="mx-auto hidden lg:block"
      role="navigation"
      aria-roledescription="Main navigation"
      aria-label="Main navigation"
    >
      {/* this div here is used to place a shadow across the header, so that the nav dropdown can show below it
       * if it is not the home page, we want to remove the shadow and use a border bottom instead */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 content-[''] ${
          isHomePage ? "shadow-lg" : "border-b"
        }`}
      />
      <NavLink slug="/properties">Properties</NavLink>
      <NavLink slug="/how-it-works">How it works</NavLink>
      <NavLink slug="/guides-and-faqs" hasDropdown dropdownItems={guidesLinks}>
        Guides & FAQs
      </NavLink>
      <NavLink slug="/about-us">About us</NavLink>
      <NavLink slug="/blog">Blog</NavLink>
      <NavLink slug="/contact">Contact</NavLink>
    </nav>
  )
}
