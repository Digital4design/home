import { MobileMenuContext } from "context/MobileMenuContext"
import { useContext } from "react"

export default function Hamburger() {
  const { isOpen, toggleOpen } = useContext(MobileMenuContext)

  const commonClasses =
    "pointer-events-none h-0.5 bg-brand-blue transition-all duration-150 ease-in-out"

  return (
    <div
      className="group ml-auto flex h-5 w-5 cursor-pointer flex-col items-end justify-between lg:hidden"
      onClick={toggleOpen}
    >
      <span
        className={`w-full ${commonClasses} ${
          isOpen && "translate-y-2 rotate-45"
        }`}
      />
      <span className={`${commonClasses} w-full ${isOpen && "opacity-0"}`} />
      <span
        className={`${commonClasses} ${
          isOpen ? "w-full -translate-y-2.5 -rotate-45" : "w-3"
        }`}
      />
    </div>
  )
}
