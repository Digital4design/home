import MainImageContainer from "components/Blog/Article/MainImageContainer"
import ArticleDetails from "components/Blog/ArticleDetails"
import BlogLink from "components/Blog/BlogLink"
import Container from "components/Core/Container"
import PageHeading from "components/Core/PageHeading"
import { request } from "lib/datocms"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { BlogFullArticle } from "types/blog"

interface Props {
  article: BlogFullArticle
}

export default function BlogPost({ article }: Props) {
  const router = useRouter()
  return (
    <main className="pb-8">
      <Head>
        <title>{article.articleTitle} | Blog - Home Reach</title>
      </Head>
      <PageHeading containerSm centerText>
        {article.articleTitle}
      </PageHeading>
      <section>
        <Container size="xs">
          <MainImageContainer>
            <Image
              src={article.mainImage.url}
              alt={article.mainImage.alt}
              layout="fill"
              objectFit="cover"
            />
          </MainImageContainer>
          <div className="border-b py-6">
            <ArticleDetails
              profileImage
              author="Home Reach"
              createdAt={article.createdAt}
              category={article.category}
            />
          </div>
        </Container>
      </section>
      <section className="py-6">
        <div className="container-xs">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>
        </div>
      </section>
      {article.relatedArticles.length && (
        <section className="py-6">
          <div className="container-sm">
            <h4 className="mb-6 text-center">Related blog posts</h4>
            <div className="flex flex-wrap justify-center">
              {article.relatedArticles.map((relatedArticle) => (
                <article className="w-1/3 px-2" key={relatedArticle.id}>
                  <div className="">
                    <figure className="relative aspect-video w-full cursor-pointer overflow-hidden rounded">
                      <Image
                        src={relatedArticle.mainImage.url}
                        alt={relatedArticle.mainImage.alt}
                        placeholder="blur"
                        blurDataURL={
                          relatedArticle.mainImage.responsiveImage.src
                        }
                        layout="fill"
                        objectFit="cover"
                        onClick={() =>
                          router.push(`/blog/${relatedArticle.slug}`)
                        }
                      />
                    </figure>
                    <div className="pt-2 pb-4">
                      <ArticleDetails
                        category={relatedArticle.category}
                        createdAt={relatedArticle.createdAt}
                      />
                    </div>
                    <h5>
                      <BlogLink
                        slug={relatedArticle.slug}
                        text={relatedArticle.articleTitle}
                        classes="text-brand-grey-dark"
                      />
                    </h5>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export const getStaticPaths = async () => {
  const data = await request({
    query: ARTICLE_PATHS,
    endpoint: "dev",
  } as any)

  const paths: { params: { slug: string } }[] = []

  type Slug = { slug: string }

  data.allArticles.forEach(({ slug }: Slug) => {
    paths.push({ params: { slug: slug } })
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const slug = params.slug

  // article query including related articles
  const ARTICLE_QUERY = `query ArticleQueryBySlug($slug: SlugFilter = {eq: "${slug}"}) {
    article(filter: {slug: $slug, _status: {eq: published}}) {
      _createdAt
      id
      slug
      category
      articleTitle
      createdAt
      content
      mainImage {
        alt
        url
        responsiveImage(imgixParams: {fit: crop, h: "600", w: "600", fm: jpg}) {
          src
        }
      }
      relatedArticles {
        id
        mainImage {
          alt
          url
          responsiveImage(imgixParams: {fit: crop, h: "600", w: "600", fm: jpg}) {
            src
          }
        }
        slug
        articleTitle
        category
        createdAt
      }
    }
  }
  `
  // pull the article data
  const data = await request({
    query: ARTICLE_QUERY,
    endpoint: "dev",
  } as any)

  // return the article
  return {
    props: {
      article: data.article,
    },
  }
}

export const ARTICLE_PATHS = `query ArticleSlugs {
  allArticles(filter: {_status: {eq: published}}) {
    slug
  }
}`
