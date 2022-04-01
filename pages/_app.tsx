import Layout from "components/Layout"
import { AppProps } from "next/app"
import "swiper/css"
import "styles/globals.css"
import Head from "next/head"
import SearchAndFilterContextProvider from "context/SearchAndFilterContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
