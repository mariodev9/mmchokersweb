import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Logo } from "../../components/Icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const WraperInfo = ({ title, description, children }) => (
  <Box shadow={"md"} p={"15px "} mt={"25px"}>
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
  //IMPORTAR CART DEL CONTEXTO

  // const {
  //     handleSubmit,
  //     register,
  //     formState: { errors, isSubmitting },
  //   } = useForm()

  //   function onSubmit(values) {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         alert(JSON.stringify(values, null, 2))
  //         resolve()
  //       }, 3000)
  //     })
  //   }

  const [value, setValue] = useState("1");

  return (
    <>
      <Flex layerStyle={"xWraper"} py={"15px"} justify={"center"}>
        <Logo width={"276px"} height={"53px"} />
      </Flex>
      <Flex layerStyle={"xWraper"} gap={10} mb={"50px"}>
        <Box w={"70%"}>
          <WraperInfo title={"¿Como entregamos tu compra?"}>
            <RadioGroup
              name="form-shipping"
              onChange={setValue}
              value={value}
              py={"20px"}
            >
              <Stack direction="row" justify={"center"} gap={10}>
                <Radio colorScheme="blue" value="1" size={"lg"}>
                  Retiro en tienda
                </Radio>
                <Radio colorScheme="blue" value="2" size={"lg"}>
                  Envio a domicilio
                </Radio>
              </Stack>
            </RadioGroup>
          </WraperInfo>

          <WraperInfo
            title={"Ingresá tu correo"}
            description={
              "Para continuar con tu compra y recibir el resumen de compra"
            }
          >
            <FormControl mt={"15px"} isRequired>
              <FormLabel>Correo electronico</FormLabel>
              <Input w={"70%"} type="email" focusBorderColor="yellow.100" />
            </FormControl>

            {/* Continuar boton */}
            <Flex justify={"end"}>
              <Button
                variant={"primary"}
                px={"60px"}
                mt={"20px"}
                fontSize={"20px"}
              >
                Continuar
              </Button>
            </Flex>
            {/*  */}
          </WraperInfo>

          <WraperInfo title={"¿A qué dirección la enviamos?"}>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <Text mt={"20px"} fontSize={"20px"} fontWeight={"medium"}>
              Datos personales
            </Text>
            <Grid templateColumns="repeat(2, 2fr)" gap={10} py={"15px"}>
              <FormControl mt={"0px"} isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input w={"100%"} type="text" focusBorderColor="yellow.100" />
              </FormControl>

              <FormControl mt={"0px"} isRequired>
                <FormLabel>Apellido</FormLabel>
                <Input w={"100%"} type="email" focusBorderColor="yellow.100" />
              </FormControl>

              <FormControl mt={"0px"} isRequired>
                <FormLabel>Dcoumento</FormLabel>
                <Input w={"100%"} type="email" focusBorderColor="yellow.100" />
              </FormControl>

              <FormControl mt={"0px"} isRequired>
                <FormLabel>Telefono</FormLabel>
                <Input w={"100%"} type="email" focusBorderColor="yellow.100" />
              </FormControl>
            </Grid>

            <Text mt={"20px"} fontSize={"20px"} fontWeight={"medium"}>
              Dirección de envío{" "}
            </Text>
            <Grid templateColumns="repeat(2, 2fr)" gap={10} py={"15px"}>
              <FormControl mt={"0px"} isRequired>
                <FormLabel>Calle</FormLabel>
                <Input w={"100%"} type="text" focusBorderColor="yellow.100" />
              </FormControl>

              <Flex gap={10}>
                <FormControl mt={"0px"} isRequired>
                  <FormLabel>Numero</FormLabel>
                  <Input
                    w={"100%"}
                    type="email"
                    focusBorderColor="yellow.100"
                  />
                </FormControl>
                <FormControl mt={"0px"} isRequired>
                  <FormLabel>Piso/Depto</FormLabel>
                  <Input
                    w={"100%"}
                    type="email"
                    focusBorderColor="yellow.100"
                  />
                </FormControl>
              </Flex>

              <FormControl mt={"0px"}>
                <FormLabel>Entre calles (opcional)</FormLabel>
                <Input w={"100%"} type="email" focusBorderColor="yellow.100" />
              </FormControl>

              <FormControl mt={"0px"} isRequired>
                <FormLabel>Codigo Postal</FormLabel>
                <Input w={"100%"} type="email" focusBorderColor="yellow.100" />
              </FormControl>

              <FormControl mt={"0px"} isRequired>
                <FormLabel>Provincia</FormLabel>
                <Input w={"100%"} type="email" focusBorderColor="yellow.100" />
              </FormControl>

              <FormControl mt={"0px"} isRequired>
                <FormLabel>Ciudad</FormLabel>
                <Input w={"100%"} type="email" focusBorderColor="yellow.100" />
              </FormControl>
            </Grid>

            {/* Continuar boton */}
            <Flex justify={"end"}>
              <Button
                variant={"primary"}
                px={"60px"}
                mt={"20px"}
                fontSize={"20px"}
              >
                Continuar
              </Button>
            </Flex>
            <Text
              mt={"20px"}
              fontSize={"16px"}
              fontWeight={"regular"}
              color={"gray.200"}
            >
              Importante: Te enviaremos un e-mail cuando tu pedido se encuentre
              en camino a tu domicilio.
            </Text>
            {/*  */}
            {/* </form> */}
          </WraperInfo>
        </Box>
        <Box w={"30%"}>
          <WraperInfo title={"Resumen de compra"} />
        </Box>
      </Flex>
    </>
  );
}
