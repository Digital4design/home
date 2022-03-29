import Star from "components/Testimonials/Rating/Star"

interface Props {
  rating?: number
}

/**
 * @description Star rating for individual testimonials in the testimonials slider on the home page
 * @param props.rating the star rating, should be from 0 to 5, default to 0 if nothing is provided. If the rating is below 0 it will be considered 0. If it is above 5 it will be considered 5
 * @returns 5 light blue stars - if there is a rating, the rating number provided will colour the same number of stars brand blue
 */

export default function Rating({ rating = 0 }: Props) {
  if (rating < 0) {
    rating = 0
  }

  if (rating > 5) {
    rating = 5
  }

  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="flex">
      {stars.map((number) =>
        number <= rating ? <Star active key={number} /> : <Star key={number} />
      )}
    </div>
  )
}
