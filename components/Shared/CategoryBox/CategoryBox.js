import { Box, LinkOverlay, LinkBox, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function CategoryBox({ imageUrl, name }) {
  return (
    <Box>
      <LinkBox>
        <Box overflow={"hidden"} borderRadius={"2px"} cursor={"pointer"}>
          <Flex
            w={"full"}
            h={"70vh"}
            bgImage={`/images/${imageUrl}`}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            bgSize={"cover"}
            justify={"center"}
            align={"center"}
            transition="all 1s ease"
            overflow={"hidden"}
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Link href={"/Collares"}>
              <LinkOverlay>
                <Text fontSize={"26px"} color={"#fff"}>
                  {name}
                </Text>
              </LinkOverlay>
            </Link>
          </Flex>
        </Box>
      </LinkBox>
    </Box>
  );
}
