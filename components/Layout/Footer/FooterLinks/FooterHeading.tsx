interface Props {
  value: string
}

export default function FooterHeading({ value }: Props) {
  return (
    <h5 className="mb-4 text-sm font-bold text-brand-grey-dark">{value}</h5>
  )
}
