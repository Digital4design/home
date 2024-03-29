import { MobileMenuContext } from "context/MobileMenuContext"
import { useContext } from "react"
import FavouritesButton from "components/Layout/FavouritesButton"
import NavLink from "components/Layout/Nav/NavLink"

export default function MobileMenu() {
  const { isOpen } = useContext(MobileMenuContext)

  const contextClasses = isOpen
    ? "translate-x-0 pointer-events-auto opacity-100"
    : "opacity-0 pointer-events-none translate-x-full"

  return (
    <nav
      role="menu"
      aria-roledescription="Mobile menu"
      aria-label="Mobile menu"
      className={`absolute top-full left-0 flex h-screen w-full flex-col items-center justify-start overflow-x-hidden overflow-y-scroll bg-white transition-all duration-500 ease-in-out-expo lg:hidden ${contextClasses}`}
    >
      <NavLink slug="/properties">Property Search</NavLink>
      <NavLink slug="/how-it-works">How it works</NavLink>
      <NavLink slug="/guides-and-faqs">Guides & FAQs</NavLink>
      <NavLink slug="/about-us">About us</NavLink>
      <NavLink slug="/blog">Blog</NavLink>
      <NavLink slug="/contact">Contact</NavLink>
      <div className="mx-auto mt-6 mb-12 h-[1px] w-4/5 bg-gray-300 md:w-2/3" />
      <FavouritesButton />
    </nav>
  )
}
