import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon, InstagramIcon, WhatsappIcon } from "../../Icons";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <Grid
        mt={"40px"}
        bg={"#000"}
        p={"60px 40px"}
        templateColumns={{ base: "repeat(1, 1fr)", tablet: "repeat(4, 1fr)" }}
        gap={10}
        color={"#fff"}
      >
        <GridItem>
          <Text fontSize={"20px"} fontWeight={600}>
            Productos
          </Text>
          <VStack align={"start"} mt={"15px"} fontWeight={600}>
            <Link href={"/Cadenas"}>Cadenas</Link>
            <Link href={"/Collares"}>Collares</Link>
            <Link href={"/Pulseras"}>Pulseras</Link>
            <Link href={"/Carteras"}>Carteras</Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Text fontSize={"20px"} fontWeight={600}>
            Contactános
          </Text>

          <LinkBox>
            <Flex mt={"15px"} gap={3}>
              <WhatsappIcon />
              <LinkOverlay href={"https://wa.me/2494600003"} target={"_blank"}>
                <Text>2494-600003</Text>
              </LinkOverlay>
            </Flex>
          </LinkBox>

          <LinkBox>
            <Flex mt={"15px"} gap={3}>
              <EmailIcon />
              <LinkOverlay href={"mailto:mmchokers23@gmail.com"}>
                <Text>mmchokers23@gmail.com</Text>
              </LinkOverlay>
            </Flex>
          </LinkBox>
        </GridItem>
        <GridItem>
          <Text fontSize={"20px"} fontWeight={600}>
            Preguntas frecuentes
          </Text>
          <VStack align={"start"} mt={"15px"} fontWeight={600}>
            <Link href={"/Nosotros"}>Sobre MMChokers</Link>
            <Link href={"/preguntas-frecuentes"}>Información de envíos</Link>
            <Link href={"/preguntas-frecuentes"}>Medios de pago</Link>
            <Link href={"/preguntas-frecuentes"}>
              Cómo puedo seguir mi pedido?
            </Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Text fontSize={"20px"} fontWeight={600}>
            Sigamos conectados
          </Text>
          <LinkBox>
            <Flex mt={"15px"} gap={3}>
              <InstagramIcon />
              <LinkOverlay
                href="https://www.instagram.com/mmchokers"
                target={"_blank"}
              >
                <Text>@mmchokers</Text>
              </LinkOverlay>
            </Flex>
          </LinkBox>
        </GridItem>
      </Grid>
    </>
  );
}
