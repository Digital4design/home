import Accordion from "../accordion";
import PriceItem from "./PriceItem";
import pricingAccordionData from "../accordion/pricingAccordionData";

interface PropTypes {
  classes?: string;
}

function Pricing({ classes }: PropTypes) {
  const priceItems = [
    {
      border: true,
      title: "Full market price from",
      value: "£198,867",
      tooltip:
        "Share percentage advertised is an example, shares from 25% - 75% available. The share percentge you will be able to purchase will be determined by your affordability score.",
    },
    {
      border: true,
      title: "Example Share",
      value: "50%",
      tooltip:
        "Share percentage advertised is an example, shares from 25% - 75% available. The share percentge you will be able to purchase will be determined by your affordability score.",
    },
    {
      border: true,
      title: "Share price from",
      value: "£56,256",
      tooltip:
        "Share percentage advertised is an example, shares from 25% - 75% available. The share percentge you will be able to purchase will be determined by your affordability score.",
    },
    {
      title: "5% Deposit from",
      value: "£5,000",
      tooltip:
        "Share percentage advertised is an example, shares from 25% - 75% available. The share percentge you will be able to purchase will be determined by your affordability score.",
    },
    {
      title: "Est. monthy cost from",
      value: "£615",
      tooltip:
        "Share percentage advertised is an example, shares from 25% - 75% available. The share percentge you will be able to purchase will be determined by your affordability score.",
      featured: true,
    },
  ];

  return (
    <div className={`flex flex-col rounded border text-sm ${classes}`}>
      <p className=" px-4 pt-4 text-brand-blue-dark">Price example</p>
      {/* Price Item */}
      {priceItems.map((item, index) => (
        <PriceItem
          border={item.border}
          title={item.title}
          value={item.value}
          tooltip={item.tooltip}
          featured={item.featured}
        />
      ))}
      <Accordion heading="Est. household income required">
        <PriceItem
          border
          title={"Monthly Rent"}
          value={"£245,763"}
          tooltip={"tools"}
        />
        <PriceItem
          border
          title={"Service Charge"}
          value={"£156,835"}
          tooltip={"tools"}
        />
        <PriceItem
          title={"Total Morgage Required"}
          value={"£468,345"}
          tooltip={"tools"}
        />
      </Accordion>
    </div>
  );
}

export default Pricing;
