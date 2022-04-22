import React from "react"
import BlogLink from "components/Blog/BlogLink"
import MiddleDot from "./MiddleDot"
import Image from "next/image"

interface Props {
  author?: string
  category: string
  createdAt: string
  profileImage?: string
}

export default function ArticleDetails({
  author,
  category,
  createdAt,
  profileImage,
}: Props) {
  return (
    <div className="flex items-center text-sm leading-[1]">
      {profileImage && (
        <div className="relative mr-6 inline-block h-10 w-10 overflow-hidden rounded-full border border-gray-50 bg-white shadow-lg">
          <Image
            src={profileImage}
            alt={`${author} avatar`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <p className="text-gray-400">
        {author && <span>{`${author} in `}</span>}
        <BlogLink
          slug={`category/${category}`}
          text={category}
          classes="text-gray-400"
        />
        <MiddleDot />
        <span>{new Date(createdAt).toDateString()}</span>
        <MiddleDot />
        <span>7 min read</span>
      </p>
    </div>
  )
}
