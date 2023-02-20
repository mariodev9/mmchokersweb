import Head from "next/head";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";
import { Slider } from "../components/Home/Slider";
import { SocialMedia } from "../components/Home/SocialMedia";
import { Smile } from "../components/Icons";
import Product from "../components/Products/Product";
import { motion } from "framer-motion";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>mmChokers</title>
        <meta name="e-commerce mmchokers" content="e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Flex justify={"center"}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <Text
              fontFamily={"'Bebas Neue', cursive"}
              fontSize={{ base: "5em", tablet: "15em", desktop: "23em" }}
              letterSpacing={"15px"}
            >
              we are
            </Text>
          </motion.div>
          <Slider />
          <Box pos={"absolute"} top={"11vh"} right={"120px"}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "spring", delay: 1 }}
            >
              <Smile />
            </motion.div>
          </Box>
        </Flex>

        <SocialMedia />

        {/* Productos */}

        {/* <Flex spacing={"20px"}>
          {data.productos.map((producto) => (
            <Product key={producto.name} {...producto} />
          ))}
        </Flex> */}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://mmchokers.vercel.app/api/hello`);
  const data = await res.json();

  return { props: { data } };
}
