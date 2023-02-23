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
          <Text fontSize={"20px"} fontWeight={600}>
            New in
          </Text>
          <Box cursor={"grab"} mt={"10px"}>
            <Swiper
              spaceBetween={10}
              // Este valor tiene que ser responsive
              slidesPerView={1.5}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
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
