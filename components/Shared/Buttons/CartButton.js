import {
  Button,
  Flex,
  LinkBox,
  LinkOverlay,
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  DrawerHeader,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";
import { Cart } from "../../Icons";
import CartProduct from "../../Products/CartProduct";

export default function CartButton({ subtotal }) {
  const { cart } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  let message = `Hola compre ${subtotal}`;

  return (
    <>
      <Flex justify={"center"} cursor={"pointer"} onClick={onOpen}>
        <Cart />

        <Flex
          justify={"center"}
          align={"center"}
          pos={"relative"}
          right={"5px"}
          bottom={"5px"}
          w={"25px"}
          h={"25px"}
          bg={"yellow.100"}
          borderRadius={"full"}
        >
          {cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={{ base: "full", tablet: "md" }}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#fff"}>
          <DrawerHeader>Carrito de compras</DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody>
            {cart.length === 0 ? (
              <Flex h={"70vh"} justify={"center"} align={"center"}>
                <Text color={"gray.200"}>Tu carrito esta vacio!</Text>
              </Flex>
            ) : (
              <Flex direction={"column"} gap={5}>
                <VStack spacing={"35px"} pt={"30px"}>
                  {cart.map((item) => (
                    <CartProduct key={item.id} {...item} />
                  ))}
                </VStack>
                <Flex
                  direction={"column"}
                  gap={2}
                  bg={"black.100"}
                  color={"#fff"}
                  borderRadius={"2px"}
                  p={"10px 16px"}
                >
                  <Flex justify={"space-between"}>
                    <Text>Sub Total</Text>
                    <Text>{subtotal}</Text>
                  </Flex>
                  <Flex justify={"space-between"}>
                    <Text>Envio</Text>
                    <Text>-</Text>
                  </Flex>
                  <Flex justify={"space-between"}>
                    <Text>Total</Text>
                    <Text color={"yellow.100"}>{subtotal}</Text>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </DrawerBody>

          {cart.length != 0 && (
            <DrawerFooter mb={"20px"}>
              <Button
                w={"full"}
                onClick={() => router.push(`/checkout`)}
                variant={"primary"}
                py={"1.5rem"}
                mb={"50px"}
                fontSize={"xl"}
              >
                Iniciar compra
              </Button>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
