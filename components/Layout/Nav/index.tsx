import NavLink from "components/Layout/Nav/NavLink"

export default function Nav() {
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
      <div className="pointer-events-none absolute inset-0 z-10 shadow-lg content-['']" />
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
