import { MutableRefObject, ReactNode, useEffect, useRef } from "react"

interface Props {
  children: ReactNode
  isActive: boolean
  toggleActive: () => void
  margin?: string
}

export default function Dropdown({
  children,
  isActive,
  toggleActive,
  margin,
}: Props) {
  const dropdownRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (!isActive) return

    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        toggleActive()
      }
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
      ref={dropdownRef}
      className={`${
        margin ? margin : "-mt-2"
      } absolute top-full -left-[5%] z-100 max-h-[400px] w-[110%] min-w-full cursor-default overflow-y-scroll rounded-sm border border-gray-100 bg-white py-4 shadow-md transition-all duration-150 ease-in-out ${classes}`}
    >
      {children}
    </div>
  )
}
