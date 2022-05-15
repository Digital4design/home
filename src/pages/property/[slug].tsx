import About from "components/PropertyInformation/About"
import Accordion from "components/PropertyInformation/Accordion"
import Announcement from "components/PropertyInformation/announcement/Large"
import AnnouncementSmall from "components/PropertyInformation/announcement/Small"
import Gallery from "components/PropertyInformation/Gallery"
import Header from "components/PropertyInformation/Header"
import HowItWorks from "components/Sidebar/HowItWorks"
import KeyFeatures from "components/PropertyInformation/KeyFeatures"
import Pricing from "components/PropertyInformation/Pricing"
import RelatedProperties from "components/PropertyInformation/RelatedProperties"
import AreYouInterested from "components/Sidebar/AreYouInterested"
import mainAccordionData from "components/PropertyInformation/Accordion/mainAccordionData"
import { request } from "lib/datocms"
import { DatoProperty, Property } from "types/property"
import calculateShares from "utils/sharesCalculator"

interface Props {
  property: DatoProperty
}

function PropertyDetails({ property }: Props) {
  const values = {
    purchase_price: property.omv, // user has control of this value in CMS (it's the OMV)
    initial_share_percentage: property.initialShare, // user has control of this value in CMS. Need to convert it to decimal
    share_deposit: property.shareDeposit, // user has control of this value in CMS but there will also be a slider which changes this on client
    mortgage_rate: property.mortgageRate, // user has control of this value in CMS (default 3.99 (&)) must convert to decimal
    mortgage_term: property.mortgageTerm, // user has control of this value in CMS (default 25)
    lease_management_fee: property.leaseManagementFee, // user has control of this value in CMS
    service_charge: property.serviceCharge, // user has control of this value in CMS
  }

  const {
    bathrooms,
    bedrooms,
    parkingSpaces,
    wheelchairAccessible,
    openPlanLayout,
  } = property

  const features = {
    bathrooms,
    bedrooms,
    parkingSpaces,
    wheelchairAccessible,
    openPlanLayout,
  }

  return (
    <div className="container-sm py-5">
      <Announcement />
      <Header name={property.name} location={property.location} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[auto_400px]">
        <main className="flex flex-col gap-5">
          <Gallery images={property.gallery} />
          <Pricing values={values} classes="lg:hidden" />
          <About
            houseStyle={property.houseStyle}
            description={property.description}
          />
          <KeyFeatures
            features={features}
            otherFeatures={property.otherFeatures}
          />
          <Accordion data={mainAccordionData} />
          <RelatedProperties heading="Other homes available at this development" />
          <RelatedProperties heading="Homes you may also like in the area" />
        </main>
        <aside className="flex flex-col gap-5">
          <Pricing values={values} classes="hidden lg:flex" />
          <AreYouInterested />
          <HowItWorks />
          <AnnouncementSmall />
        </aside>
      </div>
    </div>
  )
}

export default PropertyDetails

interface Slug {
  slug: string
}
interface Params {
  params: Slug | null
}

export async function getStaticPaths() {
  const PROPERTY_QUERY = `query MyQuery {
    allProperties(filter: {_status: {eq: published}}) {
      slug
    }
  }`

  interface Slug {
    slug: string | undefined
  }

  interface Params {
    params: Slug
  }

  const response = await request({ query: PROPERTY_QUERY, endpoint: "dev" })
  const paths: Params[] = []

  response.allProperties.map((property: Property) => {
    paths.push({ params: { slug: property.slug } })
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: Params) {
  const slug = params?.slug

  const PROPERTY_QUERY = `query MyQuery {
    allProperties(filter: {_status: {eq: published}, slug: {eq: "${slug}"}}) {
      _publishedAt
      amenitiesRadius
      amenities
      bathrooms
      bedrooms
      description
      developments
      floorPlan {
        height
        width
        url
        alt
      }
      gallery {
        url
        alt
      }
      houseStyle
      id
      initialShare
      leaseManagementFee
      listingStatus
      mortgageRate
      mortgageTerm
      name
      omv
      openPlanLayout
      otherFeatures
      parkingSpaces
      propertyType
      serviceCharge
      shareDeposit
      slug
      wheelchairAccessible
      location {
        latitude
        longitude
      }
    }
  }
  `

  const response = await request({ query: PROPERTY_QUERY, endpoint: "dev" })
  return {
    props: {
      property: response.allProperties[0],
    },
    revalidate: 10,
  }
}
