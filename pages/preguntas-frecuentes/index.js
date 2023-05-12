import { DeliveryIcon, PaymentIcon } from "../../components/Icons";
import { Layout } from "../../components/Layout/Layout";
import {
  Box,
  Flex,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function PreguntasPage() {
  return (
    <Layout footer>
      {/* title */}
      <Flex layerStyle={"xWraper"} pt={"11vh"} direction={"column"}>
        <Text as={"h1"} fontSize={"110px"} textAlign={"center"}>
          Preguntas frecuentes
        </Text>
      </Flex>

      <Flex direction={"column"} gap={10} layerStyle={"xWraper"} mt={"20px"}>
        <Box>
          <Flex align={"center"}>
            <PaymentIcon />
            <Text ml={"5px"} fontSize={"x-large"}>
              Medios de pago
            </Text>
          </Flex>
          <Accordion allowMultiple borderColor={" gray.100"} mt={"10px"}>
            <AccordionItem p={"10px 0px"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    ¿Qué formas de pago puedo utilizar para realizar mi compra?{" "}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Se puede pagar en cuotas con todas las tarjetas de crédito de
                cualquier banco y con tarjeta de débito. Los pagos serán
                procesados a través de Mercado Pago. También se puede pagar en
                efectivo en RapiPago y Pago Fácil.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Flex align={"center"}>
            <DeliveryIcon />
            <Text ml={"5px"} fontSize={"x-large"}>
              Envíos y retiro en tienda
            </Text>
          </Flex>
          <Accordion allowMultiple borderColor={" gray.100"} mt={"10px"}>
            <AccordionItem p={"10px 0px"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    ¿Cómo realizan los envíos?{" "}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Hacemos envíos a todo el país por medio de Correo Argentino. Te
                enviamos tu pedido a la puerta de tu casa o a tu sucursal más
                cercana o podés retirarlo por donde estamos.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem p={"10px 0px"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Cómo puedo seguir mi pedido?{" "}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Una vez que confirmada la compra, recibirás un mail con el cual
                te registraste en nuestra web, con tu número de pedido y el
                estado de este. Una vez que el envío sea despachado por
                nosotros, recibirás un aviso con el número de seguimiento para
                que puedas consultar el estado desde la página de Correo
                Argentino: “LINK” Si seleccionaste, retiro en tienda; una vez
                que el pedido se encuentre disponible estarás recibiendo un mail
                de aviso para que lo retires con el N° de orden y DNI. En caso
                que quieras autorizar a un tercero para que retire tu pedido
                deberá presentar el mail de confirmación y número de pedido.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Layout>
  );
}
