import { Box } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../Layout";

export default function CategoryPage({ children }) {
  return (
    <>
      <Layout>
        <Box p={"15vh 40px 0px"}>{children}</Box>
      </Layout>
    </>
  );
}
