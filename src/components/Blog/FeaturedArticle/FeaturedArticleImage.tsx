import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { ArticleImage } from "types/blog"
import CategoryTag from "../CategoryTag"

interface Props {
  image: ArticleImage
  slug: string
  category: string
}

export default function FeaturedArticleImage({ image, slug, category }: Props) {
  const router = useRouter()
  return (
    <figure className="relative h-[400px] w-full cursor-pointer overflow-hidden rounded">
      <Image
        src={image.url}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={image.url}
        onClick={() => router.push(`/blog/${slug}`)}
      />
      <CategoryTag category={category} />
    </figure>
  )
}
