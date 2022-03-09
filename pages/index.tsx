import MainBanner from "components/MainBanner"
import Head from "next/head"
import Swiper, { Navigation, Pagination } from "swiper"
import PropertyPreview from "components/PropertyPreview"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Link from "next/link"
import Image from "next/image"

const swiper = new Swiper(".swiper", {
  // Install modules
  modules: [Navigation, Pagination],
  observer: true,
  observeParents: true,
  loop: false,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: { el: ".swiper-pagination" },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    670: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
})

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
          <div className="container-sm relative">
            <h2 className="mb-16 text-center">Featured developments</h2>
            <div className="swiper h-[350px] w-full">
              <div className="swiper-wrapper h-full w-full">
                <PropertyPreview
                  title="Whittingham Park - The Fircroft"
                  address="24 Home Street, Lancashire, LC24 5ST"
                  beds="4 bedroom house"
                  shares={35}
                />
                <PropertyPreview
                  title="Rothwells Farm - Gosford"
                  address="24 Home Street, Lancashire, LC24 5ST"
                  beds="4 bedroom house"
                  shares={35}
                />
                <PropertyPreview
                  title="Whittingham Palace - Firefly"
                  address="24 Home Street, Lancashire, LC24 5ST"
                  beds="4 bedroom house"
                  shares={35}
                />
                <PropertyPreview
                  title="Example One"
                  address="24 Home Street, Lancashire, LC24 5ST"
                  beds="4 bedroom house"
                  shares={35}
                />
                <PropertyPreview
                  title="Example Two"
                  address="24 Home Street, Lancashire, LC24 5ST"
                  beds="4 bedroom house"
                  shares={35}
                />
              </div>
            </div>
            <div className="swiper-button-prev translate-y-10 translate-x-5 xl:-translate-x-14"></div>
            <div className="swiper-button-next translate-y-10 -translate-x-5 xl:translate-x-14"></div>
          </div>
        </section>
        <section className="py-32">
          <div className="container-sm">
            <h2 className="mb-16 text-center">
              How part buy - part rent works
            </h2>
            <div className="flex flex-wrap">
              <div className="mb-12 w-full lg:mb-0 lg:w-1/2">
                <h3 className="mb-6 text-xl">
                  If buying outright isn&apos;t an option for you
                </h3>
                <p className="mb-6 font-light leading-7 text-brand-grey">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus fugiat corrupti eos! Excepturi, corrupti
                  dignissimos dolorum cumque repellendus numquam assumenda, est
                  ut ullam nesciunt minus. Et in nisi sed tempora. Excepturi,
                  corrupti dignissimos dolorum cumque repellendus numquam
                  assumenda.
                </p>
                <p className="mb-6 font-light leading-7 text-brand-grey">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus fugiat corrupti eos! Excepturi, corrupti
                  dignissimos dolorum cumque repellendus numquam assumenda, est
                  ut ullam nesciunt minus. Et in nisi sed tempora.
                </p>
                <p>
                  <Link href="/">
                    <a>Learn more</a>
                  </Link>
                </p>
              </div>
              <div className="relative w-full lg:w-1/2">
                <figure className="lg:absolute lg:-right-1/2">
                  <Image
                    src="https://via.placeholder.com/600x400"
                    alt=""
                    width="700"
                    height="400"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32">
          <div className="container-sm">
            <h2 className="mb-24 text-center">Browse properties by area</h2>
            <div className="flex flex-wrap">
              <div className="h-[350px] w-1/3 p-3">
                <figure className="relative h-full w-full overflow-hidden rounded shadow-lg">
                  <Image
                    src="https://via.placeholder.com/350x350"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </div>
              <div className="h-[350px] w-1/3 p-3">
                <figure className="relative h-full w-full overflow-hidden rounded shadow-lg">
                  <Image
                    src="https://via.placeholder.com/350x350"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </div>
              <div className="h-[350px] w-1/3 p-3">
                <figure className="relative h-full w-full overflow-hidden rounded shadow-lg">
                  <Image
                    src="https://via.placeholder.com/350x350"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </div>
              <div className="h-[350px] w-1/3 p-3">
                <figure className="relative h-full w-full overflow-hidden rounded shadow-lg">
                  <Image
                    src="https://via.placeholder.com/350x350"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </div>
              <div className="h-[350px] w-1/3 p-3">
                <figure className="relative h-full w-full overflow-hidden rounded shadow-lg">
                  <Image
                    src="https://via.placeholder.com/350x350"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </div>
              <div className="h-[350px] w-1/3 p-3">
                <figure className="relative h-full w-full overflow-hidden rounded shadow-lg">
                  <Image
                    src="https://via.placeholder.com/350x350"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </div>
            </div>
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
        <section className="py-32">
          <div className="container-sm">
            <h2 className="text-center">First time buyer and need help?</h2>
          </div>
        </section>
      </main>
    </div>
  )
}
