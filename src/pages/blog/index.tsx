import ArticlePreview from "components/Blog/ArticlePreview"
import ArticlesFilters from "components/Blog/ArticlesFilters"
import BlogSidebarFooter from "components/Blog/BlogSidebar/BlogSidebarFooter"
import FeaturedArticle from "components/Blog/FeaturedArticle"
import Pagination from "components/Blog/Pagination"
import RecommendedArticles from "components/Blog/RecommendedArticle/RecommendedArticles"
import Container from "components/Core/Container"
import PageHeading from "components/Core/PageHeading"
import { request } from "lib/datocms"
import { GetServerSideProps } from "next"
import Head from "next/head"
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
  page: number
}

/**
 *
 * @param props.articles an array of articles from the server side request. default pulls first 5 articles from all existing articles in DatoCMS
 * @param props.count the total number of articles that exist in DatoCMS (this will change depending on category filtering)
 * @param props.featuredArticle the featured article from DatoCMS
 * @param props.recommendedArticles the 3 recommended articles from DatoCMS (in Dato it is set to allow no more than 3 articles)
 * @param props.page the page number from the URL query params. If no params, it will assume page is equal to 1
 * @returns the blog home page
 * @description gets props from getServerSideProps. Explore DatoCMS graphQL API at https://homereach.admin.datocms.com/cda-explorer
 */

export default function Blog({
  articles,
  count,
  featuredArticle,
  recommendedArticles,
  page,
}: Props) {
  return (
    <main className="pb-8">
      <Head>
        <title>Blog | Home Reach</title>
      </Head>
      <PageHeading centerText containerSm size="md">
        The official Home Reach blog
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
      {/* articles, server side query limits to 5 at a time, pagination provided based on total articles count */}
      <section>
        <Container isFlex size="sm">
          <div className="w-full md:w-3/5 md:px-6">
            <ArticlesFilters />
            {articles.map((article) => (
              <ArticlePreview article={article} key={article.id} />
            ))}
            <Pagination totalArticles={count} page={page} />
          </div>
        </Container>
      </section>
    </main>
  )
}

interface Queries {
  page?: number
  category?: string
  sortBy?: string
}

interface Query {
  query: Queries
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: Query) => {
  const page = query.page ? Number(query.page) : 1
  const category = query.category ?? ""
  const sort = query.sortBy ?? "DESC"

  // the skip amount from dato graphql filters - see: https://homereach.admin.datocms.com/cda-explorer
  // if page is 1, start from 0
  // if page is 2, start from (2-1) * 5 (5)
  // if page is 3, start from (3-1) * 5 (10) etc
  const skipAmount = page === 1 ? 0 : (page - 1) * 5

  // use the getArticles function to dynamically change the query
  const QUERY = getArticles(skipAmount, category, sort)
  const data = await request({
    query: QUERY,
    endpoint: "dev",
  } as any)

  const articles: BlogArticlePreview[] = data.allArticles
  const count: number = data._allArticlesMeta.count
  const featuredArticle: BlogArticleFeatured = data.featuredArticle.article
  const recommendedArticles: BlogArticleRecommended[] =
    data.recommendedRead.articles

  return {
    props: {
      articles,
      count,
      featuredArticle,
      recommendedArticles,
      page,
    },
  }
}

// Dato graphQL query
// function to dynamically change the query. By default we skip 0 items and get the first 5
// it will always be in 5s so only the skip needs to be made. We will start from 0, 5, 10 etc per page
export const getArticles = (
  skip: number = 0,
  category?: string,
  sortOrder: string = "DESC"
) => {
  return `query BlogHomeArticles {
    _allArticlesMeta(filter: {_status: {eq: published}, category: { matches: {pattern: "${category}"} } }) {
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
        author {
          name
          avatar {
            url
          }
        }
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
    allArticles(filter: {_status: {eq: published}, category: {matches: {pattern: "${category}"} } }, orderBy: _createdAt_${sortOrder}, skip: "${skip}", first: "5") {
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
}
