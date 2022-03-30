import { SearchIcon } from "@heroicons/react/outline"
import Link from "next/link"
import React from "react"

export default function SearchButton() {
  return (
    <div className="w-auto pl-4">
      <Link href="/properties">
        <a className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand-green transition-all duration-100 ease-in-out hover:bg-brand-green-medium active:bg-brand-green-dark">
          <SearchIcon className="h-5 w-5 text-white" />
        </a>
      </Link>
    </div>
  )
}
