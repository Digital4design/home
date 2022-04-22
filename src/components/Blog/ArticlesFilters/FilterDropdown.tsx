import { ChildrenProps } from "types"

export default function FilterDropdown({ children }: ChildrenProps) {
  return (
    <div className="absolute top-full z-[1] hidden max-h-[200px] w-full min-w-fit overflow-y-scroll rounded-sm border bg-white py-2 group-hover:block">
      {children}
    </div>
  )
}
