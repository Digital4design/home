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
  ];

  const styles = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  };

  return (
    <div className="relative">
      <Swiper
        pagination={{
          type: "bullets",
        }}
        navigation
        style={styles}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        slidesPerView={"auto"}
        centeredSlides
        className="rounded-tl rounded-tr"
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
      <div className="mt-2">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {slide_img.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <figure className="relative h-[150px]">
                  <Image src={img} alt="" layout="fill" objectFit="cover" />
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;
