interface Props {
  price: number
  handleClick: (price: number) => void
}
export default function MonthlyRangeOption({ price, handleClick }: Props) {
  return (
    <span
      className="block cursor-pointer py-2 px-6 text-left text-sm text-brand-blue-dark hover:bg-brand-green-light"
      onClick={() => handleClick(price)}
    >
      {price === 0 ? "Any" : `£${price}`}
    </span>
  )
}
