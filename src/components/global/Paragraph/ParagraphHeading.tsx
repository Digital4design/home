import { ChildrenProps } from "types"

interface Props extends ChildrenProps {
  isCentered?: boolean
  colour?: string
}

/**
 *
 * @property isCentered allows you to center the heading text
 * @returns a h3 heading intended to be used within a paragraph element
 */

export default function ParagraphHeading({
  children,
  isCentered,
  colour,
}: Props) {
  return (
    <h3
      className={`mb-6 text-lg ${isCentered && "text-center"} ${colour ?? ""}`}
    >
      {children}
    </h3>
  )
}
