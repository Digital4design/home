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
      <Header />
      <main role="main">
        <h1 className=" text-brand-blue text-5xl">Welcome to Home Reach!</h1>
      </main>
    </div>
  )
}
