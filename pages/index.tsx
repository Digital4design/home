import Header from "components/Layout/Header"
import Head from "next/head"

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Home Reach</title>
        <meta name="description" content="Home Reach Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main role="main">
        <section className="py-32">
          <div className="container">
            <h1 className=" text-4xl text-brand-blue">
              Welcome to Home Reach!
            </h1>
          </div>
        </section>
      </main>
    </div>
  )
}
