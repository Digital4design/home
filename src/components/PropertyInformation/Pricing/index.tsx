import Accordion from "components/PropertyInformation/Accordion"
import PriceItem from "components/PropertyInformation/Pricing/PriceItem"
import { CalculationValues } from "types/property"
import calculateShares from "utils/sharesCalculator"
import slider from "styles/RangeSlider.module.css"
import { FormEvent, useEffect, useMemo, useState } from "react"
import { InputRange } from "framer-motion/types/value/use-transform"

interface PropTypes {
  classes?: string
  values: CalculationValues
  shareBreakpoints: number[]
}

function Pricing({ classes, shareBreakpoints, values }: PropTypes) {
  // get the share prices
  shareBreakpoints = shareBreakpoints.sort((a, b) => a - b)
  const [shares, setShares] = useState(calculateShares(values))

  const shareBreakpointsLength = useMemo(
    () => shareBreakpoints.length,
    [shareBreakpoints]
  )

  const findIndexOf50Value = useMemo(
    () => (shareBreakpoints.includes(50) ? shareBreakpoints.indexOf(50) : 1),
    [shareBreakpoints]
  )

  const [currentRangeValue, setCurrentRangeValue] = useState(findIndexOf50Value)

  useEffect(() => {
    const newValues = {
      ...values,
      ["initial_share_percentage"]: shareBreakpoints[currentRangeValue],
    }

    setShares(calculateShares(newValues))
  }, [currentRangeValue, values, shareBreakpoints])

  const handleRangeChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    console.log(e.target)
    setCurrentRangeValue(Number(target.value))
  }

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

  const incomePriceItems = [
    {
      border: true,
      title: "Minimum income",
      value: `£${shares.minimum_income.toLocaleString()}`,
      tooltip: "tools",
    },
    {
      border: true,
      title: "Monthly rent",
      value: `£${shares.estimated_monthly_mortgage_repayments.toLocaleString()}`,
      tooltip: "tools",
    },
    {
      border: true,
      title: "Total mortgage required",
      value: `£${shares.mortgage_amount.toLocaleString()}`,
      tooltip: "tools",
    },
    {
      border: true,
      title: "Lease management fee",
      value: `£${shares.lease_management_fee.toLocaleString()}`,
      tooltip: "tools",
    },
    {
      title: "Service charge",
      value: `£${shares.service_charge.toLocaleString()}`,
      tooltip: "tools",
    },
  ]

  return (
    <div className={`flex flex-col rounded border text-sm ${classes}`}>
      <p className="px-4 pt-4 font-bold text-brand-blue-dark">
        Share Pricing (based on {shareBreakpoints[currentRangeValue]}% share)
      </p>
      <div className="py-6 px-4">
        <input
          type="range"
          className={`w-full ${slider.rangeSlider}`}
          min="0"
          value={currentRangeValue}
          max={shareBreakpointsLength - 1}
          onChange={handleRangeChange}
        />
        <div className="mt-2 flex items-center justify-between px-1">
          {shareBreakpoints.map((breakpoint) => (
            <span className="rounded text-sm text-brand-blue" key={breakpoint}>
              {breakpoint}
            </span>
          ))}
        </div>
      </div>
      <p className="px-4 pb-4 italic text-brand-blue-dark">
        Move the slider to preview prices based on other share percentages
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
        <div className="pb-6">
          {incomePriceItems.map((item, index) => (
            <PriceItem
              border={item.border}
              title={item.title}
              value={item.value}
              tooltip={item.tooltip}
              key={index}
            />
          ))}
        </div>
      </Accordion>
    </div>
  )
}

export default Pricing
