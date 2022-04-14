import Link from "next/link"
import React from "react"

interface Props {
  excerpt: string
  slug: string
}

export default function ArticleExcerpt({ excerpt, slug }: Props) {
  return (
    <>
      <div
        className="excerpt inline"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      ></div>
      ..{" "}
      <Link href={`/blog/${slug}`}>
        <a className="font-semibold">Read more</a>
      </Link>
    </>
  )
}
