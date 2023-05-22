import React from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Slider } from "../Slider";
import CategoryBox from "../../Shared/CategoryBox/CategoryBox";

// category list y mapear

const categoryList = [
  { name: "Cadenas", image: "cadenas.JPG", url: "Cadenas" },
  { name: "Black Site", image: "collarNegro.JPG", url: "Black-Site" },
  { name: "Chokers", image: "collares.JPG", url: "Chokers" },
];

export const DesktopHeader = () => {
  const heightWraper = "90vh";

  return (
    <>
      <Box pt={"10vh"}>
        <Flex
          pos={"absolute"}
          zIndex={-1}
          w={"full"}
          h={heightWraper}
          align={"center"}
          justify={"center"}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <Text
              fontFamily={"'Bebas Neue', cursive"}
              fontSize={{ base: "5em", tablet: "15em", desktop: "400px" }}
              letterSpacing={"15px"}
            >
              we are
            </Text>
          </motion.div>
        </Flex>
        <Flex align={"center"} h={heightWraper} overflowX={"hidden"}>
          <Slider />
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {categoryList.map((category) => (
            <GridItem key={category.name}>
              <CategoryBox
                name={category.name}
                imageUrl={category.image}
                url={category.url}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};
