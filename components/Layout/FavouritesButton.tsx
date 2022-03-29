import { HeartIcon } from "@heroicons/react/outline"
import Link from "next/link"

export default function FavouritesButton() {
  return (
    <Link href="/favourites">
      <a className=" text-brand-blue hover:text-brand-green">
        <HeartIcon className="h-6 w-6" />
        <span className="ml-2 lg:hidden">Favourites</span>
      </a>
    </Link>
  )
}
