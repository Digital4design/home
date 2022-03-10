import { ChildrenProps } from "types"

interface Props extends ChildrenProps {
  isCentered?: boolean
}

export default function ParagraphHeading({ children, isCentered }: Props) {
  return (
    <h3 className={`mb-6 text-xl ${isCentered && "text-center"}`}>
      {children}
    </h3>
  )
}
