import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
// import Image from "next/image";
import React from "react";

export default function Product({
  image,
  price,
  name,
  category,
  popular,
  description,
  id,
}) {
  return (
    <>
      <LinkBox>
        <Flex direction={"column"} maxW={"200px"}>
          <Flex
            bgImage={image}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            bgSize={"cover"}
            width={"full"}
            height={"220px"}
            borderRadius={"20px"}
          ></Flex>
          <LinkOverlay href={`/Producto/${id}`}>
            <Text
              fontSize={{ base: "18px", tablet: "20px" }}
              fontWeight={500}
              color={"gray.100"}
              mt={"10px"}
            >
              {name}
            </Text>
          </LinkOverlay>

          <Text
            fontSize={{ base: "20px", tablet: "25px" }}
            fontWeight={600}
            color={"gray.200"}
          >
            ${price}
          </Text>

          <Button variant={"primary"}>Comprar</Button>
        </Flex>
      </LinkBox>
    </>
  );
}
