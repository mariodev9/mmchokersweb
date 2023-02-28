import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import CartProduct from "../../components/Products/CartProduct";
import CartButton from "../../components/Shared/Buttons/CartButton";
import CartContext from "../../context/CartContext";

export default function Cart() {
  const router = useRouter();

  const { cart } = useContext(CartContext);

  return (
    <div>
      <Box p={"15px 20px"}>
        <Flex justify={"space-between"} align="center" h="10vh">
          <Link href={"/"}>Volver</Link>
          <Text>Carrito</Text>
          <CartButton />
        </Flex>

        <VStack>
          {cart.map((item) => (
            <CartProduct key={item.id} {...item} />
          ))}
        </VStack>
      </Box>
    </div>
  );
}
