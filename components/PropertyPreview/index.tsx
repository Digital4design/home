import { useRouter } from "next/router"
import { PropertyPreviewProps } from "types/property"
import PropertyPreviewDetails from "./PropertyPreviewDetails"
import PropertyPreviewImage from "./PropertyPreviewImage"

interface Props extends PropertyPreviewProps {
  image: string
  alt: string
  placeholder: string
  slug?: string
}

/**
 *
 * @param props.title the title of the property
 * @param props.address the property address
 * @param props.beds the number of beds for the property
 * @param props.shares a number used as a percentage for shares in the property
 * @param props.isSlide if the property preview is part of the property preview carousel, set to true. Will add the 'swiper-slide' class
 * @param props.price the price of the property
 * @param props.tooltip the tooltip text for the information icon
 * @param props.image the property image URL
 * @param props.alt the property image alt text
 * @param props.placeholder the property image placeholder for lazy load - use lower res image
 * @param props.slug the slug to the property - if not provided, will default to "test" for now
 * @returns a property preview component showing the property image and details
 */

// Need to remove slug test default if missing. Slug will always be required once we integrate with Dato

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
  slug = "test",
}: Props) {
  const router = useRouter()
  return (
    <div className={`${isSlide && "swiper-slide"} h-auto w-1/3 cursor-pointer`}>
      <div
        className="min-h-[300px] rounded bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl"
        onClick={() => router.push(`/property/${slug}`)}
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
