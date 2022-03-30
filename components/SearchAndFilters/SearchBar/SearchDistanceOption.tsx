interface Props {
  distance: number
  value: number
  handleClick: (distance: number) => void
}

export default function SearchDistanceOption({
  distance,
  value,
  handleClick,
}: Props) {
  return (
    <span
      className={`block w-40 cursor-pointer py-2 pl-8 text-left text-sm hover:bg-brand-green-light ${
        distance === value && "font-bold"
      }`}
      key={distance}
      onClick={() => handleClick(distance)}
    >
      + {distance} {distance === 1 ? "mile" : "miles"}
    </span>
  )
}
