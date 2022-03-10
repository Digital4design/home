import MainBanner from "components/MainBanner"
import Head from "next/head"
import PropertyPreview from "components/PropertyPreview"
import Link from "next/link"
import Image from "next/image"
import PropertyCarousel from "components/PropertyCarousel"
import BrowseByAreaCard from "components/BrowseByAreaCard"

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
        <section className="pt-32">
          <div className="container-sm relative flex flex-col items-center">
            <h2 className="mb-16 text-center">Featured developments</h2>
            <PropertyCarousel>
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
            </PropertyCarousel>
            <div className="swiper-button-prev translate-y-10 translate-x-5 xl:-translate-x-14"></div>
            <div className="swiper-button-next translate-y-10 -translate-x-5 xl:translate-x-14"></div>
            <Link href="/properties">
              <a className="text-green mt-6 rounded border border-brand-green bg-white py-3 px-8 font-bold">
                Browse all properties
              </a>
            </Link>
          </div>
        </section>
        <section className="pt-32">
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
                    placeholder="blur"
                    blurDataURL="https://via.placeholder.com/350x350"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-32">
          <div className="container-sm">
            <h2 className="mb-24 text-center">Browse properties by area</h2>
            <div className="flex flex-wrap">
              <BrowseByAreaCard
                src="https://via.placeholder.com/350x350"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="North England"
                numOfProperties={8}
                url="/area/north-england"
              />
              <BrowseByAreaCard
                src="https://via.placeholder.com/350x350"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="South England"
                numOfProperties={23}
                url="/area/south-england"
              />
              <BrowseByAreaCard
                src="https://via.placeholder.com/350x350"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="West England"
                numOfProperties={12}
                url="/area/west-england"
              />
              <BrowseByAreaCard
                src="https://via.placeholder.com/350x350"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="East England"
                numOfProperties={32}
                url="/area/east-england"
              />
              <BrowseByAreaCard
                src="https://via.placeholder.com/350x350"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="North Wales"
                numOfProperties={16}
                url="/area/north-wales"
              />
              <BrowseByAreaCard
                src="https://via.placeholder.com/350x350"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="South Wales"
                numOfProperties={17}
                url="/area/south-wales"
              />
            </div>
          </div>
        </section>
        <section className="pt-32">
          <div className="container-sm">
            <h2 className="text-center">Learn more about Home Reach</h2>
          </div>
        </section>
        <section className="pt32">
          <div className="container-sm">
            <h2 className="text-center">What our customers say</h2>
          </div>
        </section>
        <section className="pt-32">
          <div className="container-sm">
            <h2 className="text-center">First time buyer and need help?</h2>
          </div>
        </section>
      </main>
    </div>
  )
}
