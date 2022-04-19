import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { BlogArticlePreview } from "types/blog"
import ArticleDetails from "components/Blog/ArticleDetails"
import BlogLink from "components/Blog/BlogLink"
import ArticleExcerpt from "components/Blog/ArticlePreview/ArticleExcerpt"

interface Props {
  article: BlogArticlePreview
}

export default function ArticlePreview({ article }: Props) {
  const router = useRouter()

  return (
    <article className="flex justify-between py-4">
      <div className="w-9/12 pr-2">
        <h4 className="text-lg">
          <BlogLink
            slug={article.slug}
            text={article.articleTitle}
            classes="text-brand-grey-dark"
          />
        </h4>
        <div className="py-4">
          <ArticleExcerpt excerpt={article.excerpt} slug={article.slug} />
        </div>
        <ArticleDetails
          category={article.category}
          createdAt={article.createdAt}
        />
      </div>
      <div className="w-3/12">
        <figure className="relative inline-block h-40 w-40 cursor-pointer overflow-hidden rounded-2xl">
          <Image
            src={article.mainImage.url}
            alt={article.mainImage.alt}
            placeholder="blur"
            blurDataURL={article.mainImage.responsiveImage.src}
            layout="fill"
            objectFit="cover"
            onClick={() => router.push(`/blog/${article.slug}`)}
          />
        </figure>
      </div>
    </article>
  )
}
