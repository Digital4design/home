import Nav from "components/Layout/Nav"
import Logo from "./Logo"
import WishListButton from "./WishlistButton"

export default function Header() {
  return (
    <section className="sticky z-999 bg-white shadow-lg">
      <div className="container mx-auto flex items-center">
        <Logo />
        <Nav />
        <WishListButton />
      </div>
    </section>
  )
}
