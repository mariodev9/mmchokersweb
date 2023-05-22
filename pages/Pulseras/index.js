import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";
import WraperProducts from "../../components/Shared/WraperProducts/WraperProducts";

export default function PulserasPage({ data }) {
  return (
    <CategoryPage category={"Pulseras"}>
      <WraperProducts products={data.products} />
    </CategoryPage>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/Categoria/Pulseras`);

  const data = await res.json();

  return { props: { data } };
}
