interface Props {
  type: string
  value: string
  handleClick: (type: string) => void
}

export default function PropertyTypeOption({
  type,
  value,
  handleClick,
}: Props) {
  return (
    <span
      className={`block cursor-pointer py-2 px-6 text-left text-sm text-brand-blue-dark hover:bg-brand-green-light ${
        type === value && "font-bold"
      }`}
      key={type}
      onClick={() => handleClick(type)}
    >
      {type}
    </span>
  )
}
