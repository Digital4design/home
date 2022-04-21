import ArticleDetails from "components/Blog/ArticleDetails"
import ArticlesFilters from "components/Blog/ArticlesFilters"
import BlogLink from "components/Blog/BlogLink"
import BackButton from "components/Core/BackButton"
import { request } from "lib/datocms"
import Image from "next/image"
import { useRouter } from "next/router"
import { BlogArticlePreview } from "types/blog"
import { createArrayBetweenTwoNumbers } from "utils"

interface Props {
  articles: BlogArticlePreview[]
  category: string
  count: number
}

// show all articles related to the specific type
// each article will link to just /blog/article-slug, not /blog/[type]/article-slug
export default function ArticleCategory({ category, articles, count }: Props) {
  const router = useRouter()

  const numOfPages = Math.ceil(count / 9)

  const pages = createArrayBetweenTwoNumbers(1, numOfPages)

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
          {articles.map((article) => (
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
    </main>
  )
}

// hmm, should probably do this as static paths, and just have all articles on the page, showing only 9 first
// sort order then done client side as well as loading more....

export async function getServerSideProps({ query }: any) {
  const category: string = query.category
  const sortBy: string =
    query.sortBy !== ("" || "ASC" || "DESC") ? "DESC" : query.sortBy

  const CATEGORY_ARTICLES = getCategoryArticles(0, category, sortBy)

  try {
    const data = await request({
      query: CATEGORY_ARTICLES,
      endpoint: process.env.NEXT_DATO_ENVIRONMENT,
    } as any)

    const articles = data.allArticles
    const count = data._allArticlesMeta.count
    return {
      props: { category: category, articles, count },
    }
  } catch (error) {
    return {
      props: { category: null, articles: [] },
    }
  }
}

export const getCategoryArticles = (
  skip: number = 0,
  category: string,
  sortOrder: string = "DESC"
) => {
  return `query BlogHomeArticles {
    _allArticlesMeta(filter: {_status: {eq: published}, category: { matches: {pattern: "${category}"} } }) {
      count
    }
    allArticles(filter: {_status: {eq: published}, category: {matches: {pattern: "${category}"} } }, orderBy: _createdAt_${sortOrder}, skip: "${skip}", first: "5") {
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
