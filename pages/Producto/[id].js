import {
  Box,
  Flex,
  Spinner,
  Text,
  Button,
  useToast,
  useMediaQuery,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout/Layout";
import CartContext from "../../context/CartContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CashIcon, DeliveryIcon } from "../../components/Icons";

export default function ProductPage() {
  const router = useRouter();
  const toast = useToast();

  const { AddProductToCart } = useContext(CartContext);

  const [productData, setProductData] = useState(undefined);
  const [productStock, setProductStock] = useState(undefined);

  const [isLargerThan550] = useMediaQuery("(min-width: 750px)", {
    ssr: true,
    fallback: true,
  });

  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setProductData(data);
        // Procesar los datos obtenidos
        console.log(data);
      } catch (error) {
        console.error("Error en la solicitud fetch:", error);
      }
    };
    id && fetchData();
  }, [id]);

  useEffect(() => {
    productData && setProductStock(productData.stock);
  }, [productData]);

  function handleAddProduct() {
    toast({
      title: "Nuevo producto añadido al carrito de compras!",
      description: `${productData.name} añadido al carro de compras`,
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
    setProductStock(productStock - 1);
    AddProductToCart({ id, ...productData });
  }

  return (
    <>
      <Layout footer>
        {/* loader */}
        {productData === undefined && (
          <Flex h="100vh" justify="center" align="center">
            <Spinner />
          </Flex>
        )}

        {/* no exist product message */}
        {productData === false && (
          <Flex h="100vh" justify="center" align="center">
            No existe este producto
          </Flex>
        )}

        {productData && (
          <>
            <Flex
              pt={{ base: "70px", tablet: "120px" }}
              direction={{ base: "column", tablet: "row" }}
              gap={5}
              layerStyle={"xWraper"}
            >
              {isLargerThan550 ? (
                <Grid templateColumns="repeat(2, 1fr)" gap={3} w={"60%"}>
                  {productData.images.map((image) => (
                    <GridItem key={image} w="100%" h="350" bg="gray.100">
                      <Box w="100%" height={"100%"} pos={"relative"}>
                        <Image
                          src={image}
                          alt={`imagen de ${productData.name}`}
                          style={{ borderRadius: "2px" }}
                          layout="fill"
                          objectFit="cover"
                        />
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              ) : (
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={2}
                  slidesPerView={1}
                  style={{
                    width: "100%",
                    cursor: "grab",
                  }}
                  scrollbar={{ draggable: true }}
                >
                  {productData.images.map((image) => (
                    <SwiperSlide key={image}>
                      <Box
                        mx={{ base: "0px", tablet: "30px" }}
                        pos={"relative"}
                        w={{ base: "100%", tablet: "100%" }}
                        minH={{ base: "350px", tablet: "500px" }}
                      >
                        <Image
                          src={image}
                          alt={"producto"}
                          style={{ borderRadius: "2px" }}
                          layout="fill"
                          objectFit="cover"
                        />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <Flex
                direction={"column"}
                bottom={0}
                bg={"#fff"}
                w={{ base: "full", tablet: "40%" }}
                borderRadius={"30px 30px 0px 0px"}
              >
                <Flex direction={"column"} gap={4}>
                  <Flex
                    w={"full"}
                    justify={"space-between"}
                    direction={"column"}
                  >
                    <Text fontSize={"30px"} fontWeight={600}>
                      {productData.name}
                    </Text>
                    <Text fontSize={"20px"}>${productData.price}</Text>
                  </Flex>
                  <Box fontSize={"14px"}>
                    <Text>Descripcion</Text>
                    <Text fontWeight={400} color={"gray.200"}>
                      {productData.description}
                    </Text>
                  </Box>
                  <Box fontSize={"14px"}>
                    <Text>Color</Text>
                    <Text fontWeight={400} color={"gray.200"}>
                      {productData.colors}
                    </Text>
                  </Box>
                  <Box fontSize={"14px"}>
                    <Text>Dimensiones</Text>
                    <Text fontWeight={400} color={"gray.200"}>
                      {productData.measures}cm
                    </Text>
                  </Box>
                  {productStock < 1 && (
                    <Text color={"red.400"}>
                      Este producto se encuentra sin stock!
                    </Text>
                  )}
                  <Flex gap={4} w={"full"}>
                    <Button
                      variant={"primary"}
                      py={"1.5rem"}
                      fontSize={"2xl"}
                      onClick={() => handleAddProduct()}
                      isDisabled={productStock < 1}
                    >
                      Añadir al carrito
                    </Button>
                  </Flex>
                  <Flex mt={"10px"} gap={5} align={"center"}>
                    <DeliveryIcon strokeWidth={3} />
                    <Box>
                      <Text
                        fontSize={{ base: "10px", tablet: "14px" }}
                        fontWeight={300}
                      >
                        Retira en tienda o pedido a domicilio
                      </Text>
                      <Text
                        fontSize={{ base: "8", tablet: "12px" }}
                        fontWeight={300}
                      >
                        Retira en tienda sin cargo o envio a domicilio sin cargo
                        a partir de $5.000
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap={5} align={"center"}>
                    <CashIcon />
                    <Box>
                      <Text
                        fontSize={{ base: "10px", tablet: "14px" }}
                        fontWeight={300}
                      >
                        Medios de pago
                      </Text>
                      <Text
                        fontSize={{ base: "8", tablet: "12px" }}
                        fontWeight={300}
                      >
                        Aceptamos las siguientes opciones de pago: Tarjetas de
                        Crédito, Tarjetas de Débito y Mercado Pago.
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </>
        )}
      </Layout>
    </>
  );
}
