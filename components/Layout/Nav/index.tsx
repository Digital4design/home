import NavLink from "components/Layout/Nav/NavLink"
import { useSearchFilters } from "context/SearchAndFilterContext"

export default function Nav() {
  const { isHomePage } = useSearchFilters()
  // when we pull in data, we will need the slug for each nav link and the text/name to use as children to <NavLink />
  // then for any dropdown navigation, we will need them in an array of objects with { slug, name } keys
  // the example below shows an array of objects which we feed in to <NavLink /> under the 'dropdownItems' prop

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
      <NavLink slug="/properties">Property Search</NavLink>
      <NavLink
        slug="/what-is-home-reach"
        hasDropdown
        dropdownItems={whatIsHomeReachLinks}
      >
        What is Home Reach?
      </NavLink>
      <NavLink
        slug="/useful-information"
        hasDropdown
        dropdownItems={usefulInformationLinks}
      >
        Useful Information
      </NavLink>
      <NavLink slug="/step-by-step-purchasing">Step by step purchasing</NavLink>
      <NavLink slug="/guides-and-faqs">FAQs</NavLink>
      <NavLink slug="/our-customer-stories">Our Customer Stories</NavLink>
    </nav>
  )
}

export const guidesLinks = [
  {
    slug: "what-is-shared-ownership",
    name: "What is shared ownership?",
  },
]

export const whatIsHomeReachLinks = [
  {
    slug: "how-does-it-work",
    name: "How does it work?",
  },
  {
    slug: "steps-to-purchasing",
    name: "Steps to purchasing",
  },
  {
    slug: "am-i-eligible",
    name: "Am I eligible?",
  },
  {
    slug: "what-are-the-benefits",
    name: "What are the benefits?",
  },
]

export const usefulInformationLinks = [
  {
    slug: "what-are-the-benefits",
    name: "What are the costs involved?",
  },
  {
    slug: "what-are-the-benefits",
    name: "What is included in the lease?",
  },
  {
    slug: "what-are-the-benefits",
    name: "Who are Heylo?",
  },
  {
    slug: "what-are-the-benefits",
    name: "My rights and responsibilities",
  },
  {
    slug: "what-are-the-benefits",
    name: "Myth busting and jargon",
  },
  {
    slug: "what-are-the-benefits",
    name: "Help to buy agents",
  },
  {
    slug: "what-are-the-benefits",
    name: "Credit policy",
  },
]
