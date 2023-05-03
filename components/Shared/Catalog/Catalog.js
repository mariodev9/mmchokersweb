import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CategoryList = [
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
    title: "Billeteras",
    url: "/Billeteras",
  },
];

export default function Catalog() {
  return (
    <Box m={"5vh 0px"} pl={"30px"}>
      <Text my={"5px"} fontSize={"25px"} fontWeight={600}>
        Catalogo
      </Text>
      <Swiper spaceBetween={10} slidesPerView={2.7}>
        {CategoryList.map((category) => (
          <SwiperSlide key={category.title}>
            <Flex
              p={"5px"}
              bg="#000"
              color={"#fff"}
              borderRadius={"2px"}
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
