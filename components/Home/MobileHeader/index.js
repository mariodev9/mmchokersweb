import { Box, HStack, Flex } from "@chakra-ui/react";
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
    url: "/Pulseras",
  },
  {
    title: "Cadenas",
    url: "/Pulseras",
  },
  {
    title: "Pulseras",
    url: "/Pulseras",
  },
  {
    title: "Novedades",
    url: "/Pulseras",
  },
];

export const MobileHeader = () => {
  return (
    <>
      <Box display={{ base: "block", tablet: "none" }}>
        {/* CATALOGO */}
        <Box cursor={"grab"} m={"5vh 0px"}>
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {CategoryList.map((category) => (
              <SwiperSlide key={category.title}>
                <Flex
                  p={"5px 15px"}
                  _hover={{
                    bg: "yellow.100",
                  }}
                  borderRadius={"25px"}
                  fontWeight={600}
                  justify={"center"}
                >
                  <Link href={category.url}>{category.title}</Link>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};
