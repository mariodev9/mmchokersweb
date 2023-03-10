import {
  Box,
  Flex,
  Text,
  LinkBox,
  LinkOverlay,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import SearchBar from "../../Shared/SearchBar/SearchBar";
import Catalog from "../../Shared/Catalog/Catalog";
import ProductItem from "../../Products/ProductItem";

export const MobileHeader = ({ data }) => {
  let mitad = Math.floor(data.productos.length / 2);

  return (
    <>
      {/* Search */}
      <Box display={{ base: "block", tablet: "none" }} p={"10vh 30px 0px"}>
        <SearchBar />
      </Box>

      {/* Header */}
      <Box mt={"15px"} display={{ base: "block", tablet: "none" }} px={"30px"}>
        <LinkBox>
          <Box overflow={"hidden"} borderRadius={"20px"} cursor={"pointer"}>
            <Flex
              w={"full"}
              h={"20vh"}
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
                    Nueva colección
                  </Text>
                </LinkOverlay>
              </Link>
            </Flex>
          </Box>
        </LinkBox>
      </Box>

      {/* Catalogo */}
      <Box pl={" 30px"}>
        <Catalog />
      </Box>
      <Grid px={"30px"} templateColumns={"repeat(2, 1fr)"} gap={3}>
        <GridItem w="100%">
          <VStack spacing={5}>
            {data.productos.slice(0, mitad).map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </VStack>
        </GridItem>
        <GridItem mt={"40px"} w="100%">
          <VStack spacing={5}>
            {data.productos.slice(mitad).map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};
