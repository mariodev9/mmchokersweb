import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Product from "../../Products/Product";
import ProductItem from "../../Products/ProductItem";

export default function WraperProducts({ products }) {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        tablet: "repeat(3, 1fr)",
        desktop: "repeat(4, 1fr)",
      }}
      gap={3}
    >
      {products.map((item) => (
        <GridItem key={item.name} w="100%" mb={"15px"}>
          <ProductItem {...item} />
        </GridItem>
      ))}
    </Grid>
  );
}
