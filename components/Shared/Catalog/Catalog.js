import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CategoryList = [
  //   {
  //     title: "Ultima colección",
  //     url: "/Pulseras",
  //   },
  {
    title: "Collares",
    url: "/Collares",
  },
  {
    title: "Cadenas",
    url: "/Cadenas",
  },
  {
    title: "Pulseras",
    url: "/Pulseras",
  },
  {
    title: "Novedades",
    url: "/Novedades",
  },
  {
    title: "Para niños",
    url: "/Novedades",
  },
];

export default function Catalog() {
  return (
    <Box m={"5vh 0px"}>
      <Swiper
        spaceBetween={10}
        slidesPerView={2.5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {CategoryList.map((category) => (
          <SwiperSlide key={category.title}>
            <Flex
              p={"8px 12px"}
              bg="#000"
              color={"#fff"}
              borderRadius={"15px"}
              fontWeight={600}
              justify={"center"}
              _hover={{
                bg: "#F5F5F5",
                color: "#000",
              }}
            >
              <Link href={category.url}>{category.title}</Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
