import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../Layout";

export default function CategoryPage({ children, category }) {
  const router = useRouter();
  return (
    <>
      <Layout footer>
        <Box p={"12vh 40px 0px"}>
          <Flex justify={"space-between"} align={"start"} pb={"30px"}>
            <Button w={"30px"} pb={2} onClick={() => router.back()}>
              Atras
            </Button>
            <Text
              fontSize={{ base: "20px ", tablet: "30px" }}
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
