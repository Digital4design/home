import Image from "next/image"
import { useEffect } from "react"
import Swiper from "swiper"

// Our partners section for the home page, a carousel using swiperjs, should show partner logos tight to edge of screen with some overhang

export default function OurPartners() {
  useEffect(() => {
    // initialise swiper js
    const swiper = new Swiper(".partners", {
      loop: true,
      speed: 500,
      spaceBetween: 50,
      loopAdditionalSlides: 100,
      slidesOffsetBefore: -110,
      breakpoints: {
        280: {
          slidesPerView: 3,
        },
        860: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 6,
        },
        1400: {
          slidesPerView: 8,
        },
      },
    })
  })

  return (
    <section className="py-32">
      <h2 className="mb-16 text-center">Our Partners</h2>
      <div className="partners flex h-[80px] w-full items-center">
        <div className="swiper-wrapper h-[80px] w-full">
          {placeholders.map((partner) => (
            <div className="swiper-slide" key={partner.id}>
              <figure className="relative aspect-[16/9] w-[200px]">
                <Image
                  src={partner.url}
                  alt={partner.title}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={partner.url}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const placeholders = [
  {
    title: "test",
    id: 1,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 2,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 3,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 4,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 5,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 6,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 8,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 9,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 10,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 11,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 12,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 13,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 14,
    url: "https://via.placeholder.com/200x80",
  },
  {
    title: "test",
    id: 15,
    url: "https://via.placeholder.com/200x80",
  },
]
