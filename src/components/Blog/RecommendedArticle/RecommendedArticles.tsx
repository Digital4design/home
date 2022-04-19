import React from "react"
import RecommendedArticle from "components/Blog/RecommendedArticle"
import { BlogArticleRecommended } from "types/blog"

interface Props {
  articles: BlogArticleRecommended[]
}

export default function RecommendedArticles({ articles }: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h3 className="mb-2 text-sm">Recommended reads</h3>
      {articles.map((article, index) => {
        const border = index < articles.length - 1
        return (
          <RecommendedArticle
            article={article}
            border={border}
            key={article.id}
          />
        )
      })}
    </div>
  )
}
