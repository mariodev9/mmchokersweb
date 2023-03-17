import React, { useContext } from "react";
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
      <LinkBox as="article">
        <Flex direction={"column"} maxW={"250px"}>
          <Flex
            bgImage={images[0]}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            bgSize={"cover"}
            width={"full"}
            height={"240px"}
            borderRadius={"15px"}
          ></Flex>
          <Box mt={"10px"}>
            <Link href={`/Producto/${id}`}>
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
              fontSize={{ base: "20px", tablet: "25px" }}
              fontWeight={600}
              color={"gray.200"}
            >
              ${price}
            </Text>
          </Box>
        </Flex>
      </LinkBox>
    </>
  );
}
