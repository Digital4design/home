import React from "react"

interface Props {
  hideCategories?: boolean
}

export default function ArticlesFilters({ hideCategories }: Props) {
  return (
    <div className="flex justify-end border-t py-6 text-brand-grey">
      {!hideCategories && (
        <span className="mr-8">
          Categories: <b className="text-brand-grey-dark">all</b>
        </span>
      )}
      <span>
        Sort by: <b className="text-brand-grey-dark">newest</b>
      </span>
    </div>
  )
}
