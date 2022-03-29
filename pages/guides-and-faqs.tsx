import FaqBanner from "components/Faq/Banner";
import Guides from "components/Faq/Guides";
import FaqSearchBox from "components/Faq/FaqSearchBox";
import Accordion from "components/Faq/Accordion";

function FaqPage() {
  return (
    <div>
      <FaqBanner>
        <h1 className="tracking-wider text-white">How can we help you?</h1>
        <FaqSearchBox />
      </FaqBanner>
      <Guides />
      <Accordion />
    </div>
  );
}

export default FaqPage;
