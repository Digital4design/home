import { ReactNode, useEffect } from "react"

interface Props {
  children: ReactNode
  isActive: boolean
  toggleActive: () => void
}

export default function Dropdown({ children, isActive, toggleActive }: Props) {
  useEffect(() => {
    if (!isActive) return

    const handleClickOutside = () => {
      toggleActive()
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isActive, toggleActive])

  const classes = isActive
    ? "opacity-1 pointer-events-auto translate-y-0"
    : "opacity-0 translate-y-5 pointer-events-none"

  return (
    <div
      className={`absolute top-full left-0 z-100 mt-3 min-w-full cursor-default rounded bg-white py-4 shadow-md transition-all duration-150 ease-in-out ${classes}`}
    >
      {children}
    </div>
  )
}
