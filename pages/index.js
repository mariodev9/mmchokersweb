import Head from "next/head";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";
import { DesktopHeader } from "../components/Home/DesktopHeader";
import { MobileHeader } from "../components/Home/MobileHeader";
import "swiper/css";
import SwiperProducts from "../components/Shared/SwiperProducts/SwiperProducts";

export default function Home({ data }) {
  const [isLargerThan834] = useMediaQuery("(min-width: 834px)", {
    ssr: true,
    fallback: true, // return false on the server, and re-evaluate on the client side
  });

  return (
    <>
      <Head>
        <title>mmChokers</title>
        <meta name="mmchokers"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout footer>
        {isLargerThan834 ? <DesktopHeader /> : <MobileHeader data={data} />}
        {/* Swiper Component */}
        <Box mt={"25px"}>
          <Flex justify={"center"} py={"25px"}>
            <Text
              textAlign={"center"}
              fontSize={{ base: "24px", tablet: "48px" }}
              fontWeight={500}
            >
              Mas populares
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
  const res = await fetch(`https://mmchokers.vercel.app//api/populares`);
  const data = await res.json();
  return { props: { data } };
}
