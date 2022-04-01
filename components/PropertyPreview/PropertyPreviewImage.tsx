import Image from "next/image"

interface Props {
  image: string
  alt: string
  placeholder: string
  isSearchResult?: boolean
}

/**
 *
 * @param props.image the property image url
 * @param props.alt the property image alt text
 * @param props.placeholder the property image placeholder, should be a lower res version of the original for lazy loading
 * @param props.isSearchResult used when the preview image is going to be part of property search results in the PropertySearchPreview component
 * @returns the property image used in property preview components
 */

export default function PropertyPreviewImage({
  image,
  alt,
  placeholder,
  isSearchResult,
}: Props) {
  const classes = isSearchResult
    ? "h-full w-[260.5px]"
    : "h-[220px] w-full rounded-t"

  return (
    <figure className={`${classes} relative z-[1] overflow-hidden`}>
      <Image
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={placeholder}
      />
    </figure>
  )
}
