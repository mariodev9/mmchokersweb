import React from "react";
import { Instagram, Send, Whatsapp } from "../../components/Icons";
import { Button, Flex, HStack } from "@chakra-ui/react";

export const SocialMedia = () => {
  return (
    <Flex justify={"end"}>
      <HStack>
        <Button variant={"social"} bg={"red.100"}>
          <Instagram />
        </Button>
        <Button variant={"social"} bg={"blue.100"}>
          <Whatsapp />
        </Button>
        <Button variant={"social"} bg={"yellow.100"}>
          <Send />
        </Button>
      </HStack>
    </Flex>
  );
};
