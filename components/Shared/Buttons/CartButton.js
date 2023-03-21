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

export default function CartButton() {
  const context = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  let message = "Hola compre algo";

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
          {context.cart.reduce((count, curItem) => {
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
            {context.cart.length === 0 ? (
              <Flex h={"70vh"} justify={"center"} align={"center"}>
                <Text color={"gray.200"}>Tu carrito esta vacio!</Text>
              </Flex>
            ) : (
              <Flex direction={"column"} gap={5}>
                <VStack spacing={"35px"} pt={"30px"}>
                  {context.cart.map((item) => (
                    <CartProduct key={item.id} {...item} />
                  ))}
                </VStack>
                <Flex
                  direction={"column"}
                  gap={2}
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
              </Flex>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button
              w={"full"}
              onClick={() =>
                router.push(`https://wa.me/2494600003?text=${message}`)
              }
              variant={"primary"}
              mb={"10px"}
              fontSize={"20px"}
            >
              Finalizar compra
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
