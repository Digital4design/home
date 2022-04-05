import Layout from "components/Layout"
import { AppProps } from "next/app"
import "swiper/css"
import "styles/globals.css"
import Head from "next/head"
import { ChildrenProps } from "types"
import { ReactElement, ReactNode } from "react"
import { NextPage } from "next"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <title>Home Reach</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
