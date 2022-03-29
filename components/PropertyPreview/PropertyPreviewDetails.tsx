import { LibraryIcon, LocationMarkerIcon } from "@heroicons/react/outline"
import { v4 as uuidv4 } from "uuid"
import ReactTooltip from "react-tooltip"
import { PropertyPreviewProps } from "types/property"
import { useEffect, useState } from "react"

/**
 *
 * @param props.title the property title
 * @param props.address the property address
 * @param props.beds the number of beds the property has
 * @param props.shares the number of percentage shares available
 * @param props.price the property price
 * @param props.tooltip the property information tooltip text
 * @returns the details area of the property preview element
 */

export default function PropertyPreviewDetails({
  title,
  address,
  beds,
  shares,
  price,
  tooltip,
}: PropertyPreviewProps) {
  const id = uuidv4()

  const [isMounted, setIsMounted] = useState(false) // Need this for the react-tooltip

  useEffect(() => {
    if (!isMounted) {
      return setIsMounted(true)
    }

    ReactTooltip.rebuild()
  }, [isMounted])

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
        {beds}
      </span>
      <div className="text-md absolute bottom-3 right-5 flex items-center text-brand-blue">
        <strong>£{price}</strong>{" "}
        <div data-tip data-for={id}>
          <div className="text-brand-dark-blue ml-2 flex rounded-[4px] bg-brand-blue-light px-[7px] text-xs font-bold">
            i
          </div>
        </div>
        <ReactTooltip
          id={id}
          effect="solid"
          place="left"
          backgroundColor="hsl(199, 100%, 24%)"
        >
          {tooltip}
        </ReactTooltip>
      </div>
    </div>
  )
}
