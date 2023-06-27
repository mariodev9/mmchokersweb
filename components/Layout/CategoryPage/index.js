import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../Layout";
import { BackIcon } from "../../Icons";

export default function CategoryPage({ children, category }) {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }

  return (
    <>
      <Layout footer>
        <Box pt={"12vh"}>
          <Flex justify={"space-between"} align={"center"} pb={"30px"}>
            <Button
              px={"0px"}
              onClick={() => handleClick()}
              bg={"none"}
              _hover={{ bg: "none" }}
            >
              <BackIcon height={30} weight={30} />
            </Button>
            <Text
              fontSize={{ base: "25px ", tablet: "40px" }}
              fontWeight={500}
              textAlign={{ base: "center", tablet: "start" }}
              fontFamily={"'Bebas Neue', cursive"}
            >
              {category}
            </Text>
            <Box w={"30px"} />
          </Flex>

          {children}
        </Box>
      </Layout>
    </>
  );
}
