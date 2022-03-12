import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Gallery() {
  SwiperCore.use([EffectCoverflow, Pagination]);

  const slide_img = [
    "https://www.taylorwimpey.co.uk/-/twdxmedia/images/shared/product/four-bedroom-homes/the-monro/twes_albany-grange_dunbar_monro.jfif?mw=1438&hash=CC692011314B408FAAC86ABB32E97000",
    "https://www.taylorwimpey.co.uk/-/twdxmedia/images/national/modules/article-hero/exteriors/twny_wynyard-manor_wynyard.jpg?mh=1200&la=en&h=1200&w=1800&mw=1800&hash=0D5885383DDDA0AB3ECF0814936ACCF0",
  ];
  return (
    <div className="relative">
      <Swiper
        slidesPerView={"auto"}
        pagination={true}
        className="h-[600px] rounded-tl rounded-tr"
        loop={true}
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Gallery;
