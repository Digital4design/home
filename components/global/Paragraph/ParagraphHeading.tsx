import { ChildrenProps } from "types"

interface Props extends ChildrenProps {
  isCentered?: boolean
}

/**
 *
 * @property isCentered allows you to center the heading text
 * @returns a h3 heading intended to be used within a paragraph element
 */

export default function ParagraphHeading({ children, isCentered }: Props) {
  return (
    <h3 className={`mb-6 text-xl ${isCentered && "text-center"}`}>
      {children}
    </h3>
  )
}
