import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Summary from "../../components/Checkout/Summary";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Logo } from "../../components/Icons";
import PaymentPageLayout from "../../components/Layout/PaymentPage/PaymentPage";

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
  const { cart, buyerData } = useContext(CartContext);

  const subtotal = cart.reduce((count, curItem) => {
    return count + curItem.price * curItem.quantity;
  }, 0);

  const Purchase = async () => {
    if (cart && buyerData) {
      //1) añadir sale

      const data = { cart, buyerData };
      const res = await (
        await fetch("/api/pay", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();

      //2) bajar stock
      // deberua ser en el servidor
      // cart.forEach((product) => {
      //   console.log("bajar el stock de", product.id);
      // });

      const message = `Hola MMCHOKERS, soy ${buyerData.name} ${
        buyerData.lastName
      } y quiero completar mi compra.
      Código de pedido: ${res.saleId},
      Subtotal: $${subtotal}
      Precio del envío: $${buyerData.shipping.price}
      TOTAL A PAGAR: $${buyerData.shipping.price + subtotal}
      Muchas gracias!`;
      console.log(message);
    }
  };

  return cart && buyerData.shipping ? (
    <>
      <PaymentPageLayout title={"Revisa y confirma la compra"}>
        <WraperInfo title={"Datos personales"}>
          <Text fontWeight={"light"} fontSize={"14px"}>
            {buyerData.name} {buyerData.lastName}
            <br />
            {buyerData.email} <br />
            {buyerData.tel} <br />
          </Text>
        </WraperInfo>
        <WraperInfo title={"Informacion de Envio"}>
          {buyerData && (
            <Text fontWeight={"light"} fontSize={"14px"}>
              {buyerData.shipping.type} <br />
              {buyerData.shipping.price === 0
                ? "!Gratis!"
                : `$${buyerData.shipping.price}`}
              <br />
              {buyerData.adress && buyerData.adress}{" "}
              {buyerData.adressNumber && buyerData.adressNumber}
              {buyerData.city && buyerData.city}{" "}
            </Text>
          )}
        </WraperInfo>
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
        <Text
          mt={"20px"}
          fontSize={"16px"}
          fontWeight={"regular"}
          color={"gray.200"}
        >
          Importante: Este boton te redirige directamente con el vendedor para
          ultimar los detalles del pago.
        </Text>
      </PaymentPageLayout>
      <Box bg={"red"} pos={"fixed"} bottom={0} w={"full"}>
        <Button
          pos={"sticky"}
          variant={"primary"}
          w={"full"}
          p={"25px 0px"}
          onClick={() => Purchase()}
        >
          <Text fontSize={"22px"}>Finalizar Compra</Text>
        </Button>
      </Box>
    </>
  ) : (
    <h1>el carrito esta vacio</h1>
  );
}
