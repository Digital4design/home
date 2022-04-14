import { InformationCircleIcon } from "@heroicons/react/outline"
import ArticleDetails from "components/Blog/ArticleDetails"
import ArticleExcerpt from "components/Blog/ArticlePreview/ArticleExcerpt"
import BlogLink from "components/Blog/BlogLink"
import FeaturedArticle from "components/Blog/FeaturedArticle"
import RecommendedArticle from "components/Blog/RecommendedArticle"
import { request } from "lib/datocms"
import { GetStaticProps } from "next"
import Image from "next/image"
import {
  BlogArticleFeatured,
  BlogArticlePreview,
  BlogArticleRecommended,
} from "types/blog"

interface Props {
  articles: BlogArticlePreview[]
  count: number
  featuredArticle: BlogArticleFeatured
  recommendedArticles: BlogArticleRecommended[]
}

export default function Blog({
  articles,
  count,
  featuredArticle,
  recommendedArticles,
}: Props) {
  console.log(articles)
  return (
    <main className="pb-8">
      {/* Make page header component */}
      <section className="py-14">
        <div className="container-sm">
          <h1 className="text-center">
            The official Home Reach blog ({count} posts)
          </h1>
        </div>
      </section>
      <section className="py-6">
        <div className="container-sm flex flex-wrap">
          <div className="w-full md:w-3/5 md:px-6">
            <FeaturedArticle article={featuredArticle} />
          </div>
          <aside className="w-full md:w-2/5">
            <div className="rounded-xl border p-6">
              <h3 className="mb-2 text-sm">Recommended reads</h3>
              {recommendedArticles.map((article, index) => {
                const border = index < recommendedArticles.length - 1
                return (
                  <RecommendedArticle
                    article={article}
                    border={border}
                    key={article.id}
                  />
                )
              })}
            </div>
            <footer className="flex items-center justify-end py-6 text-sm text-gray-400">
              Find us on:
              <InformationCircleIcon className="mx-2 inline h-5 w-5" />
              <InformationCircleIcon className="inline h-5 w-5" />
            </footer>
          </aside>
        </div>
      </section>
      {/* paginated articles, limit by 5 */}
      <section>
        <div className="container-sm flex">
          <div className="w-full md:w-3/5 md:px-6">
            {articles.map((article) => (
              <article className="flex justify-between py-4" key={article.id}>
                <div className="w-9/12 pr-2">
                  <h4 className="text-lg">
                    <BlogLink
                      slug={article.slug}
                      text={article.articleTitle}
                      classes="text-brand-grey-dark"
                    />
                  </h4>
                  <div className="py-4">
                    <ArticleExcerpt
                      excerpt={article.excerpt}
                      slug={article.slug}
                    />
                  </div>
                  <ArticleDetails
                    category={article.category}
                    createdAt={article.createdAt}
                  />
                </div>
                <div className="w-3/12">
                  <figure className="relative inline-block h-40 w-40 overflow-hidden rounded-2xl">
                    <Image
                      src={article.mainImage.url}
                      alt={article.mainImage.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await request({
    query: ARTICLES_QUERY,
    endpoint: "dev",
  } as any)

  const articles = data.allArticles
  const count = data._allArticlesMeta.count
  const featuredArticle = data.featuredArticle.article
  const recommendedArticles = data.recommendedRead.articles

  return {
    props: { articles, count, featuredArticle, recommendedArticles },
  }
}

// Blog homepage data, reduced parts of all articles, featured article and recommended reads from DatoCMS
export const ARTICLES_QUERY = `query BlogHomeArticles {
  _allArticlesMeta {
    count
  }
  featuredArticle {
    article {
      id
      mainImage {
        alt
        id
        size
        url
        width
        height
      }
      createdAt
      articleTitle
      category
      excerpt
      slug
    }
  }
  recommendedRead {
    articles {
      id
      mainImage {
        alt
        id
        size
        url
        width
        height
      }
      createdAt
      articleTitle
      category
      slug
    }
  }
  allArticles(filter: {_status: {eq: published}}, orderBy: _createdAt_ASC, first: "5") {
    id
    slug
    category
    articleTitle
    createdAt
    excerpt
    mainImage {
      alt
      id
      size
      url
      width
      height
    }
  }
}`
