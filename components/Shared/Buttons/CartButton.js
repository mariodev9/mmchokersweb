import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Cart } from "../../Icons";

export default function CartButton() {
  const router = useRouter();
  return (
    <Flex justify={"center"}>
      <Button
        bg={"none"}
        _hover={{
          bg: "none",
        }}
        onClick={() => router.push("/Cart")}
      >
        <Cart />
      </Button>
      <Flex
        justify={"center"}
        align={"center"}
        pos={"relative"}
        right={"15px"}
        w={"25px"}
        h={"25px"}
        bg={"yellow.100"}
        borderRadius={"full"}
      >
        20
      </Flex>
    </Flex>
  );
}
