import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const Product = ({ images, name, quantity, price }) => (
  <Flex justify={"space-between"} mt={"10px"}>
    <Box width={"70px"} height={"70px"} pos={"relative"}>
      <Image
        src={images[0]}
        alt={name}
        style={{ borderRadius: "2px" }}
        layout="fill"
        objectFit="cover"
      />
    </Box>
    <Flex direction={"column"} justify={"space-between"}>
      <Text fontSize={"14px"} fontWeight={"light"}>
        {name}
      </Text>
      <Text fontSize={"14px"} fontWeight={"light"}>
        cantidad: {quantity}
      </Text>
    </Flex>
    <Flex align={"end"}>${price}</Flex>
  </Flex>
);

export default function Summary({ children }) {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Text fontSize={"14px"} fontWeight={"light"} color={"gray.200"}>
        Productos:{" "}
        {cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      </Text>
      <Box mt={"15px"}>
        {cart.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </Box>
      <Box>{children}</Box>
    </>
  );
}
