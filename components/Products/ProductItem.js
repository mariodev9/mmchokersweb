import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ProductItem({
  images,
  price,
  name,
  category,
  popular,
  description,
  id,
}) {
  return (
    <LinkBox w={"100%"}>
      <Flex direction={"column"} maxW={"250px"}>
        <Flex
          bgImage={images[0]}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgSize={"cover"}
          width={"full"}
          height={{ base: "180px", md: "220px" }}
          borderRadius={"18px"}
        ></Flex>
        <Box mt={"10px"}>
          <Link href={`/Producto/${id}`} passHref>
            <LinkOverlay>
              <Text
                fontSize={{ base: "15px", tablet: "18px" }}
                fontWeight={500}
                color={"gray.200"}
              >
                {name}
              </Text>
            </LinkOverlay>
          </Link>

          <Text
            fontSize={{ base: "18px", tablet: "25px" }}
            fontWeight={600}
            color={"gray.200"}
          >
            ${price}
          </Text>
        </Box>
      </Flex>
    </LinkBox>
  );
}
