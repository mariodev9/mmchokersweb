import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { Layout } from "../../components/Layout/Layout";
import CartProduct from "../../components/Products/CartProduct";
import CartContext from "../../context/CartContext";

export default function Cart() {
  const router = useRouter();

  const { cart } = useContext(CartContext);

  return (
    <Layout>
      <Box layerStyle={"layoutWraper"}>
        <Text variant={"sectionTitle"}>Carrito de compras</Text>
        {cart.length === 0 && (
          <Flex h={"70vh"} justify={"center"} align={"center"}>
            <Text color={"#555"}>Tu carrito esta vacio!</Text>
          </Flex>
        )}
        <VStack spacing={"35px"} pt={"30px"} border={"1px solid red"}>
          {cart.map((item) => (
            <CartProduct key={item.id} {...item} />
          ))}
        </VStack>
        asdasdasd
      </Box>
    </Layout>
  );
}
