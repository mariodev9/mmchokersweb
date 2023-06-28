import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";
import Head from "next/head";

export default function BlackSitePage({ data }) {
  return (
    <>
      <Head>
        <title>MM Chokers | Colección Black Site</title>
        <meta name="MM Chokers website" content="Collares" />
      </Head>
      <CategoryPage category={"Black Site"}>
        <WraperProducts products={data.products} />
      </CategoryPage>
    </>
  );
}

export const getServerSideProps = async () => {
  const productResponse = await fetch(
    `${process.env.API_URL}/Categoria/BlackSite`
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
