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
    <article className="border-b py-4 md:border-b-0">
      <div className="flex flex-wrap justify-between">
        <div className="order-2 w-9/12 pl-4 sm:pl-0 md:order-1 md:pr-2">
          <h4 className="text-[18px] md:text-lg">
            <BlogLink
              slug={article.slug}
              text={article.articleTitle}
              classes="text-brand-grey-dark"
            />
          </h4>
          <div className="hidden py-4 md:block">
            <ArticleExcerpt excerpt={article.excerpt} slug={article.slug} />
          </div>
          <div className="hidden md:block">
            <ArticleDetails
              category={article.category}
              createdAt={article.createdAt}
            />
          </div>
        </div>
        <div className="order-1 w-3/12 md:order-2">
          <figure className="relative inline-block h-20 w-20 cursor-pointer overflow-hidden rounded-sm sm:h-24 sm:w-24 md:h-40 md:w-40 md:rounded-2xl">
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
      </div>
      <div className="md:hidden">
        <ArticleDetails
          category={article.category}
          createdAt={article.createdAt}
        />
      </div>
    </article>
  )
}
