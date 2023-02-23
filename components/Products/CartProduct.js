import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function CartProduct({ name, price, image, id }) {
  return (
    <Flex w={"100%"} gap={10} justify={"space-around"}>
      <Box
        bgImage={image}
        w={"120px"}
        h={"120px"}
        border="1px solid black"
        borderRadius={"20px"}
      ></Box>
      <Box>
        <Text fontSize={"20px"}>Collar byw</Text>
        <Text>$3400</Text>
      </Box>
      <Flex
        direction={"column"}
        h={"120px"}
        justify={"space-around"}
        align={"center"}
        border={"2px solid red"}
      >
        <Button>+</Button>
        <Text>2</Text>
        <Button>-</Button>
      </Flex>
    </Flex>
  );
}
