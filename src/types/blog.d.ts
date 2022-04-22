// article image
export interface ArticleImage {
  alt: string
  id: string
  url: string
  width: string
  height: string
  responsiveImage: { src: string }
}

interface AuthorAvatar {
  url: string
}
export interface Author {
  name: string
  avatar: AuthorAvatar
}

// blog home recommended article, can be extended
interface BlogArticleBasic {
  id: string
  createdAt: string
  articleTitle: string
  category: string
  slug: string
  author: Author
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

interface RelatedArticle extends BlogArticleBasic {
  mainImage: ArticleImage
}
export interface BlogFullArticle extends BlogArticlePreview {
  content: string
  relatedArticles: RelatedArticle[]
}
