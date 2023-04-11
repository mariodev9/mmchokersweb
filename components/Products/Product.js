import React, { useContext } from "react";
import { Box, Flex, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";
import CartContext from "../../context/CartContext";
import { LikeIcon } from "../Icons";
import Link from "next/link";

export default function Product({
  images,
  price,
  name,
  category,
  popular,
  description,
  id,
}) {
  const { AddProductToCart } = useContext(CartContext);

  let productData = {
    images,
    price,
    name,
    category,
    popular,
    description,
    id,
  };

  return (
    <>
      <LinkBox as="article" cursor={"pointer"}>
        <Box display={"flex"} flexDirection={"column"} maxW={"250px"}>
          <Box width={"full"} height={"250px"} pos={"relative"}>
            <Image
              src={images[0]}
              alt={name}
              style={{ borderRadius: "10px" }}
              layout="fill"
              objectFit="cover"
            />
          </Box>

          <Link href={`/Producto/${id}`}>
            <LinkOverlay>
              <Text
                fontSize={{ base: "20px", tablet: "25px" }}
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
      </LinkBox>
    </>
  );
}
