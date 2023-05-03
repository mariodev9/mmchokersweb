import { Box, Flex, Spinner, Text, Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { getProduct } from "../../firebase/services/products";

import { Layout } from "../../components/Layout/Layout";
import CartContext from "../../context/CartContext";
import Image from "next/image";
import { Swiper, SwiperSlide, Navigation, Pagination } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProductPage() {
  const router = useRouter();
  const toast = useToast();

  const { AddProductToCart } = useContext(CartContext);

  const [productData, setProductData] = useState(undefined);

  const { id } = router.query;

  useEffect(() => {
    id && getProduct(id, setProductData);
  }, [id]);

  function handleAddProduct() {
    toast({
      title: "Nuevo producto añadido al carrito de compras!",
      description: `${productData.name} añadido al carro de compras`,
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
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
            >
              {/* images */}

              {/* <Box
                mx={{ base: "0px", tablet: "30px" }}
                pos={"relative"}
                w={{ base: "100%", tablet: "70%" }}
                minH={{ base: "400px", tablet: "500px" }}
              >
                <Image
                  src={productData.images[0]}
                  alt={"producto"}
                  style={{ borderRadius: "2px" }}
                  layout="fill"
                  objectFit="cover"
                />
              </Box> */}

              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                style={{ width: "100%" }}
                pagination={{ el: "swiper-pagination", clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
              >
                {productData.images.map((image) => (
                  <SwiperSlide>
                    <Box
                      mx={{ base: "0px", tablet: "30px" }}
                      pos={"relative"}
                      w={{ base: "100%", tablet: "70%" }}
                      minH={{ base: "400px", tablet: "500px" }}
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
                {/* <div className="slider-controller">
                  <div className="swiper-pagination">
                    <div className="swiper-button-next slider-arrow">ddd</div>
                    <div className="swiper-button-prev slider-arrow">aaa</div>
                  </div>
                </div> */}
              </Swiper>

              {/* <Box>
                <Swiper
                  spaceBetween={10}
                  breakpoints={{
                    0: {
                      slidesPerView: 1.5,
                    },
                    450: {
                      slidesPerView: 2.5,
                    },
                    720: {
                      slidesPerView: 3.5,
                    },
                    960: {
                      slidesPerView: 4.5,
                    },
                    1200: {
                      slidesPerView: 5.5,
                    },
                  }}
                >
                  {productData.images.map((image) => (
                    <SwiperSlide key={image}>
                      <Box
                        h={"100px"}
                        w={"full"}
                        border={"1px solid blue"}
                      ></Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box> */}

              <Flex
                direction={"column"}
                bottom={0}
                bg={"#fff"}
                w={{ base: "full", tablet: "50%" }}
                borderRadius={"30px 30px 0px 0px"}
                layerStyle={"xWraper"}
              >
                <Box>
                  <Flex
                    w={"full"}
                    justify={"space-between"}
                    align={{ base: "center", tablet: "start" }}
                    direction={{ base: "row", tablet: "column" }}
                  >
                    <Text fontSize={"30px"} fontWeight={600}>
                      {productData.name}
                    </Text>
                    <Text fontSize={"20px"}>${productData.price}</Text>
                  </Flex>
                  <Box mt={"10px"} fontSize={"14px"}>
                    <Text>Descripcion</Text>
                    <Text fontWeight={400} color={"gray.200"}>
                      {productData.description}
                    </Text>
                  </Box>
                  <Box mt={"10px"} fontSize={"14px"}>
                    <Text>Color</Text>
                    <Text fontWeight={400} color={"gray.200"}>
                      Negro
                    </Text>
                  </Box>
                  <Box mt={"10px"} fontSize={"14px"}>
                    <Text>Dimensiones</Text>
                    <Text fontWeight={400} color={"gray.200"}>
                      28.00 cm
                    </Text>
                  </Box>
                </Box>

                <Flex gap={4} w={"full"} mt={"40px"}>
                  <Button
                    variant={"primary"}
                    w={"full"}
                    onClick={() => handleAddProduct()}
                  >
                    Añadir al carrito
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Text
              fontSize={"24px"}
              fontWeight={500}
              textAlign={"center"}
              mt={"50px"}
            >
              Tambien te puede interesar
            </Text>
            {/* <SwiperProducts products={dar array de productos} /> */}
          </>
        )}
      </Layout>
    </>
  );
}
