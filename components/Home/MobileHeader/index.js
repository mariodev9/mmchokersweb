import {
  Box,
  HStack,
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SearchIcon } from "../../Icons";
import CollaresImage from "../../../public/images/CollaresImage.jpg";

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
        {/* BUSCADOR */}
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input
            placeholder="Buscar"
            variant="filled"
            _placeholder={{
              color: "#BABABA",
              fontSize: "14px",
            }}
            bg={"#f5f5f5"}
          />
        </InputGroup>

        {/* CATALOGO */}
        <Box m={"5vh 0px"}>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
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

        <LinkBox>
          <Box overflow={"hidden"} borderRadius={"20px"} cursor={"pointer"}>
            <Flex
              w={"full"}
              h={"30vh"}
              bgImage={"/images/CollaresImage.jpg"}
              bgRepeat={"no-repeat"}
              bgPosition={"center"}
              bgSize={"cover"}
              justify={"center"}
              align={"center"}
              transition="all 1s ease"
              overflow={"hidden"}
              _hover={{
                transform: "scale(1.1)",
              }}
            >
              <Link href={"/Collares"}>
                <LinkOverlay>
                  <Text fontSize={"26px"} color={"#fff"}>
                    Collares
                  </Text>
                </LinkOverlay>
              </Link>
            </Flex>
          </Box>
        </LinkBox>
      </Box>
    </>
  );
};
