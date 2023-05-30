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

export default function ProductItem({ images, price, name, id, index }) {
  return (
    <LinkBox w={"100%"} as={"article"}>
      <Flex direction={"column"} maxW={"350px"} mb={"20px"}>
        <Box
          width={"full"}
          height={{ base: "180px", md: "320px" }}
          pos={"relative"}
        >
          <Image
            priority={index}
            src={images[0]}
            alt={name}
            style={{ borderRadius: "2px" }}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box mt={"10px"}>
          <Link href={`/Producto/${id}`} passHref>
            <LinkOverlay>
              <Text
                as={"h3"}
                fontSize={{ base: "1rem", tablet: "1.4rem" }}
                fontWeight={500}
              >
                {name}
              </Text>
              {/* </Box> */}
            </LinkOverlay>
          </Link>

          <Text
            fontSize={{ base: "0.9rem", tablet: "1.4rem" }}
            fontWeight={600}
          >
            $ {price}
          </Text>
        </Box>
      </Flex>
    </LinkBox>
  );
}
