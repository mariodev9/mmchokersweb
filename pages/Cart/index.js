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
        <Flex w={"full"} direction={{ base: "column", tablet: "row" }} gap={5}>
          <VStack w={"full"} spacing={"35px"} pt={"30px"}>
            {cart.map((item) => (
              <CartProduct key={item.id} {...item} />
            ))}
          </VStack>
          <Flex direction={"column"} gap={3}>
            <Flex
              direction={"column"}
              gap={2}
              w={{ base: "full", tablet: "60%" }}
              bg={"black.100"}
              color={"#fff"}
              borderRadius={"15px"}
              p={"10px 16px"}
            >
              <Flex justify={"space-between"}>
                <Text>Sub Total</Text>
                <Text>$3000</Text>
              </Flex>
              <Flex justify={"space-between"}>
                <Text>Envio</Text>
                <Text>$3000</Text>
              </Flex>
              <Flex justify={"space-between"}>
                <Text>Total</Text>
                <Text color={"yellow.100"}>$7500</Text>
              </Flex>
            </Flex>

            <Button
              onClick={() =>
                router.push(
                  "https://api.whatsapp.com/send/?phone=2494600003&Realizar%20compra,%20asdasd&type=phone_number&app_absent=0"
                )
              }
              variant={"primary"}
              mb={"10px"}
              fontSize={"20px"}
            >
              Finalizar compra
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
