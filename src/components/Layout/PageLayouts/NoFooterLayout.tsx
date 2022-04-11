import { ChildrenProps } from "types"
import Header from "../Header"

export default function NoFooterLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
