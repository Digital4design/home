import BackButton from "components/Core/BackButton"
import { request } from "lib/datocms"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

interface Props {
  articles: Article[]
}

// show all articles related to the specific type
// each article will link to just /blog/article-slug, not /blog/[type]/article-slug
export default function ArtuckeCategory({ articles }: Props) {
  const router = useRouter()

  const path = router.pathname.replace("/blog/", "")

  return (
    <main>
      <section className="py-16">
        <BackButton />
        <div className="container-sm">
          <h1 className="text-2xl">
            Blog - <span className="capitalize">{path}</span>
          </h1>
        </div>
      </section>
      <section className="py-16">
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
                <div className="py-4 text-sm text-gray-400">
                  <Link
                    passHref
                    href={`/blog/${article.category.toLowerCase()}`}
                  >
                    <a className="font-semibold">{article.category}</a>
                  </Link>{" "}
                  - {new Date(article.createdAt).toDateString()} - 7 min read
                </div>
                <h2 className="text-lg">{article.articleTitle}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

// get all blog post static paths and use ISR for any individual posts that may cange or be added

export async function getStaticProps() {
  const data = await request({
    query: ARTICLES_QUERY,
    endpoint: "dev",
  } as any)

  const articles = data.allArticles
  return {
    props: { articles },
  }
}

export const ARTICLES_QUERY = `query Articles {
  allArticles(filter: {_status: {eq: published}}, orderBy: createdAt_ASC) {
    id
    mainImage {
      alt
      id
      url
      width
      height
    }
    createdAt
    articleTitle
    category
    slug
  }
}`

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
