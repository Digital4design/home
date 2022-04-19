import ArticlePreview from "components/Blog/ArticlePreview"
import ArticlesFilters from "components/Blog/ArticlesFilters"
import BlogSidebarFooter from "components/Blog/BlogSidebar/BlogSidebarFooter"
import FeaturedArticle from "components/Blog/FeaturedArticle"
import RecommendedArticles from "components/Blog/RecommendedArticle/RecommendedArticles"
import Container from "components/Core/Container"
import PageHeading from "components/Core/PageHeading"
import { request } from "lib/datocms"
import { GetStaticProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
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
  const router = useRouter()
  return (
    <main className="pb-8">
      <Head>
        <title>Blog | Home Reach</title>
      </Head>
      <PageHeading centerText containerSm size="md">
        The official Home Reach blog ({count} posts)
      </PageHeading>
      <section className="pt-6">
        <Container isFlex size="sm">
          <div className="w-full md:w-3/5 md:px-6">
            <FeaturedArticle article={featuredArticle} />
          </div>
          <aside className="w-full md:w-2/5">
            <RecommendedArticles articles={recommendedArticles} />
            <BlogSidebarFooter />
          </aside>
        </Container>
      </section>
      {/* paginated articles, limit by 5 */}
      <section>
        <Container isFlex size="sm">
          <div className="w-full md:w-3/5 md:px-6">
            <ArticlesFilters />
            {articles.map((article) => (
              <ArticlePreview article={article} key={article.id} />
            ))}
          </div>
        </Container>
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
    revalidate: 10,
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
        responsiveImage(imgixParams: {fit: crop, h: "600", w: "600", fm: jpg}) {
          src
        }
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
        responsiveImage(imgixParams: {fit: crop, h: "600", w: "600", fm: jpg}) {
          src
        }
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
    content
    mainImage {
      alt
      id
      size
      url
      responsiveImage(imgixParams: {fit: crop, h: "600", w: "600", fm: jpg}) {
        src
      }
    }
  }
}`
