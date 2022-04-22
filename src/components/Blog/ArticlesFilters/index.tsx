import { useRouter } from "next/router"
import { MouseEvent } from "react"
import FilterButton from "./FilterButton"
import FilterCategoryButton from "./FilterButton"
import FilterDropdown from "./FilterDropdown"

interface Props {
  hideCategories?: boolean
  categories?: Record<"category", string>[]
}

export default function ArticlesFilters({ hideCategories, categories }: Props) {
  const router = useRouter()

  const allCategories: string[] = []

  categories?.forEach(({ category }) => {
    if (allCategories.includes(category)) return false
    allCategories.push(category)
  })

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
    <div
      className={`text-brand-grey ${
        !hideCategories && "flex justify-end border-t py-6"
      }`}
    >
      {!hideCategories && (
        <div className="relative mr-8 inline">
          Category:{" "}
          <div className="group inline">
            <b className="cursor-default lowercase text-brand-grey-dark">
              {router.query.category ? router.query.category : "all"}
            </b>
            <FilterDropdown>
              <FilterButton onClick={setCategory} value="All" />
              {allCategories.map((categoryName) => (
                <FilterButton
                  key={categoryName}
                  onClick={setCategory}
                  value={categoryName}
                />
              ))}
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
