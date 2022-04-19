import ArticleDetails from "components/Blog/ArticleDetails"
import BlogLink from "components/Blog/BlogLink"
import BackButton from "components/Core/BackButton"
import { request } from "lib/datocms"
import Image from "next/image"

interface Props {
  articles: Article[]
  category: string
}

// show all articles related to the specific type
// each article will link to just /blog/article-slug, not /blog/[type]/article-slug
export default function ArticleCategory({ category, articles }: Props) {
  return (
    <main className="pb-16">
      <section className="pt-4 pb-8">
        <BackButton />
        <div className="container-sm mt-4">
          <h1 className="text-2xl">
            Blog - <span className="capitalize">{category}</span>
          </h1>
        </div>
      </section>
      <section className="">
        <div className="container-sm flex flex-wrap">
          {articles.map((article) => (
            <article className="w-1/3 p-2" key={article.id}>
              <div className="">
                <figure className="relative h-[200px] w-full overflow-hidden rounded">
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
                  classes="text-brand-grey-dark text-xl"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

// get all blog post static paths and use ISR for any individual posts that may cange or be added

export async function getStaticProps({ params }: any) {
  const category = params.category

  const CATEGORY_ARTICLES = `query ArticleCategories($pattern: String = "${category}") {
    allArticles(filter: {category: {matches: {pattern: $pattern}}}) {
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

  try {
    const data = await request({
      query: CATEGORY_ARTICLES,
      endpoint: process.env.NEXT_DATO_ENVIRONMENT,
    } as any)

    const articles = data.allArticles
    return {
      props: { category: category, articles },
    }
  } catch (error) {
    return {
      props: { category: null, articles: [] },
    }
  }
}

export async function getStaticPaths() {
  const CATEGORIES = `query ArticleCategories {
    allArticles {
      category
    }
  }`

  const data = await request({
    query: CATEGORIES,
    endpoint: process.env.NEXT_DATO_ENVIRONMENT,
  } as any)

  const paths: { params: { category: string } }[] = []

  data.allArticles.forEach((article: { category: string }) => {
    paths.push({ params: { category: article.category.toLowerCase() } })
  })

  return {
    paths,
    fallback: false,
  }
}

interface ArticleImage {
  alt: string
  id: string
  url: string
  width: string
  height: string
}

export interface Article {
  id: string
  mainImage: ArticleImage
  createdAt: string
  articleTitle: string
  category: string
  slug: string
}
