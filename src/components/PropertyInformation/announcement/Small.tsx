import { useMemo } from "react"
import { Campaign } from "types/property"
import { getDaysUntilEndDate } from "utils"

interface Props {
  campaigns: Campaign[]
}

function SmallAnnouncements({ campaigns }: Props) {
  console.log(campaigns)
  const now = useMemo(() => new Date().getTime(), [])
  return (
    <>
      {campaigns.map((campaign) => {
        const toDate = new Date(campaign.availableTo).getTime()
        const fromDate = new Date(campaign.availableFrom).getTime()
        const daysToEnd = getDaysUntilEndDate(campaign.availableTo)

        if (fromDate <= now && toDate >= now) {
          return (
            <div
              key={campaign.strapline}
              className="border-radius flex flex-col items-center rounded bg-brand-green-light px-24 py-10 text-center text-brand-blue md:mx-0"
            >
              <h5 className="mb-3 leading-8 ">{campaign.strapline}</h5>
              <p className="mb-1 font-light text-brand-blue">
                {daysToEnd} {daysToEnd === 1 ? "day" : "days"} left!
              </p>
            </div>
          )
        }
      })}
    </>
  )
}

export default SmallAnnouncements
