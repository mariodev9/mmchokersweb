import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";
import Head from "next/head";

export default function BilleterasPage({ data }) {
  return (
    <>
      <Head>
        <title>MM Chokers | Billeteras</title>
        <meta name="MM Chokers website" content="Billeteras" />
      </Head>
      <CategoryPage category={"Billeteras"}>
        <WraperProducts products={data.products} />
      </CategoryPage>
    </>
  );
}

export const getServerSideProps = async () => {
  const productResponse = await fetch(
    `${process.env.API_URL}/Categoria/Billeteras`
  );

  if (productResponse.status === 404) {
    return { notFound: true };
  }

  const data = await productResponse.json();

  return {
    props: {
      data,
    },
  };
};
