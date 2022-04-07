import Footer from "components/Layout/Footer"
import NoFooterLayout from "components/Layout/PageLayouts/NoFooterLayout"
import { ReactElement } from "react"

export default function ContactUs() {
  return (
    <main role="main" className="bg-brand-grey-light">
      <section className="py-16">
        <div className="container">
          <h1 className="mb-6 text-center text-5xl">Contact Us</h1>
          <h2 className="text-center text-lg font-medium text-brand-grey">
            Feel free to contact us, we are happy to converse with you.
          </h2>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-sm h-[600px] rounded-xl bg-white shadow-lg"></div>
      </section>
      <Footer blue={true} />
    </main>
  )
}

ContactUs.getLayout = function getLayout(page: ReactElement) {
  return <NoFooterLayout>{page}</NoFooterLayout>
}
