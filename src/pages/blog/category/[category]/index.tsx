import ArticleDetails from "components/Blog/ArticleDetails"
import ArticlesFilters from "components/Blog/ArticlesFilters"
import BlogLink from "components/Blog/BlogLink"
import BackButton from "components/Core/BackButton"
import { request } from "lib/datocms"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BlogArticlePreview } from "types/blog"

interface Props {
  articles: BlogArticlePreview[]
  category: string
  count: number
}

// show all articles related to the specific type
// each article will link to just /blog/article-slug, not /blog/[category]/article-slug

// Just to note we are going to sort using query params but client side
// 1. because it's already built in to ArticleFilters component for a page where getServerSideProps is required
// 2. because we want people to be able to come to the page potentially with a url that may have query params
//    so they can view exactly what the original user did i.e. count=2 (show 2 * 9 posts total), sortBy=ASC (show oldest first)
export default function ArticleCategory({ category, articles }: Props) {
  const router = useRouter()
  // use a count state variable and with each load more, check if it is equal to numOfPages, if so, remove load more button
  const [count, setCount] = useState<number>(1)

  useEffect(() => {
    if (router.query.count) {
      setCount(Number(router.query.count))
    }
  }, [router.query])

  const sortBy = router.query.sortBy

  // calculate the number of blocks of 9 articles there would be if you were to show 9 at a time
  // we will show 9 initially then load more.
  const numberOfBlocksOfNine = Math.ceil(articles.length / 9)

  // in our query to dato we request articles in DESC order based on createdat date.
  // here we will sort using the ArticlesFilters functionality which will push a sortBy query to the url
  // if the sortBy is ASC we can sort by the date client side, otherwise we will just use the articles as they are
  const sortedArticles =
    sortBy === "ASC"
      ? articles.sort(
          (a, b) =>
            Number(new Date(a.createdAt)) - Number(new Date(b.createdAt))
        )
      : articles

  // get the first 9 articles. Each time count updates we want to change the number of articles based on 9 articles * count
  const visibleArticles = sortedArticles.slice(0, count * 9)

  return (
    <main className="pb-16">
      <section className="pt-4 pb-8">
        <BackButton />
        <div className="container-sm mt-4 flex items-center justify-between">
          <h1 className="text-2xl">
            Blog - <span className="capitalize">{category}</span>
          </h1>
          <ArticlesFilters hideCategories />
        </div>
      </section>
      <section className="">
        <div className="container-sm flex flex-wrap">
          {visibleArticles.map((article) => (
            <article
              className="w-full sm:w-1/2 md:p-3 lg:w-1/3"
              key={article.id}
            >
              <div>
                <figure
                  className="relative h-[200px] w-full cursor-pointer overflow-hidden rounded"
                  onClick={() => router.push(`/blog/${article.slug}`)}
                >
                  <Image
                    src={article.mainImage.url}
                    alt={article.mainImage.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
                <div className="py-2">
                  <ArticleDetails
                    category={article.category}
                    createdAt={article.createdAt}
                  />
                </div>
                <BlogLink
                  slug={article.slug}
                  text={article.articleTitle}
                  classes="text-brand-grey-dark text-lg"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
      {count < numberOfBlocksOfNine && (
        <section className="py-8">
          <div className="container-sm">
            <button
              className="button mx-auto disabled:bg-gray-300"
              onClick={() =>
                router.push(
                  { query: { ...router.query, count: count + 1 } },
                  undefined,
                  { scroll: false }
                )
              }
              disabled={count >= numberOfBlocksOfNine}
            >
              Load More Posts ({numberOfBlocksOfNine})
            </button>
          </div>
        </section>
      )}
    </main>
  )
}

// articles in this category will all be statically rendered beforehand anyway so there should be no requests to dato other than initial build
// it is set up for ISR though so if a new article is added the page will need to be reloaded to build and show the updates
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category

  const CATEGORY_ARTICLES = getCategoryArticles(category)

  try {
    const data = await request({
      query: CATEGORY_ARTICLES,
      endpoint: process.env.NEXT_DATO_ENVIRONMENT,
    })

    const articles = data.allArticles
    return {
      props: { category: category, articles },
      revalidate: 10,
    }
  } catch (error) {
    return {
      props: { category: null, articles: [] },
    }
  }
}

// get all the existing category paths
export const getStaticPaths: GetStaticPaths = async () => {
  const CATEGORIES = `query ArticleCategories {
    allArticles {
      category
    }
  }`

  const data = await request({
    query: CATEGORIES,
    endpoint: process.env.NEXT_DATO_ENVIRONMENT,
  })

  const paths: { params: { category: string } }[] = []

  data.allArticles.forEach((article: { category: string }) => {
    paths.push({ params: { category: article.category.toLowerCase() } })
  })

  return {
    paths,
    fallback: false,
  }
}

// get articles by category. This will be fed in to static props so all articles can be requested and built on build
export const getCategoryArticles = (category?: string | string[]) => {
  return `query BlogHomeArticles {
    allArticles(filter: {_status: {eq: published}, category: {matches: {pattern: "${category}"} } }, orderBy: _createdAt_DESC) {
      mainImage {
        alt
        url
      }
      id
      category
      createdAt
      articleTitle
      slug
    }
  }`
}
