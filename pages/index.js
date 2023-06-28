import Head from "next/head";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";
import { NewDesktopHeader } from "../components/Home/NewDesktopHeader";
import { MobileHeader } from "../components/Home/MobileHeader";
import "swiper/css";
import SwiperProducts from "../components/Shared/SwiperProducts/SwiperProducts";
import { Logo } from "../components/Icons";

// export default function Home({ data }) {
export default function Home() {
  const [isLargerThan834] = useMediaQuery("(min-width: 834px)", {
    ssr: true,
    fallback: true, // return false on the server, and re-evaluate on the client side
  });

  return (
    <>
      <Head>
        <title>MM Chokers | Inicio</title>
        <meta name="MM Chokers website" content="Inicio y productos varios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        h={"100vh"}
      >
        <h1 style={{ fontSize: "4rem" }}>Hola! Estamos de refacciones</h1>
        <Logo />
      </Flex>
      {/* <Layout footer>
        {isLargerThan834 ? <NewDesktopHeader /> : <MobileHeader data={data} />}
        <Flex mt={"65px"} justify={"center"}>
          <Text
            py={"25px"}
            textAlign={"center"}
            fontSize={{ base: "24px", tablet: "48px" }}
            fontWeight={500}
            fontFamily={"'Bebas Neue', cursive"}
          >
            Los más populares
          </Text>
        </Flex>
        <Box mt={"5px"}>
          <SwiperProducts products={data.products} />
        </Box>
      </Layout> */}
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.API_URL}/populares`);
//   const data = await res.json();
//   return { props: { data } };
// }
