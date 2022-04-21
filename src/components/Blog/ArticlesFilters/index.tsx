import { useRouter } from "next/router"
import { MouseEvent } from "react"
import FilterButton from "./FilterButton"
import FilterCategoryButton from "./FilterButton"
import FilterDropdown from "./FilterDropdown"

interface Props {
  hideCategories?: boolean
}

export default function ArticlesFilters({ hideCategories }: Props) {
  const router = useRouter()

  const setCategory = (e: MouseEvent) => {
    const el = e.target as HTMLButtonElement
    const category: string = el.value

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
            <FilterDropdown>
              <FilterButton onClick={setCategory} value="All" />
              <FilterButton onClick={setCategory} value="Announcements" />
              <FilterButton onClick={setCategory} value="News" />
              <FilterButton onClick={setCategory} value="Testing" />
            </FilterDropdown>
          </div>
        </div>
      )}
      <div className="relative inline">
        Sort by:{" "}
        <div className="group inline">
          <b className="cursor-default lowercase text-brand-grey-dark">
            {router.query.sortBy
              ? router.query.sortBy === "DESC"
                ? "newest"
                : "oldest"
              : "newest"}
          </b>
          <FilterDropdown>
            <FilterButton onClick={setSortBy} value="DESC" text="Newest" />
            <FilterButton onClick={setSortBy} value="ASC" text="Oldest" />
          </FilterDropdown>
        </div>
      </div>
    </div>
  )
}
