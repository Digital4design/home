import Accordion from "components/PropertyInformation/Accordion"
import PriceItem from "components/PropertyInformation/Pricing/PriceItem"
import { CalculationValues } from "types/property"
import calculateShares from "utils/sharesCalculator"

interface PropTypes {
  classes?: string
  values: CalculationValues
}

function Pricing({ classes, values }: PropTypes) {
  // get the share prices
  const shares = calculateShares(values)

  const priceItems = [
    {
      border: true,
      title: "Full market price from",
      value: `£${shares.purchase_price.toLocaleString()}`,
      tooltip:
        "Share percentage advertised is an example, shares from 25% - 75% available. The share percentge you will be able to purchase will be determined by your affordability score.",
    },
    {
      border: true,
      title: "Share price from",
      value: `£${shares.initial_share.toLocaleString()}`,
      tooltip:
        "Share percentage advertised is an example, shares from 25% - 75% available. The share percentge you will be able to purchase will be determined by your affordability score.",
    },
    {
      title: "5% Deposit from",
      value: `£${shares.deposit.toLocaleString()}`,
      tooltip:
        "Share percentage advertised is an example, shares from 25% - 75% available. The share percentge you will be able to purchase will be determined by your affordability score.",
    },
    {
      title: "Est. monthy cost from",
      value: `£${shares.estimated_monthly_cost.toLocaleString()}`,
      tooltip:
        "Share percentage advertised is an example, shares from 25% - 75% available. The share percentge you will be able to purchase will be determined by your affordability score.",
      featured: true,
    },
  ]

  return (
    <div className={`flex flex-col rounded border text-sm ${classes}`}>
      <p className="px-4 pt-4 font-bold text-brand-blue-dark">
        Share Pricing (based on {values.initial_share_percentage}% share)
      </p>
      {/* Price Item */}
      {priceItems.map((item, index) => (
        <PriceItem
          border={item.border}
          title={item.title}
          value={item.value}
          tooltip={item.tooltip}
          featured={item.featured}
          key={index}
        />
      ))}
      <Accordion heading="Est. household income required">
        <PriceItem
          border
          title={"Minimum income"}
          value={`£${shares.minimum_income.toLocaleString()}`}
          tooltip={"tools"}
        />
        <PriceItem
          border
          title={"Monthly Rent"}
          value={`£${shares.estimated_monthly_mortgage_repayments.toLocaleString()}`}
          tooltip={"tools"}
        />
        <PriceItem
          title={"Total Morgage Required"}
          value={`£${shares.mortgage_amount.toLocaleString()}`}
          tooltip={"tools"}
        />
        <PriceItem
          title={"Lease Management Fee"}
          value={`£${shares.lease_management_fee.toLocaleString()}`}
          tooltip={"tools"}
        />
        <PriceItem
          border
          title={"Service Charge"}
          value={`£${shares.service_charge.toLocaleString()}`}
          tooltip={"tools"}
        />
      </Accordion>
    </div>
  )
}

export default Pricing
