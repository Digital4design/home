import Image from "next/image"

interface Props {
  image: string
  alt: string
  placeholder: string
}

/**
 *
 * @param props.image the property image url
 * @param props.alt the property image alt text
 * @param props.placeholder the property image placeholder, should be a lower res version of the original for lazy loading
 * @returns
 */

export default function PropertyPreviewImage({
  image,
  alt,
  placeholder,
}: Props) {
  return (
    <figure className="relative h-[220px] w-full overflow-hidden rounded-t">
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
