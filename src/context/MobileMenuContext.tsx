import { useRouter } from "next/router"
import { createContext, ReactNode, useEffect, useState } from "react"

interface MenuContext {
  isOpen: boolean
  toggleOpen: () => void
}

interface Props {
  children: ReactNode
}

export const MobileMenuContext = createContext<MenuContext>({
  isOpen: false,
  toggleOpen: () => null,
})

export default function MobileMenuContextProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // when menu is open, hide the body overflow.
    // we do not need to trap focus since it should only be used on mobile and tablet devices where no keyboard control is used
    isOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto")
  }, [isOpen])

  useEffect(() => {
    router.events.on("routeChangeStart", () => setIsOpen(false))

    return () => {
      router.events.off("routeChangeStart", () => setIsOpen(false))
    }
  })

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const value = {
    isOpen,
    toggleOpen,
  }
  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  )
}
