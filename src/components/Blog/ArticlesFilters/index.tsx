import { useRouter } from "next/router"
import { MouseEvent } from "react"

interface Props {
  hideCategories?: boolean
}

export default function ArticlesFilters({ hideCategories }: Props) {
  const router = useRouter()

  const setCategory = (e: MouseEvent) => {
    const el = e.target as HTMLElement
    const category: string = el.innerText

    category !== "All"
      ? router.push(
          {
            query: {
              ...router.query,
              category,
              page: 1,
            },
          },
          undefined,
          { scroll: false }
        )
      : router.push(
          {
            query: {
              ...router.query,
              category: "",
              page: 1,
            },
          },
          undefined,
          { scroll: false }
        )
  }

  const setSortBy = (e: MouseEvent) => {
    const el = e.target as HTMLButtonElement
    const value = el.value

    router.push(
      {
        query: {
          ...router.query,
          sortBy: value,
        },
      },
      undefined,
      { scroll: false }
    )
  }

  return (
    <div className="flex justify-end border-t py-6 text-brand-grey">
      {!hideCategories && (
        <div className="relative mr-8 inline">
          Category:{" "}
          <div className="group inline">
            <b className="cursor-default lowercase text-brand-grey-dark">
              {router.query.category ? router.query.category : "all"}
            </b>
            <div className="absolute top-full z-[1] hidden w-full min-w-fit rounded-sm border bg-white py-4 group-hover:block">
              <div
                className="cursor-pointer py-2 px-4 font-normal hover:bg-brand-grey-light"
                onClick={setCategory}
              >
                All
              </div>
              <div
                className="cursor-pointer py-2 px-4 font-normal hover:bg-brand-grey-light"
                onClick={setCategory}
              >
                Announcements
              </div>
              <div
                className="cursor-pointer py-2 px-4 font-normal hover:bg-brand-grey-light"
                onClick={setCategory}
              >
                News
              </div>
              <div
                className="cursor-pointer py-2 px-4 font-normal hover:bg-brand-grey-light"
                onClick={setCategory}
              >
                Testing
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="inline">
        Sort by:{" "}
        <button
          className="font-bold text-brand-grey-dark"
          value="DESC"
          onClick={setSortBy}
        >
          newest
        </button>{" "}
        -{" "}
        <button
          className="text-brand-dark-grey font-bold"
          value="ASC"
          onClick={setSortBy}
        >
          oldest
        </button>
      </div>
    </div>
  )
}
