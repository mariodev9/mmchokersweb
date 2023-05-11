import { Layout } from "../../components/Layout/Layout";
import { Flex, Text } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Layout>
      <Flex layerStyle={"xWraper"} pt={"11vh"} bg={"yellow.100"}>
        <Text fontSize={"7xl"} fontWeight={700}>
          Sobre Nosotros
        </Text>
      </Flex>
    </Layout>
  );
}
