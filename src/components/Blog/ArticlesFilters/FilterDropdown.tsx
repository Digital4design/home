import { ChildrenProps } from "types"

export default function FilterDropdown({ children }: ChildrenProps) {
  return (
    <div className="absolute top-full z-[1] hidden w-full min-w-fit rounded-sm border bg-white py-4 group-hover:block">
      {children}
    </div>
  )
}
