import React from "react"
import BlogLink from "components/Blog/BlogLink"
import MiddleDot from "./MiddleDot"

interface Props {
  author?: string
  category: string
  createdAt: string
  profileImage?: boolean
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
        <div className="mr-6 inline-block h-10 w-10 rounded-full border border-gray-50 bg-white shadow-lg"></div>
      )}
      <p className="text-gray-400">
        <span>{author && `${author} in `}</span>
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
