import { BlogArticleFeatured } from "types/blog"
import ArticleExcerpt from "components/Blog/ArticlePreview/ArticleExcerpt"
import FeaturedArticleImage from "components/Blog/FeaturedArticle/FeaturedArticleImage"
import BlogLink from "components/Blog/BlogLink"
import ArticleDetails from "components/Blog/ArticleDetails"

interface Props {
  article: BlogArticleFeatured
}

export default function FeaturedArticle({ article }: Props) {
  return (
    <article className="border-b">
      <FeaturedArticleImage
        image={article.mainImage}
        slug={article.slug}
        category={article.category}
      />
      <h2 className="py-6 text-2xl font-semibold">
        <BlogLink
          slug={article.slug}
          text={article.articleTitle}
          classes="text-brand-grey-dark"
        />
      </h2>
      <ArticleExcerpt excerpt={article.excerpt} slug={article.slug} />
      <footer className="pt-4 pb-8">
        <ArticleDetails
          category={article.category}
          createdAt={article.createdAt}
          profileImage
          author="Home Reach"
        />
      </footer>
    </article>
  )
}
