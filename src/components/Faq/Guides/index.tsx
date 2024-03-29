import Button from "components/global/button"
import Link from "next/link"
import GuideCards from "../GuideCards"

function Guides() {
  return (
    <section className="container flex flex-col items-center justify-center gap-10 py-10 lg:py-28">
      <h2 className="text-center">
        All you need to know about shared ownership
      </h2>
      <GuideCards />
      <Link passHref href="/development/test">
        <Button outline> Browse all guides</Button>
      </Link>
    </section>
  )
}

export default Guides
