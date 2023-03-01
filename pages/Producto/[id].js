import {
  Box,
  Flex,
  Spinner,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProduct } from "../../firebase/services/products";
import { LikeIcon } from "../../components/Icons";
import { Navbar } from "../../components/Layout/Nav";
import { Layout } from "../../components/Layout/Layout";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [productData, setProductData] = useState(undefined);

  useEffect(() => {
    id && getProduct(id, setProductData);
  }, [id]);

  return (
    <>
      <Navbar></Navbar>
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
        <Box h={"90vh"}>
          <Flex
            bgImage={productData.image}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            bgSize={"cover"}
            width={"full"}
            height={"50vh"}
          ></Flex>
          <Flex
            pos={"absolute"}
            direction={"column"}
            justify={"space-between"}
            bottom={0}
            bg={"#fff"}
            h={"50vh"}
            w={"full"}
            borderRadius={"30px 30px 0px 0px"}
            p={"35px 15px 15px"}
          >
            <Box>
              <Flex w={"full"} justify={"space-between"} fontSize={"25px"}>
                <Text fontWeight={400}>{productData.name}</Text>
                <Text>${productData.price}</Text>
              </Flex>
              <Box mt={"20px"} fontWeight={400} fontSize={"14px"}>
                <Text>Descripcion</Text>
                <Text color={"gray.100"}>{productData.description}</Text>
              </Box>
            </Box>

            <Flex gap={4} w={"full"}>
              <Button
                borderRadius={"full"}
                bg={"gray.50"}
                _hover={{
                  bg: "red.100",
                }}
              >
                <LikeIcon />
              </Button>
              <Button variant={"primary"} w={"full"}>
                Añadir al carrito
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
}
