import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { Layout } from "../../components/Layout/Layout";
import { useState } from "react";

export default function NosotrosPage() {
  return (
    <Layout footer>
      <Flex layerStyle={"xWraper"} pt={"11vh"} direction={"column"}>
        <Text
          as={"h1"}
          fontSize={{ base: "40px", tablet: "110px" }}
          textAlign={"center"}
        >
          Nosotros
        </Text>
        <Box mb={"50px"}>
          <Text fontWeight={400} fontSize={{ base: "14px", tablet: "20px" }}>
            En MMChokers somos jóvenes emprendedores con un objetivo claro:
            ofrecer collares innovadores y de alta calidad que complementen tu
            estilo y realcen tu belleza natural. Cada pieza es única y poderosa.{" "}
          </Text>

          <Text fontWeight={400} fontSize={{ base: "14px", tablet: "20px" }}>
            Creemos que la excelencia se encuentra en los pequeños detalles, por
            lo que nos esforzamos por crear collares que marquen la diferencia
            en tu look. Cada diseño es cuidadosamente elaborado con materiales
            de alta calidad y con un enfoque en la elegancia y el buen gusto.
            Nos apasiona la moda y la innovación, y estamos comprometidos en
            llevar lo mejor de ambos mundos a nuestra marca. Además, estamos
            orgullosos de ser un emprendimiento joven y en constante
            crecimiento, lo que nos permite estar siempre a la vanguardia de las
            tendencias y ofrecer productos frescos y únicos. En resumen, en
            MMChokers nos enfocamos en ofrecer collares que no solo sean un
            accesorio, sino una pieza poderosa que aporte estilo y personalidad
            a tu look. ¡Únete a nuestra comunidad y descubre la belleza y la
            fuerza de nuestros collares!
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
}
