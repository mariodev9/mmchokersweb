import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";
import Head from "next/head";

export default function PulserasPage({ products }) {
  return (
    <>
      <Head>
        <title>MM Chokers | Novedades</title>
        <meta name="MM Chokers website" content="Ultimos productos" />
      </Head>
      <CategoryPage category={"Ultimos productos"}>
        <WraperProducts products={products.productos} />
      </CategoryPage>
    </>
  );
}

export const getServerSideProps = async () => {
  const productResponse = await fetch(
    `${process.env.API_URL}/products?limit=10`
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
