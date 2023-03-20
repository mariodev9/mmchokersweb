import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";
import Product from "../components/Products/Product";
import { motion } from "framer-motion";
import { DesktopHeader } from "../components/Home/DesktopHeader";
import { MobileHeader } from "../components/Home/MobileHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperProducts from "../components/Shared/SwiperProducts/SwiperProducts";

export default function Home({ data }) {
  const [isLargerThan834] = useMediaQuery("(min-width: 834px)");

  return (
    <>
      <Head>
        <title>mmChokers</title>
        <meta name="e-commerce mmchokers" content="e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout footer>
        {/* renderizarlo con useQuery */}
        {isLargerThan834 ? <DesktopHeader /> : <MobileHeader data={data} />}
        {/* Swiper Component */}
        <Box mt={"25px"}>
          <Flex align={"center"} justify={"space-between"} px={"30px"}>
            <Text fontSize={"25px"} fontWeight={600}>
              Mas populares
            </Text>
            <Text fontSize={"10px"} fontWeight={500} color={"gray.100"}>
              flechita
            </Text>
          </Flex>
          <Box mt={"5px"}>
            <SwiperProducts products={data.productos} />
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
