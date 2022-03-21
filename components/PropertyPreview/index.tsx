import { useRouter } from "next/router"
import { PropertyPreviewProps } from "types/property"
import PropertyPreviewDetails from "./PropertyPreviewDetails"
import PropertyPreviewImage from "./PropertyPreviewImage"

interface Props extends PropertyPreviewProps {
  image: string
  alt: string
  placeholder: string
}

export default function PropertyPreview({
  title,
  address,
  beds,
  shares,
  isSlide,
  price,
  tooltip,
  image,
  alt,
  placeholder,
}: Props) {
  const router = useRouter()
  return (
    <div className={`${isSlide && "swiper-slide"} h-auto w-1/3 cursor-pointer`}>
      <div
        className="min-h-[300px] rounded bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl"
        onClick={() => router.push("/property/test")}
      >
        <PropertyPreviewImage
          image={image}
          alt={alt}
          placeholder={placeholder}
        />
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
