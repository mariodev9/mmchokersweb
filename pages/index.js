import Head from "next/head";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";
import { Slider } from "../components/Home/Slider";
import { SocialMedia } from "../components/Home/SocialMedia";
import { Smile } from "../components/Icons";
import Product from "../components/Products/Product";

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
          <Text
            fontFamily={"'Bebas Neue', cursive"}
            fontSize={{ base: "5em", tablet: "15em", desktop: "23em" }}
            letterSpacing={"15px"}
          >
            we are
          </Text>
          <Slider />
          <Box pos={"absolute"} top={"11vh"} right={"120px"}>
            <Smile />
          </Box>
        </Flex>

        <SocialMedia />

        <Flex spacing={"20px"}>
          {data.productos.map((producto) => (
            <Product key={producto.name} {...producto} />
          ))}
        </Flex>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://mmchokers.vercel.app/api/hello`);
  const data = await res.json();

  return { props: { data } };
}
