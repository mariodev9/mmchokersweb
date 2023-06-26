import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";
import Head from "next/head";

export default function CadenasPage({ products }) {
  return (
    <>
      <Head>
        <title>MM Chokers | Cadenas</title>
        <meta name="MM Chokers website" content="Cadenas" />
      </Head>
      <CategoryPage category={"Cadenas"}>
        <WraperProducts products={products} />
      </CategoryPage>
    </>
  );
}

export const getServerSideProps = async () => {
  const productResponse = await fetch(
    `${process.env.API_URL}/Categoria/Cadenas`
  );

  if (productResponse.status === 404) {
    return { notFound: true };
  }

  const products = await productResponse.json();

  return {
    props: {
      products,
    },
  };
};
