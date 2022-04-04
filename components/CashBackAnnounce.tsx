import Link from "next/link"
import React, { ReactNode } from "react"

interface Props {
  title: string
  children?: ReactNode
  showBrowseButton?: boolean
}

export default function CashBackAnnounce({
  title,
  children,
  showBrowseButton,
}: Props) {
  return (
    <div className="mb-6 flex flex-col rounded bg-brand-green-light py-5 px-6">
      <h5 className="mb-6 text-center font-semibold text-brand-blue">
        {title}
      </h5>
      {children}
      {showBrowseButton && (
        <Link href="/properties">
          <a className="mx-auto mb-4 inline-flex h-12 items-center justify-center rounded border border-brand-blue px-8 font-bold text-brand-blue transition-colors duration-100 hover:bg-brand-blue hover:text-white hover:no-underline">
            Browse properties
          </a>
        </Link>
      )}
    </div>
  )
}
