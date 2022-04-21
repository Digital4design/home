import { MouseEventHandler } from "react"

interface Props {
  value: string
  onClick: MouseEventHandler<HTMLButtonElement>
  text?: string
}

export default function FilterButton({ value, onClick, text }: Props) {
  return (
    <button
      className="block w-full cursor-pointer py-2 px-4 text-left font-normal hover:bg-brand-grey-light"
      onClick={onClick}
      value={value}
    >
      {text ? text : value}
    </button>
  )
}
