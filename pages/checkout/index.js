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
  Grid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Summary from "../../components/Checkout/Summary";
import BuyerForm from "../../components/Checkout/BuyerForm";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { useRouter } from "next/router";

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

  const router = useRouter();

  const { SaveBuyerData, buyerData } = useContext(CartContext);

  const [shippingType, setShippingType] = useState("1");
  const [isReady, setIsReady] = useState(false);

  function emailIsReady(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        SaveBuyerData({ email: values.email });
        setIsReady(true);
        console.log({ email: values.email }, "lo que guardo el mail");
        resolve();
      }, 1500);
    });
  }

  function goToPayment(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        SaveBuyerData({
          ...buyerData,
          ...values,
          shipping: {
            type: "Retiro por local",
            price: 0,
          },
        });

        router.push("/payment");

        resolve();
      }, 1500);
    });
  }

  return (
    <>
      <Box bg={"#FAFAFA"}>
        <Flex layerStyle={"xWraper"} py={"15px"} justify={"center"}>
          <Logo width={"276px"} height={"53px"} />
        </Flex>
        <Text pl={"30px"} fontSize={"26px"}>
          Informacion de envio
        </Text>

        <Flex
          direction={{ base: "column", desktop: "row" }}
          layerStyle={"xWraper"}
          gap={{ base: 0, desktop: 10 }}
        >
          <Box
            w={{ base: "100%", desktop: "70%" }}
            order={{ base: 2, desktop: 1 }}
          >
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
                    <Text
                      fontWeight={"regular"}
                      fontSize={"16px"}
                      color={"gray.200"}
                    >
                      ¡Gratis!
                    </Text>
                  </Radio>
                  <Radio colorScheme="blue" value="2" size={"lg"}>
                    <Text> Envio por Correo Argentino</Text>
                    <Text
                      fontWeight={"regular"}
                      fontSize={"16px"}
                      color={"gray.200"}
                    >
                      Envio Gratis a partir de $5000
                    </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </WraperInfo>

            <WraperInfo
              title={"Ingresá tu correo"}
              description={"Para continuar y recibir el resumen de su compra"}
            >
              <form onSubmit={handleSubmit(emailIsReady)}>
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
                {shippingType === "1" && (
                  <>
                    <WraperInfo title={"Punto de retiro"}>
                      Usted selecciono retirar por la tienda.
                    </WraperInfo>
                    <WraperInfo title={"¿Quien retirara la orden?"}>
                      <form onSubmit={handleSubmit(goToPayment)}>
                        <Grid
                          templateColumns="repeat(2, 2fr)"
                          gap={10}
                          py={"15px"}
                        >
                          <FormControl isInvalid={errors.name}>
                            <FormLabel>Nombre</FormLabel>
                            <Input
                              {...register("name", {
                                required: "Este campo es requerido",
                              })}
                              w={"100%"}
                              type="text"
                              focusBorderColor="yellow.100"
                            />
                            <FormErrorMessage>
                              {errors.name && errors.name.message}
                            </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.lastName}>
                            <FormLabel>Apellido</FormLabel>
                            <Input
                              {...register("lastName", {
                                required: "Este campo es requerido",
                              })}
                              w={"100%"}
                              type="text"
                              focusBorderColor="yellow.100"
                            />
                            <FormErrorMessage>
                              {errors.lastName && errors.lastName.message}
                            </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.dni}>
                            <FormLabel>Documento</FormLabel>
                            <Input
                              {...register("dni", {
                                required: "Este campo es requerido",
                                minLength: {
                                  value: 8,
                                  message: "Su DNI debe tener 8 digitos",
                                },
                                maxLength: {
                                  value: 8,
                                  message: "Su DNI debe tener 8 digitos",
                                },
                                pattern: {
                                  value: /^([0-9])*$/,
                                  message: "DNI invalido",
                                },
                              })}
                              w={"100%"}
                              type="number"
                              focusBorderColor="yellow.100"
                            />
                            <FormErrorMessage>
                              {errors.dni && errors.dni.message}
                            </FormErrorMessage>
                          </FormControl>

                          <FormControl isInvalid={errors.tel}>
                            <FormLabel>Telefono</FormLabel>
                            <Input
                              {...register("tel", {
                                required: "Este campo es requerido",
                              })}
                              w={"100%"}
                              type="number"
                              focusBorderColor="yellow.100"
                            />
                            <FormErrorMessage>
                              {errors.tel && errors.tel.message}
                            </FormErrorMessage>
                          </FormControl>
                        </Grid>
                        <Flex justify={"end"}>
                          <Button
                            variant={"primary"}
                            px={"60px"}
                            mt={"20px"}
                            fontSize={"20px"}
                            isLoading={isSubmitting}
                            type="submit"
                          >
                            Continuar
                          </Button>
                        </Flex>
                      </form>
                    </WraperInfo>
                  </>
                )}

                {shippingType === "2" && (
                  <WraperInfo title={"¿A qué dirección lo enviamos?"}>
                    <BuyerForm />
                  </WraperInfo>
                )}
              </>
            )}
          </Box>
          <Box
            w={{ base: "100%", desktop: "30%" }}
            order={{ base: 1, desktop: 2 }}
          >
            <WraperInfo title={"Resumen de compra"}>
              <Summary />
            </WraperInfo>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
