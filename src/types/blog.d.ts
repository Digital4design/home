// article image
export interface ArticleImage {
  alt: string
  id: string
  url: string
  width: string
  height: string
  responsiveImage: { src: string }
}

// blog home recommended article, can be extended
interface BlogArticleBasic {
  id: string
  createdAt: string
  articleTitle: string
  category: string
  slug: string
}

export type BlogArticleRecommended = BlogArticleBasic

// blog article preview
export interface BlogArticlePreview extends BlogArticleBasic {
  excerpt: string
  mainImage: ArticleImage
}

// blog home featured article
export type BlogArticleFeatured = BlogArticlePreview

// blog category article preview
export interface CategoryArticlePreview extends BlogArticleBasic {
  mainImage: ArticleImage
}

// blog article (all data)

export interface BlogFullArticle extends BlogCategoryArticle {}
