import { ChildrenProps } from "types"
import Footer from "components/Layout/Footer"
import Header from "components/Layout/Header"

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
