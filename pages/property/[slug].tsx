import About from "components/propertyDetails/About"
import Accordion from "components/propertyDetails/accordion"
import Announcement from "components/propertyDetails/announcement/Large"
import AnnouncementSmall from "components/propertyDetails/announcement/Small"
import Gallery from "components/propertyDetails/gallery"
import Header from "components/propertyDetails/Header"
import HowItWorks from "components/propertyDetails/howItWorks"
import KeyFeatures from "components/propertyDetails/keyFeatures"
import Pricing from "components/propertyDetails/pricing"
import RelatedProperties from "components/propertyDetails/RelatedProperties"
import AreYouInterested from "components/Sidebar/AreYouInterested"
import mainAccordionData from "../../components/propertyDetails/accordion/mainAccordionData"

function PropertyDetails() {
  return (
    <div className="container-sm py-5">
      <Announcement />
      <Header />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[auto_400px]">
        <main className="flex flex-col gap-5">
          <Gallery />
          <Pricing classes="lg:hidden" />
          <About />
          <KeyFeatures />
          <Accordion data={mainAccordionData} />
          <RelatedProperties heading="Other homes available at this development" />
          <RelatedProperties heading="Homes you may also like in the area" />
        </main>
        <aside className="flex flex-col gap-5">
          <Pricing classes="hidden lg:flex" />
          <AreYouInterested />
          <HowItWorks />
          <AnnouncementSmall />
        </aside>
      </div>
    </div>
  )
}

export default PropertyDetails
