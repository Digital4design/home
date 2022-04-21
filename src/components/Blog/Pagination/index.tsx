import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import { createArrayBetweenTwoNumbers } from "utils"
import PaginationButton from "./PaginationButton"
import PaginationNumber from "./PaginationNumber"

interface Props {
  page: number
  totalArticles: number
}

/**
 *
 * @param props.page the current page number
 * @param props.totalArticles the total count of articles that exist in database for given results
 * @returns full pagination showing 5 articles at a time
 */

// Pagination for the Blog home page where there are 5 articles shown at the bottom
export default function Pagination({ page, totalArticles }: Props) {
  const router = useRouter()

  // Get number of pages required. We will round up even if the decimal is 1.01 or 1.1 etc as that means there are more articles
  const numOfPages = Math.ceil(totalArticles / 5)

  // Create an array of all of the numbers between 1 and the total number of pages, these will be used to render pagination
  const pages = createArrayBetweenTwoNumbers(1, numOfPages)

  // boolean variables to check if it's first or last page. Pagination is going to be called on each server side request
  // does not need to be in state
  const isFirstPage: boolean = page <= 1
  const isLastPage: boolean = page >= numOfPages

  // Handle the pagination next button. If the page is more than or equal to total number of pages, do nothing
  // On the button itself we will set it disabled when the page is more than or equal to the total number also
  // push to the next page and do not restore scroll
  const handleNext = () => {
    if (isLastPage) return false
    router.push(
      {
        pathname: router.pathname,
        query: { page: page + 1 },
      },
      undefined,
      { scroll: false }
    )
  }

  // Handle the pagination previous button. If the page is less than or equal to 1, do nothing
  // On the button itself we will set it disabled when the page is less than or equal to 1 also
  // push to the orevious page and do not restore scroll
  const handlePrev = () => {
    if (isFirstPage) return false
    router.push(
      {
        pathname: router.pathname,
        query: { page: page - 1 },
      },
      undefined,
      { scroll: false }
    )
  }

  return (
    <div className="flex items-center justify-center py-4">
      <PaginationButton disabled={isFirstPage} onClick={handlePrev} />
      <div className="mx-4">
        {pages.map((num) => (
          <PaginationNumber isActivePage={page === num} value={num} key={num} />
        ))}
      </div>
      <PaginationButton disabled={isLastPage} onClick={handleNext} isNext />
    </div>
  )
}
