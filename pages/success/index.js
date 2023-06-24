import React from "react";
import { PaymentCheck } from "../../components/Icons";
import { VStack, Text, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const statusInfo = {
  title: "Pago aprobado con éxito!",
  subtitle:
    "Felicitaciones, el pago fue procesado con éxito, próximamente recibirás un email detallando el pago realizado.",
};

export default function SuccessPage() {
  return (
    <VStack h={"100vh"} justify={"center"} spacing={10} px={"20px"}>
      <PaymentCheck />
      <Text fontSize={"2xl"}>{statusInfo.title} </Text>
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
