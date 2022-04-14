import { ChevronLeftIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import React from "react"

export default function BackButton() {
  const router = useRouter()

  return (
    <div
      className="container-sm flex cursor-pointer items-center text-[14px] font-medium text-brand-blue"
      onClick={() => router.back()}
    >
      <ChevronLeftIcon className="mr-1 h-4 w-4" /> Go back
    </div>
  )
}
