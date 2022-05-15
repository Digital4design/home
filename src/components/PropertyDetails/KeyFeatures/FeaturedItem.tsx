import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
  value: string
}

function FeaturedItem({ children, value }: Props) {
  return (
    <div className="shadow-soft flex h-full w-full flex-col items-center justify-start rounded bg-white p-2 pt-6 text-center text-sm">
      <span className="mb-1 text-lg font-bold text-brand-grey-dark">
        {children}
      </span>
      <span>{value}</span>
    </div>
  )
}

export default FeaturedItem
