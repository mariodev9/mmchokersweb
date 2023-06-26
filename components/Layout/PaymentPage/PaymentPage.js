import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Logo } from "../../Icons";
import Summary from "../../Checkout/Summary";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";

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

export default function PaymentPageLayout({ title, children }) {
  const { cart, buyerData } = useContext(CartContext);

  const subtotal = cart.reduce((count, curItem) => {
    return count + curItem.price * curItem.quantity;
  }, 0);

  return (
    <Container maxW={"8xl"}>
      <Flex py={"15px"} justify={"center"}>
        <Logo width={"276px"} height={"53px"} />
      </Flex>
      <Text pl={"30px"} fontSize={"26px"}>
        {title}
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", tablet: "repeat(2, 1fr)" }}
        mb={"70px"}
        gap={10}
      >
        <GridItem>
          {/* Datos personales */}
          <WraperInfo title={"Datos personales"}>
            <Text fontWeight={"light"} fontSize={"14px"}>
              {buyerData.name} {buyerData.lastName}
              <br />
              {buyerData.email} <br />
              {buyerData.tel} <br />
            </Text>
          </WraperInfo>
          {/* Informacion de envio */}
          <WraperInfo title={"Informacion de Envio"}>
            {buyerData && (
              <Text fontWeight={"light"} fontSize={"14px"}>
                {buyerData.shipping.type} <br />
                {buyerData.shipping.price === 0 ? (
                  <Text>Direccion: Brivio 1474, Tandil.</Text>
                ) : (
                  `$${buyerData.shipping.price}`
                )}
                <br />
                {buyerData.adress && buyerData.adress}{" "}
                {buyerData.adressNumber && buyerData.adressNumber}{" "}
                {buyerData.city && buyerData.city}
              </Text>
            )}
          </WraperInfo>
        </GridItem>
        <GridItem>{children}</GridItem>
      </Grid>
    </Container>
  );
}
