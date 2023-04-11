import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ images, price, name, id }) {
  return (
    <LinkBox w={"100%"}>
      <Flex direction={"column"} maxW={"250px"}>
        <Box
          width={"full"}
          height={{ base: "180px", md: "220px" }}
          pos={"relative"}
        >
          <Image
            src={images[0]}
            alt={name}
            style={{ borderRadius: "18px" }}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box mt={"10px"}>
          <Link href={`/Producto/${id}`} passHref>
            <LinkOverlay>
              <Text
                fontSize={{ base: "18px", tablet: "25px" }}
                fontWeight={500}
                color={"#000"}
              >
                {name}
              </Text>
            </LinkOverlay>
          </Link>

          <Text
            fontSize={{ base: "15px", tablet: "18px" }}
            fontWeight={600}
            color={"#000"}
          >
            ${price}
          </Text>
        </Box>
      </Flex>
    </LinkBox>
  );
}
