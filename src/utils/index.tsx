export const capitaliseWord = (str: string) =>
  str.substring(1, 0).toUpperCase() + str.substring(1)

export const replaceSpacesWithHyphens = (str: string) => str.replace(" ", "-")

export const replaceHyphensWithSpaces = (str: string) => str.replace("-", " ")

export const createArrayBetweenTwoNumbers = (start: number, end: number) =>
  Array(end - start + 1)
    .fill(null)
    .map((_, idx) => start + idx)

export const getDaysUntilEndDate = (date: string) => {
  const date1 = new Date(date)
  const now = new Date()
  const difference = date1.getTime() - now.getTime()
  const days = Math.ceil(difference / (1000 * 3600 * 24))

  return days
}
