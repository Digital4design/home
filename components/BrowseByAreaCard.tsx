import Image from "next/image"
import { useRouter } from "next/router"

interface Props {
  src: string
  alt: string
  blurDataURL: string
  padding?: number
  height?: string
  width?: string
  area: string
  numOfProperties: number
  url: string
}

/**
 *
 * @prop src - the image url
 * @prop alt - the image alt tag
 * @prop blurDataURL - a lower res image URL for lazy load placeholder
 * @prop padding - a number corresponding to a tailwind class i.e. 3 for p-3
 * @prop height - a tailwindcss height class, default h-[350px] if not provided
 * @prop width - a tailwindcss width class, default w-full md:w-1/3 if not provided.
 * @prop area - the name of the area
 * @prop numOfProperties - the number of properties in the area
 * @prop url - the url the card should link to
 * @returns a card component with an image, and an area name
 */

export default function BrowseByAreaCard({
  src,
  alt,
  blurDataURL,
  padding = 3,
  height = "h-[300px]",
  width = "w-full md:w-1/3",
  area,
  numOfProperties,
  url,
}: Props) {
  const router = useRouter()

  return (
    <div
      className={`group relative cursor-pointer p-${String(
        padding
      )} ${height} ${width}`}
      onClick={() => router.push(url)}
    >
      <figure className="relative h-full w-full overflow-hidden rounded shadow-lg">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </figure>
      <div className="absolute inset-3 flex items-center justify-center rounded bg-gradient-to-b from-transparent via-transparent to-brand-grey-dark transition-all duration-200 ease-in-out group-hover:bg-brand-green group-hover:bg-opacity-80 group-hover:from-transparent group-hover:to-brand-blue group-hover:opacity-80">
        <span className="-translate-y-4 text-9xl font-bold text-white opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
          {numOfProperties}
        </span>
        <div className="absolute bottom-8 left-6 text-4xl font-bold text-white">
          {area}
        </div>
      </div>
    </div>
  )
}
