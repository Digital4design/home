import { PropertyPreviewProps } from "types/property"
import PropertyPreviewDetails from "./PropertyPreviewDetails"
import PropertyPreviewImage from "./PropertyPreviewImage"

export default function PropertyPreview({
  title,
  address,
  beds,
  shares,
  isSlide,
  price,
  tooltip,
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
          price={price}
          tooltip={tooltip}
        />
      </div>
    </div>
  )
}
