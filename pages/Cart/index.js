import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import CartProduct from "../../components/Products/CartProduct";
import CartButton from "../../components/Shared/Buttons/CartButton";

export default function Cart() {
  const router = useRouter();
  return (
    <div>
      <Box p={"15px 20px"}>
        <Flex justify={"space-between"} align="center" h="10vh">
          <Button onClick={() => router.back()}>Volver</Button>
          <Text>Carrito</Text>
          <CartButton />
        </Flex>

        <VStack>
          <CartProduct />
        </VStack>
      </Box>
    </div>
  );
}
