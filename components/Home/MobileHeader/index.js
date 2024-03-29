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
  let mitad = Math.floor(data.products.length / 2);

  return (
    <>
      {/* Search */}
      <Box layerStyle={"layoutWraper"}>
        {/* <Box display={{ base: "block", tablet: "none" }}>
          <SearchBar />
        </Box> */}

        {/* Header */}
        <Box as="main" mt={"15px"} display={{ base: "block", tablet: "none" }}>
          <LinkBox>
            <Box overflow={"hidden"} borderRadius={"15px"} cursor={"pointer"}>
              <Flex
                w={"full"}
                h={"20vh"}
                bgImage={"/images/collarNegro.JPG"}
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
                <Link href={"/Black-Site"}>
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
      </Box>

      {/* Catalogo */}
      <Catalog />

      <Grid layerStyle={"xWraper"} templateColumns={"repeat(2, 2fr)"} gap={3}>
        {data.products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </Grid>
    </>
  );
};
