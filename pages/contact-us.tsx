import ContactForm from "components/Forms/ContactForm"
import Footer from "components/Layout/Footer"
import NoFooterLayout from "components/Layout/PageLayouts/NoFooterLayout"
import Image from "next/image"
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
        <div className="relative mx-auto flex max-w-[1200px] items-stretch overflow-hidden rounded-xl shadow-lg">
          <div className="absolute left-0 top-0 bottom-0 z-10 h-full w-2/5 bg-brand-blue">
            <header className="absolute top-0 left-0 right-0 z-20 p-10">
              <h3 className="mb-8 text-lg text-white">Contact Us</h3>
              <p className="mb-8 pl-8">
                <a
                  className="text-white hover:underline"
                  href="tel:03330151254"
                >
                  03330 151 254
                </a>
              </p>
              <p className="pl-8">
                <a
                  className="font-semibold text-white hover:underline"
                  href="mailto:info@homereach.org.uk"
                >
                  info@homereach.org.uk
                </a>
              </p>
            </header>
            <figure className="absolute inset-0 -z-[1] bg-brand-blue">
              <img
                src="/assets/contact-us.png"
                alt=""
                className="h-auto w-full translate-y-12"
              />
            </figure>
          </div>
          <div className="ml-auto h-full w-3/5 bg-white p-10">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer blue={true} />
    </main>
  )
}

ContactUs.getLayout = function getLayout(page: ReactElement) {
  return <NoFooterLayout>{page}</NoFooterLayout>
}
