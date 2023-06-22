import { Box, Flex, Text } from "@chakra-ui/react";
import { Logo } from "../../Icons";
import Summary from "../../Checkout/Summary";
import WraperInformation from "./WraperInformation";

export default function PaymentPageLayout({ title, children }) {
  return (
    <Box layerStyle={"xWraper"} bg={"#FAFAFA"} mb={"70px"}>
      <Flex layerStyle={"xWraper"} py={"15px"} justify={"center"}>
        <Logo width={"276px"} height={"53px"} />
      </Flex>
      <Text pl={"30px"} fontSize={"26px"}>
        {title}
      </Text>
      <Flex
        direction={{ base: "column", desktop: "row" }}
        layerStyle={"xWraper"}
        gap={{ base: 0, desktop: 10 }}
      >
        <Box
          w={{ base: "100%", desktop: "70%" }}
          order={{ base: 2, desktop: 1 }}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
}
