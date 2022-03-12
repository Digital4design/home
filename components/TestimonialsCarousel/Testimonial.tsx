import Paragraph from "components/global/Paragraph"

interface Props {
  rating: number
  text: string
  name?: string
  company?: string
}

export default function Testimonial({ rating, text, name, company }: Props) {
  return (
    <div className="">
      <div className="rating">{rating}</div>
      <Paragraph>{text}</Paragraph>
      <b>{name}</b>
      <span>{company}</span>
    </div>
  )
}
