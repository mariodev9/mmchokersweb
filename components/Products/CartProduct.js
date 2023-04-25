import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

export default function CartProduct({ name, price, images, id, quantity }) {
  const { RemoveProductFromCart, AddProductToCart } = useContext(CartContext);

  return (
    <Flex w={"100%"} gap={10} justify={"space-between"}>
      <Box
        bgImage={images[0]}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgSize={"cover"}
        w={"140px"}
        h={"100px"}
        borderRadius={"2px"}
      />
      <Box w={"40%"}>
        <Text fontSize={{ base: "16px", tablet: "20px" }}>{name}</Text>
        <Text fontWeight={500} fontSize={{ base: "14px", tablet: "20px" }}>
          ${price}
        </Text>
      </Box>
      <Flex
        direction={"column"}
        h={"full"}
        justify={"space-around"}
        align={"center"}
        borderColor={"gray.100"}
        borderRadius={"2px"}
        w={"20%"}
      >
        <Button
          bg={"#000"}
          color={"#fff"}
          _hover={{ bg: "yellow.100", color: "#000" }}
          onClick={() =>
            AddProductToCart({ name, price, images, id, quantity })
          }
        >
          +
        </Button>
        <Text>{quantity}</Text>
        <Button
          bg={"#000"}
          color={"#fff"}
          _hover={{ bg: "yellow.100", color: "#000" }}
          onClick={() => RemoveProductFromCart(id)}
        >
          -
        </Button>
      </Flex>
    </Flex>
  );
}
