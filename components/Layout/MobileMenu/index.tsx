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
      className={` absolute top-full left-0 right-0 flex min-h-full flex-col items-center justify-start bg-white pt-20 transition-all duration-500 ease-in-out-expo lg:hidden ${contextClasses}`}
    >
      <NavLink slug="/properties">Properties</NavLink>
      <NavLink slug="/properties">How it works</NavLink>
      <NavLink slug="/guides-and-faqs">Guides & FAQs</NavLink>
      <NavLink slug="/properties">About us</NavLink>
      <NavLink slug="/properties">Blog</NavLink>
      <NavLink slug="/properties">Contact</NavLink>
      <div className="mx-auto mt-6 mb-12 h-[1px] w-4/5 bg-gray-300 md:w-2/3" />
      <FavouritesButton />
    </nav>
  )
}
