import Header from "components/Layout/Header"
import MainBanner from "components/MainBanner"
import Head from "next/head"

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Home Reach</title>
        <meta name="description" content="Home Reach Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBanner>
        <h1 className="mb-12">Find your perfect home!</h1>
        <div className="mx-auto h-20 w-full rounded bg-brand-blue"></div>
      </MainBanner>
      <main role="main">
        <section className="py-32">
          <div className="container-sm">
            <h2 className="text-center">Featured developments</h2>
          </div>
        </section>
        <section className="py-32">
          <div className="container-sm">
            <h2 className="text-center">How part buy - part rent works</h2>
          </div>
        </section>
        <section className="py-32">
          <div className="container-sm">
            <h2 className="text-center">Browse properties by area</h2>
          </div>
        </section>
        <section className="py-32">
          <div className="container-sm">
            <h2 className="text-center">Learn more about Home Reach</h2>
          </div>
        </section>
        <section className="py-32">
          <div className="container-sm">
            <h2 className="text-center">What our customers say</h2>
          </div>
        </section>
      </main>
    </div>
  )
}
