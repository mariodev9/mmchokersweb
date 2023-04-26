import React, { useState } from "react";
import { Logo } from "../../components/Icons";
import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import Summary from "../../components/Checkout/Summary";
import { useForm } from "react-hook-form";
import BuyerForm from "../../components/Checkout/BuyerForm";

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

export default function CheckoutPage() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [shippingType, setShippingType] = useState("1");
  const [isReady, setIsReady] = useState(false);

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsReady(true);
        resolve();
      }, 2000);
    });
  }
  return (
    <>
      <Box bg={"#FAFAFA"}>
        <Flex layerStyle={"xWraper"} py={"15px"} justify={"center"}>
          <Logo width={"276px"} height={"53px"} />
        </Flex>
        <Flex layerStyle={"xWraper"} gap={10}>
          <Box w={"70%"}>
            <WraperInfo title={"¿Como entregamos tu compra?"}>
              <RadioGroup
                name="form-shipping"
                onChange={setShippingType}
                value={shippingType}
                py={"20px"}
              >
                <Stack direction="row" justify={"center"} gap={10}>
                  <Radio colorScheme="blue" value="1" size={"lg"}>
                    <Text>Retiro en tienda</Text>
                    <Text>¡Gratis!</Text>
                  </Radio>
                  <Radio colorScheme="blue" value="2" size={"lg"}>
                    <Text> Envio por Correo Argentino</Text>
                    <Text>A partir de ....</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </WraperInfo>

            <WraperInfo
              title={"Ingresá tu correo"}
              description={"Para continuar y recibir el resumen de su compra"}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mt={"15px"} isInvalid={errors.email}>
                  <FormLabel>Correo electronico</FormLabel>
                  <Input
                    id="name"
                    type="email"
                    {...register("email", {
                      required: "Este campo es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email invalido",
                      },
                    })}
                    onChange={() => setIsReady(false)}
                    w={"70%"}
                    focusBorderColor="yellow.100"
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>

                {/* Continuar boton */}
                <Flex justify={"end"}>
                  <Button
                    isLoading={isSubmitting}
                    type="submit"
                    variant={"primary"}
                    px={"60px"}
                    mt={"20px"}
                    fontSize={"20px"}
                  >
                    Continuar
                  </Button>
                </Flex>
                {/*  */}
              </form>
            </WraperInfo>

            {isReady && (
              <>
                {shippingType === "1" && <Box>Elegi local!! ndqa</Box>}

                {shippingType === "2" && (
                  <WraperInfo title={"¿A qué dirección la enviamos?"}>
                    <BuyerForm />
                  </WraperInfo>
                )}
              </>
            )}
          </Box>
          <Box w={"30%"}>
            <WraperInfo title={"Resumen de compra"}>
              <Summary />
            </WraperInfo>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
