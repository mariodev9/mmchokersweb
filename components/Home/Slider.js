import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import sliderImage from "../../public/images/sliderImage.png";
import sliderImage2 from "../../public/images/sliderImage2.png";
import Image from "next/image";
import { Smile } from "../../components/Icons";
import { motion } from "framer-motion";

export const Slider = () => {
  return (
    <Box pos={"absolute"} display={{ base: "none", tablet: "flex" }}>
      <motion.div
        className="slider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="slide-track">
          {/* primera tanda */}
          <>
            <div className="slide">
              <Flex h={"full"} w={"full"} align={"center"} justify={"center"}>
                <Text
                  color={"yellow.100"}
                  // stroke
                  textShadow={
                    "-1px 1px 0 #000,1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000"
                  }
                  fontFamily={"'Bebas Neue', cursive"}
                  fontSize={"50px"}
                  textAlign={"center"}
                  letterSpacing={"3px"}
                >
                  mmchokers
                </Text>
              </Flex>
            </div>
            <div className="slide rotate-image-right">
              <Flex justify={"center"}>
                <Image
                  src={sliderImage}
                  alt={"producto"}
                  height={"120px"}
                  width={"100px"}
                />
              </Flex>
            </div>
            <div className="slide">
              <Flex h={"full"} w={"full"} align={"center"} justify={"center"}>
                <Text
                  fontFamily={"'Bebas Neue', cursive"}
                  fontSize={"50px"}
                  textAlign={"center"}
                  letterSpacing={"3px"}
                >
                  mmchokers
                </Text>
              </Flex>
            </div>
            <div className="slide">
              <Flex justify={"center"}>
                <Smile />
              </Flex>
            </div>
            <div className="slide rotate-image-left">
              <Flex justify={"center"}>
                <Image
                  src={sliderImage2}
                  alt={"producto"}
                  height={"140px"}
                  width={"100px"}
                />
              </Flex>
            </div>
          </>
          {/* segunda tanda */}
          <>
            <div className="slide">
              <Flex h={"full"} w={"full"} align={"center"} justify={"center"}>
                <Text
                  color={"yellow.100"}
                  // stroke
                  textShadow={
                    "-1px 1px 0 #000,1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000"
                  }
                  fontFamily={"'Bebas Neue', cursive"}
                  fontSize={"50px"}
                  textAlign={"center"}
                  letterSpacing={"3px"}
                >
                  mmchokers
                </Text>
              </Flex>
            </div>
            <div className="slide rotate-image-right">
              <Flex justify={"center"}>
                <Image
                  src={sliderImage}
                  alt={"producto"}
                  height={"120px"}
                  width={"100px"}
                />
              </Flex>
            </div>
            <div className="slide">
              <Flex h={"full"} w={"full"} align={"center"} justify={"center"}>
                <Text
                  fontFamily={"'Bebas Neue', cursive"}
                  fontSize={"50px"}
                  textAlign={"center"}
                  letterSpacing={"3px"}
                >
                  mmchokers
                </Text>
              </Flex>
            </div>
            <div className="slide">
              <Flex justify={"center"}>
                <Smile />
              </Flex>
            </div>
            <div className="slide rotate-image-left">
              <Flex justify={"center"}>
                <Image
                  src={sliderImage2}
                  alt={"producto"}
                  height={"140px"}
                  width={"100px"}
                />
              </Flex>
            </div>
          </>
          {/* tercera tanda */}
          <>
            <div className="slide">
              <Flex h={"full"} w={"full"} align={"center"} justify={"center"}>
                <Text
                  color={"yellow.100"}
                  // stroke
                  textShadow={
                    "-1px 1px 0 #000,1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000"
                  }
                  fontFamily={"'Bebas Neue', cursive"}
                  fontSize={"50px"}
                  textAlign={"center"}
                  letterSpacing={"3px"}
                >
                  mmchokers
                </Text>
              </Flex>
            </div>
            <div className="slide rotate-image-right">
              <Flex justify={"center"}>
                <Image
                  src={sliderImage}
                  alt={"producto"}
                  height={"120px"}
                  width={"100px"}
                />
              </Flex>
            </div>
            <div className="slide">
              <Flex h={"full"} w={"full"} align={"center"} justify={"center"}>
                <Text
                  fontFamily={"'Bebas Neue', cursive"}
                  fontSize={"50px"}
                  textAlign={"center"}
                  letterSpacing={"3px"}
                >
                  mmchokers
                </Text>
              </Flex>
            </div>
            <div className="slide">
              <Flex justify={"center"}>
                <Smile />
              </Flex>
            </div>
            <div className="slide rotate-image-left">
              <Flex justify={"center"}>
                <Image
                  src={sliderImage2}
                  alt={"producto"}
                  height={"140px"}
                  width={"100px"}
                />
              </Flex>
            </div>
          </>
        </div>
      </motion.div>
    </Box>
  );
};
