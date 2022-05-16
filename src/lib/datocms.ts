import { GraphQLClient } from "graphql-request"
import { GraphQLResponse } from "graphql-request/dist/types"

interface Props {
  query: string
  variables?: string
  endpoint: string | undefined
}

export function request({
  query,
  endpoint,
  variables,
}: Props): Promise<GraphQLResponse<{}>> {
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
