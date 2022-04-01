export const capitaliseWord = (str: string) =>
  str.substring(1, 0).toUpperCase() + str.substring(1)

export const replaceSpacesWithHyphens = (str: string) => str.replace(" ", "-")

export const replaceHyphensWithSpaces = (str: string) => str.replace("-", " ")
