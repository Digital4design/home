import { useEffect } from "react"
import Swiper, { Navigation, Pagination } from "swiper"
import { ChildrenProps } from "types"

export default function TestimonialsCarousel({ children }: ChildrenProps) {
  useEffect(() => {
    // initialise swiper js
    const swiper = new Swiper(".swiper", {
      // install modules
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      loop: false,
      speed: 500,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: { el: ".swiper-pagination" },
      breakpoints: {
        240: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        670: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    })
  }, [])

  return <div className=""></div>
}
