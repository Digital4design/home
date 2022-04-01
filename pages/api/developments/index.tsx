import { NextApiRequest, NextApiResponse } from "next"
import { request } from "../../../lib/datocms"

// Set the query for pulling all developments and the properties we need (this is not accurate data as of 01/04/2022)
const DEVELOPMENTS_QUERY = `query Properties {
  allDevelopments {
    id
    additionalImages {
      alt
      height
      id
      url
      width
    }
    features
    currency
    furnishedType
    mainImage {
      alt
      height
      id
      width
      url
      blurUpThumb
      blurhash
    }
    price
    paymentFrequency
    numberOfBedrooms
    numberOfBathrooms
    propertyTitle
    propertyType
    showAdditionalImages
    slug
  }
}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { allDevelopments } = await request({
      query: DEVELOPMENTS_QUERY,
      token: process.env.DATO_API_TOKEN,
    })

    res.status(200).json({ allDevelopments })
  }

  res.end()
}
