import AddToFavourites from "components/Favourites/AddToFavourites"
import FavouritesButton from "components/Layout/FavouritesButton"
import { useRouter } from "next/router"
import { DevelopmentPropertyPreview } from "types/development"
import { DatoProperty, PropertyPreviewPropsNew } from "types/property"
import PropertyPreviewDetails from "./PropertyPreviewDetails"
import PropertyPreviewImage from "./PropertyPreviewImage"

// Need to remove slug test default if missing. Slug will always be required once we integrate with Dato

interface Props {
  property: DevelopmentPropertyPreview
  tooltip?: string
  isSlide?: boolean
  sidebarItem?: boolean
  isRelatedProperty?: boolean
}

export default function PropertyPreviewNew({
  property,
  isSlide,
  tooltip,
  sidebarItem,
  isRelatedProperty,
}: Props) {
  const router = useRouter()
  return (
    <div
      className={`${
        isSlide
          ? "swiper-slide"
          : sidebarItem
          ? "w-full"
          : isRelatedProperty
          ? "mb-6 w-full px-2 md:w-1/2"
          : "mx-auto mb-6 w-full max-w-lg md:w-1/3"
      } h-auto cursor-pointer`}
    >
      <div
        className={`relative min-h-[300px] rounded bg-white shadow-lg ${
          sidebarItem &&
          "transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl"
        }`}
        onClick={() => router.push(`/property/${property.slug}`)}
      >
        <PropertyPreviewImage
          image={property.gallery[0].url}
          alt={property.gallery[0].alt}
          placeholder={property.gallery[0].url}
        />
        <PropertyPreviewDetails
          title={property.name}
          address={"Golborne, Wigan, WA3 3EG"}
          beds={property.bedrooms}
          shares={property.initialShare}
          price={property.omv}
          tooltip={tooltip}
          type={property.propertyType}
        />
        <div className="absolute top-4 right-4 z-20">
          <AddToFavourites />
        </div>
      </div>
    </div>
  )
}
