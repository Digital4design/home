import { useSearchFilters } from "context/SearchAndFilterContext"
import { MutableRefObject, ReactNode } from "react"

interface Props {
  children: ReactNode
  onClick: () => void
  width?: string
  ref?: MutableRefObject<HTMLDivElement>
}

/**
 *
 * @param props.children the filter label and display components
 * @param props.onClick the on click function used to handle the trigger of the filter dropdown options
 * @param props.width a tailwindcss width property i.e. w-[200px] or w-10
 * @returns a filter section of the main filter bar intended as a parent of FilterDisplay and FilterLabel components
 */

export default function FilterSection({
  children,
  onClick,
  width,
  ref,
}: Props) {
  const { isSearchPage } = useSearchFilters()

  const classes = !isSearchPage
    ? "border-white text-white"
    : "text-brand-grey-dark"
  return (
    <div
      ref={ref}
      className={`group relative flex h-full cursor-pointer flex-col justify-center border-r px-8 text-left ${classes} ${
        width ? width : "w-auto"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
