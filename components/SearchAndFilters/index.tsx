import { ChevronDownIcon } from "@heroicons/react/outline"

export default function SearchAndFilters() {
  return (
    <div className="mx-auto h-20 w-full rounded bg-brand-blue shadow-lg">
      <div className="flex h-full w-1/2 items-center p-4">
        <input
          type="text"
          className="h-full w-full rounded pl-12"
          placeholder="e.g. city, postcode..."
        />
        <div className="border-r-2 border-white px-8 text-left text-white">
          <span className="block text-xs">Type of property</span>
          <span className="flex items-center">
            Development <ChevronDownIcon className="ml-2 h-5 w-5 text-white" />
          </span>
        </div>
      </div>
    </div>
  )
}
