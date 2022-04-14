import Link from "next/link"

interface Props {
  slug: string
  text: string
  classes?: string
}

export default function BlogLink({ slug, text, classes }: Props) {
  return (
    <Link href={`/blog/${slug.toLowerCase()}`}>
      <a className={`capitalise font-semibold ${classes}`}>{text}</a>
    </Link>
  )
}
