import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function BilleterasPage({ products }) {
  return (
    <CategoryPage category={"Billeteras"}>
      <WraperProducts products={products} />
    </CategoryPage>
  );
}

export const getServerSideProps = async () => {
  const productResponse = await fetch(
    `${process.env.API_URL}/Categoria/Billeteras`
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
