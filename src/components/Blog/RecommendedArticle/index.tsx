import { BlogArticleRecommended } from "types/blog"
import ArticleDetails from "components/Blog/ArticleDetails"
import BlogLink from "components/Blog/BlogLink"

interface Props {
  article: BlogArticleRecommended
  border: boolean
}

export default function RecommendedArticle({ article, border }: Props) {
  return (
    <article
      className={`${border ? "border-b pt-6 pb-4" : "pt-4"}`}
      key={article.id}
    >
      <h4 className="text-lg">
        <BlogLink
          slug={article.slug}
          text={article.articleTitle}
          classes="text-brand-grey-dark"
        />
      </h4>
      <footer className={border ? "py-1" : "pt-1"}>
        <ArticleDetails
          category={article.category}
          createdAt={article.createdAt}
        />
      </footer>
    </article>
  )
}
