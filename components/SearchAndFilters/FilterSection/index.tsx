import { ReactNode } from "react"

interface Props {
  children: ReactNode
  onClick: () => void
  width?: string
}

export default function FilterSection({ children, onClick, width }: Props) {
  return (
    <div
      className={`group relative flex h-full cursor-pointer flex-col justify-center border-r border-white px-8 text-left text-white ${
        width ? `w-[${width}px]` : "w-auto"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
