import { StarIcon } from "@heroicons/react/solid"

export default function Star({ active = false }) {
  const classes = active ? "text-brand-blue" : "text-brand-blue-light"

  return <StarIcon className={`mx-2 h-7 w-7 ${classes}`} />
}
