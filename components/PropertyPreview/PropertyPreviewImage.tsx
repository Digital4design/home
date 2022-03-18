import Image from "next/image"

interface Props {
  image: string
  alt: string
  placeholder: string
}

export default function PropertyPreviewImage({
  image,
  alt,
  placeholder,
}: Props) {
  return (
    <figure className="relative h-[220px] w-full">
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
