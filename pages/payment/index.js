import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Summary from "../../components/Checkout/Summary";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Logo } from "../../components/Icons";
import PaymentPageLayout from "../../components/Layout/PaymentPage/PaymentPage";
import { useRouter } from "next/router";
import { MercadopagoButton } from "../../components/Shared/Buttons/MercadopagoButton";
import Head from "next/head";
import Link from "next/link";

const WraperInfo = ({ title, description, children }) => (
  <Box border={"2px solid #ECECEC"} p={"20px 15px "} mt={"25px"} bg={"#fff"}>
    <Text fontSize={"22px"} fontWeight={"medium"}>
      {title}
    </Text>
    {description && (
      <Text fontSize={"16px"} fontWeight={"regular"} color={"gray.200"}>
        {description}
      </Text>
    )}
    {children}
  </Box>
);

export default function PaymentPage() {
  const router = useRouter();
  const { cart, buyerData } = useContext(CartContext);

  const subtotal = cart.reduce((count, curItem) => {
    return count + curItem.price * curItem.quantity;
  }, 0);

  //     //2) bajar stock
  //     // deberua ser en el servidor
  //     // cart.forEach((product) => {
  //     //   console.log("bajar el stock de", product.id);
  //     // });

  return cart && buyerData.shipping ? (
    <>
      <Head>
        <title>Proceso de pago</title>
        <meta name="MM Chokers website" content="Payment form" />
      </Head>
      <PaymentPageLayout title={"Revisa y confirma la compra"}>
        <WraperInfo title={"Resumen de la compra"}>
          <Summary>
            <Flex
              direction={"column"}
              gap={3}
              my={"15px"}
              py={"15px"}
              borderTop={"1px solid #999"}
              borderBottom={"1px solid #999"}
              color={"gray.200"}
            >
              <Flex justify={"space-between"}>
                <Text fontWeight={"regular"}>Subtotal</Text>
                <Text fontWeight={"regular"}>${subtotal}</Text>
              </Flex>
              <Flex justify={"space-between"}>
                <Text fontWeight={"regular"}>Gastos del envío</Text>
                <Text fontWeight={"regular"}>${buyerData.shipping?.price}</Text>
              </Flex>
            </Flex>
            <Flex justify={"space-between"}>
              <Text fontSize={"20px"}>Total</Text>
              <Text fontSize={"20px"}>
                ${subtotal + buyerData.shipping?.price}
              </Text>
            </Flex>
          </Summary>
        </WraperInfo>
        <MercadopagoButton product={cart} buyerData={buyerData} />
      </PaymentPageLayout>
    </>
  ) : (
    <Flex direction={"column"} justify={"center"} align={"center"} h={"100vh"}>
      <Text as={"h1"} fontSize={"4xl"}>
        El carrito esta vacio!
      </Text>
      <Link href={"/"} passHref>
        <a
          style={{
            fontSize: " 20px",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Ir a Inicio
        </a>
      </Link>
    </Flex>
  );
}
