import React, { useEffect } from "react"
import Swiper, { Navigation, Pagination } from "swiper"
import { ChildrenProps } from "types"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function PropertyCarousel({ children }: ChildrenProps) {
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
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    })
  }, [])

  // children of this component should be PropertyPreview components.
  return (
    <div className="swiper h-[350px] w-full px-3">
      <div className="swiper-wrapper h-full w-full">{children}</div>
    </div>
  )
}
