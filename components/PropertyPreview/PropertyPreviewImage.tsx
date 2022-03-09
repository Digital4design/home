import Image from "next/image"

export default function PropertyPreviewImage() {
  return (
    <figure className="relative h-[220px] w-full">
      <Image
        src="https://via.placeholder.com/400x300"
        alt=""
        layout="fill"
        objectFit="cover"
      />
    </figure>
  )
}
