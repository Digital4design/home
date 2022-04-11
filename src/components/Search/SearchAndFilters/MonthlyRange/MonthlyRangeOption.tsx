interface Props {
  price: number
  handleClick: (price: number) => void
}
export default function MonthlyRangeOption({ price, handleClick }: Props) {
  return (
    <span
      className="relative block cursor-pointer py-2 pr-12 text-right text-sm text-brand-blue-dark hover:font-bold"
      onClick={() => handleClick(price)}
    >
      <span className="inline-block w-12 text-left">
        {price === 0 ? "Any" : `£${price}`}
      </span>
    </span>
  )
}
