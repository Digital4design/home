import Link from "next/link"

interface Props {
  category: string
}

export default function CategoryTag({ category }: Props) {
  return (
    <span className="absolute top-5 left-5 rounded-xs bg-brand-blue py-px px-2 text-sm uppercase">
      {
        <Link href={`/blog/category/${category.toLowerCase()}`}>
          <a className="text-white">{category}</a>
        </Link>
      }
    </span>
  )
}
