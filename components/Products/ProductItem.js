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
            style={{ borderRadius: "2px" }}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box mt={"10px"}>
          <Link href={`/Producto/${id}`} passHref>
            <LinkOverlay>
              {/* <Box
                w={"100px"}
                display={"inline-block"}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
              > */}
              <Text
                textTransform="uppercase"
                fontSize={{ base: "16px", tablet: "25px" }}
                fontWeight={"light"}
                color={"#333"}
              >
                {name}
              </Text>
              {/* </Box> */}
            </LinkOverlay>
          </Link>

          <Text
            fontSize={{ base: "15px", tablet: "18px" }}
            fontWeight={500}
            color={"#000"}
          >
            ${price}
          </Text>
        </Box>
      </Flex>
    </LinkBox>
  );
}
