import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CategoryPage from "../../components/Layout/CategoryPage";

export default function PulserasPage({ category, data }) {
  return (
    <CategoryPage>
      <Text>{category}</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={5}>
        {data.products.map((item) => (
          <GridItem key={item.name} w="100%" h="10" bg="blue.500" />
        ))}
      </Grid>
    </CategoryPage>
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
