import {
  LibraryIcon,
  LocationMarkerIcon,
  MapIcon,
} from "@heroicons/react/outline"
import { PropertyPreviewProps } from "types/property"

export default function PropertyPreviewDetails({
  title,
  address,
  beds,
  shares,
}: PropertyPreviewProps) {
  return (
    <div className="relative py-4 px-6">
      <div className="absolute right-5 bottom-full rounded-t bg-white px-1 pt-2 text-sm text-brand-grey">
        <span className="text-brand-green">{shares}%</span> shares from
      </div>
      <h4 className="mb-2 text-base">{title}</h4>
      <span className="mb-2 flex items-center text-sm">
        <LocationMarkerIcon className="mr-4 h-4 w-4 text-brand-green" />
        {address}
      </span>
      <span className="flex items-center  text-sm">
        <LibraryIcon className="mr-4 h-4 w-4 text-brand-green" />
        {address}
      </span>
    </div>
  )
}
