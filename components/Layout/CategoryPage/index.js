import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../Layout";

export default function CategoryPage({ children, category }) {
  return (
    <>
      <Layout>
        <Box p={"12vh 40px 0px"}>
          <Text
            fontSize={{ base: "20px ", tablet: "30px" }}
            fontWeight={500}
            textAlign={{ base: "center", tablet: "start" }}
            pb={"40px"}
          >
            {category}
          </Text>
          {children}
        </Box>
      </Layout>
    </>
  );
}
