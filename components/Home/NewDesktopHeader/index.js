import React from "react";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import imageheader1 from "../../../public/images/header_1.jpg";
import imageheader2 from "../../../public/images/header_2.jpg";
import imageheader3 from "../../../public/images/header_3.jpg";
import imageheader4 from "../../../public/images/header_4.jpg";
import { useRouter } from "next/router";

const ImageBox = ({ imageUrl, title, subtitle, getAll, urlHref }) => {
  const router = useRouter();

  return (
    <Box layerStyle={"ImageHeaderBox"} onClick={() => router.push(urlHref)}>
      <Box
        pos={"absolute"}
        bottom={0}
        right={0}
        p={"20px 10px"}
        w={"170px"}
        zIndex={2}
      >
        <Text
          as={"h1"}
          letterSpacing={"2px"}
          textAlign={"end"}
          color={"#fff"}
          fontSize={"2xl"}
          lineHeight={"15px"}
        >
          {subtitle}
        </Text>
        <Text
          as={"h1"}
          letterSpacing={"2px"}
          textAlign={"end"}
          color={"#fff"}
          fontSize={"3xl"}
        >
          {title}
        </Text>
        {getAll && (
          <Flex direction={"column"} align={"end"} mt={"10px"}>
            <Text color={"#fff"}>Ver todos</Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 9L9 15M15 9V15M15 9H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Flex>
        )}
      </Box>
      <Image layout="fill" objectFit="cover" src={imageUrl} priority />
    </Box>
  );
};

export const NewDesktopHeader = () => {
  const router = useRouter();

  return (
    <>
      <Box layerStyle={"layoutWraper"}>
        <Text
          as={"h1"}
          letterSpacing={"4px"}
          fontSize={{ base: "3xl", tablet: "8xl", desktop: "9xl" }}
          lineHeight={{ base: "none", tablet: "5rem", desktop: "7rem" }}
        >
          Dive into a world of endless fashion possibilities
        </Text>
        <Grid templateColumns={"2fr 3fr 2fr"} gap={5} h={"70vh"} mt={"30px"}>
          {/* 1 */}
          <ImageBox
            imageUrl={imageheader1}
            urlHref={"/Producto/hF0A7mNiTIUMGnWdljnC"}
            title={"High Strass"}
            subtitle={"Collar"}
          />
          {/* 2 */}
          <Flex minH={200} direction={"column"} w={"full"} gap={5}>
            <Flex direction={"column"} gap={3} w={"full"}>
              <Button
                bg={"yellow.100"}
                py={"3rem"}
                w={"full"}
                borderRadius={"full"}
                fontSize={"4xl"}
                fill={"black"}
                _hover={{ fill: "yellow.100", color: "yellow.100", bg: "#000" }}
                onClick={() => router.push("/Producto/nu1zNrI14xBKOW3BTTOC")}
              >
                <Flex align={"center"} justify={"center"} w={"full"} gap={5}>
                  <Text as={"h1"}>Comprá ahora</Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="134"
                    height="23"
                    viewBox="0 0 154 23"
                  >
                    <path d="M1.995 10.5C1.16658 10.5028 0.497247 11.1766 0.500008 12.005C0.50277 12.8334 1.17658 13.5028 2.005 13.5L1.995 10.5ZM153.066 12.5571C153.65 11.9694 153.647 11.0196 153.059 10.4358L143.481 0.921741C142.893 0.33791 141.944 0.341076 141.36 0.928812C140.776 1.51655 140.779 2.46629 141.367 3.05012L149.88 11.5071L141.423 20.0206C140.84 20.6083 140.843 21.5581 141.431 22.1419C142.018 22.7257 142.968 22.7226 143.552 22.1348L153.066 12.5571ZM2.005 13.5L152.007 13L151.997 10L1.995 10.5L2.005 13.5Z" />
                  </svg>
                </Flex>
              </Button>
              <Button
                bg={"#fff"}
                py={"3rem"}
                w={"full"}
                borderRadius={"full"}
                fontSize={"4xl"}
                fill={"#fff"}
                border={"2px solid #000"}
                color={"#000"}
                _hover={{ fill: "yellow.100", color: "#fff", bg: "#000" }}
                onClick={() => router.push("ultimos_productos")}
              >
                <Text as={"h1"}>Explorar más productos</Text>
              </Button>
            </Flex>
            <Box flex={1}>
              <ImageBox
                imageUrl={imageheader2}
                urlHref={"/Black-Site"}
                title={"Black Site"}
                subtitle={"Colección"}
                getAll
              />
            </Box>
          </Flex>
          {/* 3 */}
          <Flex minH={200} direction={"column"} w={"full"} gap={5}>
            <ImageBox
              urlHref={"/Producto/324vlrFx57qR5fBg0DWZ"}
              imageUrl={imageheader3}
              title={"BW"}
              subtitle={"Collar"}
            />
            <ImageBox
              urlHref={"/Producto/M1GPkoBjTNKVB3ltTQf2"}
              imageUrl={imageheader4}
              title={"Regal"}
              subtitle={"Cadena"}
            />
          </Flex>
        </Grid>
      </Box>
    </>
  );
};
