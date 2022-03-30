import React, { useEffect } from "react"
import Swiper, { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { CarouselProps } from "types/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

/**
 * @property children - any JSX components with a .swiper-slide class as the main container. Ideally use the PropertyCarouselSlide component
 * @property options - an object with carousel options for screen breakpoints
 * @property options.screens - an object of breakpoints for mobile, tablet and desktop which give spacing and slides per view
 * @property options.screens.mobile | tablet | desktop - an object of properties to declare slides per view and spacing for mobile/tablet/desktop
 * @property options.screens.mobile | tablet | desktop.slidesPerView - the number of slides you'd like to show on mobile
 * @property options.screens.mobile | tablet | desktop.spaceBetween - the pixel amount of spacing you'd like to show on mobile i.e. 20
 * @returns a swipable carousel of property preview elements
 */

export const defaultOptions = {
  screens: {
    mobile: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    tablet: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    desktop: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
}

// types are defined in their own file within this same PropertyCarousel folder ./propTypes.d.ts
export default function PropertyCarousel({
  children,
  options = defaultOptions,
}: CarouselProps) {
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
        nextEl: ".property-button-next",
        prevEl: ".property-button-prev",
      },
      pagination: { el: ".swiper-pagination" },
      breakpoints: {
        240: { ...options.screens?.mobile },
        670: { ...options.screens?.tablet },
        1024: { ...options.screens?.desktop },
      },
    })
  }, [options])

  // children of this component should be PropertyPreview components.
  return (
    <>
      <div className="swiper flex h-[400px] w-full items-center px-3">
        <div className="swiper-wrapper h-[350px] w-full">{children}</div>
      </div>

      <div className="property-button-prev group absolute top-1/2 -left-2 cursor-pointer lg:-left-5">
        <ChevronLeftIcon className="h-14 w-14 text-brand-blue group-hover:text-brand-blue-dark" />
      </div>
      <div className="property-button-next group group absolute top-1/2 -right-2 cursor-pointer lg:-right-5">
        <ChevronRightIcon className="h-14 w-14 text-brand-blue group-hover:text-brand-blue-dark" />
      </div>
    </>
  )
}
