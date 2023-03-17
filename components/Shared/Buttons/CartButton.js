import { Button, Flex, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";
import { Cart } from "../../Icons";

export default function CartButton() {
  const context = useContext(CartContext);

  return (
    <LinkBox cursor={"pointer"}>
      <Flex justify={"center"}>
        <Link href="/Cart" passHref>
          <LinkOverlay>
            <Cart />
          </LinkOverlay>
        </Link>

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
    </LinkBox>
  );
}
