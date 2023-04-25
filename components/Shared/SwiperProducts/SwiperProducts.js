import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import Product from "../../Products/Product";

function SwiperProducts({ products }) {
  return (
    <Swiper
      spaceBetween={10}
      style={{
        paddingLeft: "30px",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1.5,
        },
        450: {
          slidesPerView: 2.5,
        },
        720: {
          slidesPerView: 3.5,
        },
        960: {
          slidesPerView: 4.5,
        },
        1200: {
          slidesPerView: 5.5,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.name}>
          <Product {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperProducts;
