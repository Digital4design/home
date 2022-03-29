import Star from "components/Testimonials/Rating/Star"

export default function Rating({ rating = 0 }) {
  if (rating < 0 || rating > 5) {
    rating = 0
  }

  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="flex">
      {stars.map((number) => (number <= rating ? <Star active /> : <Star />))}
    </div>
  )
}
