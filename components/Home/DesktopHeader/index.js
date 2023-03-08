import React from "react";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SocialMedia } from "../SocialMedia";
import { Smile } from "../../Icons";
import { Slider } from "../Slider";

export const DesktopHeader = () => {
  return (
    <Box display={{ base: "none", tablet: "block" }} pt={"10vh"}>
      <Flex justify={"center"} height={"90vh"}>
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
        <Slider />
        <Box pos={"absolute"} right={"120px"}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", delay: 1 }}
          >
            <Smile />
          </motion.div>
        </Box>
      </Flex>
      <Flex justify={"end"} px={"40px"}>
        <SocialMedia />
      </Flex>
    </Box>
  );
};
