import About from "components/propertyDetails/About";
import Accordion from "components/propertyDetails/accordion";
import Announcement from "components/propertyDetails/Announcement";
import Gallery from "components/propertyDetails/gallery";
import Header from "components/propertyDetails/Header";
import KeyFeatures from "components/propertyDetails/keyFeatures";
import RelatedProperties from "components/propertyDetails/RelatedProperties";

function PropertyDetails() {
  return (
    <div className="container">
      <Announcement />
      <Header />
      <Gallery />
      <About />
      <KeyFeatures />
      <Accordion />
      <RelatedProperties />
    </div>
  );
}

export default PropertyDetails;
