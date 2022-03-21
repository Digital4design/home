import MainBanner from "components/MainBanner"
import Head from "next/head"
import PropertyPreview from "components/PropertyPreview"
import Link from "next/link"
import Image from "next/image"
import PropertyCarousel from "components/PropertyCarousel"
import BrowseByAreaCard from "components/BrowseByAreaCard"
import Paragraph from "components/global/Paragraph"
import ParagraphHeading from "components/global/Paragraph/ParagraphHeading"
import Modal from "components/Modal"
import useModal from "hooks/useModal"
import Explore from "components/Explore"
import SearchAndFilters from "components/SearchAndFilters"

// mock data
import mockData from "../mockProperties.json"

export default function Home() {
  const { modalIsOpen, closeModal, openModal } = useModal()
  const { properties } = mockData

  return (
    <div className="bg-white">
      <Head>
        <title>Home Reach</title>
        <meta name="description" content="Home Reach Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainBanner>
        <h1 className="mb-12">Find your perfect home!</h1>
        <SearchAndFilters />
      </MainBanner>
      <main role="main">
        <section className="pt-32">
          <div className="container-sm relative flex flex-col items-center">
            <h2 className="mb-16 text-center">Featured developments</h2>
            <PropertyCarousel>
              {properties.map((property) => (
                <PropertyPreview
                  isSlide
                  image={property.image}
                  alt={property.alt}
                  placeholder={property.placeholder}
                  title={property.title}
                  address={property.address}
                  beds={property.beds}
                  shares={property.shares}
                  price={property.price}
                  tooltip={property.tooltip}
                  key={property.title}
                />
              ))}
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
                <ParagraphHeading>
                  If buying outright isn&apos;t an option for you
                </ParagraphHeading>
                <Paragraph>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus fugiat corrupti eos! Excepturi, corrupti
                  dignissimos dolorum cumque repellendus numquam assumenda, est
                  ut ullam nesciunt minus. Et in nisi sed tempora. Excepturi,
                  corrupti dignissimos dolorum cumque repellendus numquam
                  assumenda.
                </Paragraph>
                <Paragraph>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus fugiat corrupti eos! Excepturi, corrupti
                  dignissimos dolorum cumque repellendus numquam assumenda, est
                  ut ullam nesciunt minus. Et in nisi sed tempora.
                </Paragraph>
                <Paragraph>
                  <Link href="/">
                    <a>Learn more</a>
                  </Link>
                </Paragraph>
              </div>
              <div className="relative w-full lg:w-1/2">
                <figure className="lg:absolute lg:-right-1/4">
                  <Image
                    src="/assets/hr-part-buy-part-rent.jpg"
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
            <h2 className="mb-16 text-center">Browse properties by area</h2>
            <div className="flex flex-wrap">
              <BrowseByAreaCard
                src="/assets/placeholder/north-england.jpg"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="North England"
                numOfProperties={8}
                url="/area/north-england"
              />
              <BrowseByAreaCard
                src="/assets/placeholder/south-england.jpg"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="South England"
                numOfProperties={23}
                url="/area/south-england"
              />
              <BrowseByAreaCard
                src="/assets/placeholder/west-england.jpg"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="West England"
                numOfProperties={12}
                url="/area/west-england"
              />
              <BrowseByAreaCard
                src="/assets/placeholder/east-england.jpg"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="East England"
                numOfProperties={32}
                url="/area/east-england"
              />
              <BrowseByAreaCard
                src="/assets/placeholder/north-wales.jpg"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="North Wales"
                numOfProperties={16}
                url="/area/north-wales"
              />
              <BrowseByAreaCard
                src="/assets/placeholder/south-wales.jpg"
                alt=""
                blurDataURL="https://via.placeholder.com/350x350"
                area="South Wales"
                numOfProperties={17}
                url="/area/south-wales"
              />
            </div>
          </div>
        </section>
        <section className="mt-36 bg-brand-grey-light pt-24">
          <Modal
            isOpen={modalIsOpen}
            handleClose={closeModal}
            overlayClick={closeModal}
          >
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-[450px] w-full rounded"
            ></iframe>
          </Modal>
          <div className="container-sm h-[350px]">
            <h2 className="text-center">Learn more about Home Reach</h2>
            <figure
              className="mx-auto h-[400px] w-2/3 translate-y-[100px] cursor-pointer overflow-hidden rounded shadow-xl"
              onClick={openModal}
            >
              <Image
                src="https://via.placeholder.com/800x800"
                alt="Video placeholder"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="https://via.placeholder.com/300x300"
              />
            </figure>
          </div>
        </section>
        <section className="mt-[100px] pt-64">
          <div className="container-sm">
            <h2 className="text-center">What our customers say</h2>
            <div className="h-[400px]"></div>
          </div>
        </section>
        <section className="bg-brand-grey-light py-32">
          <div className="container">
            <h2 className="mb-24 text-center">
              First time buyer and need help?
            </h2>
            <div className="flex flex-wrap items-center">
              <div className="w-1/2">
                <figure className="relative h-[300px] w-full">
                  <Image
                    src="/assets/hr-first-time-buyer.png"
                    alt="First time buyer and need help?"
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </div>
              <div className="w-1/2">
                <Paragraph>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet molestias, cumque nihil saepe dolor impedit,
                  laboriosam repudiandae nulla vel suscipit quas enim atque
                  placeat dicta veniam aspernatur autem consectetur nobis!
                </Paragraph>
                <Paragraph>
                  <Link href="/">
                    <a>Learn more</a>
                  </Link>
                </Paragraph>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Explore />
    </div>
  )
}
