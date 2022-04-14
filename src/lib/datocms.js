import { GraphQLClient } from "graphql-request"

export function request({ query, variables, endpoint }) {
  const ep = endpoint
    ? `https://graphql.datocms.com/environments/${endpoint}`
    : "https://graphql.datocms.com"
  const client = new GraphQLClient(ep, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATO_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}
