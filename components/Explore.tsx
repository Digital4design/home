import Link from "next/link"

export default function Explore() {
  return (
    <section className="bg-brand-blue py-24">
      <div className="container mx-auto text-center">
        <h4 className="mb-12 text-white">Have Some Questions?</h4>
        <Link href="/">
          <a className="rounded bg-white py-4 px-12 text-brand-green hover:text-brand-green-dark">
            Explore FAQs
          </a>
        </Link>
      </div>
    </section>
  )
}
