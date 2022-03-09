import PropertyPreviewDetails from "./PropertyPreviewDetails"
import PropertyPreviewImage from "./PropertyPreviewImage"

export interface PropertyPreviewProps {
  title: string
  address: string
  beds: string
  shares: number
}

export default function PropertyPreview({
  title,
  address,
  beds,
  shares,
}: PropertyPreviewProps) {
  return (
    <div className="swiper-slide h-auto w-1/3">
      <div className=" min-h-[300px] overflow-hidden rounded bg-white shadow-lg">
        <PropertyPreviewImage />
        <PropertyPreviewDetails
          title={title}
          address={address}
          beds={beds}
          shares={shares}
        />
      </div>
    </div>
  )
}
