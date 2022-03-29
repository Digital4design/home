import FaqBanner from "components/Faq/Banner";
import Guides from "components/Faq/Guides";
import FaqSearchBox from "components/Faq/FaqSearchBox";

function FaqPage() {
  return (
    <div>
      <FaqBanner>
        <h1 className="tracking-wider text-white">How can we help you?</h1>
        <FaqSearchBox />
      </FaqBanner>
      <Guides />
    </div>
  );
}

export default FaqPage;
