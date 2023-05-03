import { Box, Button, Text } from "@chakra-ui/react";
import { Layout } from "../../components/Layout/Layout";
import { useState } from "react";

export default function NosotrosPage() {
  return (
    <Layout footer>
      <Box layerStyle={"layoutWraper"}>
        <Text fontSize={"20px"} textAlign={"center"} mb={"20px"}>
          Nosotros
        </Text>
      </Box>
    </Layout>
  );
}
