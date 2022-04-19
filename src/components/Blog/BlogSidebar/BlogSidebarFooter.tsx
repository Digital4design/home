import { InformationCircleIcon } from "@heroicons/react/outline"
import React from "react"

export default function BlogSidebarFooter() {
  return (
    <footer className="flex items-center justify-end py-6 text-sm text-gray-400">
      Find us on:
      <InformationCircleIcon className="mx-2 inline h-5 w-5" />
      <InformationCircleIcon className="inline h-5 w-5" />
    </footer>
  )
}
