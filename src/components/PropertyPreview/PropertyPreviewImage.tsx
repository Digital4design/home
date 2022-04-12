import Image from "next/image"

interface Props {
  image: string
  alt: string
  placeholder: string
  isSearchResult?: boolean
  onClick?: () => void
}

/**
 *
 * @param props.image the property image url
 * @param props.alt the property image alt text
 * @param props.placeholder the property image placeholder, should be a lower res version of the original for lazy loading
 * @param props.isSearchResult used when the preview image is going to be part of property search results in the PropertySearchPreview component
 * @param props.onClick an optional onClick event you can pass through to the image
 * @returns the property image used in property preview components
 */

export default function PropertyPreviewImage({
  image,
  alt,
  placeholder,
  isSearchResult,
  onClick,
}: Props) {
  const classes = isSearchResult
    ? "h-full w-[260.5px]"
    : "h-[220px] w-full rounded-t"

  return (
    <figure
      className={`${classes} ${
        onClick && "cursor-pointer"
      } relative z-[1] overflow-hidden`}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={placeholder}
      />
      <div className="absolute inset-0 bg-gradient-to-bl from-[rgba(0,0,0,0.1)] via-transparent"></div>
    </figure>
  )
}
