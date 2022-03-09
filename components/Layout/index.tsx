import { ChildrenProps } from "types"
import Header from "./Header"

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
