import { Campaign } from "types/property"

interface Props {
  featuredCampaign: Campaign
}

function LargeAnnouncement({ featuredCampaign }: Props) {
  const fromDate = new Date(featuredCampaign.availableFrom).toLocaleDateString()
  const fromTime = new Date(featuredCampaign.availableFrom).toLocaleTimeString()
  const toDate = new Date(featuredCampaign.availableTo).toLocaleDateString()
  const toTime = new Date(featuredCampaign.availableTo).toLocaleTimeString()

  return (
    <aside className=" border-radius flex flex-col items-center rounded bg-brand-green-light py-10 px-5 text-center text-brand-blue md:mx-0">
      <h4 className="mb-5">{featuredCampaign.strapline}</h4>
      {featuredCampaign.details && (
        <div
          className="campaign-details"
          dangerouslySetInnerHTML={{ __html: featuredCampaign.details }}
        />
      )}

      <p className="text-brand-blue">
        Offer available:{" "}
        <span className="font-bold">
          {fromDate} {fromTime} - {toDate} {toTime}
        </span>
      </p>
    </aside>
  )
}

export default LargeAnnouncement
