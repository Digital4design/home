import { StarIcon } from "@heroicons/react/solid"

interface Props {
  active?: boolean
}

/**
 *
 * @param props.active if set as true, will fill the star colour to brand blue, otherwise it will default to false and show light blue
 * @returns a star to be used within the rating component. Renders light blue unless marked active
 */

export default function Star({ active = false }: Props) {
  const classes = active ? "text-brand-blue" : "text-brand-blue-light"

  return <StarIcon className={`mx-2 h-7 w-7 ${classes}`} />
}
