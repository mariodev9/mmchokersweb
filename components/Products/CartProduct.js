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
        w={"120px"}
        h={"120px"}
        borderRadius={"20px"}
      ></Box>
      <Box>
        <Text fontSize={"20px"}>{name}</Text>
        <Text>${price}</Text>
      </Box>
      <Flex
        direction={"column"}
        h={"120px"}
        justify={"space-around"}
        align={"center"}
        border={"2px solid red"}
      >
        <Button
          onClick={() =>
            AddProductToCart({ name, price, images, id, quantity })
          }
        >
          +
        </Button>
        <Text>{quantity}</Text>
        <Button onClick={() => RemoveProductFromCart(id)}>-</Button>
      </Flex>
    </Flex>
  );
}
