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
        borderRadius={"20px"}
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
        border={"2px dashed"}
        borderColor={"gray.100"}
        borderRadius={"15px"}
        w={"20%"}
      >
        <Button
          bg={"none"}
          onClick={() =>
            AddProductToCart({ name, price, images, id, quantity })
          }
        >
          +
        </Button>
        <Text>{quantity}</Text>
        <Button bg={"none"} onClick={() => RemoveProductFromCart(id)}>
          -
        </Button>
      </Flex>
    </Flex>
  );
}
