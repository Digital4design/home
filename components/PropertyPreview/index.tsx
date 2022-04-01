import AddToFavourites from "components/AddToFavourites"
import FavouritesButton from "components/Layout/FavouritesButton"
import { useRouter } from "next/router"
import { PropertyPreviewProps, PropertyPreviewPropsNew } from "types/property"
import PropertyPreviewDetails from "./PropertyPreviewDetails"
import PropertyPreviewImage from "./PropertyPreviewImage"

// Need to remove slug test default if missing. Slug will always be required once we integrate with Dato

export default function PropertyPreview({
  property,
  isSlide,
  tooltip,
}: PropertyPreviewPropsNew) {
  const router = useRouter()
  return (
    <div
      className={`${
        isSlide ? "swiper-slide" : "mx-auto mb-6 w-full max-w-md"
      } h-auto cursor-pointer md:w-1/3`}
    >
      <div
        className="relative min-h-[300px] rounded bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl"
        onClick={() => router.push(`/property/${property.slug}`)}
      >
        <PropertyPreviewImage
          image={property.image}
          alt={property.alt}
          placeholder={property.placeholder}
        />
        <PropertyPreviewDetails
          title={property.title}
          address={property.address}
          beds={property.beds}
          shares={property.shares}
          price={property.price}
          tooltip={tooltip}
          type={property.type}
        />
        <div className="absolute top-4 right-4">
          <AddToFavourites />
        </div>
      </div>
    </div>
  )
}
