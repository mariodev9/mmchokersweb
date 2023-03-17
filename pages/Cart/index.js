import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { Layout } from "../../components/Layout/Layout";
import CartProduct from "../../components/Products/CartProduct";
import CartButton from "../../components/Shared/Buttons/CartButton";
import CartContext from "../../context/CartContext";

export default function Cart() {
  const router = useRouter();

  const { cart } = useContext(CartContext);

  return (
    <Layout>
      <VStack pt={"15vh"}>
        {cart.map((item) => (
          <CartProduct key={item.id} {...item} />
        ))}
      </VStack>
    </Layout>
  );
}
