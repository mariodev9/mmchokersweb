import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import sliderImage from "../../public/images/sliderImage.png";
import sliderImage2 from "../../public/images/sliderImage2.png";
import Image from "next/image";
import { Smile } from "../../components/Icons";

export const Slider = () => {
  return (
    <Box pos={"absolute"}>
      <div className="slider">
        <div className="slide-track">
          {/* {[1, 2, 3].map((slides) => (
            <>
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
                  <Image src={sliderImage} height={"120px"} width={"100px"} />
                </Flex>
              </div>
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
              <div className="slide">
                <Flex justify={"center"}>
                  <Smile />
                </Flex>
              </div>
              <div className="slide slide-image">
                <Flex justify={"center"}>
                  <Image src={sliderImage2} height={"140px"} width={"100px"} />
                </Flex>
              </div>
            </>
          ))} */}
          <>
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
                <Image src={sliderImage} height={"120px"} width={"100px"} />
              </Flex>
            </div>
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
            <div className="slide">
              <Flex justify={"center"}>
                <Smile />
              </Flex>
            </div>
            <div className="slide rotate-image-left">
              <Flex justify={"center"}>
                <Image src={sliderImage2} height={"140px"} width={"100px"} />
              </Flex>
            </div>
          </>
          <>
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
            <div className="slide rotate-image-left">
              <Flex justify={"center"}>
                <Image src={sliderImage} height={"120px"} width={"100px"} />
              </Flex>
            </div>
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
            <div className="slide">
              <Flex justify={"center"}>
                <Smile />
              </Flex>
            </div>
            <div className="slide rotate-image-right">
              <Flex justify={"center"}>
                <Image src={sliderImage2} height={"140px"} width={"100px"} />
              </Flex>
            </div>
          </>
          <>
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
            <div className="slide rotate-image-left">
              <Flex justify={"center"}>
                <Image src={sliderImage} height={"120px"} width={"100px"} />
              </Flex>
            </div>
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
            <div className="slide">
              <Flex justify={"center"}>
                <Smile />
              </Flex>
            </div>
            <div className="slide rotate-image-right">
              <Flex justify={"center"}>
                <Image src={sliderImage2} height={"140px"} width={"100px"} />
              </Flex>
            </div>
          </>
        </div>
      </div>
    </Box>
  );
};
