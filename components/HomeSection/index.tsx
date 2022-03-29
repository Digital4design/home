import { ChildrenProps } from "types"

/**
 *
 * @property children is used to render anything within the section
 * @returns a premade section with top padding for the home page
 */

export default function HomeSection({ children }: ChildrenProps) {
  return <section className="pt-32">{children}</section>
}
