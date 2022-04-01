interface Props {
  rooms: number
  handleClick: (price: number) => void
}
export default function BedroomsOption({ rooms, handleClick }: Props) {
  return (
    <span
      className="block cursor-pointer py-2 px-6 text-left text-sm text-brand-blue-dark hover:bg-brand-green-light"
      onClick={() => handleClick(rooms)}
    >
      {rooms === 6 ? `${rooms}+` : rooms === 0 ? "Any" : rooms}
    </span>
  )
}
