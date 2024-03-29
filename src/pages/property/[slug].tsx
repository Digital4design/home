import About from "components/PropertyInformation/About"
import Gallery from "components/PropertyInformation/Gallery"
import Header from "components/PropertyInformation/Header"
import HowItWorks from "components/Sidebar/HowItWorks"
import KeyFeatures from "components/PropertyInformation/KeyFeatures"
import Pricing from "components/PropertyInformation/Pricing"
import RelatedProperties from "components/PropertyInformation/RelatedProperties"
import AreYouInterested from "components/Sidebar/AreYouInterested"
// import mainAccordionData from "components/PropertyInformation/Accordion/mainAccordionData"
import { request } from "lib/datocms"
import { DatoProperty, Property } from "types/property"
import ContentAccordionWrapper from "components/PropertyInformation/Accordion/ContentAccordionWrapper"
import ContentAccordionItem from "components/PropertyInformation/Accordion/ContentAccordionItem"
import { DevelopmentPropertyPreview } from "types/development"
import LargeAnnouncement from "components/PropertyInformation/announcement/Large"
import SmallAnnouncements from "components/PropertyInformation/announcement/Small"

interface Props {
  property: DatoProperty
  relatedProperties: DevelopmentPropertyPreview[]
}

function PropertyDetails({ property, relatedProperties }: Props) {
  // filter the related properties so that this current property being viewed is not displayed as a relation
  const filteredRelatedProperties = relatedProperties.filter(
    (item) => item.name !== property.name
  )

  const sidebarCampaignsHasLength = property.sidebarCampaigns.length > 0

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
      {property.featuredCampaign && (
        <LargeAnnouncement featuredCampaign={property.featuredCampaign} />
      )}
      <Header name={property.name} location={property.location} />
      <main>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[auto_400px]">
          <div className="flex flex-col gap-5">
            <Gallery images={property.gallery} />
            <Pricing
              shareBreakpoints={property.shareSliderBreakpoints}
              values={values}
              classes="lg:hidden"
            />
            <About
              houseStyle={property.houseStyle}
              description={property.description}
            />
            <KeyFeatures
              features={features}
              otherFeatures={property.otherFeatures}
            />
            {/* <Accordion data={mainAccordionData} /> */}
            <ContentAccordionWrapper>
              <ContentAccordionItem
                heading="Eligibility Criteria"
                body={property.eligibilityCriteria}
              />
              <ContentAccordionItem
                heading="Explore the local area"
                body={property.eligibilityCriteria}
                location={property.location}
              />
              <ContentAccordionItem
                heading="About the developer"
                developer={property.builder}
              />
            </ContentAccordionWrapper>
            <RelatedProperties
              heading="Other homes available at this development"
              properties={filteredRelatedProperties}
            />
          </div>
          {/* <RelatedProperties heading="Homes you may also like in the area" /> */}
          <aside className="flex flex-col gap-5">
            <Pricing
              shareBreakpoints={property.shareSliderBreakpoints}
              values={values}
              classes="hidden lg:flex"
            />
            <AreYouInterested />
            <HowItWorks />
            {sidebarCampaignsHasLength && (
              <SmallAnnouncements campaigns={property.sidebarCampaigns} />
            )}
          </aside>
        </div>
      </main>
    </div>
  )
}

export default PropertyDetails

interface Param {
  slug: string | undefined
}

interface Params {
  params: Param
}

export async function getStaticPaths() {
  const PROPERTY_QUERY = `query MyQuery {
    allProperties(filter: {_status: {eq: published}}) {
      slug
    }
  }`

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
      builder {
        description
        name
        logo {
          alt
          url
        }
        slug
      }
      description
      development {
        name
      }
      eligibilityCriteria
      floorPlan {
        height
        width
        url
        alt
        responsiveImage {
          src
        }
      }
      gallery {
        height
        width
        url
        alt
      }
      houseStyle
      id
      initialShare
      leaseManagementFee
      listingStatus
      location {
        latitude
        longitude
      }
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
      shareSliderBreakpoints
      slug
      wheelchairAccessible
      sidebarCampaigns {
        details
        strapline
        availableFrom
        availableTo
      }
      featuredCampaign {
        details
        strapline
        availableFrom
        availableTo
      }
    }
  }
  `

  const response = await request({ query: PROPERTY_QUERY, endpoint: "dev" })

  const developmentName = response.allProperties[0].development.name

  const DEVELOPMENT_QUERY = `query MyQuery {
    allDevelopments(filter: {name: {eq: "${developmentName}"}}) {
      name
      properties {
        bedrooms
        name
        slug
        gallery {
          height
          width
          url
          alt
          responsiveImage {
            src
          }
        }
        location {
          latitude
          longitude
        }
        omv
        initialShare
        propertyType
        listingStatus
      }
    }
  }
  `

  const development = await request({
    query: DEVELOPMENT_QUERY,
    endpoint: "dev",
  })

  return {
    props: {
      property: response.allProperties[0],
      relatedProperties: development.allDevelopments[0].properties,
    },
    revalidate: 10,
  }
}
