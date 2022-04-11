import { GraphQLClient } from "graphql-request"

interface DatoRequest {
    query: string
    token: string
}

export function request({ query, token }: DatoRequest) {
  const client = new GraphQLClient("https://graphql.datocms.com", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  return client.request(query)
}