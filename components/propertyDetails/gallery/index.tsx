import { useState } from "react";
import { Pagination, Navigation, Thumbs, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Image from "next/image";

function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slide_img = [
    "https://www.taylorwimpey.co.uk/-/twdxmedia/images/shared/product/four-bedroom-homes/the-monro/twes_albany-grange_dunbar_monro.jfif?mw=1438&hash=CC692011314B408FAAC86ABB32E97000",
    "https://www.taylorwimpey.co.uk/-/twdxmedia/images/national/modules/article-hero/exteriors/twny_wynyard-manor_wynyard.jpg?mh=1200&la=en&h=1200&w=1800&mw=1800&hash=0D5885383DDDA0AB3ECF0814936ACCF0",
    "https://www.taylorwimpey.co.uk/-/twdxmedia/images/national/sales-and-marketing/house-types/the-coltham/taylor-wimpey-the-coltham-4-bed-home-01.jpg?mw=1438&hash=7766BABAED6A92F8A0E5975332B058BD",
    "https://www.taylorwimpey.co.uk/-/twdxmedia/images/national/sales-and-marketing/house-types/the-coltham/taylor-wimpey-the-coltham-4-bed-home-01.jpg?mw=1438&hash=7766BABAED6A92F8A0E5975332B058BD",
  ];

  return (
    <div className="relative">
      <Swiper
        pagination={{
          type: "bullets",
        }}
        navigation
        spaceBetween={20}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        slidesPerView={"auto"}
        centeredSlides
        className="product-images-slider rounded-tl rounded-tr"
        loop
        grabCursor
      >
        {slide_img.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <figure className="relative h-[600px]">
                <Image src={img} alt="" layout="fill" objectFit="cover" />
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {slide_img.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <figure className="relative mt-4 h-[150px]">
                <Image src={img} alt="" layout="fill" objectFit="cover" />
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Gallery;
