import { HeartIcon, ReplyIcon, ShareIcon } from "@heroicons/react/outline"
import Link from "next/link"
import React from "react"
import RegisterInterestButton from "./RegisterInterestButton"

export default function AreYouInterested() {
  return (
    <div className="mb-6 w-full rounded bg-white px-6 py-5 shadow-lg">
      <header className="flex justify-between">
        <h5 className="mb-4 text-[13px] font-medium text-brand-grey-dark">
          Are you interested?
        </h5>
        <div className="share-links flex">
          <ReplyIcon className="mr-4 h-4 w-4 text-brand-green" />
          <HeartIcon className="h-4 w-4 text-brand-green" />
        </div>
      </header>
      <RegisterInterestButton full />
      <a href="tel:00000000000" className="button-outline mt-4 block w-full">
        Call us for more information
      </a>
      <Link href="/developers/test">
        <a className="button-white mt-4">See more from this developer</a>
      </Link>
    </div>
  )
}
