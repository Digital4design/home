import Nav from "components/Layout/Nav"
import Logo from "components/Layout/Logo"
import FavouritesButton from "components/Layout/FavouritesButton"
import MobileMenu from "components/Layout/MobileMenu"
import Hamburger from "./MobileMenu/Hamburger"
import MobileMenuContextProvider from "context/MobileMenuContext"

export default function Header() {
  return (
    <section className="sticky top-0 z-999 bg-white py-4 lg:py-0">
      <div className="container mx-auto flex items-center">
        <Logo />
        <Nav />
        <div className="hidden w-24 text-right lg:block">
          <FavouritesButton />
        </div>
        <MobileMenuContextProvider>
          <MobileMenu />
          <Hamburger />
        </MobileMenuContextProvider>
      </div>
    </section>
  )
}
