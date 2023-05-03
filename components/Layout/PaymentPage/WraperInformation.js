import { Box, Text } from "@chakra-ui/react";
export default function WraperInformation({ description, title, children }) {
  return (
    <Box border={"2px solid #ECECEC"} p={"20px 15px "} mt={"25px"} bg={"#fff"}>
      <Text fontSize={"22px"} fontWeight={"medium"}>
        {title}
      </Text>
      {description && (
        <Text fontSize={"16px"} fontWeight={"regular"} color={"gray.200"}>
          {description}
        </Text>
      )}
      {children}
    </Box>
  );
}
