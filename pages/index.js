import Head from "next/head";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";

import Product from "../components/Products/Product";
import { motion } from "framer-motion";

import { DesktopHeader } from "../components/Home/DesktopHeader";
import { MobileHeader } from "../components/Home/MobileHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>mmChokers</title>
        <meta name="e-commerce mmchokers" content="e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <DesktopHeader />
        <MobileHeader />
        {/* Swiper Component */}

        <Box mt={"25px"}>
          <Flex align={"center"} justify={"space-between"} px={"40px"}>
            <Text fontSize={"30px"} fontWeight={600}>
              New in
            </Text>
            <Text fontSize={"15px"} fontWeight={500} color={"gray.100"}>
              ver todo
            </Text>
          </Flex>
          <Box mt={"10px"}>
            <Swiper
              spaceBetween={10}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              style={{
                paddingLeft: "40px",
              }}
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
              }}
            >
              {data.productos.map((producto) => (
                <SwiperSlide key={producto.name}>
                  <Product {...producto} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://mmchokers.vercel.app/api/products`);
  const data = await res.json();
  return { props: { data } };
}
