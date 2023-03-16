import {
  Box,
  Flex,
  Spinner,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { getProduct } from "../../firebase/services/products";
import { LikeIcon } from "../../components/Icons";
import { Navbar } from "../../components/Layout/Nav";
import { Layout } from "../../components/Layout/Layout";
import CartContext from "../../context/CartContext";
import SwiperProducts from "../../components/Shared/SwiperProducts/SwiperProducts";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [productData, setProductData] = useState(undefined);
  const { AddProductToCart } = useContext(CartContext);

  useEffect(() => {
    id && getProduct(id, setProductData);
  }, [id]);

  return (
    <>
      <Layout>
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
              p={"15vh 30px 0px"}
              direction={{ base: "column", tablet: "row" }}
              gap={5}
            >
              {/* images */}

              <Tabs
                w={{ base: "full", tablet: "60%" }}
                display={"flex"}
                gap={5}
              >
                <TabList display={"flex"} flexDirection={"column"} gap={5}>
                  {productData.images.map((imagen) => (
                    <Tab p={"0px"}>
                      <Flex
                        bgImage={imagen}
                        bgRepeat={"no-repeat"}
                        bgPosition={"center"}
                        bgSize={"cover"}
                        width={"40px"}
                        height={"40px"}
                        borderRadius={"5px"}
                      ></Flex>
                    </Tab>
                  ))}
                </TabList>
                <TabPanels>
                  {productData.images.map((imagen) => (
                    <TabPanel p={"0px"}>
                      <Flex
                        bgImage={imagen}
                        bgRepeat={"no-repeat"}
                        bgPosition={"center"}
                        bgSize={"cover"}
                        width={"full"}
                        height={"60vh"}
                        borderRadius={"15px"}
                      ></Flex>
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>

              <Flex
                direction={"column"}
                bottom={0}
                bg={"#fff"}
                w={{ base: "full", tablet: "40%" }}
                borderRadius={"30px 30px 0px 0px"}
                // p={"35px 15px 15px"}
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
                    <Text fontWeight={400} color={"gray.100"}>
                      {productData.description}
                    </Text>
                  </Box>
                  <Box mt={"10px"} fontSize={"14px"}>
                    <Text>Color</Text>
                    <Text fontWeight={400} color={"gray.100"}>
                      Negro
                    </Text>
                  </Box>
                  <Box mt={"10px"} fontSize={"14px"}>
                    <Text>Dimensiones</Text>
                    <Text fontWeight={400} color={"gray.100"}>
                      28.00 cm
                    </Text>
                  </Box>
                </Box>

                <Flex gap={4} w={"full"} mt={"40px"}>
                  <Button
                    variant={"primary"}
                    w={"full"}
                    onClick={() => AddProductToCart(productData)}
                  >
                    Añadir al carrito
                  </Button>
                  <Button
                    borderRadius={"full"}
                    bg={"gray.50"}
                    _hover={{
                      bg: "red.100",
                    }}
                  >
                    <LikeIcon />
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
              Productos que te pueden interesar
            </Text>
            {/* <SwiperProducts products={dar array de productos} /> */}
          </>
        )}
      </Layout>
    </>
  );
}
