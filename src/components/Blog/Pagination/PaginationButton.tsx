import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

interface Props {
  isNext?: boolean
  disabled: boolean
  onClick: () => void
}

export default function PaginationButton({ isNext, disabled, onClick }: Props) {
  return (
    <button
      className="cursor-pointer py-2 text-brand-blue hover:text-brand-green disabled:text-gray-300"
      disabled={disabled}
      onClick={onClick}
    >
      {isNext ? (
        <ChevronRightIcon className="h-6 w-6" />
      ) : (
        <ChevronLeftIcon className="h-6 w-6" />
      )}
    </button>
  )
}
