import { Box, Button, Flex, StatArrow, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../Layout";
import { BackIcon } from "../../Icons";

export default function CategoryPage({ children, category }) {
  const router = useRouter();
  return (
    <>
      <Layout footer>
        <Box p={"120px 40px 0px"}>
          <Flex justify={"space-between"} align={"center"} pb={"30px"}>
            <Button
              p={"0px"}
              onClick={() => router.back()}
              bg={"none"}
              _hover={{ bg: "none" }}
            >
              <BackIcon />
            </Button>
            <Text
              fontSize={{ base: "20px ", tablet: "40px" }}
              fontWeight={500}
              textAlign={{ base: "center", tablet: "start" }}
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
