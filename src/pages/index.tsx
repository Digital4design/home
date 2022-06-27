import Head from "next/head"
<<<<<<< HEAD:src/pages/index.tsx
import PropertyPreview from "components/PropertyPreview"
import Link from "next/link"
import Image from "next/image"
import PropertyCarousel from "components/PropertyCarousel"
import BrowseByAreaCard from "components/BrowseByAreaCard"
import Paragraph from "components/global/Paragraph"
import ParagraphHeading from "components/global/Paragraph/ParagraphHeading"
import Explore from "components/Explore"
import SearchAndFilters from "components/Search/SearchAndFilters"
import OurPartners from "components/OurPartners"
import Testimonials from "components/Testimonials"
import VideoModalSection from "components/VideoModalSection"
import HomeSection from "components/HomeSection"
=======
>>>>>>> 5af6a6e34e7021dc9bc6990353ad4fe016778f5c:pages/index.tsx

// mock data
import mockData from "../../mockProperties.json"

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Home Reach</title>
        <meta name="description" content="Home Reach Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main role="main">
        <h1 className=" text-brand-blue text-5xl">Welcome to Home Reach!</h1>
      </main>
    </div>
  )
}
