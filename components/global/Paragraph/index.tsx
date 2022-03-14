import { ChildrenProps } from "types"

export default function Paragraph({ children }: ChildrenProps) {
  return <p className="mb-6 font-light leading-7">{children}</p>
}
