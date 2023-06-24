import React from "react";
import { PaymentCheck, PaymentFail } from "../../components/Icons";
import { VStack, Text, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const statusInfo = {
  title: "Ups! ha ocurrido un problema",
  subtitle:
    "Lo lamentamos, no hemos podido procesar su pago realizado por Mercado Pago.",
};
export default function FailurePage() {
  return (
    <VStack h={"100vh"} justify={"center"} spacing={10} px={"20px"}>
      <PaymentFail /> <Text fontSize={"2xl"}>{statusInfo.title} </Text>
      <Text
        fontSize={{ base: "lg", tablet: "xl" }}
        color={"gray.200"}
        fontWeight={500}
        maxW={"500px"}
        textAlign={"center"}
      >
        {statusInfo.subtitle}{" "}
      </Text>
      <NextLink href="/" passHref>
        <Link
          fontSize={"xl"}
          fontWeight={600}
          pt={"40px"}
          textDecor={"underline"}
        >
          Volver al sitio web
        </Link>
      </NextLink>
      <Flex justify={"center"} h={"20vh"} align={"end"}>
        <Text
          fontSize={{ base: "md", tablet: "lg" }}
          color={"gray.200"}
          fontWeight={500}
          maxW={"500px"}
          textAlign={"center"}
        >
          Ante cualquier consulta comuniquese a Whatsapp
        </Text>
      </Flex>
    </VStack>
  );
}
