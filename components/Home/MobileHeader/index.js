import { Box, Flex, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import SearchBar from "../../Shared/SearchBar/SearchBar";
import Catalog from "../../Shared/Catalog/Catalog";

export const MobileHeader = () => {
  return (
    <>
      <Box display={{ base: "block", tablet: "none" }} px={"30px"}>
        {/* BUSCADOR */}
        <SearchBar />

        {/* CATALOGO */}
        <Catalog />

        <LinkBox>
          <Box overflow={"hidden"} borderRadius={"20px"} cursor={"pointer"}>
            <Flex
              w={"full"}
              h={"30vh"}
              bgImage={"/images/CollaresImage.jpg"}
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
                    Collares
                  </Text>
                </LinkOverlay>
              </Link>
            </Flex>
          </Box>
        </LinkBox>
      </Box>
    </>
  );
};
