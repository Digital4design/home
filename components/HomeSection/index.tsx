import { ChildrenProps } from "types"

export default function HomeSection({ children }: ChildrenProps) {
  return <section className="pt-32">{children}</section>
}
