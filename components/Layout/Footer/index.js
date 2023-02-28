import React from "react";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { WhatsappIcon } from "../../Icons";
export default function Footer() {
  return (
    <>
      <Grid
        mt={"40px"}
        bg={"#000"}
        p={"60px 40px"}
        templateColumns={{ base: "repeat(1, 1fr)", tablet: "repeat(3, 1fr)" }}
        gap={10}
        color={"#fff"}
        fontSize
      >
        <GridItem>
          <Text fontSize={"20px"} fontWeight={600}>
            Contactános
          </Text>
          <Flex mt={"15px"} gap={3}>
            <WhatsappIcon />
            <Text>2494-600003</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Text fontSize={"20px"} fontWeight={600}>
            Sigamos conectados
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize={"20px"} fontWeight={600}>
            Categorias
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}
