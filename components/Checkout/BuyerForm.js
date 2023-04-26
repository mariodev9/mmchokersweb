import { useState, useContext } from "react";
import {
  Text,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  FormErrorMessage,
  Select,
  Box,
  Divider,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import CartContext from "../../context/CartContext";

const Provincias = [
  { name: "Buenos Aires", zone: 2 },
  { name: "Capital Federal", zone: 2 },
  { name: "Catamarca", zone: 3 },
  { name: "Chaco", zone: 3 },
  { name: " Chubut", zone: 4 },
  { name: " Córdoba", zone: 2 },
  { name: " Corrientes", zone: 3 },
  { name: " Entre Ríos", zone: 2 },
  { name: " Formosa", zone: 3 },
  { name: " Jujuy", zone: 4 },
  { name: " La Pampa", zone: 2 },
  { name: " La Rioja", zone: 3 },
  { name: " Mendoza", zone: 3 },
  { name: " Misiones", zone: 3 },
  { name: " Neuquén", zone: 3 },
  { name: " Río Negro", zone: 3 },
  { name: " San Juan", zone: 3 },
  { name: " San Luis", zone: 3 },
  { name: " Salta", zone: 4 },
  { name: " Santa Cruz", zone: 4 },
  { name: " Santa Fe", zone: 2 },
  { name: " Santiago del Estero", zone: 3 },
  { name: " Tierra del Fuego", zone: 4 },
  { name: " Tucumán", zone: 3 },
];

export default function BuyerForm() {
  const [formData, setFormData] = useState(null);
  const [hideForm, setHideForm] = useState(false);

  const { SaveBuyerData, buyerData } = useContext(CartContext);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(values, "la data");
        SaveBuyerData(values);
        setFormData(values);
        setHideForm(true);
        resolve();
      }, 1500);
    });
  }

  return (
    <>
      <Box mt={"20px"}>
        {hideForm ? (
          <Box p={"20px"} border={"1px solid gray"} w={"50%"}>
            <Text fontWeight={"light"}>
              {formData.name} {formData.lastName} <br /> Documento:{" "}
              {formData.dni} <br /> Tel: {formData.tel} <br /> {formData.adress}
              , {formData.adressNumber} <br /> {formData.city},{" "}
              {formData.province} <br />
              Argentina
            </Text>
            <Button
              mt={"10px"}
              variant={"primary"}
              onClick={() => setHideForm(!hideForm)}
            >
              Editar Informacion
            </Button>
          </Box>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Text fontSize={"20px"} fontWeight={"medium"}>
              Datos personales
            </Text>
            <Grid templateColumns="repeat(2, 2fr)" gap={10} py={"15px"}>
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

            <Text mt={"20px"} fontSize={"20px"} fontWeight={"medium"}>
              Dirección de envío
            </Text>
            <Grid templateColumns="repeat(2, 2fr)" gap={10} py={"15px"}>
              <FormControl isInvalid={errors.adress}>
                <FormLabel>Calle</FormLabel>
                <Input
                  {...register("adress", {
                    required: "Este campo es requerido",
                  })}
                  w={"100%"}
                  type="text"
                  focusBorderColor="yellow.100"
                />
                <FormErrorMessage>
                  {errors.adress && errors.adress.message}
                </FormErrorMessage>
              </FormControl>

              <Flex gap={10}>
                <FormControl isInvalid={errors.adress}>
                  <FormLabel>Numero</FormLabel>
                  <Input
                    {...register("adressNumber", {
                      required: "Este campo es requerido",
                    })}
                    w={"100%"}
                    type="number"
                    focusBorderColor="yellow.100"
                  />
                  <FormErrorMessage>
                    {errors.adressNumber && errors.adressNumber.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Piso/Depto</FormLabel>
                  <Input
                    {...register("apartment")}
                    w={"100%"}
                    type="text"
                    focusBorderColor="yellow.100"
                  />
                </FormControl>
              </Flex>

              <FormControl>
                <FormLabel>Entre calles (opcional)</FormLabel>
                <Input
                  {...register("betweenStreets")}
                  w={"100%"}
                  type="email"
                  focusBorderColor="yellow.100"
                />
              </FormControl>

              <FormControl isInvalid={errors.postalCode}>
                <FormLabel>Codigo Postal</FormLabel>
                <Input
                  {...register("postalCode", {
                    required: "Este campo es requerido",
                  })}
                  w={"100%"}
                  type="text"
                  focusBorderColor="yellow.100"
                />
                <FormErrorMessage>
                  {errors.postalCode && errors.postalCode.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.province}>
                <FormLabel>Provincia</FormLabel>
                <Select
                  {...register("province", {
                    required: "Este campo es requerido",
                  })}
                  placeholder="Elige una provincia"
                >
                  {Provincias.map((item) => (
                    <option key={item.name} value={[item.name, item.zone]}>
                      {item.name}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.province && errors.province.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.city}>
                <FormLabel>Ciudad</FormLabel>
                <Input
                  {...register("city", {
                    required: "Este campo es requerido",
                  })}
                  w={"100%"}
                  type="text"
                  focusBorderColor="yellow.100"
                />
                <FormErrorMessage>
                  {errors.city && errors.city.message}
                </FormErrorMessage>
              </FormControl>
            </Grid>

            {/* Continuar boton */}
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

            {/*  */}
          </form>
        )}
        {hideForm && (
          <Box py={"20px"}>
            <Text fontSize={"22px"} fontWeight={"medium"}>
              Tipo de envio
            </Text>

            <Box>A Domicilio</Box>
            <Box>A Sucursal</Box>
          </Box>
        )}
        <Text
          mt={"20px"}
          fontSize={"16px"}
          fontWeight={"regular"}
          color={"gray.200"}
        >
          Importante: Te enviaremos un e-mail cuando tu pedido se encuentre en
          camino a tu domicilio.
        </Text>
      </Box>
    </>
  );
}
