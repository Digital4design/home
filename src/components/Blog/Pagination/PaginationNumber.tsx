import { useRouter } from "next/router"

interface Props {
  isActivePage: boolean
  value: number
}

export default function PaginationNumber({ isActivePage, value }: Props) {
  const router = useRouter()

  return (
    <button
      className={`mx-1 w-9 cursor-pointer rounded-sm py-2 text-sm hover:underline ${
        isActivePage && "bg-brand-blue text-white"
      }`}
      onClick={() => {
        router.push(
          {
            pathname: router.pathname,
            query: { page: value },
          },
          undefined,
          { scroll: false }
        )
      }}
    >
      {value}
    </button>
  )
}
