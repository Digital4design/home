import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { useEffect } from "react"
import Swiper, { Navigation, Pagination } from "swiper"
import Rating from "./Rating"

export default function Testimonials() {
  useEffect(() => {
    // initialise swiper js
    const swiper = new Swiper(".testimonials", {
      modules: [Navigation, Pagination],
      speed: 500,
      loop: true,
      spaceBetween: 10,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".testimonials-next",
        prevEl: ".testimonials-prev",
      },
      pagination: {
        el: ".testimonials-pagination",
        type: "bullets",
        clickable: true,
      },
    })
  })

  return (
    <section className="mt-[100px] py-64">
      <h2 className="mb-16 text-center">What our customers say</h2>
      <div className="testimonials relative h-[300px] w-full">
        <div className="swiper-wrapper h-full w-full">
          {placeholders.map((testimonial) => (
            <div className="swiper-slide testimonial" key={testimonial.id}>
              <div className="mx-auto w-[600px] max-w-full px-4 lg:px-0">
                <div className="flex justify-center">
                  <Rating rating={testimonial.rating} />
                </div>
                <p className=" mt-6 mb-14 text-center leading-7 text-stone-400 lg:text-lg lg:leading-[1.8]">
                  {testimonial.review}
                </p>
                <span className="mb-2 block text-center font-bold md:mb-8">
                  {testimonial.name}
                </span>
                <span className="block text-center text-sm">
                  {testimonial.company}, {testimonial.date.toDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-pagination mt-8 text-center lg:mt-28"></div>

        <div className="testimonials-prev absolute top-1/2 left-4 z-999 hidden h-10 w-10 cursor-pointer md:left-1/4 md:-ml-32 md:block lg:-ml-32 xl:-ml-16 2xl:-ml-10">
          <ChevronLeftIcon />
        </div>
        <div className="testimonials-next absolute top-1/2 right-4 z-999 hidden h-10 w-10 cursor-pointer md:right-1/4 md:-mr-32 md:block lg:-mr-32 xl:-mr-16 2xl:-mr-10">
          <ChevronRightIcon />
        </div>
      </div>
    </section>
  )
}

export const placeholders = [
  {
    id: 1,
    rating: 4,
    name: "Example Name",
    company: "Company Name",
    date: new Date(),
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae laborum architecto ratione sit quae nostrum quod repellendus, recusandae fuga harum, quo rerum, odio ipsa aliquid vel ex debitis molestias exercitationem.",
  },
  {
    id: 2,
    rating: 3,
    name: "Example Name",
    company: "Company Name",
    date: new Date(),
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae laborum architecto ratione sit quae nostrum quod repellendus.",
  },
  {
    id: 3,
    rating: 5,
    name: "Example Name",
    company: "Company Name",
    date: new Date(),
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae laborum architecto ratione sit quae nostrum quod repellendus.",
  },
  {
    id: 4,
    rating: 3,
    name: "Example Name",
    company: "Company Name",
    date: new Date(),
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae laborum architecto ratione sit quae nostrum quod repellendus.",
  },
]
