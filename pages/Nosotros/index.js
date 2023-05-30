import { Box, Text, Flex, VStack, Grid, GridItem } from "@chakra-ui/react";
import { Layout } from "../../components/Layout/Layout";
import { LogoDiv } from "../../components/Icons";

export default function NosotrosPage() {
  return (
    <Layout footer>
      <Box layerStyle={"layoutWraper"} pt={"11vh"}>
        <VStack
          spacing={5}
          fontSize={{ base: "14px", tablet: "20px" }}
          pb={"40px"}
        >
          <Text
            as={"h1"}
            fontSize={{ base: "40px", tablet: "70px" }}
            textAlign={"center"}
          >
            Quienes somos
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              tablet: "repeat(2, 1fr)",
            }}
            gap={6}
          >
            <GridItem w="100%" bg="#fff">
              <Flex h={"100%"} align={"center"} justify={"center"}>
                <LogoDiv />
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Box mt={"20px"} fontSize={"16px"}>
                <Text fontWeight={500}>
                  En MMChokers somos jóvenes emprendedores con un objetivo
                  claro: ofrecer collares innovadores y de alta calidad que
                  complementen tu estilo y realcen tu belleza natural. Cada
                  pieza es única y poderosa.
                </Text>
                <Text fontWeight={500}>
                  Creemos que la excelencia se encuentra en los pequeños
                  detalles, por lo que nos esforzamos por crear collares que
                  marquen la diferencia en tu look. Cada diseño es
                  cuidadosamente elaborado con materiales de alta calidad y con
                  un enfoque en la elegancia y el buen gusto. Nos apasiona la
                  moda y la innovación, y estamos comprometidos en llevar lo
                  mejor de ambos mundos a nuestra marca. Además, estamos
                  orgullosos de ser un emprendimiento joven y en constante
                  crecimiento, lo que nos permite estar siempre a la vanguardia
                  de las tendencias y ofrecer productos frescos y únicos
                  collares!
                </Text>
                <Text fontWeight={500}>
                  En resumen, en MMChokers nos enfocamos en ofrecer collares que
                  no solo sean un accesorio, sino una pieza poderosa que aporte
                  estilo y personalidad a tu look. ¡Únete a nuestra comunidad y
                  descubre la belleza y la fuerza de nuestros collares!
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
    </Layout>
  );
}
