import { AboutTitleSVG } from "../../components/Icons";
import { Layout } from "../../components/Layout/Layout";
import { Flex, Text, Box, VStack } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Layout footer>
      <Box layerStyle={"layoutWraper"}>
        <VStack
          spacing={10}
          py={"60px"}
          fontSize={{ base: "14px", tablet: "110px" }}
        >
          <AboutTitleSVG />

          <Text mt={"60px"} fontWeight={500}>
            En MMChokers somos jóvenes emprendedores con un objetivo claro:
            ofrecer collares innovadores y de alta calidad que complementen tu
            estilo y realcen tu belleza natural. Cada pieza es única y poderosa.
          </Text>
          <Text fontWeight={500}>
            Creemos que la excelencia se encuentra en los pequeños detalles, por
            lo que nos esforzamos por crear collares que marquen la diferencia
            en tu look. Cada diseño es cuidadosamente elaborado con materiales
            de alta calidad y con un enfoque en la elegancia y el buen gusto.
            Nos apasiona la moda y la innovación, y estamos comprometidos en
            llevar lo mejor de ambos mundos a nuestra marca. Además, estamos
            orgullosos de ser un emprendimiento joven y en constante
            crecimiento, lo que nos permite estar siempre a la vanguardia de las
            tendencias y ofrecer productos frescos y únicos collares!.
          </Text>
          <Text fontWeight={500}>
            En resumen, en MMChokers nos enfocamos en ofrecer collares que no
            solo sean un accesorio, sino una pieza poderosa que aporte estilo y
            personalidad a tu look. ¡Únete a nuestra comunidad y descubre la
            belleza y la fuerza de nuestros
          </Text>
        </VStack>
      </Box>
    </Layout>
  );
}
