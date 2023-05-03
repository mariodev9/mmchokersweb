import React from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import { SocialMedia } from "../SocialMedia";
// import { Smile } from "../../Icons";
import { Slider } from "../Slider";

import CategoryBox from "../../Shared/CategoryBox/CategoryBox";

// category list y mapear

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
          {[1, 2, 3].map((item) => (
            <GridItem key={item}>
              <CategoryBox />
            </GridItem>
          ))}
        </Grid>
        {/* smile */}
        {/* <Box pos={"absolute"} right={"120px"}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", delay: 1 }}
          >
            <Smile />
          </motion.div>
        </Box> */}
        {/* Redes sociales */}
        {/* <Flex justify={"end"} px={"30px"}>
          <SocialMedia />
        </Flex> */}
      </Box>
    </>
  );
};
