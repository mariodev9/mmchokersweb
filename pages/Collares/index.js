import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import Product from "../../components/Products/Product";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function CollaresPage({ category, data }) {
  return (
    <>
      <CategoryPage category={category}>
        <WraperProducts products={data.products} />
      </CategoryPage>
    </>
  );
}

export async function getServerSideProps(context) {
  const { resolvedUrl } = context;
  const category = resolvedUrl.slice(1);

  const res = await fetch(
    `https://mmchokers.vercel.app/api/Categoria/${category}`
  );
  const data = await res.json();

  return { props: { category, data } };
}
