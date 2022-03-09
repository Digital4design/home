import PriceItem from "./PriceItem";

interface PropTypes {
  classes?: string;
}

function Pricing({ classes }: PropTypes) {
  return (
    <div className={`flex flex-col rounded border text-sm ${classes}`}>
      <p className=" px-4 pt-4 text-brand-blue-dark">Price example</p>
      {/* Price Item */}
      <PriceItem border />
      <PriceItem border />
      <PriceItem border />
      <PriceItem border />
      <PriceItem />
      <PriceItem featured />
      <PriceItem />
    </div>
  );
}

export default Pricing;
