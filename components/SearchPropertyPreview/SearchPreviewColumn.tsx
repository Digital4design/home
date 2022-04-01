import React from "react"

interface Props {
  label: string
  price: number
}

export default function SearchPreviewColumn({ label, price }: Props) {
  return (
    <div className="w-1/3">
      <span className="mb-1 block text-sm font-light text-gray-500">
        {label}
      </span>
      <span className="text-lg font-medium">£{price.toLocaleString()}</span>
    </div>
  )
}
