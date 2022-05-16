import { useCallback, useEffect, useRef, useState } from "react"
import { Pagination, Navigation, Thumbs, FreeMode } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import Image from "next/image"
import { GalleryProperties } from "types/property"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

interface Props {
  images: GalleryProperties[]
}

function Gallery({ images }: Props) {
  console.log(images)
  const [swiper, setSwiper] = useState<any>(null)

  return (
    <div className="w-full">
      <div className="relative">
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={{
            type: "bullets",
          }}
          spaceBetween={20}
          thumbs={{ swiper: swiper }}
          modules={[FreeMode, Navigation, Pagination, Thumbs]}
          slidesPerView={"auto"}
          centeredSlides
          className="product-images-slider relative rounded-tl rounded-tr"
          loop
          grabCursor
        >
          {images.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <figure className="relative h-[500px]">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    layout="fill"
                    objectFit="cover"
                    blurDataURL={img.url}
                    placeholder="blur"
                  />
                </figure>
              </SwiperSlide>
            )
          })}

          {/* <div className="navigation absolute inset-0 z-[999] flex items-center justify-between px-4"> */}
          <button className="prev group absolute left-4 top-1/2 z-[10] cursor-pointer rounded-sm bg-white p-1 shadow-lg transition-colors duration-150 hover:bg-brand-blue">
            <ChevronLeftIcon className="pointer-events-none h-7 w-7 text-brand-grey-dark transition-colors duration-150 group-hover:text-white" />
          </button>
          <button className="next group absolute right-4 top-1/2 z-[10] cursor-pointer rounded-sm bg-white p-1 shadow-lg transition-colors duration-150 hover:bg-brand-blue hover:text-white">
            <ChevronRightIcon className="pointer-events-none h-7 w-7 text-brand-grey-dark transition-colors duration-150 group-hover:text-white" />
          </button>
          {/* </div> */}
        </Swiper>
      </div>

      <div className="thumbnails">
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="swiper-thumbs mt-4 w-full max-w-3xl"
        >
          {images.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <figure className="relative h-[60px] lg:h-[120px]">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    layout="fill"
                    objectFit="cover"
                    blurDataURL={img.url}
                    placeholder="blur"
                  />
                </figure>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Gallery
