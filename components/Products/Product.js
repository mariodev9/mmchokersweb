import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
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
      <Flex direction={"column"} maxW={"200px"}>
        <Image
          src={image}
          width={"180px"}
          height={"220px"}
          borderRadius={"20px"}
        />
        <Text
          fontSize={{ base: "16px", tablet: "20px" }}
          fontWeight={600}
          color={"gray.100"}
        >
          {name}
        </Text>
        <Text
          fontSize={{ base: "20px", tablet: "25px" }}
          fontWeight={"medium"}
          color={"gray.200"}
        >
          ${price}
        </Text>

        <Button variant={"primary"}>Agregar al carrito</Button>
      </Flex>
    </>
  );
}
