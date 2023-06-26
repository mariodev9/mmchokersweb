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

  //     //1) añadir sale
  //     let totalPayment = subtotal + buyerData.shipping.price;
  //     const data = { totalPayment, cart, buyerData };
  //     const res = await (
  //       await fetch("/api/pay", {
  //         method: "POST",
  //         body: JSON.stringify(data),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //     ).json();

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
    <h1>El carrito esta vacio!</h1>
  );
}
